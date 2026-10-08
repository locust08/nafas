import type { Metadata } from 'next';
import Image from 'next/image';
import { getEducationContent } from '@/lib/nafas/resources';
import { ButtonLink, CallToAction, Media, PageHero, SectionHeading } from '@/components/sites/nafas/shared/sections';
import '@/components/sites/nafas/inner-pages.css';
import { MonthlyPosters, ReportLibrary } from '@/components/sites/nafas/education-resources';

export const metadata: Metadata = { title: 'Kelestarian', description: 'Komitmen NAFAS Bajakimia terhadap pertanian lestari, operasi bertanggungjawab dan pendidikan komuniti.' };
const approaches = [{title:'Operasi yang Terkawal',text:'Kami amalkan proses operasi jelas terkawal, pastikan kecekapan, keselamatan dan pematuhan.',icon:'approach-operations'},{title:'Rantaian bekalan mampan',text:'Pendekatan sumber pelbagai dan logistik nasional sokong bekalan baja bertanggungjawab.',icon:'approach-supply'},{title:'Pematuhan Piawaian',text:'Pemeriksaan dalaman dan kawalan kualiti pastikan produk sesuai industri.',icon:'approach-standards'}];

export default async function SustainabilityPage() {
  const content = await getEducationContent();
  return <div className="nafas-inner sustainability-page figma-page">
    <PageHero title="Komitmen Kami terhadap Pertanian Lestari" image="/sites/nafas/figma/sustainability-hero.png" action={<ButtonLink href="#laporan">Muat Turun Laporan Kelestarian 2026</ButtonLink>}><p>NAFAS Bajakimia Sdn. Bhd. komited dalam menyokong kelestarian sektor pertanian melalui operasi yang bertanggungjawab, pengurusan rantaian bekalan yang berstruktur dan pematuhan piawaian industri. Pendekatan kami menekankan kesinambungan bekalan, kecekapan sumber dan sokongan jangka panjang kepada keselamatan makanan negara.</p></PageHero>
    <blockquote className="quote container sustainability-quote">“ <small>Kami</small> <strong>percaya kelestarian dicapai</strong> <small>melalui</small> <strong>tadbir urus yang kukuh,</strong> kecekapan sumber <small>dan</small> <strong>komitmen berterusan</strong> <small>terhadap</small> <strong>piawaian industri.</strong> ”<cite>— NAFAS Bajakimia Sdn. Bhd.</cite></blockquote>
    <section className="sustainability-approach container"><div className="approach-copy"><SectionHeading label="Pendekatan Kami"><span className="accent">Bagaimana</span> Kami Mengintegrasikan Kelestarian</SectionHeading><p>Pendekatan kelestarian NAFAS Bajakimia fokus operasi berstruktur dan kecekapan sumber.</p><div className="approach-list">{approaches.map(({title,text,icon}) => <article key={title}><span className="approach-icon"><Image src={`/sites/nafas/figma/${icon}.svg`} alt="" width={icon === 'approach-standards' ? 36 : icon === 'approach-operations' ? 44.838 : 44} height={44} /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div><div className="sustainability-farmer"><Media src="/sites/nafas/figma/sustainability-ghost.png" className="sustainability-ghost reveal" /><Media src="/sites/nafas/figma/sustainability-farmer.png" alt="Peladang memeriksa hasil tanaman" className="sustainability-front reveal" /></div></section>
    <section id="poster-bulanan" className="educational-section content-section"><div className="container"><SectionHeading label="Pendidikan & Komuniti" center>Poster Bulanan</SectionHeading><p className="center">Melalui penerbitan berkala kami, NAFAS Bajakimia berkongsi ilmu yang memberi inspirasi kepada komuniti dalam alam sekitar.</p><MonthlyPosters items={content.posters} /></div></section>
    <section id="laporan" className="educational-section content-section"><div className="container"><SectionHeading label="Pendidikan & Komuniti" center>Laporan Kelestarian</SectionHeading><p className="center">Ketahui lebih lanjut mengenai usaha kelestarian kami dan impak kepada alam sekitar serta komuniti.</p><ReportLibrary items={content.reports} /></div></section>
    <CallToAction />
  </div>;
}

