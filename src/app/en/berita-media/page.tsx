// Generated from the BM design source by scripts/generate-english.mjs.
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles } from "@/lib/nafas/en/news";
import { assets } from "@/lib/nafas/en/assets";
import { Breadcrumbs, SectionHeading, Media, CallToAction } from "@/components/sites/nafas/en/shared/sections";
export const metadata:Metadata={title:"News & Media",description:"News, recognition and initiatives from NAFAS Bajakimia Sdn Bhd."};
export default function NewsPage() {
  return <div className="news-page"><section className="editorial-hero"><div className="container"><Breadcrumbs items={[{label:"News & Media"}]} /><p className="eyebrow">News &amp; Media</p><h1>News and <span className="accent">Initiatives</span><br />from NAFAS Bajakimia</h1><p>Developments, recognition and stories from the nation&apos;s agricultural supply chain.</p></div></section><section className="container content-section news-listing"><SectionHeading label="Latest News">Stories from NAFAS Bajakimia</SectionHeading><p>Discover company developments and initiatives supporting the agricultural sector.</p><div className="news-grid">{articles.map(article => <article className="news-card reveal" key={article.slug}><Link href={`/en/berita-media/${article.slug}`} aria-label={article.title}><Media src={assets.services} alt="NAFAS Bajakimia fertilizer supply chain operations" className="hover-media" /></Link><div className="news-card-content"><p className="eyebrow">{article.category}</p><h3><Link href={`/en/berita-media/${article.slug}`}>{article.title}</Link></h3><p>{article.excerpt}</p><Link className="text-link" href={`/en/berita-media/${article.slug}`}>Read More <ArrowRight size={18}/></Link></div></article>)}</div></section><CallToAction /></div>;
}
