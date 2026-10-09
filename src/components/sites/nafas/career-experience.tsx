'use client';
import { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Coffee, GraduationCap, HeartPulse, Palmtree, ShieldCheck, Users } from 'lucide-react';
import { asset, assets } from '@/lib/nafas/assets';
import { ButtonLink, Media, SectionHeading } from './shared/sections';
import './career-experience.css';

const benefits = [
  { icon: HeartPulse, en: ['Health & Wellbeing', 'Feel supported with medical care and wellbeing initiatives.'], ms: ['Kesihatan & Kesejahteraan', 'Nikmati sokongan penjagaan kesihatan dan inisiatif kesejahteraan.'] },
  { icon: GraduationCap, en: ['Room to Grow', 'Keep learning through training, mentoring and new opportunities.'], ms: ['Ruang untuk Berkembang', 'Terus belajar melalui latihan, bimbingan dan peluang baharu.'] },
  { icon: Palmtree, en: ['Time to Recharge', 'Take a well-earned break and make time for what matters.'], ms: ['Masa untuk Berehat', 'Nikmati rehat yang bermakna dan masa untuk perkara yang penting.'] },
  { icon: Users, en: ['A Connected Team', 'Build friendships through team activities and shared experiences.'], ms: ['Pasukan yang Erat', 'Bina persahabatan melalui aktiviti pasukan dan pengalaman bersama.'] },
  { icon: ShieldCheck, en: ['Peace of Mind', 'Plan ahead with a supportive workplace and employee protection.'], ms: ['Ketenangan Fikiran', 'Rancang masa depan dengan tempat kerja yang menyokong dan perlindungan pekerja.'] },
  { icon: Coffee, en: ['Everyday Comforts', 'Enjoy welcoming spaces to unwind, connect and recharge.'], ms: ['Keselesaan Harian', 'Nikmati ruang yang selesa untuk berehat dan berhubung dengan rakan sekerja.'] },
];
const gallery = [assets.packaging, assets.warehouse, asset(25), assets.farmers, assets.agronomy, assets.farming];
const people = [
  { initials: 'AN', name: 'Aina Nur', enRole: 'Operations Executive', msRole: 'Eksekutif Operasi', enQuote: 'Every day brings something new to learn. Having a team that shares its knowledge makes all the difference.', msQuote: 'Setiap hari membawa peluang baharu untuk belajar. Pasukan yang sudi berkongsi ilmu memberikan pengalaman yang bermakna.' },
  { initials: 'HA', name: 'Hakim Azlan', enRole: 'Logistics Coordinator', msRole: 'Penyelaras Logistik', enQuote: 'I enjoy working together towards a shared purpose. Our colleagues are always ready to lend a hand and celebrate the little wins.', msQuote: 'Saya seronok bekerjasama untuk mencapai matlamat bersama. Rakan sekerja sentiasa bersedia membantu dan meraikan setiap kejayaan kecil.' },
  { initials: 'SL', name: 'Sarah Lee', enRole: 'Agronomy Executive', msRole: 'Eksekutif Agronomi', enQuote: 'The chance to develop my skills while contributing to agriculture is what inspires me to bring my best to work.', msQuote: 'Peluang mengembangkan kemahiran sambil menyumbang kepada pertanian memberi inspirasi untuk saya melakukan yang terbaik.' },
];

