'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export type DepartmentSlide = { name: string; image: string };

// Same panel as the CEO block: copy on the left, photo on the right, advancing on its own (BugHerd #51 follow-up).
export function DepartmentSlider({ items, label, interval = 5000 }: { items: DepartmentSlide[]; label: string; interval?: number }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % items.length), interval);
    return () => window.clearInterval(timer);
  }, [paused, interval, items.length]);

  return <div className="department-slider" role="region" aria-roledescription="carousel" aria-label={label} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
    {items.map(({ name, image }, index) => <article key={name} className={`department-slide${index === active ? ' active' : ''}`} aria-hidden={index !== active}>
      <div className="department-slide-copy"><h3>{name}</h3></div>
      <div className="department-slide-photo"><Image src={`/sites/nafas/figma/${image}`} alt="" fill sizes="(max-width: 767px) 100vw, 45vw" /></div>
    </article>)}
    <div className="department-dots">{items.map(({ name }, index) => <button key={name} type="button" aria-label={name} aria-current={index === active} className={index === active ? 'active' : ''} onClick={() => setActive(index)} />)}</div>
  </div>;
}
