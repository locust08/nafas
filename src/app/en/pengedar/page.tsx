// Generated from the BM design source by scripts/generate-english.mjs.
import type { Metadata } from 'next';
import { Handshake, PackageCheck, Truck } from 'lucide-react';
import { assets } from "@/lib/nafas/en/assets";
import { ButtonLink, CallToAction, Media, PageHero, SectionHeading } from "@/components/sites/nafas/en/shared/sections";

export const metadata: Metadata = { title: "Distributors", description: "NAFAS Bajakimia's fertilizer supply and distribution network." };

export default function DistributorPage() {
  return <div className="distributor-page"><PageHero title="NAFAS Bajakimia Distributor Network" image={assets.warehouse}><p>From Farmers for Farmers.</p><ButtonLink href="/en/hubungi-kami">Contact Us</ButtonLink></PageHero><section className="container content-section distributor-intro"><div><SectionHeading label="Distribution Network">Building Together <span className="accent">an Agricultural Network</span></SectionHeading><p className="placeholder-label">Design preview — content has not yet been provided</p><p>Distributor network information and partnership guidance will appear here.</p></div><Media src={assets.farmers} alt="Agricultural activities" /></section><section className="wide-container content-section distributor-benefits"><SectionHeading label="Partnerships" center>A Network That Connects Us</SectionHeading><div className="distributor-cards">{[{title:"Become a Distributor",Icon:Handshake},{title:"Products & Supply",Icon:PackageCheck},{title:"Logistics Network",Icon:Truck}].map(({title,Icon}) => <article key={title} className="reveal"><Icon size={42} aria-hidden="true" /><h3>{title}</h3><p>Information will be updated after confirmation.</p><a className="text-link" href="/en/hubungi-kami">Contact Us</a></article>)}</div></section><section className="container content-section distributor-panel"><SectionHeading label="Our Network">Distributor Information</SectionHeading><p>The distributor directory will be added when information is provided.</p></section><CallToAction /></div>;
}
