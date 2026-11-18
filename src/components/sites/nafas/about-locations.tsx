import Image from 'next/image';

export type AboutLocation = { name: string; state: string; left: number; top: number };

// Numbered pins and list follow the client's "Lokasi Strategik" reference (BugHerd #50); positions are percent of about-locations-map-clean.png (the original map with its baked-in pins removed).
export function AboutLocationList({ locations }: { locations: AboutLocation[] }) {
  return <ol className="about-location-list">{locations.map(({ name, state }, index) => <li key={name}><span className="about-location-number">{index + 1}</span><strong>{name}</strong><span className="about-location-state">{state}</span></li>)}</ol>;
}

export function AboutLocationMap({ locations, label }: { locations: AboutLocation[]; label: string }) {
  return <div className="about-location-map" role="img" aria-label={label}><Image src="/sites/nafas/assets/about-locations-map-clean.png" alt="" fill sizes="(max-width: 767px) 90vw, 55vw" />{locations.map(({ name, left, top }, index) => <span key={name} className="about-location-pin" style={{ left: `${left}%`, top: `${top}%` }} aria-hidden="true"><b>{index + 1}</b></span>)}</div>;
}
