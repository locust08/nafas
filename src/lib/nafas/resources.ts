import 'server-only';

export type MonthlyPoster = { id: string; year: number; month: number; title: string; image: string; description: string; sample?: boolean };
export type SustainabilityReport = { id: string; year: number; title: string; cover: string; description: string; pdfUrl?: string; sample?: boolean };
export type EducationContent = { posters: MonthlyPoster[]; reports: SustainabilityReport[] };

const fallback: EducationContent = {
  posters: [
    { id: '2026-09', year: 2026, month: 9, title: 'Tanah Sihat Hasil Berkat', image: '/sites/nafas/figma/poster-september.png', description: 'Contoh poster pendidikan mengenai tanah dan pertanian.', sample: true },
    { id: '2026-08', year: 2026, month: 8, title: 'Bersama Komuniti Lebih Maju', image: '/sites/nafas/figma/poster-august.png', description: 'Contoh poster pendidikan mengenai komuniti pertanian.', sample: true },
    { id: '2026-07', year: 2026, month: 7, title: 'Setiap Titisan Bermakna', image: '/sites/nafas/figma/poster-july.png', description: 'Contoh poster pendidikan mengenai pemuliharaan sumber air.', sample: true },
  ],
  reports: [{ id: '2026', year: 2026, title: 'Laporan Disember Kelestarian 2026', cover: '/sites/nafas/figma/report-cover.png', description: 'Laporan tahunan yang memaparkan pencapaian, inisiatif dan komitmen kami dalam menyokong kelestarian alam sekitar dan komuniti.', sample: true }],
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
  const endpoint = process.env.NAFAS_EDUCATION_CONTENT_URL;
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
