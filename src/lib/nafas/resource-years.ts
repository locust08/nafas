// Archive years shown in the approved design; supplied content can add newer years.
const archiveYears = Array.from({ length: 10 }, (_, index) => 2026 - index);

export function getResourceYears(items: { year: number }[]): number[] {
  return [...new Set([...archiveYears, ...items.map(item => item.year)])].sort((a, b) => b - a);
}
