# Product final visual QA — 5 October 2026

Production preview: `http://127.0.0.1:3001`. Evidence: `output/playwright/qa-products-final/`. Playwright CLI session `products`; full-page screenshots at 1440×1000, 768×1024 and 390×844. No form submission, external message, deployment or push.

## Scope and comparison

46 routes: `/produk`, all seven categories (Baja Tunggal, Gred Tinggi, Sebatian, Sebatian Kompak, Foliar, Organik and Campuran), and all 38 actual product detail routes discovered from their category cards. Each route has three screenshots: 138 total. The desktop category and product prototype captures are the available Figma reference. Mobile/tablet arrangements are inferred; structured Dev Mode and mobile source frames were unavailable during source inspection.

Desktop comparison corrected detail content start, container width, gallery/thumbnail geometry, title/specification width, certificate placement and inline specification rows. The related-product grid now uses the source's narrow column gaps and centers an incomplete final row. All categories share the supplied category template; authentic source counts are 12/3/11/7/2/1/2 rather than duplicating seven fictitious cards.

The first screenshot matrix exposed a responsive photo decode failure. Asset37's optimized w640 request returned HTTP200 in115ms, but a browser Image decode timed out after10seconds with zero intrinsic width. Its direct original loaded in46ms. Official asset38 is the identical supplied photograph/crop at506×284; it decoded in6ms. ProductAudience now uses asset38 and explicit responsive sizes, preserving the photograph while reducing its source payload from1,081,722 to78,136bytes. The previous matrix remains in `audit-before-image-fix.json` and `results-before-image-fix.txt`.

The long Ground Magnesium Limestone name was crowded in the fixed-height mobile neutral panel. Neutral panels now use a minimum height and grow with their contents. No shared CSS was edited for these fixes.

## Source gaps and intentional differences

- Category hero uses official precomposed asset96; packaging starts lower/right than Figma's separate-layer composition. This remains a visible crop/position difference.
- Authentic DAP packaging front0/back28 is used only for DAP. Matching packaging for37other products is absent; their cards/details use neutral name/formula panels. The prototype's DAP bag under a Urea label is intentionally corrected.
- Brochure, MSDS and COA files are not supplied. Document disclosure clearly says unavailable. No fake download links or unconfirmed testimonial are presented.
- Mixture specifications are absent. Their pages provide the supplied names and enquiry path. Source unit irregularities and the organic NPK discrepancy remain documented for client confirmation.

## Changed product files

`src/lib/nafas/products.ts`; `src/app/produk/page.tsx`; `src/app/produk/[kategori]/page.tsx`; `src/app/produk/[kategori]/[slug]/page.tsx`; `src/components/sites/nafas/products/catalog.tsx`; `gallery.tsx`; `products.module.css`.

Product-scoped TypeScript and ESLint checks passed after the final fixes. Root coordinates the complete application lint/typecheck/build and production server restart.

## Final rebuilt-production results

- All138screenshots completed:46routes×3viewports. Every page returned200. No horizontal overflow, missing visible images, console errors or uncaught exceptions. Machine-readable evidence: `audit.json` and `summary.json`.
- Inspected the desktop/tablet/mobile category sheets, full-page category sheets and all38detail-page contact-sheet entries at each viewport. Audience photos and benefit collage load. Final tablet audience crop: `audience-final-768.png`; final mobile GML panel: `gml-final-mobile.png`. Long names wrap with space above/below their text. Certificates, related grids, CTA/footer and responsive stacking remain intact.
- Clicked overview→category→Urea Prill→enquiry and verified the exact product query URL and official `mailto:info@nafas.com.my`. The textarea is blank; the root form's product association is handled separately, as documented in integrated QA. No email was sent.
- DAP front/back thumbnails select correctly. Keyboard Enter opens enlargement and Escape closes it on desktop/mobile. Document disclosure opens the unavailable message. Mobile navigation reaches Baja Sebatian and closes. Reduced-motion product-card transition duration is0s. Unknown category/product requests return404. Evidence: `interactions.json`, `interaction-results.txt` and `dap-zoom-desktop.png`.
- No additional code changes were required after the last production rebuild. The final photo fix passes all24overview/category image checks across the three viewports.
