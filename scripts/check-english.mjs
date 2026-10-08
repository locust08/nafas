import assert from 'node:assert/strict';
import { categories, products } from '../src/lib/nafas/products.ts';
import { articles } from '../src/lib/nafas/news.ts';

const origin = process.env.NAFAS_TEST_ORIGIN || 'http://localhost:3002';
const paths = ['/', '/tentang-kami', '/perkhidmatan', '/produk', '/kelestarian', '/berita-media', '/pengedar', '/kerjaya', '/hubungi-kami', ...categories.map(c => `/produk/${c.slug}`), ...products.map(p => `/produk/${p.category}/${p.slug}`), ...articles.map(a => `/berita-media/${a.slug}`)];
const enPath = path => '/en' + (path === '/' ? '' : path);
const allowed = new Set(paths.map(enPath));
const main = html => html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
const images = html => [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map(match => match[1]);
const classes = html => [...html.matchAll(/\bclass="([^"]+)"/g)].map(match => match[1]);
async function page(path) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, `${path} must load`);
  return response.text();
}
async function check(path) {
  const [bm, en] = await Promise.all([page(path), page(enPath(path))]);
  assert.match(bm, /<html[^>]*lang="ms"/, `${path}: BM document language`);
  assert.match(en, /<html[^>]*lang="en"/, `${path}: English document language`);
  assert.deepEqual(images(main(en)), images(main(bm)), `${path}: retain every BM image`);
  assert.deepEqual(classes(main(en)), classes(main(bm)), `${path}: identical layout classes`);
  const visible = en.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, ' ');
  assert.doesNotMatch(visible, /\b(?:Hubungi Kami|Muat Turun|Kandungan Nutrien|Jenis Tanaman|Pautan Pantas|Pilih negeri|Lain-lain|Sayur-sayuran)\b/, `${path}: translated content`);
  for (const match of en.matchAll(/<a\b([^>]+)>/g)) {
    const href = match[1].match(/\bhref="([^"]+)"/)?.[1];
    if (!href?.startsWith('/') || href.startsWith('/sites/') || /\blang="ms"/.test(match[1])) continue;
    const pathname = new URL(href.replaceAll('&amp;', '&'), origin).pathname;
    assert.ok(allowed.has(pathname), `${path}: valid localized link ${pathname}`);
  }
}
for (let offset = 0; offset < paths.length; offset += 4) await Promise.all(paths.slice(offset, offset + 4).map(check));
console.log(`PASS: ${paths.length} BM/EN page pairs, localized links, document language, identical layout classes and unchanged images.`);
