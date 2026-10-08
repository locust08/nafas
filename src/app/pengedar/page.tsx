import type { Metadata } from 'next';
import { Handshake, PackageCheck, Truck } from 'lucide-react';
import { assets } from '@/lib/nafas/assets';
import { ButtonLink, CallToAction, Media, PageHero, SectionHeading } from '@/components/sites/nafas/shared/sections';

export const metadata: Metadata = { title: 'Pengedar', description: 'Rangkaian pembekalan dan pengedaran baja NAFAS Bajakimia.' };

export default function DistributorPage() {
  return <div className="distributor-page"><PageHero title="Rangkaian Pengedar NAFAS Bajakimia" image={assets.warehouse}><p>Daripada Peladang untuk Peladang.</p><ButtonLink href="/hubungi-kami">Hubungi Kami</ButtonLink></PageHero><section className="container content-section distributor-intro"><div><SectionHeading label="Rangkaian Pengedaran">Bersama Membina <span className="accent">Rangkaian Pertanian</span></SectionHeading><p className="placeholder-label">Pratonton reka bentuk — kandungan belum dibekalkan</p><p>Maklumat rangkaian pengedar dan panduan kerjasama akan dipaparkan di sini.</p></div><Media src={assets.farmers} alt="Aktiviti pertanian" /></section><section className="wide-container content-section distributor-benefits"><SectionHeading label="Kerjasama" center>Rangkaian yang menghubungkan kita</SectionHeading><div className="distributor-cards">{[{title:'Menjadi Pengedar',Icon:Handshake},{title:'Produk & Bekalan',Icon:PackageCheck},{title:'Rangkaian Logistik',Icon:Truck}].map(({title,Icon}) => <article key={title} className="reveal"><Icon size={42} aria-hidden="true" /><h3>{title}</h3><p>Maklumat akan dikemas kini selepas pengesahan.</p><a className="text-link" href="/hubungi-kami">Hubungi Kami</a></article>)}</div></section><section className="container content-section distributor-panel"><SectionHeading label="Rangkaian Kami">Maklumat Pengedar</SectionHeading><p>Direktori pengedar akan ditambah apabila maklumat dibekalkan.</p></section><CallToAction /></div>;
}
