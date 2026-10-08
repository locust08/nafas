# NAFAS Bajakimia implementation report

Implementation date: 5 October 2026. No deployment, remote push or email submission performed.

## 1. Pages and routes

55 content pages: nine main routes (`/`, `/tentang-kami`, `/perkhidmatan`, `/produk`, `/kelestarian`, `/berita-media`, `/kerjaya`, `/pengedar`, `/hubungi-kami`), seven product categories, 38 product detail routes, and one news article detail. Unknown product/category/article URLs return 404. The six observed public prototype frames supply the home, about, category, product detail, services and sustainability layouts; additional content routes follow that design system.

## 2. Reusable components

Shared header, desktop dropdowns, mobile navigation, footer, image wrapper, buttons, headings, image heroes, split sections, CTA, breadcrumbs, empty states, scroll reveals, video controls and enquiry form. Catalogue components include category navigation, product cards/grids, audience/benefit sections, specifications and gallery/dialog. Company milestones, certificates, educational posters and report year tabs have reusable accessible controls.

## 3. Official and source assets

Actual supplied NAFAS logos, Figma hero footage, farmer/field/factory/warehouse/port/laboratory imagery, depot maps, DAP front/back artwork, certificates, CEO image, educational posters and report-cover artwork. The official Drive logo artwork, factory pictures and confirmed Malay copy were inspected and retained as research evidence. The live website uses the appropriate supplied Figma assets; unrelated template partner logos and invented product packaging are not displayed.

130 extracted source images were optimized to WebP. Public assets, including hero footage, total about 19 MB; original rasters remain in ignored local `.source-assets/raw`. The depot map's transparent padding was trimmed for the correct visible size. Next Image handles delivery and responsive sizing; no remote signed asset URLs are embedded.

## 4. Animation and interactions

Muted looping source hero footage with pause/play and a reduced-motion poster; rotating explore text; restrained scroll reveals inspired by ICL; hover transitions; scrolled header; mobile disclosures with Escape/focus handling; keyboard-operable milestone/resource carousels and year tabs; DAP front/back selection and native dialog zoom. Supplementary career/news references informed structure without copying their branding or staging content.

## 5. Responsive testing

Main page types are captured at 1440, 768 and 390 pixels. Product QA separately covers all seven categories and four representative detail types at desktop/mobile. The integrated audit covers article, category, Urea and DAP detail at all three widths, plus homepage overflow checks at 1280 and 1920. Evidence is in `output/playwright/final/validation.json` and `output/playwright/qa-products/`. The final production audit completed 39 screenshots at 1440, 768 and 390 px across 13 main/content routes. All routes returned 200; none of these images failed to load, and every capture had zero horizontal overflow. All 57 prerendered routes returned 200, including all seven categories and 38 products; the dynamic contact route also served product queries correctly. An invalid product route returned 404. Keyboard/menu/focus, milestone and poster controls, unavailable report-year/poster states, form validation/email draft reset, article navigation, reduced motion and 1280/1920 homepage overflow checks passed. The test report recorded zero page or browser console errors. Details and per-route machine results are in `output/playwright/final/validation.json`.

## 6. Career

Branded career route with an honest no-vacancies state and a contact route. No actual vacancy, salary, employee testimonial or application destination was supplied. No fictional listings or apparent successful applications.

## 7. News

Listing and article detail with one source-backed account of the gold recognition at Contractor Forum 2023 for 2022 performance, alongside the supplied earlier award history. No fabricated publication date, author or corporate announcement. Additional articles can be added to the typed data file.

## 8. Pengedar

Included in desktop/mobile navigation and footer. Minimal content-available-later route; no fabricated distributor list or contacts.

## 9. Accessibility and SEO

Malay document language, semantic landmarks/headings, skip link, visible focus states, labeled required form controls, native validation, keyboard navigation, dialog controls, live carousel/draft statuses and reduced-motion support. Button labels and green text were adjusted for contrast (normal green-button labels about 5.03:1; small green text on white about 4.93:1; large green headings about 3.49:1). This is not a formal WCAG certification.

