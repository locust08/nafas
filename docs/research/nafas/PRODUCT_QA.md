# Product QA — 5 October 2026

Independent Playwright CLI session `products`, local server `http://127.0.0.1:3001`, development build. Browser screenshots and machine-readable results: `output/playwright/qa-products/`. No external submission, email, deployment or remote write performed.

## Verified

- 24 visual/DOM checks: `/produk`, every one of seven categories, and Urea Prill, DAP, organic, mixture details at 1440×1000 and 390×844. All returned200. `document.documentElement.scrollWidth` equals viewport width in every check. All visible images loaded with positive intrinsic width after lazy image scrolling. Results: `audit.json`.
- All38product detail hrefs collected from the seven actual category pages returned200 via browser request context. Results: `link-audit.json`.
- Real click navigation with explicit URL waits: overview “Lihat Semua”→Baja Tunggal→first product Urea Prill→Hantar Pertanyaan→`/hubungi-kami?produk=Urea%20Prill%20(UP)`. General email link is `mailto:info@nafas.com.my`. The product query prefills a hidden field and is retained in the local email draft; the integrated production audit checks this path. No submission is performed.
- Root mobile navigation: opened menu, expanded Produk Kami, selected Baja Tunggal; correct category route loaded and menu closed. No overflow afterward. Final image: `category-hero-mobile-final.png`.
- DAP front/back thumbnails set `aria-pressed` and show correct distinct asset; desktop zoom opened native dialog, Escape closed it; mobile focused zoom button opened with keyboard Enter, Escape closed. Evidence: `dap-gallery-zoom-desktop.png`, `dap-gallery-zoom-mobile.png`.
- Product document disclosure opens the honest unavailable-document message. Unknown product/category URLs return404.
- No unexpected browser console errors or uncaught exceptions in final24checks. Two expected resource404console messages arise from deliberate invalid-route tests.
- `npm run check` passed after the final application changes, including ESLint, TypeScript and the production build. Production page/route and interaction results are in `../output/playwright/final/validation.json`.

## Fixes and final comparison

Organic detail initially triggered duplicate React breadcrumb keys because both category/product were named Baja Organik. Fixed within owned product route: final breadcrumb “Maklumat Baja Organik”; rerun showed no React error.

Initial category header was transparent and hard to read against pale sky. Reported to root; final mobile capture confirms solid readable header. Baja Tunggal hero paragraph was restored to the Figma wording after the 24 screenshots; final mobile hero capture validates the longer paragraph still fits without overflow. Mobile layouts are inferred because source mobile frames were inaccessible.

Desktop category section geometry, four audience cards, angled benefit collage, four-column product cards, green pill/category tabs, CTA and footer are reproduced. Mobile stacks audience/benefits/detail and uses two-column cards. DAP detail has authentic gallery, bordered title/spec panel and supplied certificates. No pixel-perfect claim: category hero uses precomposed source asset96 whose visible packaging begins lower/right than the separate-layer Figma composition. The official bag artwork is retained, with that crop/position difference documented.

Deliberate source corrections:38genuine products replace Figma seven duplicated cards; neutral name/formula cards replace mismatched DAP imagery except actual DAP; unconfirmed named testimonial removed; missing brochure/MSDS/COA are unavailable text. Full category product count:12/3/11/7/2/1/2.

## Outstanding source material

Matching individual packaging for 37 products; real product documents and confirmed testimonials; confirmation of unusual supplied sizes/units and organic NPK discrepancy. Source values are preserved in data, not corrected by guesswork. Structured Dev Mode/mobile frame validation remains unavailable to initial source inspection. Root's production pass then captured all three viewports on representative category/detail routes. Its machine-readable audit reports58/58 prerendered routes returning200, no missing images/overflow in39 desktop/tablet/mobile captures, and zero browser console errors. The independent product-specific interactions above were captured during a development preview.



