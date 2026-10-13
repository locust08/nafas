import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.NAFAS_PLAYWRIGHT_PATH || 'playwright');
const browser = await chromium.launch({ channel: 'chrome', headless: true });

try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });

    for (const route of ['/tentang-kami', '/en/tentang-kami']) {
      await page.goto(`http://127.0.0.1:3001${route}`, { waitUntil: 'domcontentloaded' });
      await page.locator('.department-card').first().waitFor();
      const cards = await page.locator('.department-card').evaluateAll(elements => elements.map(card => {
        const media = card.querySelector('.media');
        const heading = card.querySelector('h3');
        const mediaRect = media?.getBoundingClientRect();
        const headingRect = heading?.getBoundingClientRect();

        return {
          title: heading?.textContent?.trim(),
          mediaBottom: mediaRect?.bottom,
          headingTop: headingRect?.top,
        };
      }));

      assert.equal(cards.length, 5, `${route} should display five department cards at ${width}px`);
      for (const card of cards) {
        assert.ok(
          card.headingTop >= card.mediaBottom - 1,
          `${route} at ${width}px: "${card.title}" overlaps its image`,
        );
      }
    }

    await page.close();
  }
} finally {
  await browser.close();
}

console.log('Department card captions remain below their images on desktop and mobile.');
