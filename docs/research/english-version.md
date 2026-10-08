# English website

BM URLs remain unchanged. English equivalents use `/en` followed by the same page, category or product slug. Both header controls are available on desktop and mobile. Switching performs a full page navigation to load translated server content and the correct document language, preserving query parameters, hash and scroll position. Quote selections use the same storage key in both languages.

## Updating content

- Edit the original BM pages/components for layout changes.
- Edit `src/lib/nafas/i18n/en.json` for English copy.
- Run `npm run i18n:generate` to refresh generated English pages/components.
- English imports the original CSS files and image URLs. Never edit generated files directly.
- Product category and product slugs remain stable; product names/specification labels are translated separately.

An optional `NAFAS_EDUCATION_CONTENT_URL_EN` supplies English poster/report metadata with the same Malay artwork. Without it, the translated sample content is displayed. Address, registered company names, product brands, nutrient values and image/video contents remain unchanged.

## Checks

Run `node scripts/check-english.mjs` against the local development server (default port 3002). It checks every BM/EN page pair for successful responses, document language, identical layout classes, unchanged image URLs and valid English internal links. Set `NAFAS_TEST_ORIGIN` for a different local port. Run `npm run check` for lint, types and production build.
