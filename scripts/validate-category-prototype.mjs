import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.NAFAS_PLAYWRIGHT_PATH || 'playwright');
const baseUrl = process.env.NAFAS_LOCAL_URL || 'http://localhost:3001';
const categories = [
  'baja-tunggal',
  'baja-gred-tinggi',
  'baja-sebatian',
  'baja-sebatian-kompak',
  'baja-foliar',
  'baja-organik',
  'baja-campuran',
];

const browser = await chromium.launch({ channel: 'chrome', headless: true });

try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });

    for (const languagePrefix of ['', '/en']) {
      for (const category of categories) {
        const route = `${languagePrefix}/produk/${category}`;
        await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' });
        await page.locator('.product-category-page').waitFor();

        const state = await page.evaluate(() => ({
          audienceSections: document.querySelectorAll('.product-category-page .audience-grid').length,
          audienceCards: document.querySelectorAll('.product-category-page .audience-grid article').length,
          benefitSections: document.querySelectorAll('.product-category-page .product-benefits').length,
          productLinks: document.querySelectorAll('.product-category-page .product-grid > a').length,
          breadcrumbs: document.querySelectorAll('.product-category-page .breadcrumbs').length,
          resultCounts: document.querySelectorAll('.product-category-page [class*="resultCount"]').length,
          horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
        }));

        assert.equal(state.audienceSections, 1, `${route} is missing the audience section at ${width}px`);
        assert.equal(state.audienceCards, 4, `${route} does not have four audience cards at ${width}px`);
        assert.equal(state.benefitSections, 1, `${route} is missing the benefits section at ${width}px`);
        assert.ok(state.productLinks > 0, `${route} does not expose product detail links at ${width}px`);
        assert.equal(state.breadcrumbs, 0, `${route} still includes breadcrumbs omitted by the prototype`);
        assert.equal(state.resultCounts, 0, `${route} still includes the result count omitted by the prototype`);
        assert.equal(state.horizontalOverflow, 0, `${route} overflows horizontally at ${width}px`);
      }
    }

    await page.close();
  }

  const mainPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await mainPage.goto(`${baseUrl}/produk`, { waitUntil: 'domcontentloaded' });
  assert.equal(await mainPage.locator('.products-overview').count(), 1, 'The main products page changed identity');
  assert.equal(await mainPage.locator('.products-overview .audience-grid article').count(), 4, 'The main products page audience changed');
  await mainPage.close();
} finally {
  await browser.close();
}

console.log('Category prototype validation passed for all Malay and English category routes.');
