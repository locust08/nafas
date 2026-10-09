'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { assets } from '@/lib/nafas/assets';
import { animateEntrance, animateParallax, type MotionVariant } from '@/lib/nafas/animation';
export function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(value);
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
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (typeof IntersectionObserver === 'undefined' || typeof Element.prototype.animate !== 'function') return;
    const root = document.querySelector('main');
    if (!root) return;
    const observed = new Set<Element>();
    const animations = new Set<Animation>();
    const active = new WeakMap<Element, Animation[]>();
    const sections = Array.from(root.querySelectorAll('section'));
    const stop = () => { if (preference.matches) animations.forEach(animation => animation.cancel()); };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          const running = active.get(entry.target);
          if (running) { running.forEach(animation => animation.finish()); observer.unobserve(entry.target); }
          return;
        }
        const element = entry.target as HTMLElement;
        if (element.dataset.motionEntered === 'true') return;
        element.classList.add('revealed');
        element.dataset.motionEntered = 'true';
        if (preference.matches) { observer.unobserve(element); return; }
        const variant = element.dataset.motionVariant as MotionVariant;
        const entrance = animateEntrance(element, variant, Number(element.dataset.motionDelay ?? 0));
        active.set(element, entrance);
        entrance.forEach(animation => {
          animations.add(animation);
          animation.finished.then(() => { animations.delete(animation); observer.unobserve(element); }).catch(() => animations.delete(animation));
        });
      });
    }, { threshold: 0.05 });
    const register = () => {
      const selector = 'h1,h2,h3,p,.button,.media>img,.farmer-layer,.product-card,.news-card,.about-value,.value-card,.career-benefit,.fact-marker,.approach-icon,.expertise-card,.metric,.benefit-strip article,.partner-names,.hero-curve,.home-map>img,.home-map-marker,svg,.reveal,[data-motion]';
      const elements = [...root.querySelectorAll(selector), ...document.querySelectorAll('.site-footer .footer-brand,.site-footer .footer-grid>div,.site-footer .footer-bottom')];
      elements.forEach(element => {
        if (observed.has(element) || element.closest('dialog,.career-marquee-track,form,.dropdown,.mobile-nav')) return;
        // Containers never mask independently animated children; controls stay usable.
        if (element.tagName === 'SECTION' || element.matches('.media,.hero-copy,.layered-farmer,.sustainability-farmer,.expertise-card,.benefit-strip article')) return;
        if (element.matches('.reveal') && !element.matches('.media,.farmer-layer,.product-card,.news-card,.career-benefit,.value-card,.about-value') && element.querySelector('h1,h2,h3,p,.media')) return;
        if (element.parentElement?.closest('.product-card,.news-card,.career-benefit,.farmer-layer,.button')) return;
        if (element.matches('.hero-background') && element.closest('.home-hero,.corporate-banner')) return;
        observed.add(element);
        const node = element as HTMLElement;
        const section = element.closest('section');
        const sectionIndex = section ? sections.indexOf(section) : 0;
        const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
        const order = Math.max(0, siblings.indexOf(element));
        let variant: MotionVariant = sectionIndex % 2 ? 'right' : 'left';
        if (element.matches('p,.button,.metric,.site-footer *')) variant = 'up';
        if (element.matches('.product-card,.news-card,.value-card,.career-benefit')) variant = order % 2 ? 'diagonal' : 'scale';
        if (element.matches('.about-value')) variant = 'rotate';
        if (element.matches('img,.farmer-layer,.hero-curve')) variant = order % 2 ? 'right' : 'layer';
        if (element.closest('.about-overview')) variant = element.matches('img') ? 'right' : 'left';
        if (element.matches('.fact-marker,.approach-icon,.home-map-marker,svg')) variant = 'scale';
        node.dataset.motionVariant = node.dataset.motionVariant ?? variant;
        node.dataset.motionDelay = String(Math.min(order % 5 * 65, 260));
        if (element.matches('.home-map-marker')) node.dataset.motionDelay = String(Math.min(350 + order * 35, 700));
        node.dataset.motionRegistered = 'true';
        if (!preference.matches && element.matches('.sustainability-page .hero-background>img,.sustainability-ghost>img')) {
          const subject = element.closest('section');
          if (subject) { const parallax = animateParallax(node, subject); if (parallax) animations.add(parallax); }
        }
        observer.observe(element);
      });
    };
    register();
    const additions = new MutationObserver(records => {
      // Count-up text changes do not need a new scan of the page.
      if (records.some(record => Array.from(record.addedNodes).some(node => node.nodeType === Node.ELEMENT_NODE))) register();
    });
    additions.observe(root, { childList: true, subtree: true });
    preference.addEventListener('change', stop);
    return () => { observer.disconnect(); additions.disconnect(); preference.removeEventListener('change', stop); animations.forEach(animation => animation.cancel()); };
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
