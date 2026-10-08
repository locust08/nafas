import type { Metadata } from 'next';
import { asset, assets } from '@/lib/nafas/assets';
import { CareerForm } from '@/components/sites/nafas/career-form';
import { ButtonLink, Media, SectionHeading } from '@/components/sites/nafas/shared/sections';
import '@/components/sites/nafas/inner-pages.css';

export const metadata: Metadata = { title: 'Kerjaya', description: 'Kerjaya dan peluang bersama NAFAS Bajakimia Sdn Bhd.' };

export default function CareerPage() {
  return <div className="nafas-inner career-page"><section className="career-opening container"><div><p className="eyebrow">Kerjaya</p><h1>Bina Masa Depan<br /><span className="accent">Bersama Kami</span></h1><p>NAFAS Bajakimia menyatukan kepakaran operasi, logistik, agronomi dan pentadbiran untuk menyokong rantaian bekalan pertanian negara.</p><ButtonLink href="#permohonan">Borang Permohonan</ButtonLink></div><Media src={asset(106)} alt="Pasukan agronomi NAFAS Bajakimia" className="reveal" /></section>
    <section className="container content-section career-video-section"><SectionHeading label="Mengenali Kami" center>Daripada Peladang untuk Peladang</SectionHeading><video className="career-film" controls playsInline preload="none" poster={assets.heroPoster} aria-label="Video pengenalan pertanian"><source src="/sites/nafas/assets/hero.mp4" type="video/mp4" />Pelayar anda tidak menyokong video.</video><p className="resource-sample center">Video contoh — video kerjaya rasmi akan dikemas kini.</p></section>
    <section className="wide-container content-section"><SectionHeading label="Galeri" center>Kehidupan dan operasi kami</SectionHeading><div className="career-gallery"><Media src={assets.packaging} alt="Operasi pembungkusan baja" /><Media src={assets.warehouse} alt="Pergudangan baja" /><Media src={asset(106)} alt="Aktiviti agronomi" /></div></section>
    <section className="container content-section" id="kekosongan"><SectionHeading label="Peluang Kerjaya">Kekosongan Jawatan</SectionHeading><div className="career-empty"><h3>Tiada kekosongan diumumkan buat masa ini</h3><p>Senarai jawatan akan dikemas kini apabila disahkan oleh pihak NAFAS Bajakimia.</p></div></section>
    <section className="career-application content-section" id="permohonan"><div className="container"><SectionHeading label="Hubungi Kami">Minat untuk menyertai kami?</SectionHeading><CareerForm /></div></section>
  </div>;
}
