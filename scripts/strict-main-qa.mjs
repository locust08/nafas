import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.NAFAS_PLAYWRIGHT_PATH || 'playwright');
const base = 'http://127.0.0.1:3001';
const output = 'output/playwright/strict-qa/main';
const routes = [
  '/', '/produk', '/berita-media',
  '/berita-media/pengiktirafan-kecemerlangan-operasi',
  '/kerjaya', '/pengedar', '/hubungi-kami',
];
const selectedRoutes = process.env.NAFAS_QA_ROUTES ? routes.filter(route => process.env.NAFAS_QA_ROUTES.split(',').includes(route)) : routes;
const sizes = [
  { label: 'desktop', width: 1440, height: 1000 },
  { label: 'tablet', width: 768, height: 1024 },
  { label: 'mobile', width: 390, height: 844 },
];

await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];
for (const size of sizes) {
  const page = await browser.newPage({ viewport: { width: size.width, height: size.height }, reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  for (const route of selectedRoutes) {
    const response = await page.goto(`${base}${route}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.evaluate(async () => {
      await document.fonts.ready;
      document.documentElement.style.scrollBehavior = 'auto';
      for (let top = 0; top < document.body.scrollHeight; top += 700) {
        window.scrollTo(0, top);
        await new Promise(resolve => setTimeout(resolve, 80));
      }
      await Promise.race([
        Promise.all([...document.images].map(img => img.decode().catch(() => {}))),
        new Promise(resolve => setTimeout(resolve, 10000)),
      ]);
      for (const img of [...document.images].filter(img => img.getBoundingClientRect().height > 0 && (!img.complete || !img.naturalWidth))) {
        img.scrollIntoView({ behavior: 'instant', block: 'center' });
        await Promise.race([img.decode().catch(() => {}), new Promise(resolve => setTimeout(resolve, 10000))]);
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(200);
    const state = await page.evaluate(() => ({
      title: document.title,
      heading: document.querySelector('h1')?.textContent?.trim(),
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      brokenImages: [...document.images].filter(img => img.getBoundingClientRect().height > 0 && (!img.complete || !img.naturalWidth)).map(img => img.currentSrc),
      emptyLinks: [...document.querySelectorAll('a')].filter(a => !a.href || a.getAttribute('href') === '#').map(a => a.textContent?.trim()),
    }));
    const slug = route === '/' ? 'home' : route.slice(1).replaceAll('/', '-');
    const screenshot = `${size.label}-${slug}.png`;
    await page.screenshot({ path: `${output}/${screenshot}`, fullPage: true, animations: 'disabled' });
    results.push({ route, size: size.label, status: response.status(), screenshot, ...state, errors: [...errors] });
    console.log(`${size.label} ${route} ${response.status()} height=${state.height} overflow=${state.scrollWidth > size.width} images=${state.brokenImages.length}`);
    errors.length = 0;
  }
  await page.close();
}
await writeFile(`${output}/${process.env.NAFAS_QA_ROUTES ? 'report-recheck.json' : 'report.json'}`, JSON.stringify(results, null, 2));
await browser.close();
if (results.some(item => item.status !== 200 || item.scrollWidth > item.width || item.brokenImages.length || item.errors.length)) process.exitCode = 1;
