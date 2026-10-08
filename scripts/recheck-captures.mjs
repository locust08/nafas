import { createRequire } from 'node:module';
import { readFile, writeFile } from 'node:fs/promises';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.NAFAS_PLAYWRIGHT_PATH || 'playwright');
const path = 'output/playwright/final/validation.json';
const report = JSON.parse(await readFile(path, 'utf8'));
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage();
for (const capture of report.captures.filter(item => item.images.length)) {
  await page.setViewportSize({ width: capture.width, height: 1000 });
  await page.goto(`http://127.0.0.1:3001${capture.route}`, { waitUntil: 'load', timeout: 60000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
    document.documentElement.style.scrollBehavior = 'auto';
    for (const img of [...document.images].filter(img => img.getBoundingClientRect().height > 0)) {
      img.scrollIntoView({ behavior: 'instant', block: 'center' });
      await Promise.race([img.decode().catch(() => {}), new Promise(resolve => setTimeout(resolve, 10000))]);
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
  capture.images = await page.evaluate(() => [...document.images].filter(img => img.getBoundingClientRect().height > 0 && (!img.complete || !img.naturalWidth)).map(img => img.currentSrc || img.src));
  capture.scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  capture.rechecked = 'Images individually scrolled into view to settle lazy loading before full-page capture';
  await page.screenshot({ path: `output/playwright/final/${capture.screenshot}`, fullPage: true });
  console.log(JSON.stringify(capture));
}
await browser.close();
await writeFile(path, JSON.stringify(report, null, 2));
if (report.captures.some(item => item.images.length || item.scrollWidth > item.width)) process.exitCode = 1;