function CareerTestimonials({ locale }: { locale: 'en' | 'ms' }) {
  const en = locale === 'en';
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const person = people[index];
  const change = (direction: number) => { setIndex(current => (current + direction + people.length) % people.length); setExpanded(false); };
  return <section className="career-stories content-section"><div className="container career-stories-layout reveal">
    <h2>{en ? <>Employee’s<br />Testimonial</> : <>Testimoni<br />Warga Kerja</>}</h2>
    <div className="career-story-carousel" role="region" aria-label={en ? 'Employee testimonials' : 'Testimoni warga kerja'} aria-roledescription="carousel">
      <button className="career-story-arrow previous" type="button" onClick={() => change(-1)} aria-label={en ? 'Previous testimonial' : 'Testimoni sebelumnya'}><ChevronLeft /></button>
      <article className="career-story-slide" key={person.name} aria-live="polite">
        <div className="career-story-profile"><span className="career-story-avatar" aria-hidden="true">{person.initials}</span><h3>{person.name}</h3><p>{en ? person.enRole : person.msRole}</p></div>
        <div className="career-story-copy"><div id={`career-story-${locale}`} className={expanded ? 'story-text expanded' : 'story-text'}><p>{en ? person.enQuote : person.msQuote}</p><p>{en ? 'Working alongside supportive colleagues has helped me build confidence and discover new opportunities. From sharing ideas to solving everyday challenges, we learn and grow together. I look forward to continuing this journey and contributing to our shared goals.' : 'Bekerja bersama rakan sekerja yang menyokong membantu saya membina keyakinan dan meneroka peluang baharu. Daripada berkongsi idea hingga menyelesaikan cabaran harian, kami belajar dan berkembang bersama. Saya berharap dapat meneruskan perjalanan ini dan menyumbang kepada matlamat bersama.'}</p></div><button className="career-read-more" type="button" aria-expanded={expanded} aria-controls={`career-story-${locale}`} onClick={() => setExpanded(current => !current)}>{en ? (expanded ? 'Read Less' : 'Read More') : (expanded ? 'Baca Kurang' : 'Baca Lagi')}</button></div>
      </article>
      <button className="career-story-arrow next" type="button" onClick={() => change(1)} aria-label={en ? 'Next testimonial' : 'Testimoni seterusnya'}><ChevronRight /></button>
    </div>
    <p className="resource-sample career-story-note">{en ? 'Fictional profiles and sample testimonials.' : 'Profil rekaan dan testimoni contoh.'}</p>
  </div></section>;
}

export function CareerExperience({ locale }: { locale: 'en' | 'ms' }) {
  const en = locale === 'en';
  return <>
    <section className="career-life content-section">
      <div className="container reveal"><SectionHeading label={en ? 'Life at NAFAS' : 'Kehidupan di NAFAS'} center>{en ? 'Good people. Shared purpose.' : 'Insan hebat. Matlamat bersama.'}</SectionHeading><p className="career-section-intro">{en ? 'A glimpse of the people, places and moments that bring us together.' : 'Sekilas pandang insan, tempat dan detik yang menyatukan kami.'}</p></div>
      <div className="career-marquee reveal" tabIndex={0} role="region" aria-label={en ? 'Sample gallery. Hover or focus to pause.' : 'Galeri contoh. Halakan tetikus atau fokus untuk berhenti.'}>
        <div className="career-marquee-track">{[0, 1].map(group => <div className="career-marquee-group" key={group} aria-hidden={group === 1 ? true : undefined}>{gallery.map((src, index) => <div className="career-gallery-frame" key={src}><Media src={src} sizes="(max-width: 900px) 480px, 640px" alt={group === 0 ? (en ? `Sample workplace image ${index + 1}` : `Gambar contoh tempat kerja ${index + 1}`) : ''} /><span>{en ? 'Together, we grow' : 'Bersama, kita berkembang'}<ArrowUpRight size={18} /></span></div>)}</div>)}</div>
      </div><p className="resource-sample center">{en ? 'Sample gallery images' : 'Gambar galeri contoh'}</p>
    </section>
    <section className="career-perks content-section"><div className="container"><div className="reveal"><SectionHeading label={en ? 'Perks & Benefits' : 'Faedah & Manfaat'} center>{en ? 'A little more for you.' : 'Lebih lagi untuk anda.'}</SectionHeading><p className="career-section-intro">{en ? 'Support for your wellbeing, your ambitions and your everyday life.' : 'Sokongan untuk kesejahteraan, cita-cita dan kehidupan harian anda.'}</p></div><div className="career-benefit-grid">{benefits.map(({ icon: Icon, ...item }) => { const [title, description] = item[locale]; return <article className="career-benefit reveal" key={title}><span className="career-benefit-icon"><Icon size={28} strokeWidth={1.6} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>; })}</div><p className="resource-sample center">{en ? 'Illustrative benefits — sample content for this page.' : 'Manfaat ilustrasi — kandungan contoh untuk halaman ini.'}</p></div></section>
    <CareerTestimonials locale={locale} />
    <section className="career-missing content-section"><div className="container career-missing-inner reveal"><span className="career-puzzle" aria-hidden="true">+</span><p className="eyebrow">{en ? 'Your next chapter' : 'Langkah seterusnya'}</p><h2>{en ? 'Fill Up the Missing Piece' : 'Lengkapkan Bahagian yang Hilang'}</h2><p>{en ? 'Your talent could be the piece we are looking for. Let’s build something meaningful together.' : 'Bakat anda mungkin pelengkap yang kami cari. Mari bina sesuatu yang bermakna bersama.'}</p><ButtonLink href={en ? '/en/hubungi-kami' : '/hubungi-kami'}>{en ? 'Apply Now' : 'Mohon Sekarang'}</ButtonLink></div></section>
  </>;
}
