// Generated from the BM design source by scripts/generate-english.mjs.
import type { Metadata } from 'next';
import { CareerExperience } from '@/components/sites/nafas/career-experience';
import { assets } from "@/lib/nafas/en/assets";
import { ButtonLink, Media, SectionHeading } from "@/components/sites/nafas/en/shared/sections";
import '@/components/sites/nafas/inner-pages.css';

export const metadata: Metadata = { title: "Careers", description: "Careers and opportunities at NAFAS Bajakimia Sdn Bhd." };

export default function CareerPage() {
  return <div className="nafas-inner career-page"><section className="career-opening container"><div><p className="eyebrow">Careers</p><h1>Build Your Future<br /><span className="accent">With Us</span></h1><p>NAFAS Bajakimia brings together expertise in operations, logistics, agronomy and administration to support the nation&apos;s agricultural supply chain.</p><ButtonLink href="/en/hubungi-kami">Apply Now</ButtonLink></div><Media src={assets.agronomy} alt="People working in agriculture" className="reveal" priority sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) 40vw, 38vw" /></section>
    <section className="container content-section career-video-section"><SectionHeading label="Get to Know Us" center>From Farmers for Farmers</SectionHeading><video className="career-film reveal" controls playsInline preload="none" poster={assets.heroPoster} aria-label="Agriculture introduction video"><source src="/sites/nafas/assets/hero.mp4" type="video/mp4" />Your browser does not support video.</video><p className="resource-sample center">Sample video — the official careers video will be updated.</p></section>
    <CareerExperience locale="en" />
    <section className="container content-section" id="kekosongan"><SectionHeading label="Career Opportunities">Job Vacancies</SectionHeading><div className="career-empty"><h3>No vacancies announced at present</h3><p>Vacancies will be updated once confirmed by NAFAS Bajakimia.</p></div></section>
  </div>;
}
