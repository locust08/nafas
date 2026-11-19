'use client';

import Image from 'next/image';
import { mapHotspots } from '@/lib/nafas/map-hotspots';

export function HomeMap() {
  return <div className="home-map" role="group" aria-label="NAFAS location network map in Malaysia"><Image src="/sites/nafas/assets/home-map-base.png" alt="" fill sizes="(max-width: 767px) 90vw, 55vw" />{mapHotspots.map(({ name, state, left, top }) => <button key={name} type="button" onClick={(event) => event.currentTarget.focus()} className={`home-map-marker${left < 22 ? ' label-start' : left > 75 ? ' label-end' : ''}`} style={{ left: `${left}%`, top: `${top}%` }} aria-label={`${name}, ${state}`}><span className="home-map-label">{name}<small>{state}</small></span></button>)}</div>;
}
