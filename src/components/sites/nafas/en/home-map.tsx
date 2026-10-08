// Generated from the BM design source by scripts/generate-english.mjs.
import Image from 'next/image';

// Homepage marker positions follow the marked Figma review image.
// The About map retains its own asset and arrangement.
const markers = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export function HomeMap() {
  return <div className="home-map" role="img" aria-label="NAFAS location network map in Malaysia"><Image src="/sites/nafas/assets/home-map-base.png" alt="" fill sizes="(max-width: 767px) 90vw, 55vw" />{markers.map(index => <span key={index} className={`home-map-marker marker-${index}`} aria-hidden="true" />)}</div>;
}
