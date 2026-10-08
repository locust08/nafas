import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { articles } from '@/lib/nafas/news';
import { assets } from '@/lib/nafas/assets';
import { Breadcrumbs, Media, CallToAction } from '@/components/sites/nafas/shared/sections';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return articles.map(article=>({slug:article.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const article=articles.find(a=>a.slug===slug);return{title:article?.title??'Artikel tidak ditemui',description:article?.excerpt,openGraph:{type:'article'}}}
export default async function ArticlePage({params}:Props){const {slug}=await params;const article=articles.find(a=>a.slug===slug);if(!article)notFound();return <><article className="container article article-page"><Breadcrumbs items={[{label:'Berita & Media',href:'/berita-media'},{label:article.title}]}/><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p>{article.excerpt}</p><Media src={assets.services} alt="Operasi rantaian bekalan baja"/><div className="article-body">{article.paragraphs.map(p=><p key={p}>{p}</p>)}<Link className="text-link" href="/berita-media"><ArrowLeft size={18}/>Kembali ke Berita & Media</Link></div></article><CallToAction/></>}
