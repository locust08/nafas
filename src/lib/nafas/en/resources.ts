// Generated from the BM design source by scripts/generate-english.mjs.
import 'server-only';

export type MonthlyPoster = { id: string; year: number; month: number; title: string; image: string; description: string; sample?: boolean };
export type SustainabilityReport = { id: string; year: number; title: string; cover: string; description: string; pdfUrl?: string; sample?: boolean };
export type EducationContent = { posters: MonthlyPoster[]; reports: SustainabilityReport[] };

const fallback: EducationContent = {
  posters: [
    { id: '2026-09', year: 2026, month: 9, title: "Healthy Soil, Fruitful Harvests", image: '/sites/nafas/figma/poster-september.png', description: "Sample educational poster about soil and agriculture.", sample: true },
    { id: '2026-08', year: 2026, month: 8, title: "Growing Together as a Community", image: '/sites/nafas/figma/poster-august.png', description: "Sample educational poster about farming communities.", sample: true },
    { id: '2026-07', year: 2026, month: 7, title: "Every Drop Matters", image: '/sites/nafas/figma/poster-july.png', description: "Sample educational poster about water conservation.", sample: true },
  ],
  reports: [{ id: '2026', year: 2026, title: "December Sustainability Report 2026", cover: '/sites/nafas/figma/report-cover.png', description: "An annual report presenting our achievements, initiatives and commitment to environmental and community sustainability.", sample: true }],
};

function record(value: unknown): value is Record<string, unknown> { return typeof value === 'object' && value !== null; }
function media(value: unknown): value is string { return typeof value === 'string' && (/^\/(?!\/)/.test(value) || /^https:\/\//.test(value)); }
function poster(value: unknown): value is MonthlyPoster {
  return record(value) && typeof value.id === 'string' && typeof value.year === 'number' && value.year >= 2026 && Number.isInteger(value.year) && typeof value.month === 'number' && Number.isInteger(value.month) && value.month >= 1 && value.month <= 12 && typeof value.title === 'string' && media(value.image) && typeof value.description === 'string';
}
function report(value: unknown): value is SustainabilityReport {
  return record(value) && typeof value.id === 'string' && typeof value.year === 'number' && value.year >= 2026 && Number.isInteger(value.year) && typeof value.title === 'string' && media(value.cover) && typeof value.description === 'string' && (value.pdfUrl === undefined || media(value.pdfUrl));
}

// An optional CMS endpoint publishes the same typed document. Local samples keep the UI reviewable.
export async function getEducationContent(): Promise<EducationContent> {
  const endpoint = process.env.NAFAS_EDUCATION_CONTENT_URL_EN;
  if (!endpoint) return fallback;
  try {
    const response = await fetch(endpoint, { next: { revalidate: 60 }, signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error('Content request failed');
    const content: unknown = await response.json();
    if (!record(content) || !Array.isArray(content.posters) || !content.posters.every(poster) || !Array.isArray(content.reports) || !content.reports.every(report)) throw new Error('Invalid education content');
    return { posters: content.posters, reports: content.reports };
  } catch {
    console.warn('NAFAS education content unavailable; displaying sample content.');
    return fallback;
  }
}
