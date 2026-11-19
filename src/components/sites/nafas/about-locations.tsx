'use client';

import Image from 'next/image';

export type AboutLocation = { name: string; state: string; left: number; top: number };

// Numbered pins with a hover/focus label, following the client's "Lokasi Strategik" reference (BugHerd #50); positions are percent of about-locations-map-clean.png (the original map with its baked-in pins removed).
export function AboutLocationMap({ locations, label }: { locations: AboutLocation[]; label: string }) {
  return <div className="about-location-map" role="group" aria-label={label}><Image src="/sites/nafas/assets/about-locations-map-clean.png" alt="" fill sizes="(max-width: 767px) 90vw, 55vw" />{locations.map(({ name, state, left, top }, index) => <button key={name} type="button" onClick={(event) => event.currentTarget.focus()} className={`about-location-pin${left < 22 ? ' label-start' : left > 75 ? ' label-end' : ''}`} style={{ left: `${left}%`, top: `${top}%` }} aria-label={`${name}, ${state}`}><span className="about-location-drop"><b>{index + 1}</b></span><span className="about-location-label">{name}, {state}</span></button>)}</div>;
}
