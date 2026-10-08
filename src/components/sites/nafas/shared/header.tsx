'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import './header.css';
import { LanguageSwitch } from '@/components/sites/nafas/shared/language-switch';
import { assets } from '@/lib/nafas/assets';

const categories = ['Baja Tunggal', 'Baja Gred Tinggi', 'Baja Sebatian', 'Baja Sebatian Kompak', 'Baja Foliar', 'Baja Organik', 'Baja Campuran'];
export const categorySlugs = ['baja-tunggal', 'baja-gred-tinggi', 'baja-sebatian', 'baja-sebatian-kompak', 'baja-foliar', 'baja-organik', 'baja-campuran'];
const navigation = [
  { label: 'Tentang Kami', href: '/tentang-kami', children: [{ label: 'Perkhidmatan', href: '/perkhidmatan' }] },
  { label: 'Produk Kami', href: '/produk', children: categories.map((label, i) => ({ label, href: `/produk/${categorySlugs[i]}` })) },
  { label: 'Kelestarian', href: '/kelestarian' }, { label: 'Berita & Media', href: '/berita-media' },
  { label: 'Pengedar', href: '/pengedar' }, { label: 'Kerjaya', href: '/kerjaya' },
];
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  const header = useRef<HTMLElement>(null);
  function closeDropdowns() { header.current?.querySelectorAll('details[open]').forEach(details => details.removeAttribute('open')); }
  useEffect(() => {
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) closeDropdowns(); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { const focused = document.activeElement?.closest('details'); closeDropdowns(); focused?.querySelector('summary')?.focus(); } };
    const desktop = window.matchMedia('(min-width: 1100px)');
    const resize = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', resize);
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => { desktop.removeEventListener('change', resize); document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, []);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 40); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const keydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
      if (e.key === 'Tab') {
        const nodes = [menuButton.current, ...Array.from(panel.current?.querySelectorAll<HTMLElement>('a,button,summary') ?? [])].filter(Boolean) as HTMLElement[];
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', keydown); };
  }, [open]);
  const solid = scrolled || open;
  const lightHero = pathname !== '/' && pathname !== '/tentang-kami';
  return <header ref={header} onClick={event => { if ((event.target as HTMLElement).closest('a')) { closeDropdowns(); setOpen(false); } }} className={`site-header ${solid ? 'solid' : ''} ${lightHero ? 'light-hero' : ''}`}><div className="header-inner"><Link href="/" className="brand" aria-label="NAFAS Bajakimia — Utama" onClick={() => setOpen(false)}><Image src={solid || lightHero ? assets.logo : assets.logoWhite} alt="NAFAS Bajakimia Sdn Bhd" width={211} height={78} priority /></Link><nav className="desktop-nav" aria-label="Navigasi utama">{navigation.map((item) => <div className="nav-item" key={item.href}>{item.children ? <><Link href={item.href} aria-current={(pathname.startsWith(item.href) || item.children.some(child => child.href === pathname)) ? 'page' : undefined}>{item.label}</Link><details><summary aria-label={`Buka menu ${item.label}`}><ChevronDown size={14} /></summary><div className="dropdown">{item.children.map((child) => <Link href={child.href} key={child.href}>{child.label}</Link>)}</div></details></> : <Link href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>}</div>)}</nav><LanguageSwitch /><Link className="header-contact button button-outline" href="/hubungi-kami">Hubungi Kami<ArrowRight size={20} /></Link><button ref={menuButton} className="menu-toggle" aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <nav ref={panel} id="mobile-navigation" className="mobile-nav" aria-label="Navigasi mudah alih">{navigation.map((item) => item.children ? <div className="mobile-nav-group" key={item.href}><Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link><details><summary aria-label={`Buka menu ${item.label}`}><ChevronDown size={18} /></summary><div className="mobile-submenu">{item.children.map((child) => <Link href={child.href} key={child.href} onClick={() => setOpen(false)}>{child.label}</Link>)}</div></details></div> : <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="button" href="/hubungi-kami" onClick={() => setOpen(false)}>Hubungi Kami<ArrowRight size={20} /></Link></nav>}</header>;
}
