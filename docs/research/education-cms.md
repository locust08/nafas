# Sustainability resource publishing

Set `NAFAS_EDUCATION_CONTENT_URL` to the CMS public JSON endpoint. Server fetches revalidate every 60 seconds. Missing or invalid responses display the clearly identified Figma samples. No CMS credentials or admin service are configured yet.

```json
{
  "posters": [{"id":"2026-09","year":2026,"month":9,"title":"Poster title","image":"https://cms.example/poster.png","description":"Poster description"}],
  "reports": [{"id":"2026","year":2026,"title":"Report title","cover":"https://cms.example/cover.png","description":"Report description","pdfUrl":"https://cms.example/report.pdf"}]
}
```

Years must be 2026 or newer; months are 1–12. IDs must be unique. Media URLs may be site-relative or HTTPS. Omit `pdfUrl` until a report exists: preview shows an unavailable state and disables download. A single year displays month navigation only; additional years enable year selection. Poster clicks open a modal. PDF hosts must permit iframe embedding, and cross-origin download behavior depends on the PDF server's Content-Disposition header.

Remaining client content: Pengedar copy, career video and vacancies, genuine testimonials, category-specific product images, brochures, reports, and confirmed enquiry/crop options. Contact and career forms prepare email drafts; production form delivery requires an agreed receiving service.
