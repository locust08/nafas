import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/lib/nafas/news';
import { assets } from '@/lib/nafas/assets';
import { Breadcrumbs, SectionHeading, Media, CallToAction } from '@/components/sites/nafas/shared/sections';
export const metadata:Metadata={title:'Berita & Media',description:'Berita, pengiktirafan dan inisiatif NAFAS Bajakimia Sdn Bhd.'};
export default function NewsPage() {
  return <div className="news-page"><section className="editorial-hero"><div className="container"><Breadcrumbs items={[{label:'Berita & Media'}]} /><p className="eyebrow">Berita &amp; Media</p><h1>Berita dan <span className="accent">Inisiatif</span><br />Terkini NAFAS Bajakimia</h1><p>Perkembangan, pengiktirafan dan cerita daripada rantaian bekalan pertanian negara.</p></div></section><section className="container content-section news-listing"><SectionHeading label="Berita Terkini">Cerita daripada NAFAS Bajakimia</SectionHeading><p>Ketahui perkembangan syarikat serta inisiatif dalam menyokong sektor pertanian.</p><div className="news-grid">{articles.map(article => <article className="news-card reveal" key={article.slug}><Link href={`/berita-media/${article.slug}`} aria-label={article.title}><Media src={assets.services} alt="Operasi rantaian bekalan baja NAFAS Bajakimia" className="hover-media" /></Link><div className="news-card-content"><p className="eyebrow">{article.category}</p><h3><Link href={`/berita-media/${article.slug}`}>{article.title}</Link></h3><p>{article.excerpt}</p><Link className="text-link" href={`/berita-media/${article.slug}`}>Baca Selanjutnya <ArrowRight size={18}/></Link></div></article>)}</div></section><CallToAction /></div>;
}
