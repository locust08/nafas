import { createRequire } from 'node:module';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.NAFAS_PLAYWRIGHT_PATH || 'playwright');
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const out = 'output/playwright/final';
await mkdir(out, { recursive: true });
const routes = ['/', '/tentang-kami', '/perkhidmatan', '/produk', '/kelestarian', '/berita-media', '/berita-media/pengiktirafan-kecemerlangan-operasi', '/kerjaya', '/pengedar', '/hubungi-kami', '/produk/baja-tunggal', '/produk/baja-tunggal/urea-prill-up', '/produk/baja-gred-tinggi/di-ammonium-phosphate-dap'];
const report = { captures: [], interactions: {}, errors: [], routeChecks: [] };
const page = await browser.newPage();
page.on('pageerror', error => report.errors.push(error.message));
page.on('console', message => { if (message.type() === 'error') report.errors.push(message.text()); });
for (const width of [1440, 768, 390]) {
  await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 });
  for (const route of routes) {
    const response = await page.goto(`http://127.0.0.1:3001${route}`, { waitUntil: 'load', timeout: 60000 });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      for (let top = 0; top < document.body.scrollHeight; top += 600) {
        window.scrollTo({ top, behavior: 'instant' });
        await new Promise(resolve => setTimeout(resolve, 150));
      }
      await Promise.race([Promise.all([...document.images].map(img => img.decode().catch(() => {}))), new Promise(resolve => setTimeout(resolve, 15000))]);
      for (const img of [...document.images].filter(img => img.getBoundingClientRect().height > 0 && (!img.complete || !img.naturalWidth))) {
        img.scrollIntoView({ behavior: 'instant', block: 'center' });
        await Promise.race([img.decode().catch(() => {}), new Promise(resolve => setTimeout(resolve, 10000))]);
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    await page.waitForTimeout(800);
    const state = await page.evaluate(() => ({
      width: innerWidth, scrollWidth: document.documentElement.scrollWidth,
      h1: document.querySelector('h1')?.textContent,
      images: [...document.images].filter(img => img.getBoundingClientRect().height > 0 && (!img.complete || img.naturalWidth === 0)).map(img => img.currentSrc),
    }));
    const filename = `${width}-${route === '/' ? 'home' : route.slice(1).replaceAll('/', '-')}.png`;
    await page.screenshot({ path: `${out}/${filename}`, fullPage: true });
    report.captures.push({ route, status: response.status(), ...state, screenshot: filename });
    console.log(`${width} ${route}: ${response.status()} overflow=${state.scrollWidth > width} missingImages=${state.images.length}`);
  }
}
await page.goto('http://127.0.0.1:3001/hubungi-kami');
await page.locator('button[type=submit]').click();
report.interactions.emptyFormBlocked = await page.locator('form').evaluate(form => !form.checkValidity());
await page.locator('#nama').fill('Semakan QA');
await page.locator('#emel').fill('qa@example.com');
await page.locator('#negeri').selectOption({ label: 'Selangor' });
await page.locator('#jenis').selectOption({ label: 'Pertanyaan Produk' });
await page.locator('#pertanyaan').fill('Semakan borang tempatan tanpa menghantar e-mel.');
await page.locator('button[type=submit]').click();
report.interactions.emailDraft = (await page.locator('.form-status a').getAttribute('href')).startsWith('mailto:info@nafas.com.my?subject=');
await page.locator('#nama').fill('Semakan QA baharu');
report.interactions.draftClearedOnEdit = await page.locator('.form-status').count() === 0;
await page.goto('http://127.0.0.1:3001/hubungi-kami?produk=Urea%20Prill%20(UP)');
report.interactions.productContextPrefilled = await page.locator('input[name="Produk"]').inputValue() === 'Urea Prill (UP)';
await page.locator('#nama').fill('Semakan Produk');
await page.locator('#emel').fill('qa@example.com');
await page.locator('#negeri').selectOption({ label: 'Selangor' });
await page.locator('#jenis').selectOption({ label: 'Pertanyaan Produk' });
await page.locator('#pertanyaan').fill('Pertanyaan setempat untuk produk terpilih.');
await page.locator('button[type=submit]').click();
const productDraftUrl = new URL(await page.locator('.form-status a').getAttribute('href'));
report.interactions.productContextInEmailDraft = productDraftUrl.searchParams.get('body')?.includes('Produk: Urea Prill (UP)') ?? false;
await page.goto('http://127.0.0.1:3001/berita-media');
const articleLink = page.locator('main a[href^="/berita-media/"]').first();
await articleLink.click();
await page.waitForURL('**/berita-media/*');
report.interactions.articleDetail = (await page.locator('main h1').textContent()).length > 0;
await page.goto('http://127.0.0.1:3001/');
const menu = page.locator('.menu-toggle');
await menu.click();
report.interactions.menuOpen = await menu.getAttribute('aria-expanded') === 'true';
await page.keyboard.press('Escape');
report.interactions.menuEscape = await menu.getAttribute('aria-expanded') === 'false';
report.interactions.menuFocusReturned = await menu.evaluate(button => document.activeElement === button);
await page.goto('http://127.0.0.1:3001/tentang-kami');
const milestone = page.locator('.milestone-description h2');
const originalMilestone = await milestone.textContent();
await page.getByRole('button', { name: 'Pencapaian seterusnya' }).click();
report.interactions.milestoneNext = await milestone.textContent() !== originalMilestone;
await page.goto('http://127.0.0.1:3001/kelestarian');
await page.getByRole('button', { name: 'Poster seterusnya' }).click();
report.interactions.posterNext = await page.locator('#poster-panel .carousel-position').textContent() === '2 / 3';
await page.locator('#poster-2025').click();
report.interactions.posterUnavailableYear = await page.locator('#poster-panel').textContent() === 'Poster untuk tahun 2025 belum tersedia.';
await page.locator('#poster-2024').click();
await page.keyboard.press('ArrowRight');
report.interactions.posterKeyboardYear = await page.locator('#poster-2023').getAttribute('aria-selected') === 'true';
await page.goto('http://127.0.0.1:3001/');
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.reload();
await page.waitForTimeout(700);
report.interactions.reducedMotionVideoPaused = await page.locator('video').evaluate(video => video.paused);
report.interactions.reducedMotionContentVisible = await page.locator('.reveal').first().evaluate(el => getComputedStyle(el).opacity === '1');
const manifest = JSON.parse(await readFile('.next/prerender-manifest.json', 'utf8'));
for (const route of Object.keys(manifest.routes).filter(route => !route.startsWith('/_'))) {
  const response = await page.request.get(`http://127.0.0.1:3001${route}`);
  report.routeChecks.push({ route, status: response.status() });
}
for (const width of [1280, 1920]) {
  await page.setViewportSize({ width, height: 1000 });
  await page.goto('http://127.0.0.1:3001/');
  report.interactions[`homeOverflow${width}`] = await page.evaluate(() => document.documentElement.scrollWidth === innerWidth);
  await page.screenshot({ path: `${out}/${width}-home-viewport.png` });
}
const unknown = await page.request.get('http://127.0.0.1:3001/produk/baja-tunggal/tidak-wujud');
report.interactions.unknownProduct404 = unknown.status() === 404;
await writeFile(`${out}/validation.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ interactions: report.interactions, errors: report.errors }, null, 2));
await browser.close();
if (report.errors.length || report.routeChecks.some(item => item.status !== 200) || report.captures.some(item => item.status !== 200 || item.scrollWidth > item.width || item.images.length) || Object.values(report.interactions).some(value => !value)) process.exitCode = 1;
