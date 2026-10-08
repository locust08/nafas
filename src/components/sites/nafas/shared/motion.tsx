'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { assets } from '@/lib/nafas/assets';
export function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { requestAnimationFrame(() => setCurrent(value)); return; }
    let frame = 0;
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1500, 1);
        setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .25 });
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <strong ref={ref}>{current.toLocaleString('en-MY')}{suffix}</strong>;
}
export function ScrollLine() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const line = ref.current;
    const section = line?.closest('section');
    const list = line?.parentElement;
    if (!line || !section || !list) return;
    const update = () => {
      const lastMarker = list.querySelector<HTMLElement>('article:last-child .fact-marker');
      if (lastMarker) {
        const listRect = list.getBoundingClientRect();
        const markerRect = lastMarker.getBoundingClientRect();
        const bottom = listRect.bottom - markerRect.top - markerRect.height / 2;
        list.style.setProperty('--timeline-bottom', `${Math.max(0, bottom)}px`);
      }
      const rect = line.getBoundingClientRect();
      const trackHeight = line.offsetHeight;
      const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.7 - rect.top) / Math.max(1, trackHeight)));
      line.style.setProperty('--line-progress', String(progress));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <span ref={ref} className="scroll-line" aria-hidden="true" />;
}
export function MotionEnhancer() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.querySelector('.figma-page');
    const observed = new Set<Element>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.05 });
    const register = () => {
      const elements = root
        ? root.querySelectorAll('section, .hero-copy, .sustainability-quote, .media, .approach-list article, .product-card, .reveal')
        : document.querySelectorAll('.reveal');
      elements.forEach(element => {
        if (observed.has(element) || element.closest('dialog') || element.classList.contains('hero-background')) return;
        // Category cards reveal independently; a parent fade would mask their stagger.
        if (element.tagName === 'SECTION' && element.querySelector('.product-card')) return;
        observed.add(element);
        if (root) element.classList.add(element.classList.contains('media') ? 'v3-image-ready' : 'v3-motion-ready');
        else element.classList.add('motion-ready');
        observer.observe(element);
      });
    };
    register();
    const additions = new MutationObserver(register);
    if (root) additions.observe(root, { childList: true, subtree: true });
    return () => { observer.disconnect(); additions.disconnect(); };
  }, [pathname]);
  return null;
}
export function HeroVideo({ poster = assets.heroPoster, src = '/sites/nafas/assets/hero.mp4' }: { poster?: string; src?: string } = {}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    ref.current?.play().catch(() => {});
  }, []);
  return <video className="hero-video" ref={ref} muted loop playsInline preload="metadata" poster={poster} aria-hidden="true"><source src={src} type="video/mp4" /></video>;
}
