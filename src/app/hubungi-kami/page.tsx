import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { EnquiryForm } from '@/components/sites/nafas/enquiry-form';
import { Breadcrumbs, SectionHeading } from '@/components/sites/nafas/shared/sections';
export const metadata: Metadata = { title: 'Hubungi Kami', description: 'Hubungi NAFAS Bajakimia untuk pertanyaan produk baja dan perkhidmatan.' };
const address = 'Lot 1, Jalan Teknologi 3/5, Taman Sains Selangor 1, Kota Damansara, 47810 Petaling Jaya, Selangor Darul Ehsan.';
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ produk?: string | string[] }> }) {
  const { produk } = await searchParams;
  const product = (Array.isArray(produk) ? produk[0] : produk)?.trim().slice(0, 200) ?? '';
  return <div className="contact-page"><section className="editorial-hero"><div className="container"><Breadcrumbs items={[{ label: 'Hubungi Kami' }]} /><p className="eyebrow">Hubungi Kami</p><h1>Mari <span className="accent">Berhubung</span><br />dengan NAFAS Bajakimia</h1></div></section>
    <section className="container contact-location content-section"><SectionHeading label="Lokasi Kami">Kami sedia membantu anda</SectionHeading><div className="contact-location-grid"><article className="contact-address"><MapPin size={34} aria-hidden="true" /><p className="eyebrow">Ibu Pejabat</p><h3>NAFAS Bajakimia Sdn. Bhd.</h3><address>{address}</address><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="text-link">Dapatkan Arah <ArrowUpRight size={20} /></a></article><div className="contact-methods"><article><Mail aria-hidden="true" /><div><h3>E-mel</h3><a href="mailto:info@nafas.com.my">info@nafas.com.my</a></div></article><article><Phone aria-hidden="true" /><div><h3>Nombor Telefon</h3><a href="tel:+60361441200">03 6144 1200</a></div></article><article><Phone aria-hidden="true" /><div><h3>Faks</h3><p>03 6144 1399</p></div></article></div></div></section>
    <section className="contact-enquiry content-section" id="pertanyaan"><div className="container"><SectionHeading label="Borang Pertanyaan">Bagaimana kami boleh membantu?</SectionHeading><p>Kongsikan keperluan anda dan kami akan membantu dengan pertanyaan produk atau perkhidmatan.</p>{product && <p className="selected-products"><strong>Produk dipilih:</strong> {product}</p>}<EnquiryForm product={product} /></div></section></div>;
}
