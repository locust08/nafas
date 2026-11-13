import type { Metadata } from 'next';
import { DistributorDirectory } from '@/components/sites/nafas/distributor-directory';
import { assets } from '@/lib/nafas/assets';
import { ButtonLink, CallToAction, Media, PageHero, SectionHeading } from '@/components/sites/nafas/shared/sections';

export const metadata: Metadata = { title: 'Pengedar', description: 'Rangkaian pembekalan dan pengedaran baja NAFAS Bajakimia.' };

export default function DistributorPage() {
  return <div className="distributor-page"><PageHero title="Rangkaian Pengedar NAFAS Bajakimia" image="/sites/nafas/assets/distributor-warehouse.webp" className="distributor-banner image-content-banner"><p>Daripada Peladang untuk Peladang.</p><ButtonLink href="/hubungi-kami">Hubungi Kami</ButtonLink></PageHero><section className="container content-section distributor-intro"><div><SectionHeading label="Rangkaian Pengedaran">Bersama Membina <span className="accent">Rangkaian Pertanian</span></SectionHeading><p>Senarai pengedar NAFAS Bajakimia di seluruh Malaysia. Pilih negeri untuk melihat pengedar berhampiran anda.</p></div><Media src={assets.farmers} alt="Aktiviti pertanian" /></section><section className="wide-container content-section distributor-benefits"><SectionHeading label="Senarai Pengedar" center>Cari pengedar NAFAS berhampiran anda</SectionHeading><DistributorDirectory labels={{ all:'Semua Negeri', filterLabel:'Tapis mengikut negeri', address:'Alamat', phone:'No. Tel', email:'Emel', companyNo:'No. Syarikat', googleMap:'Google Map', waze:'Waze', countSuffix:'pengedar dipaparkan' }} /></section><CallToAction /></div>;
}
