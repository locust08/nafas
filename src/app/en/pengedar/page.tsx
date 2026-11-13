// Generated from the BM design source by scripts/generate-english.mjs.
import type { Metadata } from 'next';
import { DistributorDirectory } from '@/components/sites/nafas/distributor-directory';
import { assets } from "@/lib/nafas/en/assets";
import { ButtonLink, CallToAction, Media, PageHero, SectionHeading } from "@/components/sites/nafas/en/shared/sections";

export const metadata: Metadata = { title: "Distributors", description: "NAFAS Bajakimia's fertilizer supply and distribution network." };

export default function DistributorPage() {
  return <div className="distributor-page"><PageHero title="NAFAS Bajakimia Distributor Network" image="/sites/nafas/assets/distributor-warehouse.webp" className="distributor-banner image-content-banner"><p>From Farmers for Farmers.</p><ButtonLink href="/en/hubungi-kami">Contact Us</ButtonLink></PageHero><section className="container content-section distributor-intro"><div><SectionHeading label="Distribution Network">Building Together <span className="accent">an Agricultural Network</span></SectionHeading><p>NAFAS Bajakimia distributors across Malaysia. Choose a state to find a distributor near you.</p></div><Media src={assets.farmers} alt="Agricultural activities" /></section><section className="wide-container content-section distributor-benefits"><SectionHeading label="Distributor List" center>Find a NAFAS distributor near you</SectionHeading><DistributorDirectory labels={{ all:'All States', filterLabel:'Filter by state', address:'Address', phone:'Tel', email:'Email', companyNo:'Company No.', googleMap:'Google Map', waze:'Waze', countSuffix:'distributors shown' }} /></section><CallToAction /></div>;
}
