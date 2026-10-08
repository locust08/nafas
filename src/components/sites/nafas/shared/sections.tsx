import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { assets } from '@/lib/nafas/assets';

export function Media({ src, alt = '', className = '', priority = false, sizes }: { src: string; alt?: string; className?: string; priority?: boolean; sizes?: string }) {
  return <div className={`media ${className}`}><Image src={src} alt={alt} fill unoptimized={src.startsWith("https://")} sizes={sizes ?? '(max-width: 767px) 100vw, 65vw'} priority={priority || src === assets.map} /></div>;
}
export function ButtonLink({ href, children, outline = false }: { href: string; children: ReactNode; outline?: boolean }) {
  return <Link className={`button ${outline ? 'button-outline' : ''}`} href={href}>{children}<ArrowRight size={20} aria-hidden="true" /></Link>;
}
export function SectionHeading({ label, children, center = false }: { label?: string; children: ReactNode; center?: boolean }) {
  return <div className={`section-heading ${center ? 'center' : ''}`}>{label && <p className="eyebrow">{label}</p>}<h2>{children}</h2></div>;
}
export function PageHero({ title, children, image, action, foreground, className = '' }: { title: string; children?: ReactNode; image: string; action?: ReactNode; foreground?: string; className?: string }) {
  const productHero = className.includes('product-category-hero');
  return <section className={`page-hero ${className}`}><Media src={image} priority className="hero-background" sizes={productHero ? '100vw' : undefined} />{foreground && <Media src={foreground} priority className="product-hero-bags" sizes="(max-width: 767px) 100vw, 68vw" />}<div className="container hero-copy"><h1>{title}</h1><div>{children}</div>{action}</div></section>;
}
export function SplitSection({ label, title, image, imageAlt = '', children, reverse = false, className = '' }: { label?: string; title: ReactNode; image: string; imageAlt?: string; children: ReactNode; reverse?: boolean; className?: string }) {
  return <section className={`split-section ${reverse ? 'reverse' : ''} ${className}`}><div className="container split-grid"><div className="split-copy"><SectionHeading label={label}>{title}</SectionHeading>{children}</div><Media src={image} alt={imageAlt} className="split-media" sizes={image === assets.map ? '(max-width: 767px) 85vw, 48vw' : undefined} /></div></section>;
}
export function CallToAction() {
  return <section className="cta container"><SectionHeading label="Mari Bekerjasama" center>Mencari rakan pembekal baja yang boleh dipercayai?</SectionHeading><p>Hubungi kami untuk membincangkan keperluan anda atau sebarang pertanyaan.</p><ButtonLink href="/hubungi-kami">Hubungi Kami</ButtonLink></section>;
}
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav aria-label="Jejak halaman" className="breadcrumbs"><Link href="/">Utama</Link>{items.map((item) => <span key={item.label}><span aria-hidden="true"> / </span>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav>;
}
export function EmptyPage({ title, children }: { title: string; children: ReactNode }) {
  return <><PageHero title={title} image={assets.sustainability} /><section className="container empty-state">{children}<ButtonLink href="/hubungi-kami">Hubungi Kami</ButtonLink></section><CallToAction /></>;
}
