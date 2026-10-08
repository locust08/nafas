// Generated from the BM design source by scripts/generate-english.mjs.
import type { Metadata } from 'next';
import { asset, assets } from "@/lib/nafas/en/assets";
import { CallToAction, PageHero, SplitSection } from "@/components/sites/nafas/en/shared/sections";
import '@/components/sites/nafas/inner-pages.css';
import { CertificateCarousel } from "@/components/sites/nafas/en/inner-interactions";

export const metadata: Metadata = { title: "Services", description: "NAFAS Bajakimia's fertilizer packaging, warehousing, importing and supply chain services." };

export default function ServicesPage() {
  return <div className="nafas-inner services-page">
    <PageHero title="Fertilizer Operations and Supply Chain Services" image={assets.services}><p>NAFAS Bajakimia Sdn. Bhd. provides comprehensive fertilizer operations services, covering trade management, importing, packaging, warehousing, sales and distribution. Our services support supply continuity, operational efficiency and the needs of the agricultural sector nationwide.</p></PageHero>
    <SplitSection title="Packaging Operations" image={assets.packaging} reverse><p>NAFAS Bajakimia provides trade management and packaging services at Petronas Chemical Fertilizer Kedah Sdn. Bhd. in Gurun, Kedah.</p><p>Our operations support fertilizer handling and packaging with an annual capacity of up to 220,000 metric tonnes, ensuring efficient and reliable supply readiness for market distribution.</p></SplitSection>
    <SplitSection title="Fertilizer Warehousing" image={assets.storage}><p>We operate a network of fertilizer storage warehouses strategically located throughout Malaysia.</p><p>Our nationwide warehousing network enables:</p><ul><li>Efficient storage and handling</li><li>Supply continuity</li><li>Timely distribution to customers nationwide</li></ul><p>Our warehousing capabilities support imported and locally processed fertilizers.</p></SplitSection>
    <SplitSection title="Sales & Marketing" image={asset(10)} reverse><p>NAFAS Bajakimia is actively involved in selling and marketing straight and compound fertilizers.</p><p>Our products are supplied through:</p><ul><li>Open tender channels</li><li>Open market distribution</li></ul><p>We serve customers including plantation companies, fertilizer suppliers and agricultural stakeholders.</p></SplitSection>
    <SplitSection title="Fertilizer Importing" image={assets.import}><p>Main Import Sources:</p><ol className="import-list"><li>Canada<span>Muriate of Potash (MOP): 70,000 – 75,000 MT</span></li><li>Indonesia<span>Urea Prill: 40,000 – 50,000 MT</span></li><li>China<span>Urea Prill: 40,000 – 50,000 MT<br />DAP: 20,000 – 25,000 MT<br />MAP: 10,000 MT</span></li><li>Australia (Christmas Island)<span>Phosphate Rock: 45,000 – 50,000 MT</span></li></ol><p>This diversified sourcing strategy supports supply reliability and operational continuity.</p></SplitSection>
    <SplitSection title="Agronomy" image={asset(106)} reverse><p><strong>Certifications / Awards</strong></p><ul><li>Certifications received by Malaysian NPK Fertilizer Sdn. Bhd.</li><li>Certifications received by NAFAS Bajakimia Sdn. Bhd.</li></ul><p>Fertilizer Supply, Repackaging, Warehousing and Trading</p><p>The Gold Award was presented at Contractor Forum 2023 by Petronas Chemical Fertiliser Kedah Sdn. Bhd. for achievements in 2022, following the Bronze Award in 2016 and Silver Award in 2018.</p></SplitSection>
    <section className="recognition content-section"><CertificateCarousel items={[
      { src: '/sites/nafas/figma/certificate-gold.png', crop: 'gold', title: "Gold Award", description: "was presented at Contractor Forum 2023 by Petronas Chemical Fertiliser Kedah Sdn. Bhd. for achievements in 2022, following the Bronze Award in 2016 and Silver Award in 2018." },
      { src: '/sites/nafas/figma/certificate-nafas.png', crop: 'nafas', title: 'NAFAS Bajakimia Sdn. Bhd.', description: "Certifications received by NAFAS Bajakimia Sdn. Bhd. for fertilizer supply, repackaging, warehousing and trading." },
      { src: '/sites/nafas/figma/certificate-sgs.png', crop: 'sgs', title: 'NAFAS Bajakimia Sdn. Bhd.', description: "Fertilizer Supply, Repackaging, Warehousing and Trading" },
    ]} /></section>
    <CallToAction />
  </div>;
}

