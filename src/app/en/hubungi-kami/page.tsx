// Generated from the BM design source by scripts/generate-english.mjs.
import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { EnquiryForm } from "@/components/sites/nafas/en/enquiry-form";
import { Breadcrumbs, SectionHeading } from "@/components/sites/nafas/en/shared/sections";
export const metadata: Metadata = { title: "Contact Us", description: "Contact NAFAS Bajakimia for fertilizer product and service enquiries." };
const address = 'Lot 1, Jalan Teknologi 3/5, Taman Sains Selangor 1, Kota Damansara, 47810 Petaling Jaya, Selangor Darul Ehsan.';
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ produk?: string | string[] }> }) {
  const { produk } = await searchParams;
  const product = (Array.isArray(produk) ? produk[0] : produk)?.trim().slice(0, 200) ?? '';
  return <div className="contact-page"><section className="editorial-hero"><div className="container"><Breadcrumbs items={[{ label: "Contact Us" }]} /><p className="eyebrow">Contact Us</p><h1>Let&apos;s <span className="accent">Connect</span><br />with NAFAS Bajakimia</h1></div></section>
    <section className="container contact-location content-section"><SectionHeading label="Our Location">We&apos;re here to help</SectionHeading><div className="contact-location-grid"><article className="contact-address"><MapPin size={34} aria-hidden="true" /><p className="eyebrow">Head Office</p><h3>NAFAS Bajakimia Sdn. Bhd.</h3><address>{address}</address><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="text-link">Get Directions <ArrowUpRight size={20} /></a></article><div className="contact-methods"><article><Mail aria-hidden="true" /><div><h3>Email</h3><a href="mailto:info@nafas.com.my">info@nafas.com.my</a></div></article><article><Phone aria-hidden="true" /><div><h3>Phone Number</h3><a href="tel:+60361441200">03 6144 1200</a></div></article><article><Phone aria-hidden="true" /><div><h3>Fax</h3><p>03 6144 1399</p></div></article></div></div></section>
    <section className="contact-enquiry content-section" id="pertanyaan"><div className="container"><SectionHeading label="Enquiry Form">How can we help?</SectionHeading><p>Tell us what you need and we&apos;ll help with your product or service enquiry.</p>{product && <p className="selected-products"><strong>Selected products:</strong> {product}</p>}<EnquiryForm product={product} /></div></section></div>;
}
