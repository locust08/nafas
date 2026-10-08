# Supplementary reference inspection

Inspected with actual Playwright browser sessions on 5 October 2026. These references inform behavior only; the supplied NAFAS Figma remains the visual authority. No reference branding, copy, photos, vacancies, or business information is approved for reuse.

## ICL — animation character

Source: https://www.icl-group.com/

- The opening hero is full viewport media with an autoplaying, muted, looping video. Overlay copy and outlined actions remain readable while media changes.
- Browser DOM inspection found fade-up, fade-up-right, fade-up-left, and fade-right scroll entrances. Computed transitions are typically 0.6 seconds. Groups stagger at 0.1-second increments (observed 0.4, 0.5, 0.6, and 0.7-second delays).
- Offscreen reveal states combine opacity 0 with vertical/horizontal translations of approximately 100 pixels; fully revealed states reset to an identity transform and opacity 1.
- Layered image entrances and angled/3D scroll transforms appear on impact cards. The card transform/width transitions are 0.1 seconds, with a parent perspective layer. This is a complex specific interaction; use only if justified by corresponding Figma states.
- An ongoing carousel strip uses a 5,000 ms linear transform transition. Several offscreen videos are paused while the hero video plays.
- At 390×844 the hero media continues playing, navigation condenses, and measured document width does not overflow.
- Implement the character using restrained opacity/transform transitions and staggered entrances. IntersectionObserver plus CSS is sufficient for simple reveals. Respect reduced motion by showing content immediately and disabling nonessential motion. Do not copy ICL's persistent AI widget, cookie dialog, or graphical theme.

Evidence: `docs/design-references/references/icl-desktop.png`, `icl-scroll.png`, `icl-mobile.png`.

## Mahajaya — career UX

Source: https://www.mahajaya.com/career/

- The main page begins with a recruiting introduction and an explicit job-openings CTA next to an image carousel. The carousel exposes Previous/Next controls and six slides; clicking Next changed the active slide to 2/6.
- It then presents a leader soundbite/video section, employee/gallery imagery, benefits, a testimonials carousel, and a repeated closing Apply Now CTA.
- The main page has zero HTML forms and does not directly list job vacancies. Both recruiting CTAs open the same external BrioHR careers board in a new browser tab.
- The board offers a job search input, country filter, department filter, department groups, job title, seniority, country, and a View job action.
- Job detail opens on a separate URL, includes a return-to-all-jobs link, metadata, responsibilities/qualification copy, and Apply actions near the top and bottom.
- The application URL has a back-to-description link. Fields observed: required resume/CV (5 MB maximum), first name, last name, email; optional phone, additional files (4 MB total), LinkedIn/GitHub/portfolio/other URLs; CAPTCHA and Submit Application. No application was submitted and no CAPTCHA was interacted with.
- At 390×844 the main page has no horizontal document overflow and carousels fit inside the page width.
- For NAFAS, use only supported structure/interaction ideas. Actual NAFAS vacancies, benefits, testimonials, recruiting destination, and application backend must come from supplied materials. If no vacancies are supplied, present an honest empty state; do not copy Mahajaya jobs or wire NAFAS actions to Mahajaya's board.

Evidence: `career-desktop.png`, `career-mobile.png`, `career-application-desktop.png` in the reference screenshot directory.

## Orient — news listing/detail UX

Source: https://orient-biotech.pages.dev/insights/

- Listing has a breadcrumb, hero heading/description, section heading/summary, and semantic article cards containing cover image, category, title, excerpt, and Read More link.
- Each Read More navigates to a unique article URL. A tested detail route contains Home/Insights/article breadcrumbs, category, H1, summary, publication date, author, cover, article body, and Back to Insights.
- Current reference entries are test/staging records, including an explicitly temporary CMS connectivity test. None is suitable NAFAS news content.
- Desktop measured cards are approximately 304.5 pixels wide with 24-pixel gaps at a 1440-pixel viewport. The layout accommodates columns; mobile (390 pixels) uses a single 350-pixel column with 20-pixel page gutters.
- Images use object-fit: cover and a 0.35-second transform transition. Card entrance uses opacity/transform over 0.9 seconds with cubic-bezier(0.22,1,0.36,1), staggered by 0.1 seconds.
- The inspected three-entry listing has no filters, search for articles, pagination, or load-more control. Do not infer those as observed behavior.
- Initial full-page screenshots show offscreen reveal content still hidden. Scroll-state evidence was captured separately; screenshot-based comparison must scroll and allow entrances to settle.
- Mobile header switches to a labeled Open navigation control. Document overflow was false at 390 pixels.
- NAFAS can use the semantic listing/detail/back-link pattern with real supplied records and Figma card geometry. Avoid importing the reference's staging records, company text, blue palette, or hero imagery.

Evidence: `news-list-desktop.png`, `news-cards-desktop.png`, `news-list-mobile.png`, `news-list-mobile-revealed.png`, `news-list-tablet.png`, `news-detail-desktop.png`, `news-detail-mobile.png` in the reference screenshot directory.

## Boundaries and validation limits

These captures document supplementary interaction sources, not a NAFAS fidelity target. Desktop source sessions initially used 1280×720; subsequent explicit desktop/news geometry inspection used 1440×900; mobile used 390×844; tablet news used 768×1024. Dynamic media can differ between captures. Offscreen content in a full-page screenshot may remain hidden until scrolled into view. No external application or personal-data submission occurred.
