// Distributor locations from "NBKSB - Pengedar - 2026.xlsx", placed on home-map-base.png (percent of image box).
export type MapHotspot = { name: string; state: string; left: number; top: number };

export const mapHotspots: MapHotspot[] = [
  { name: 'Alor Setar', state: 'Kedah', left: 9.4, top: 12.6 },
  { name: 'Gurun', state: 'Kedah', left: 9.0, top: 16.5 },
  { name: 'Kulim', state: 'Kedah', left: 9.0, top: 22.6 },
  { name: 'Batu Kurau', state: 'Perak', left: 10.6, top: 29.6 },
  { name: 'Sungai Sumun', state: 'Perak', left: 8.9, top: 42.2 },
  { name: 'Rawang', state: 'Selangor', left: 13.4, top: 53.9 },
  { name: 'Subang Jaya', state: 'Selangor', left: 12.6, top: 57.0 },
  { name: 'Alor Gajah', state: 'Melaka', left: 16.6, top: 69.4 },
  { name: 'Jengka', state: 'Pahang', left: 24.4, top: 55.7 },
  { name: 'Bau', state: 'Sarawak', left: 49.6, top: 80.5 },
  { name: 'Bintulu', state: 'Sarawak', left: 58.0, top: 64.9 },
  { name: 'Tatau', state: 'Sarawak', left: 55.8, top: 68.9 },
  { name: 'Miri', state: 'Sarawak', left: 66.2, top: 47.4 },
  { name: 'Labuan', state: 'Labuan', left: 70.2, top: 38.9 },
  { name: 'Pitas', state: 'Sabah', left: 81.2, top: 26.5 },
  { name: 'Nabawan', state: 'Sabah', left: 77.2, top: 47.4 },
  { name: 'Sandakan', state: 'Sabah', left: 90.2, top: 36.1 },
  { name: 'Kunak', state: 'Sabah', left: 91.3, top: 47.4 },
];
