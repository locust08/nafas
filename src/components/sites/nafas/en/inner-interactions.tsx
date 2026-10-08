// Generated from the BM design source by scripts/generate-english.mjs.
'use client';

import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Home, Truck, Trophy } from 'lucide-react';
import { asset } from "@/lib/nafas/en/assets";
import { Media } from './shared/sections';

export function MilestoneCarousel({ items }: { items: string[][] }) {
  const [active, setActive] = useState(0);
  const move = (offset: number) => setActive((current) => (current + offset + items.length) % items.length);
  const start = Math.min(Math.max(active - 1, 0), items.length - 3);
  return <div className="milestone-carousel wide-container" role="region" aria-roledescription="karusel" aria-label="Company milestones" tabIndex={0} onKeyDown={(event) => { if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } }}>
    <div className="carousel-controls"><button onClick={() => move(-1)} aria-label="Previous milestone"><ArrowLeft aria-hidden="true" /></button><button onClick={() => move(1)} aria-label="Next milestone"><ArrowRight aria-hidden="true" /></button></div>
    <div className="milestone-description" aria-live="polite" aria-atomic="true"><h2>{items[active][1]}</h2><p>{active + 1} / {items.length}</p></div>
    <div className="milestone-markers">{items.slice(start, start + 3).map(([year], position) => { const Icon = [Home, Truck, Trophy][position]; return <button key={year} onClick={() => setActive(start + position)} aria-pressed={active === start + position}><strong>{year}</strong><span><Icon aria-hidden="true" /></span></button>; })}</div>
  </div>;
}

type Resource = { id: number; title: string; src?: string };
export function ResourceCarousel({ items, label }: { items: Resource[]; label: string }) {
  const [active, setActive] = useState(0);
  const move = (offset: number) => setActive((current) => Math.max(0, Math.min(items.length - 1, current + offset)));
  const visible = items.slice(Math.max(0, Math.min(active - 1, items.length - 3)), Math.max(0, Math.min(active - 1, items.length - 3)) + 3);
  return <div className="resource-carousel" role="region" aria-roledescription="karusel" aria-label={label} tabIndex={0} onKeyDown={(event) => { if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } }}><div className="carousel-controls"><button onClick={() => move(-1)} disabled={active === 0} aria-label={`${label} sebelumnya`}><ArrowLeft aria-hidden="true" /></button><button onClick={() => move(1)} disabled={active === items.length - 1} aria-label={`${label} seterusnya`}><ArrowRight aria-hidden="true" /></button></div><div className="resource-track">{visible.map(item => <figure key={item.id} className={items[active].id === item.id ? 'focused' : ''}><button type="button" onClick={() => setActive(items.findIndex(candidate => candidate.id === item.id))} aria-label={`Focus ${item.title}`}><Media src={item.src ?? asset(item.id)} alt={item.title} /></button><figcaption>{item.title}</figcaption></figure>)}</div><p className="carousel-position" aria-live="polite">{active + 1} / {items.length} — {items[active].title}</p></div>;
}

type Certificate = { src: string; title: string; description: string; crop: string };
export function CertificateCarousel({ items }: { items: Certificate[] }) {
  const [cursor, setCursor] = useState(items.length + 1);
  const [resetting, setResetting] = useState(false);
  const moving = useRef(false);
  const pointerStart = useRef<number | null>(null);
  const active = cursor % items.length;
  function move(offset: number) {
    if (moving.current || offset === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setResetting(true);
      setCursor(items.length + (active + offset + items.length) % items.length);
      return;
    }
    moving.current = true;
    setResetting(false);
    setCursor(current => current + offset);
  }
  function finishMove() {
    moving.current = false;
    if (cursor < items.length || cursor >= items.length * 2) {
      setResetting(true);
      setCursor(items.length + active);
    }
  }
  return <div className="certificate-carousel" role="region" aria-roledescription="karusel" aria-label="Certifications & Awards" tabIndex={0} onKeyDown={event => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); } }}>
    <div className="certificate-heading container"><div><p className="eyebrow">Certifications &amp; Awards</p><h2>Industry Recognition and Compliance</h2></div><div className="carousel-controls"><button type="button" onClick={() => move(-1)} aria-label="Previous certification"><ArrowLeft aria-hidden="true" /></button><button type="button" onClick={() => move(1)} aria-label="Next certification"><ArrowRight aria-hidden="true" /></button></div></div>
    <div className="certificate-stage" onPointerDown={event => { pointerStart.current = event.clientX; }} onPointerUp={event => { if (pointerStart.current !== null && Math.abs(event.clientX - pointerStart.current) > 45) move(event.clientX < pointerStart.current ? 1 : -1); pointerStart.current = null; }} onPointerCancel={() => { pointerStart.current = null; }}>
      <div className={`certificate-track cursor-${cursor} ${resetting ? 'is-resetting' : ''}`} onTransitionEnd={event => { if (event.target === event.currentTarget && event.propertyName === 'transform') finishMove(); }}>
      {Array.from({ length: items.length * 3 }, (_, index) => {
        const item = items[index % items.length];
        const position = index - cursor;
        return <article key={index} aria-hidden={Math.abs(position) > 1} className={`certificate-slide ${position === 0 ? 'focused' : ''}`}>
          <button type="button" tabIndex={Math.abs(position) > 1 ? -1 : 0} className={`certificate-image ${item.crop}`} aria-label={`Focus ${item.title}`} aria-pressed={position === 0} onClick={() => move(position)}><Media src={item.src} alt={item.title} sizes="(max-width: 767px) 48vw, 400px" /></button>
          <div className="certificate-copy"><h3>{item.title}</h3><p>{item.description}</p></div>
        </article>;
      })}
      </div>
    </div>
    <span className="sr-only" aria-live="polite" aria-atomic="true">{active + 1} / {items.length}: {items[active].title}</span>
  </div>;
}

