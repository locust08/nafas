// Generated from the BM design source by scripts/generate-english.mjs.
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { categories } from "@/lib/nafas/en/products";
import { assets } from "@/lib/nafas/en/assets";
import { VisitorCount } from './visitor-count';
const links = [["About Us","/en/tentang-kami"],["Services","/en/perkhidmatan"],["Sustainability","/en/kelestarian"],["News & Media","/en/berita-media"],["Distributors","/en/pengedar"],["Careers","/en/kerjaya"],["Contact Us","/en/hubungi-kami"]];
export function SiteFooter() {
  return <footer className="site-footer"><div className="wide-container footer-grid"><Link href="/en" className="footer-brand"><Image src={assets.logoWhite} width={211} height={78} alt="NAFAS Bajakimia Sdn Bhd" /></Link><div><h2>Quick Links</h2><ul>{links.map(([label,href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div><div><h2>Products</h2><ul>{categories.map(category => <li key={category.slug}><Link href={`/en/produk/${category.slug}`}>{category.name}</Link></li>)}</ul></div><div className="footer-contact"><h2>Contact Us</h2><p><MapPin size={20} aria-hidden="true" /><span>Lot 1, Jalan Teknologi 3/5, Taman Sains Selangor 1,<br />Kota Damansara, 47810 Petaling Jaya, Selangor Darul Ehsan.</span></p><p><Phone size={18} aria-hidden="true" /><a href="tel:+60361441200">03 6144 1200</a></p><p><Mail size={20} aria-hidden="true" /><a href="mailto:info@nafas.com.my">info@nafas.com.my</a></p></div></div><div className="wide-container footer-bottom"><p>© {new Date().getFullYear()} NAFAS Bajakimia Sdn Bhd. All rights reserved.</p><VisitorCount /></div></footer>;
}
