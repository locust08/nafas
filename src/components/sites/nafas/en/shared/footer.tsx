import { FooterDisclaimer, FooterSocial } from '@/components/sites/nafas/shared/footer-extras';
// Generated from the BM design source by scripts/generate-english.mjs.
import Image from 'next/image';
import Link from 'next/link';
import { categories } from "@/lib/nafas/en/products";
import { assets } from "@/lib/nafas/en/assets";
import { VisitorCount } from './visitor-count';
const links = [["About Us","/en/tentang-kami"],["Services","/en/perkhidmatan"],["Sustainability","/en/kelestarian"],["News & Media","/en/berita-media"],["Distributors","/en/pengedar"],["Careers","/en/kerjaya"],["Contact Us","/en/hubungi-kami"]];
export function SiteFooter() {
  return <footer className="site-footer"><div className="wide-container footer-grid"><div className="footer-brand-column"><Link href="/en" className="footer-brand"><Image src={assets.logoWhite} width={211} height={78} alt="NAFAS Bajakimia Sdn Bhd" /></Link><FooterSocial /></div><div><h2>Quick Links</h2><ul>{links.map(([label,href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div><div><h2>Products</h2><ul>{categories.map(category => <li key={category.slug}><Link href={`/en/produk/${category.slug}`}>{category.name}</Link></li>)}</ul></div><div className="footer-contact"><h2>Contact Us</h2><p><span className="v3-font-icon" aria-hidden="true">&#xf3c5;</span><span>Lot 1, Jalan Teknologi 3/5, Taman Sains Selangor 1,<br />Kota Damansara, 47810 Petaling Jaya, Selangor Darul Ehsan.</span></p><p><span className="v3-font-icon" aria-hidden="true">&#xf3cd;</span><a href="tel:+60361441200">03 6144 1200</a></p><p><span className="v3-font-icon" aria-hidden="true">&#xf0e0;</span><a href="mailto:info@nafas.com.my">info@nafas.com.my</a></p></div></div><div className="wide-container footer-bottom"><div className="footer-credits"><p>© {new Date().getFullYear()} NAFAS Bajakimia Sdn Bhd. All rights reserved.</p><FooterDisclaimer /></div><VisitorCount /></div></footer>;
}
