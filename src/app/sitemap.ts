import type { MetadataRoute } from 'next';
import { categories, products } from '@/lib/nafas/products';
import { articles } from '@/lib/nafas/news';
export default function sitemap():MetadataRoute.Sitemap {
  const configured = process.env.NAFAS_SITE_URL;
  if (!configured) return [];
  const origin = new URL(configured).origin;
  const paths = ['/', '/tentang-kami', '/perkhidmatan', '/produk', '/kelestarian', '/berita-media', '/kerjaya', '/pengedar', '/hubungi-kami', ...categories.map(c=>`/produk/${c.slug}`), ...products.map(p=>`/produk/${p.category}/${p.slug}`), ...articles.map(a=>`/berita-media/${a.slug}`)];
  return paths.flatMap(path => {
    const bm = new URL(path, origin).href;
    const en = new URL('/en' + (path === '/' ? '' : path), origin).href;
    const alternates = { languages: { 'ms-MY': bm, 'en-MY': en } };
    return [{ url: bm, alternates }, { url: en, alternates }];
  });
}
