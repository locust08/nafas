'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { assets } from '@/lib/nafas/assets';
import { animateEntrance, type MotionVariant } from '@/lib/nafas/animation';
import { registerHomepageMotion } from '@/lib/nafas/homepage-motion';
import { registerPageMotion } from '@/lib/nafas/page-motion';
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
        const progress = Math.min((now - start) / 1600, 1);
        setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0, rootMargin: `0px 0px -${Math.round(window.innerHeight * .2)}px 0px` });
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
    const homepage = !!root.querySelector('.home-hero');
    const sequences = new Map<HTMLElement, HTMLElement[]>();
    const observed = new Set<Element>();
    const animations = new Set<Animation>();
    const stop = () => { if (preference.matches) animations.forEach(animation => animation.cancel()); };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        if (element.dataset.motionEntered === 'true') return;
        element.classList.add('revealed');
        element.dataset.motionEntered = 'true';
        if (preference.matches) { observer.unobserve(element); return; }
        // One viewport trigger coordinates the heading, image and details.
        const targets = sequences.get(element) ?? [element];
        const entrance = targets.flatMap(target => {
          target.classList.add('revealed');
          target.dataset.motionEntered = 'true';
          return animateEntrance(target, target.dataset.motionVariant as MotionVariant, Number(target.dataset.motionDelay ?? 0), target.dataset.motionDuration ? Number(target.dataset.motionDuration) : undefined, { distance: window.innerWidth < 768 ? 60 : 80, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', maxDelay: 480 });
        });
        // Finish at the natural pace, even if scrolling moves the element out
        // of view. Calling finish() here used to produce an abrupt jump.
        observer.unobserve(element);
        entrance.forEach(animation => {
          animations.add(animation);
          animation.finished.then(() => { animations.delete(animation); observer.unobserve(element); }).catch(() => animations.delete(animation));
        });
      });
    }, { threshold: 0, rootMargin: `0px 0px -${Math.round(window.innerHeight * .2)}px 0px` });
    const register = () => {
      const configure = homepage ? registerHomepageMotion : registerPageMotion;
      configure(root, (trigger, targets) => {
        if (observed.has(trigger)) return;
        observed.add(trigger);
        sequences.set(trigger, targets.map(item => item.target));
        targets.forEach(({ target, variant, duration, delay }) => {
          observed.add(target);
          target.dataset.motionRegistered = 'true';
          target.dataset.motionVariant = variant;
          target.dataset.motionDuration = String(duration);
          target.dataset.motionDelay = String(delay);
          target.dataset.motionProfile = homepage ? 'corporate-home' : 'corporate';
        });
        observer.observe(trigger);
      });
    };
    register();
    const additions = new MutationObserver(records => {
      // Count-up text changes do not need a new scan of the page.
      if (records.some(record => Array.from(record.addedNodes).some(node => node.nodeType === Node.ELEMENT_NODE))) register();
    });
    additions.observe(root, { childList: true, subtree: true });
    preference.addEventListener('change', stop);
    return () => {
      observer.disconnect();
      additions.disconnect();
      preference.removeEventListener('change', stop);
      animations.forEach(animation => animation.cancel());
      root.querySelectorAll<HTMLElement>('[data-motion-carousel-seen]').forEach(element => delete element.dataset.motionCarouselSeen);
      observed.forEach(element => {
        const node = element as HTMLElement;
        delete node.dataset.motionEntered;
        delete node.dataset.motionRegistered;
        delete node.dataset.motionDuration;
        delete node.dataset.sequenceMotion;
        delete node.dataset.motionSequence;
        delete node.dataset.motionProfile;
      });
    };
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
