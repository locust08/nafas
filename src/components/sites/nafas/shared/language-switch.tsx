'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function LanguageSwitch() {
  const pathname = usePathname();
  const english = pathname === '/en' || pathname.startsWith('/en/');
  const base = english ? pathname.slice(3) || '/' : pathname;
  useEffect(() => {
    let saved: string | null = null;
    try { saved = sessionStorage.getItem('nafas-language-scroll'); } catch { return; }
    if (saved) {
      sessionStorage.removeItem('nafas-language-scroll');
      const position = Number(saved);
      if (Number.isFinite(position)) window.scrollTo({ top: position, behavior: 'instant' });
    }
  }, []);
  function switchLanguage(event: React.MouseEvent<HTMLAnchorElement>, locale: 'ms' | 'en') {
    const destination = (locale === 'en' ? '/en' + (base === '/' ? '' : base) : base) + window.location.search + window.location.hash;
    event.currentTarget.href = destination;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    try { sessionStorage.setItem('nafas-language-scroll', String(window.scrollY)); } catch { /* Navigation still works when storage is blocked. */ }
  }
  return <span className="language-switch"><a className={english ? 'language-unavailable' : 'language'} href={base} hrefLang="ms" lang="ms" aria-label="Bahasa Melayu" aria-current={!english ? 'page' : undefined} onClick={event => switchLanguage(event, 'ms')}>BM</a><span className="language-divider" aria-hidden="true">|</span><a className={english ? 'language' : 'language-unavailable'} href={'/en' + (base === '/' ? '' : base)} hrefLang="en" lang="en" aria-label="English" aria-current={english ? 'page' : undefined} onClick={event => switchLanguage(event, 'en')}>EN</a></span>;
}
