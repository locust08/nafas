import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { categories } from '@/lib/nafas/products';
import { assets } from '@/lib/nafas/assets';
import { VisitorCount } from './visitor-count';
const links = [['Tentang Kami','/tentang-kami'],['Perkhidmatan','/perkhidmatan'],['Kelestarian','/kelestarian'],['Berita & Media','/berita-media'],['Pengedar','/pengedar'],['Kerjaya','/kerjaya'],['Hubungi Kami','/hubungi-kami']];
export function SiteFooter() {
  return <footer className="site-footer"><div className="wide-container footer-grid"><Link href="/" className="footer-brand"><Image src={assets.logoWhite} width={211} height={78} alt="NAFAS Bajakimia Sdn Bhd" /></Link><div><h2>Pautan Pantas</h2><ul>{links.map(([label,href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div><div><h2>Produk</h2><ul>{categories.map(category => <li key={category.slug}><Link href={`/produk/${category.slug}`}>{category.name}</Link></li>)}</ul></div><div className="footer-contact"><h2>Hubungi Kami</h2><p><MapPin size={20} aria-hidden="true" /><span>Lot 1, Jalan Teknologi 3/5, Taman Sains Selangor 1,<br />Kota Damansara, 47810 Petaling Jaya, Selangor Darul Ehsan.</span></p><p><Phone size={18} aria-hidden="true" /><a href="tel:+60361441200">03 6144 1200</a></p><p><Mail size={20} aria-hidden="true" /><a href="mailto:info@nafas.com.my">info@nafas.com.my</a></p></div></div><div className="wide-container footer-bottom"><p>© {new Date().getFullYear()} NAFAS Bajakimia Sdn Bhd. Hak cipta terpelihara.</p><VisitorCount /></div></footer>;
}
