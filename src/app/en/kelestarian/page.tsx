// Generated from the BM design source by scripts/generate-english.mjs.
import type { Metadata } from 'next';
import Image from 'next/image';
import { getEducationContent } from "@/lib/nafas/en/resources";
import { ButtonLink, CallToAction, Media, PageHero, SectionHeading } from "@/components/sites/nafas/en/shared/sections";
import '@/components/sites/nafas/inner-pages.css';
import { MonthlyPosters, ReportLibrary } from "@/components/sites/nafas/en/education-resources";

export const metadata: Metadata = { title: "Sustainability", description: "NAFAS Bajakimia's commitment to sustainable agriculture, responsible operations and community education." };
const approaches = [{title:"Controlled Operations",text:"We follow clearly controlled operating processes to ensure efficiency, safety and compliance.",icon:'approach-operations'},{title:"Sustainable Supply Chain",text:"Diversified sourcing and nationwide logistics support responsible fertilizer supply.",icon:'approach-supply'},{title:"Standards Compliance",text:"Internal inspections and quality controls ensure products meet industry requirements.",icon:'approach-standards'}];

export default async function SustainabilityPage() {
  const content = await getEducationContent();
  return <div className="nafas-inner sustainability-page figma-page">
    <PageHero title="Our Commitment to Sustainable Agriculture" image="/sites/nafas/figma/sustainability-hero.png" action={<ButtonLink href="#laporan">Download Sustainability Report 2026</ButtonLink>}><p>NAFAS Bajakimia Sdn. Bhd. is committed to supporting agricultural sustainability through responsible operations, structured supply chain management and compliance with industry standards. Our approach emphasises supply continuity, resource efficiency and long-term support for national food security.</p></PageHero>
    <blockquote className="quote container sustainability-quote">“ <small>We</small> <strong>believe sustainability is achieved</strong> <small>through</small> <strong>strong governance,</strong> resource efficiency <small>and</small> <strong>continued commitment</strong> <small>to</small> <strong>industry standards.</strong> ”<cite>— NAFAS Bajakimia Sdn. Bhd.</cite></blockquote>
    <section className="sustainability-approach container"><div className="approach-copy"><SectionHeading label="Our Approach"><span className="accent">How</span> We Integrate Sustainability</SectionHeading><p>NAFAS Bajakimia&apos;s sustainability approach focuses on structured operations and resource efficiency.</p><div className="approach-list">{approaches.map(({title,text,icon}) => <article key={title}><span className="approach-icon"><Image src={`/sites/nafas/figma/${icon}.svg`} alt="" width={icon === 'approach-standards' ? 36 : icon === 'approach-operations' ? 44.838 : 44} height={44} /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div><div className="sustainability-farmer"><Media src="/sites/nafas/figma/sustainability-ghost.png" className="sustainability-ghost reveal" /><Media src="/sites/nafas/figma/sustainability-farmer.png" alt="Farmer inspecting crops" className="sustainability-front reveal" /></div></section>
    <section id="poster-bulanan" className="educational-section content-section"><div className="container"><SectionHeading label="Education & Community" center>Monthly Posters</SectionHeading><p className="center">Through our regular publications, NAFAS Bajakimia shares knowledge that inspires environmental awareness in the community.</p><MonthlyPosters items={content.posters} /></div></section>
    <section id="laporan" className="educational-section content-section"><div className="container"><SectionHeading label="Education & Community" center>Sustainability Reports</SectionHeading><p className="center">Learn more about our sustainability efforts and their impact on the environment and community.</p><ReportLibrary items={content.reports} /></div></section>
    <CallToAction />
  </div>;
}

