# NAFAS implementation plan — 5 October 2026

Goal: rebuild the supplied NAFAS Bajakimia design as a responsive Next.js/TypeScript site. Figma is the visual authority; official Drive copy/assets provide business content; the old NAFAS site provides information context; supplementary references provide interaction ideas only.

## Evidence and limits

The public prototype is accessible in Playwright. Design/Dev Mode returned 403 and Figma connector returned UNAUTHORIZED (reauthentication required). The saved 793,473,339-byte .fig exceeds the Drive connector's 268,435,456-byte limit. Browser-rendered source images were extracted into the local asset namespace. Exact Figma node styles/mobile frames remain unverified; desktop dimensions are measured from 1440-pixel prototype captures. Responsive transformations were inferred and verified locally; exact mobile behavior was not extracted from the inaccessible source frames.

## Routes

- [x] `/`: Figma 17668:1317 home, hero video, overview, capacities, map, expertise, partners, sustainability, news, CTA.
- [x] `/tentang-kami`: Figma 17668:1497 company overview, values, vision/mission, leadership, milestones, corporate facts, depot map.
- [x] `/perkhidmatan`: Figma 17668:1893 packaging, warehousing, sales, imports, agronomy, certifications.
- [x] `/produk`: seven categories from supplied copy; category navigation.
- [x] `/produk/[kategori]`: category listing; Figma 17668:1677 Baja Tunggal is the template.
- [x] `/produk/[kategori]/[slug]`: product details, specifications and related products; Figma 17668:1813 Urea Prill is the template. Do not substitute DAP packaging for UP branding even where the prototype does so.
- [x] `/kelestarian`: Figma 17668:2044 commitment, approach, educational posters, report structure.
- [x] `/berita-media` and `/berita-media/[slug]`: listing/detail with supplied authentic content only; reference news data is staging data and excluded.
- [x] `/kerjaya`: consistent NAFAS shell and honest vacancy empty state; no invented jobs, benefits, testimonials or recruiting destination.
- [x] `/pengedar`: minimal content-available-later state.
- [x] `/hubungi-kami`: labeled accessible enquiry form using confirmed general email; no pretend submission/backend.

## Shared component contracts

`SiteHeader`: fixed desktop dropdown navigation, mobile disclosure navigation, Escape/focus handling, active route. `SiteFooter`: actual logo, quick links, categories, source contact info; do not show fictitious live visitor counters. `ButtonLink`: green/outline pill and arrow. `Media`: local optimized image with responsive sizes and alt. `PageHero`: image/title/body and optional action. `SectionHeading`, `SplitSection`, `CallToAction`, `ProductCard`, `NewsCard`, `Reveal`, `Breadcrumbs`: shared structure. Client-side state limited to navigation, galleries, reveal behavior and form preparation.

## Visual measurements at 1440 pixels

Tomorrow headings/navigation, Open Sans body (font requests observed). Homepage hero approximately 794 px high, copy left 75 px/top 280 px; hero heading approximately 42 px bold, body approximately 14 px with 24 px line height. Main section content starts near x255, width approximately 930 px. Wide nav/footer/cards use approximately 1290 px width. Green accent approximately #80aa25; deep green footer approximately #063d30. Pills approximately 49 px high; repeated section headings approximately 28 px. Exact colors/weights remain browser-measured approximations pending structured access.

## Execution and validation

- [x] Read primary cloning workflow and inspection guide; inventory empty repository and source materials.
- [x] Prepare pinned bundled starter without overwriting existing files; Node 24; npm ci; baseline npm run check.
- [x] Capture reference behaviors and desktop/mobile evidence; official copy and assets saved.
- [x] Establish CSS tokens, responsive containers, shared foundation and source asset mapping.
- [x] Build pages and product data from supplied materials.
- [x] Run local app; capture desktop 1440, tablet 768, mobile 390; compare all source page types and fix visible differences.
- [x] Exercise navigation, forms, galleries, detail/back links, keyboard focus, reduced motion; check console, images, overflow and routes.
- [x] Run lint, typecheck, build and dependency audit; remedy implementation problems.
- [x] Record verified outcomes, source discrepancies, missing content, and remaining fidelity gaps.

## Source discrepancies and missing content

Prototype white navigation becomes unreadable over some white sections; accessible scrolled header state required. Prototype partner strip includes unrelated template logos while supplied copy lists Malaysian institutions; do not present those unrelated logos as verified partners. Prototype visitor counters are static demonstration values, not verified analytics. Berita hotspot currently reaches services; Career hotspot does not reach a career screen. Product detail uses a DAP bag while titled Urea Prill; exact matching product imagery must be confirmed rather than relabeled. No supplied real vacancies, distributor information, published article corpus, full ESG report/profile/brochures/MSDS/COA files, application endpoint, or form backend found. No deployment or remote push authorized.

