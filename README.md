# NAFAS Bajakimia website

Responsive Malay website built with Next.js 16, React 19 and TypeScript. The supplied public Figma prototype is the visual reference; official Drive copy supplies business facts. No deployment or remote push has been performed.

## Run locally

Use Node.js 24 or newer and npm.

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3001
```

Open http://127.0.0.1:3001. The explicit IPv4 address avoids another local application using the IPv6 localhost address.

```sh
npm run check
npm run start -- --hostname 127.0.0.1 --port 3001
```

`check` runs ESLint, TypeScript and the production build. `start` launches Next.js's standalone server and copies its public and static assets into the standalone output before serving. No production origin is assumed. Set `NAFAS_SITE_URL` to the confirmed origin before building to generate the full sitemap.

## Content and routes

Main pages: `/`, `/tentang-kami`, `/perkhidmatan`, `/produk`, `/kelestarian`, `/berita-media`, `/kerjaya`, `/pengedar`, `/hubungi-kami`. The catalogue includes seven categories and 38 product details. One source-backed award article has a news detail route.

Product data lives in `src/lib/nafas/products.ts`; news data in `src/lib/nafas/news.ts`; asset mappings in `src/lib/nafas/assets.ts`. Shared components are under `src/components/sites/nafas`. Local optimized imagery and hero footage are in `public/sites/nafas/assets`.

The enquiry form validates inputs and prepares a reviewable email draft; it does not submit to a backend. Vacancies, distributor information, product documents and full sustainability reports were not supplied. Those states explain availability without invented content. English copy is unavailable.

## Evidence and source limits

Read `docs/research/nafas/COMPLETION_REPORT.md`, `FRAME_OBSERVATIONS.md` and `PRODUCT_QA.md`. Prototype captures are in `docs/design-references/nafas`; production browser checks and screenshots are under `output/playwright/final`.

Structured Figma access returned authorization/403 errors. Desktop geometry was measured from the accessible prototype. Mobile and tablet transformations are inferred and browser-tested; exact Dev Mode fidelity remains unverified.

`scripts/validate-local.mjs` runs a browser audit against port 3001. It requires Playwright, available via `NAFAS_PLAYWRIGHT_PATH` or a local installation. Source extraction scripts consume temporary captured source requests; signed source URLs are not saved in the project. Original rasters are preserved locally in ignored `.source-assets/raw`; web assets are optimized WebP files.

`LICENSE` contains the inherited starter's MIT terms; confirm project distribution requirements before publishing.

