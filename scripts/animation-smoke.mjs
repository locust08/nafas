import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.NAFAS_PLAYWRIGHT_PATH || 'playwright');
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('console', message => { if (message.type() === 'error') errors.push({ url: page.url(), text: message.text() }); });
page.on('pageerror', error => errors.push({ url: page.url(), text: error.message }));
await page.addInitScript(() => {
  window.animationCLS = 0;
  new PerformanceObserver(list => list.getEntries().forEach(entry => { if (!entry.hadRecentInput) window.animationCLS += entry.value; })).observe({ type: 'layout-shift', buffered: true });
});
const data = [];
const basic = ['', 'tentang-kami', 'produk', 'perkhidmatan', 'kelestarian', 'berita-media', 'pengedar', 'kerjaya', 'hubungi-kami'];
for (const language of ['', 'en/']) for (const route of basic) {
  await page.goto(`http://127.0.0.1:3001/${language}${route}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(900);
  data.push(await page.evaluate(() => ({
    route: location.pathname, cls: window.animationCLS,
    main: document.querySelectorAll('main').length,
    h1: document.querySelectorAll('h1').length,
    unnamedButtons: Array.from(document.querySelectorAll('button')).filter(el => !el.textContent.trim() && !el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')).length,
  })));
}
const routes = JSON.parse(fs.readFileSync('docs/research/animation-routes.json'));
await page.goto(`http://127.0.0.1:3001${routes.find(r => r.startsWith('/en/produk/') && r.split('/').length === 5)}`);
const zoom = page.locator('.product-gallery button').filter({ has: page.locator('img') });
await zoom.last().click();
const lightbox = await page.locator('dialog[open]').count();
if (lightbox) await page.keyboard.press('Escape');
const categoryLink = page.locator('.category-tabs a').first();
if (await categoryLink.count()) await categoryLink.click();
const productCards = await page.locator('.product-card').count();
await page.goto('http://127.0.0.1:3001/en/hubungi-kami');
const fields = await page.locator('form input,form textarea,form select').count();
const invalid = await page.locator('form').first().evaluate(el => !el.checkValidity());
await page.setViewportSize({ width: 390, height: 844 });
await page.locator('.menu-toggle').click();
const mobileNavigation = await page.locator('#mobile-navigation').isVisible();
await page.keyboard.press('Escape');
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.goto('http://127.0.0.1:3001/en/kelestarian');
await page.waitForTimeout(700);
const reducedMotionAnimations = await page.evaluate(() => document.getAnimations().filter(a => a.id === 'nafas-parallax' || a.effect?.target?.dataset?.motionRegistered).length);
const fallback = await browser.newContext({ javaScriptEnabled: false });
const noJS = await fallback.newPage();
await noJS.goto('http://127.0.0.1:3001/en');
const noJSHeading = await noJS.locator('h1').isVisible();
await fallback.close();
fs.mkdirSync('docs/design-references/animations', { recursive: true });
await page.emulateMedia({ reducedMotion: 'no-preference' });
for (const width of [1440, 768, 390]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto('http://127.0.0.1:3001/en/produk');
  await page.waitForTimeout(1100);
  await page.screenshot({ path: `docs/design-references/animations/products-${width}.png` });
}
const report = { data, errors, lightbox, productCards, fields, invalid, mobileNavigation, reducedMotionAnimations, noJSHeading };
fs.writeFileSync('docs/research/animation-smoke.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
await browser.close();
