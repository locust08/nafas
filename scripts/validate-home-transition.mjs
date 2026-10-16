import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.NAFAS_PLAYWRIGHT_PATH || 'playwright');
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const output = 'output/playwright/bugherd-2';
const baseUrl = process.env.NAFAS_LOCAL_URL || 'http://localhost:3001';
const results = [];

await mkdir(output, { recursive: true });

try {
  for (const width of [1920, 1440, 768, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });

    for (const route of ['/', '/en']) {
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' });
      await page.locator('.home-hero').waitFor();
      await page.evaluate(() => document.documentElement.style.scrollBehavior = 'auto');
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(900);
      await page.evaluate(() => {
        const ring = document.querySelector('.home-hero .explore-link svg');
        if (ring instanceof SVGElement) ring.style.animation = 'none';
      });

      const metrics = await page.evaluate(() => {
        const rect = selector => {
          const box = document.querySelector(selector)?.getBoundingClientRect();
          return box && { top: box.top, right: box.right, bottom: box.bottom, left: box.left, width: box.width, height: box.height };
        };
        const overviewContentBottom = Math.max(
          document.querySelector('.overview .split-copy')?.getBoundingClientRect().bottom ?? 0,
          document.querySelector('.overview .layered-farmer')?.getBoundingClientRect().bottom ?? 0,
        );

        return {
          hero: rect('.home-hero'),
          curve: rect('.home-hero .hero-curve'),
          overview: rect('.overview'),
          copy: rect('.overview .split-copy'),
          farmer: rect('.overview .layered-farmer'),
          farmerFront: rect('.overview .farmer-front'),
          explore: rect('.home-hero .explore-link'),
          exploreText: rect('.home-hero .explore-link svg'),
          capacity: rect('.capacity'),
          overviewGap: (document.querySelector('.capacity')?.getBoundingClientRect().top ?? 0) - overviewContentBottom,
          horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
        };
      });

      results.push({ route, width, ...metrics });
      await page.screenshot({ path: `${output}/${width}-${route === '/' ? 'ms' : 'en'}-after.png`, fullPage: true });
      await page.evaluate(() => {
        const hero = document.querySelector('.home-hero');
        if (hero) window.scrollTo(0, Math.max(0, hero.offsetHeight - 390));
      });
      await page.waitForTimeout(1400);
      await page.screenshot({ path: `${output}/${width}-${route === '/' ? 'ms' : 'en'}-transition.png` });
    }

    await page.close();
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify(results, null, 2));

for (const result of results) {
  assert.equal(result.horizontalOverflow, 0, `${result.route} overflows horizontally at ${result.width}px`);
  assert.ok(Math.abs(result.curve.top - result.hero.bottom) < 1, `${result.route} curve is detached from the hero at ${result.width}px`);
  assert.ok(result.explore.bottom <= result.curve.bottom + 2, `${result.route} Explore circle is clipped at ${result.width}px`);
  assert.ok(result.exploreText.bottom <= result.curve.bottom + 1, `${result.route} Explore lettering is clipped below the curve at ${result.width}px`);
  assert.ok(result.farmer.top >= result.curve.bottom, `${result.route} farmer frame is covered by the hero curve at ${result.width}px`);
  assert.ok(result.overviewGap <= 80, `${result.route} has excessive space below the company overview at ${result.width}px`);
  if (result.width <= 1023) {
    assert.ok(result.farmerFront.width / result.farmerFront.height < 0.62, `${result.route} farmer image is too wide at ${result.width}px`);
  }
  if (result.width === 1920) {
    assert.ok(Math.abs(result.curve.height - 99) < 1.5, `${result.route} curve height differs from Figma at 1920px`);
    assert.ok(Math.abs(result.explore.width - 182) < 1.5, `${result.route} Explore ring width differs from Figma at 1920px`);
    assert.ok(Math.abs((result.hero.bottom - result.explore.top) - 114) < 2, `${result.route} Explore ring position differs from Figma at 1920px`);
  }
}
