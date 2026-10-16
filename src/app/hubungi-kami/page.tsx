import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { SolidIcon } from '@/components/sites/nafas/shared/solid-icon';
import { EnquiryForm } from '@/components/sites/nafas/enquiry-form';
import { Breadcrumbs, PageHero, SectionHeading } from '@/components/sites/nafas/shared/sections';
export const metadata: Metadata = { title: 'Hubungi Kami', description: 'Hubungi NAFAS Bajakimia untuk pertanyaan produk baja dan perkhidmatan.' };
const address = 'Lot 1, Jalan Teknologi 3/5, Taman Sains Selangor 1, Kota Damansara, 47810 Petaling Jaya, Selangor Darul Ehsan.';
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ produk?: string | string[] }> }) {
  const { produk } = await searchParams;
  const product = (Array.isArray(produk) ? produk[0] : produk)?.trim().slice(0, 200) ?? '';
  return <div className="contact-page"><PageHero title={<>Mari <span className="accent">Berhubung</span><br />dengan NAFAS Bajakimia</>} beforeTitle={<><Breadcrumbs items={[{ label: "Hubungi Kami" }]} /><p className="eyebrow">Hubungi Kami</p></>} image="/sites/nafas/figma/department-management.png" className="contact-banner image-content-banner" />
    <section className="container contact-location content-section"><SectionHeading label="Lokasi Kami">Kami sedia membantu anda</SectionHeading><div className="contact-location-grid"><article className="contact-address"><SolidIcon name="location" className="solid-icon-large" /><p className="eyebrow">Ibu Pejabat</p><h3>NAFAS Bajakimia Sdn. Bhd.</h3><address>{address}</address><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="text-link">Dapatkan Arah <ArrowUpRight size={20} /></a></article><div className="contact-methods"><article><SolidIcon name="mail" /><div><h3>E-mel</h3><a href="mailto:info@nafas.com.my">info@nafas.com.my</a></div></article><article><SolidIcon name="phone" /><div><h3>Nombor Telefon</h3><a href="tel:+60361441200">03 6144 1200</a></div></article><article><SolidIcon name="fax" /><div><h3>Faks</h3><p>03 6144 1399</p></div></article></div></div></section>
    <section className="contact-enquiry content-section" id="pertanyaan"><div className="container"><SectionHeading label="Borang Pertanyaan">Bagaimana kami boleh membantu?</SectionHeading><p>Kongsikan keperluan anda dan kami akan membantu dengan pertanyaan produk atau perkhidmatan.</p>{product && <p className="selected-products"><strong>Produk dipilih:</strong> {product}</p>}<EnquiryForm product={product} /></div></section></div>;
}