Page title/description templates, Open Graph structure, official-logo icon, robots and sitemap are implemented. The sitemap remains empty until a confirmed `NAFAS_SITE_URL` is configured; no invented canonical/production origin.

## 10. Build, lint, types and dependencies

Latest integrated `npm run check` exited 0: ESLint, TypeScript and optimized Next.js production build passed. The build generated 60 static outputs, including the 55 content pages and framework/metadata outputs. `npm audit --omit=dev` reported zero vulnerabilities. Five development-only transitive audit findings remain in the Next ESLint dependency chain; a forced downgrade was avoided. Normal `next start` serves the verified preview but warns about standalone output; a future standalone/container deployment should use its generated server and copy static/public assets as documented by Next.

## 11. Visual comparison

Source and local screenshots were compared across the observed page types. Repeated fixes addressed hero copy position, navigation spacing, heading/body scale, curved hero edge, explore control, farmer layering/crop, map scale, milestone structure, poster tabs/arrows, cards and readable scrolled navigation. Main/page/product grids were checked for overflow and missing images. The final comparison is a reasonably close browser-based reconstruction, not a measured pixel-perfect Dev Mode match.

## 12. Remaining Figma differences

Structured design/Dev Mode returned 403 and connector authorization errors. The supplied saved .fig exceeded the Drive connector's size limit. Exact node styles, hidden file frames and source mobile layouts remain unverified; responsive transformations are inferred.

Source discrepancies were corrected deliberately: readable header on pale sections; correct News routing; source-confirmed partner names instead of unrelated logos; genuine catalogue instead of duplicated cards; actual DAP artwork only for DAP; no unconfirmed named testimonial or fake visitor counts. The category hero's precomposed packaging crop still differs from the separate-layer prototype composition. Some icons/masks and gradient layering are approximations. Contrast corrections slightly change green text/button appearance. Report/download availability and content gaps necessarily differ from prototype sample states.

## 13. Missing client material

Matching packaging artwork for 37 products; product brochures/MSDS/COA and corporate-profile PDF; complete sustainability report; additional genuine news; confirmed vacancies and application workflow; distributor content; English translation; confirmed WhatsApp/social destinations; corporate video beyond its supplied poster; confirmed production origin and backend form delivery. Supplied unusual product units and the organic NPK discrepancy need business confirmation; the supplied values were preserved rather than guessed.

The enquiry form prepares an email draft for review in the user's mail client. It does not silently send data or claim backend delivery.

## 14. Significant files

`src/app/**` routes, layout, global styles, metadata and official icon; `src/components/sites/nafas/**` shared/page/product components and styles; `src/lib/nafas/**` assets/products/news; `public/sites/nafas/assets/**`; `package.json`, lockfile, Next/ESLint configuration and `.env.example`; `scripts/**` source extraction/optimization and local browser audit; `README.md`; source inspection/checklist/comparison docs and screenshot evidence.

## 15. Recommended next steps

Reconnect structured Figma access for exact node/mobile comparison; supply the missing approved content/artwork/documents; confirm product-data discrepancies; choose confirmed application/form delivery and translation requirements; configure the confirmed origin; review the preview. Deployment and remote pushing require a separate explicit request.

## Final integrated audit

The final production audit completed 39 screenshots at 1440, 768 and 390 px across 13 main/content routes. All 57 prerendered routes returned 200, including all seven categories and 38 products; the dynamic contact route also served product queries correctly. An invalid product route returned 404. The 39 captures showed no missing images or horizontal overflow. Keyboard/menu/focus, milestone and poster controls, unavailable year states, form validation/email draft reset, product-context form prefill/draft, article navigation, reduced motion and 1280/1920 homepage overflow checks passed. The audit recorded zero page or browser console errors. Machine results: `output/playwright/final/validation.json`.






