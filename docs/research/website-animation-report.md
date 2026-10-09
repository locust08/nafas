# NAFAS website animation implementation

All changes are local. Layouts, breakpoints, spacing, typography, image sources, fades, navigation and backend code remain intact. Hero video markup, playback and assets are unchanged.

## Coverage

The inventory covers 24 page templates and 110 concrete BM/EN URLs: home, company overview, services, products overview, seven product categories, all product details, sustainability, news listing/detail, distributors, careers and contact. The complete inventory is in `animation-routes.json`.

One shared `MotionEnhancer` in the root layout applies the system to both languages, including newly mounted carousel/catalog content. Forms, dialogs, mobile navigation and the moving career gallery track are excluded from entrance interception.

## Treatments

| Area | Treatment |
| --- | --- |
| Hero | Independent headline, description and CTA entrances; video unchanged |
| Company overview | Left text, right factory photo, 50+ count-up once |
| Products | Sequential scale/diagonal cards; packaging/image entrances |
| Expertise/services | Separate icons and copy with alternating directions |
| Locations | Map image entrance, followed by staggered homepage markers |
| Values | Restrained perspective rotation, individual image/icon/copy entrances |
| Sustainability | Separate foreground/ghost entrances; 5px scroll-driven background/ghost movement in supported browsers |
| News | Staggered card/content entrances |
| Careers/contact/distributors | Headings, descriptions, media and buttons use the shared variants; active forms and gallery track remain functional |
| CTA/footer | Short coordinated entrances |

## Layers and source inspection

Inspected existing page/components, the image index and asset manifest, extracted Figma source files (`figma-17668-1677`, `1813`, `2044`) and existing extracted image/SVG assets.

- Homepage farmer composition: existing left ghost, right ghost and foreground remain separate. Each enters independently; approved skew and ghost opacity remain intact.
- Sustainability: existing transparent foreground and ghost images remain separate, with different timing. Backgrounds use a separate scroll timeline where supported.
- Product hero: existing background and packaging assets animate separately inside their original containers.
- Homepage map: existing base image and 14 marker spans reveal separately.
- Company factory photograph: animate the image inside its existing mask; white fades remain static and exact.
- Existing CSS gradients, masks and pseudo-element fades retain their original positioning, opacity and stacking. They are not replaced or moved.

No approved assets were recreated. Photographs, purpose/milestone composite backgrounds and the About location map contain flattened imagery. No corresponding separable original layers were found in the inspected local assets; those images remain intact. The About map therefore cannot stagger its baked-in markers independently.

## Reusable implementation and safeguards

`src/lib/nafas/animation.ts` defines left, right, up, diagonal, scale, restrained rotation and layer entrances using the native Web Animations API. Additive transforms preserve existing CSS transforms. `MotionEnhancer` assigns variants and bounded stagger delays using one IntersectionObserver and one child-list MutationObserver, without adding entrance scroll listeners. Optional `data-motion-variant` overrides support explicit placement.

Animations run once per element and finish immediately when scrolled out of view. Effects remove themselves on completion, restoring approved styles. Reduced-motion preference changes cancel active effects. Content has no hidden waiting state, and count-up values render their final values during server rendering and without JavaScript. Optional ViewTimeline parallax falls back to stationary imagery in unsupported browsers.

## Validation

Detailed per-URL results: `animation-validation.json`. Interaction, console, accessibility smoke checks and layout-shift samples: `animation-smoke.json`. Reproducible scripts: `scripts/validate-animations.mjs` and `scripts/animation-smoke.mjs`. Product screenshots are stored under `docs/design-references/animations/`.

The route matrix uses 1440px, 768px and 390px, scrolling down and back up, comparing final transforms/opacity, checking animation completion, horizontal overflow and broken loaded images. Additional checks cover reduced motion, JavaScript-disabled content, product lightbox/category navigation, mobile menu, form validity and testimonial controls. These are scoped browser checks, not a full external accessibility certification or a production Lighthouse benchmark.

Final results: **330/330 combinations passed**, covering all 110 concrete URLs at all three widths. Every route returned HTTP 200. No final transform/opacity mismatches, unfinished entrances, horizontal overflow, broken loaded images or browser exceptions remained. One tablet thumbnail comparison initially sampled an entrance before completion; rechecking after its full duration passed.

The 18 top-level BM/EN page samples recorded zero console errors, zero unnamed buttons and zero cumulative layout shift in this local run. Product lightbox/category navigation, mobile menu, form validity and testimonial expansion passed. Reduced motion produced zero managed animations; JavaScript-disabled homepage content remained visible. Existing About pages have no H1; their approved video-only opening was preserved.

ESLint for the changed animation/page files, TypeScript and the production build passed. No new animation dependency or entrance scroll listener was added. Text-only count-up mutations do not rescan the page. CSS masks contain photo motion, and scroll-driven parallax uses the browser timeline rather than a JavaScript scroll loop. These checks establish local behavior and layout stability; they do not claim production Core Web Vitals measurements.

Downloads with no supplied PDF/brochure remain unavailable exactly as before. Form checks did not submit messages. No backend, tracking, deployment or remote repository changes were made.
