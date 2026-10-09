import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.NAFAS_PLAYWRIGHT_PATH || 'playwright');
const retryRoute = process.env.NAFAS_RETRY_ROUTE;
const retryWidth = Number(process.env.NAFAS_RETRY_WIDTH || 0);
const routes = JSON.parse(fs.readFileSync('docs/research/animation-routes.json', 'utf8')).filter(route => !retryRoute || route === retryRoute);
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--disable-background-timer-throttling', '--disable-renderer-backgrounding', '--disable-backgrounding-occluded-windows'] });
const results = retryRoute ? JSON.parse(fs.readFileSync('docs/research/animation-validation.json', 'utf8')).results.filter(result => result.route !== retryRoute || result.width !== retryWidth) : [];
const errors = [];
const context = await browser.newContext();
const page = await context.newPage();
page.on('pageerror', error => errors.push({ url: page.url(), message: error.message }));
const snapshot = () => Array.from(document.querySelectorAll('[data-motion-registered]')).map(el => {
  const box = el.getBoundingClientRect(), style = getComputedStyle(el);
  return { x: box.x, y: box.y + scrollY, width: box.width, height: box.height, transform: style.transform, opacity: style.opacity, variant: el.dataset.motionVariant };
});
await Promise.all((retryWidth ? [retryWidth] : [1440, 768, 390]).map(async width => {
  const workerContext = await browser.newContext();
  const page = await workerContext.newPage();
  page.on('pageerror', error => errors.push({ url: page.url(), message: error.message }));
  await page.setViewportSize({ width, height: 900 });
  for (const route of routes) {
    try {
      const response = await page.goto(`http://127.0.0.1:3001${route}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForSelector('[data-motion-registered]', { timeout: 15000 });
      await page.evaluate(() => document.getAnimations().filter(a => a.id !== 'nafas-parallax' && a.effect?.target?.dataset?.motionRegistered).forEach(a => a.cancel()));
      const before = await page.evaluate(snapshot);
      // Visit every viewport in both directions, including sections taller than one screen.
      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < height; y += 650) { await page.evaluate(y => scrollTo({ top: y, behavior: 'instant' }), y); await page.waitForTimeout(20); }
      await page.waitForTimeout(1500);
      for (let y = height; y >= 0; y -= 650) { await page.evaluate(y => scrollTo({ top: y, behavior: 'instant' }), y); await page.waitForTimeout(20); }
      await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
      await page.waitForTimeout(1600);
      const after = await page.evaluate(snapshot);
      const mismatches = before.flatMap((b, i) => {
        const a = after[i];
        return a && (a.transform !== b.transform || Math.abs(Number(a.opacity) - Number(b.opacity)) > .01) ? [{ index: i, before: b, after: a }] : [];
      });
      const state = await page.evaluate(() => ({
        registered: document.querySelectorAll('[data-motion-registered]').length,
        entered: document.querySelectorAll('[data-motion-entered]').length,
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        runningEntrances: document.getAnimations().filter(a => a.id !== 'nafas-parallax' && a.effect?.target?.dataset?.motionRegistered).length,
        brokenImages: Array.from(document.images).filter(img => img.complete && img.naturalWidth === 0).map(img => img.src),
        invisible: Array.from(document.querySelectorAll('[data-motion-entered]')).filter(el => getComputedStyle(el).opacity === '0').length,
      }));
      results.push({ route, width, status: response.status(), ...state, mismatches });
    } catch (error) { results.push({ route, width, error: error.message }); }
    fs.writeFileSync('docs/research/animation-validation.json', JSON.stringify({ results, errors }, null, 2));
    if (results.length % 10 === 0) console.log(`Checked ${results.length}/${routes.length * 3} route/viewport combinations`);
  }
  await workerContext.close();
}));
for (const options of [{ reducedMotion: 'reduce' }, { javaScriptEnabled: false }]) {
  const fallback = await browser.newContext(options);
  const tab = await fallback.newPage();
  await tab.goto('http://127.0.0.1:3001/en', { waitUntil: 'domcontentloaded' });
  const visible = await tab.locator('h1').isVisible();
  console.log('Fallback', JSON.stringify(options), visible);
  await fallback.close();
}
await page.goto('http://127.0.0.1:3001/en/kerjaya');
await page.locator('.career-story-carousel').scrollIntoViewIfNeeded();
await page.locator('.career-story-arrow.next').click();
await page.locator('.career-read-more').click();
const testimonialExpanded = await page.locator('.career-read-more').getAttribute('aria-expanded');
await page.goto('http://127.0.0.1:3001/en/hubungi-kami');
const formInputs = await page.locator('form input').count();
console.log(JSON.stringify({ combinations: results.length, errors, failures: results.filter(r => r.error || r.status !== 200 || r.invisible || r.runningEntrances || r.mismatches.length).length, overflow: results.filter(r => r.overflow).map(r => [r.route, r.width]), testimonialExpanded, formInputs }));
await browser.close();
