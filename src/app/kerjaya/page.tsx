import type { Metadata } from 'next';
import { CareerExperience } from '@/components/sites/nafas/career-experience';
import { assets } from '@/lib/nafas/assets';
import { ButtonLink, Media, SectionHeading } from '@/components/sites/nafas/shared/sections';
import '@/components/sites/nafas/inner-pages.css';

export const metadata: Metadata = { title: 'Kerjaya', description: 'Kerjaya dan peluang bersama NAFAS Bajakimia Sdn Bhd.' };

export default function CareerPage() {
  return <div className="nafas-inner career-page"><section className="career-opening container"><div><p className="eyebrow">Kerjaya</p><h1>Bina Masa Depan<br /><span className="accent">Bersama Kami</span></h1><p>NAFAS Bajakimia menyatukan kepakaran operasi, logistik, agronomi dan pentadbiran untuk menyokong rantaian bekalan pertanian negara.</p><ButtonLink href="/hubungi-kami">Mohon Sekarang</ButtonLink></div><Media src={assets.agronomy} alt="Warga sektor pertanian" className="reveal" priority sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) 40vw, 38vw" /></section>
    <section className="container content-section career-video-section"><SectionHeading label="Mengenali Kami" center>Daripada Peladang untuk Peladang</SectionHeading><video className="career-film reveal" controls playsInline preload="none" poster={assets.heroPoster} aria-label="Video pengenalan pertanian"><source src="/sites/nafas/assets/hero.mp4" type="video/mp4" />Pelayar anda tidak menyokong video.</video><p className="resource-sample center">Video contoh — video kerjaya rasmi akan dikemas kini.</p></section>
    <CareerExperience locale="ms" />
    <section className="container content-section" id="kekosongan"><SectionHeading label="Peluang Kerjaya">Kekosongan Jawatan</SectionHeading><div className="career-empty"><h3>Tiada kekosongan diumumkan buat masa ini</h3><p>Senarai jawatan akan dikemas kini apabila disahkan oleh pihak NAFAS Bajakimia.</p></div></section>
  </div>;
}
