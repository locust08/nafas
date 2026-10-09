// Generated from the BM design source by scripts/generate-english.mjs.
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  FlaskConical,
  Globe,
  Handshake,
} from 'lucide-react';
import { asset } from "@/lib/nafas/en/assets";
import { CallToAction, Media, SectionHeading } from "@/components/sites/nafas/en/shared/sections";
import { CountUp, HeroVideo, ScrollLine } from "@/components/sites/nafas/en/shared/motion";
import { MilestoneCarousel } from "@/components/sites/nafas/en/inner-interactions";
import '@/components/sites/nafas/inner-pages.css';

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover NAFAS Bajakimia Sdn. Bhd., a fertilizer supplier since 1974, our core values, leadership and company journey.",
};

const values = [
  { title: "Quality", text: "Focused on quality fertilizers, competitive value and customer satisfaction.", image: 23, icon: 'thumb.svg' },
  { title: "Service Excellence", text: "Clear timelines with timely, reliable delivery.", image: 2, icon: 'star-badge.svg' },
  { title: "Logistics Reliability", text: "A nationwide network ensures efficient storage and distribution across Malaysia.", image: 15, icon: 'shield-badge.svg' },
  { title: "Competitiveness", text: "Decades of industry experience ensure efficient, competitive operations.", image: 57, icon: 'trend-badge.svg' },
];

const departments = [
  { name: "Marketing and Sales Division", image: 'department-sales.png' },
  { name: "Operations and Logistics Division", image: 'department-operations.png' },
  { name: "Finance and Accounts Division", image: 'department-finance.png' },
  { name: "Agronomy & Technical Division", image: 'department-agronomy.png' },
  { name: "Management and Administration Division", image: 'department-management.png' },
];

const milestones = [
  ['1974', "Active in selling urea and blended NPK fertilizers."],
  ['1979', "Involved in producing blended fertilizers for the NAFAS Federal Paddy Fertilizer Scheme (SBPKP), supplying NPK blends 17.5/15.5/10 and 17/20/10, and straight urea fertilizer 46%N in Peninsular Malaysia."],
  ['1999', "Appointed as the warehousing contractor for urea packaging at Petronas Chemicals Fertiliser Kedah Sdn. Bhd. (PCFKSB) and as a urea supplier to the market."],
  ['2004', "Appointed as the warehousing and packaging contractor and raw material supplier to the Malaysian NPK Fertilizer Sdn. Bhd. (MNFSB) plant."],
  ['2010', "NAFAS's business model changed as MNFSB received only supply fees, while raw material ownership came under NBKSB's supervision."],
  ['2011', "Collaboration and joint research between NAFAS and the Malaysian Palm Oil Board (MPOB) produced the quality MPOB F3 fertilizer."],
  ['2013', "The fertilizer operating model was updated: NBKSB supplied raw materials to MNFSB, which produced and supplied compound fertilizers to NAFAS. In June, MNFSB fully took over warehousing and packaging duties."],
  ['2014', "Collaboration and joint research between NAFAS and the Malaysian Cocoa Board (LKM) produced the high-quality MCB F1 HYFer fertilizer."],
  ['2018', "NBKSB secured a three-year warehousing contract for urea packaging at PCFKSB, with an option for a two-year extension."],
  ['2019', "From May, the business model changed: NAFAS became the buyer and raw material supplier to MNFSB, while NBKSB managed incoming raw materials for an operations management fee."],
  ['2020', "NBKSB began exporting 3,000 MT of urea fertilizer to Cambodia through sales agent Purity International, in collaboration with buyer Malaysian Group Co."],
  ['2021', "The urea warehousing and packaging contract at PCFKSB was extended for another two years."],
  ['2022', "Small-scale fertilizer products were launched at MAHA 2022 to encourage household farming."],
  ['2023', "NBKSB secured a five-year warehousing contract for urea packaging at PCFKSB."],
  ['2024', "Liquid fertilizers were launched at MAHA 2024 to meet farmers' demand for products that improve crop growth and yields."],
  ['2025', "New packaging was launched at HPPNK 2025 with updated formulations and designs that are more efficient, sustainable and aligned with modern agricultural standards."],
];

const factIcons = {
  building: { file: 'fact-building.svg', width: 42, height: 70 },
  document: { file: 'fact-document.svg', width: 42, height: 52 },
  grid: { file: 'fact-grid.svg', width: 42, height: 42 },
  shield: { file: 'fact-shield.svg', width: 42, height: 51 },
};

function FactMarker({ icon }: { icon: keyof typeof factIcons }) {
  const { file, width, height } = factIcons[icon];
  return <span className="fact-marker" aria-hidden="true"><Image src={`/sites/nafas/figma/${file}`} width={width} height={height} alt="" /></span>;
}

export default function AboutPage() {
  return <div className="nafas-inner about-page">
    <section className="corporate-banner">
      <HeroVideo poster="/sites/nafas/assets/about-dividend-2024-poster.jpg" src="/sites/nafas/assets/about-dividend-2024.mp4" />
    </section>

    <section id="gambaran-syarikat" className="about-overview">
      <Media src="/sites/nafas/assets/company-overview-factory.png" className="hero-background" />
      <div className="container"><div className="overview-text">
        <SectionHeading label="Company Overview">Supplying the Nation&apos;s Fertilizers Since <span className="accent">1974</span></SectionHeading>
        <p>Since 1974, NAFAS Bajakimia has managed fertilizer importing, manufacturing, transport and distribution through PPK branches across Malaysia.</p>
        <button className="button" type="button" disabled title="Company profile not yet available">Download Company Profile<ArrowRight size={22} aria-hidden="true" /></button>
        <div className="experience"><span className="experience-icon"><Image src="/sites/nafas/figma/thumb.svg" width={35.1937} height={33.0001} alt="" /></span><div><CountUp value={50} suffix="+" /><h3>Years of Experience</h3><p>Extensive experience supporting national fertilizer supply.</p></div></div>
      </div></div>
    </section>

    <section className="wide-container benefit-strip">
      {[
        { title: "Leading National Supplier", text: "A leading fertilizer supplier contributing to Malaysia's agricultural economy.", Icon: Globe },
        { title: "High-performance Products", text: "MPOBF3 Zeolite fertilizer improves soil fertility and oil palm yields.", Icon: FlaskConical },
        { title: "Trusted Peladang Brand", text: "Committed to supplying quality Peladang fertilizers for a sustainable industry.", Icon: Handshake },
      ].map(({ title, text, Icon }) => <article key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}
    </section>

    <section id="nilai-teras" className="content-section wide-container about-values-section">
      <SectionHeading label="Core Values" center><span className="accent">Our Commitment</span> to Ensuring a Fertilizer Supply of <span className="accent">berkualiti</span></SectionHeading>
      <p className="center">By combining industry expertise with efficient operations management, we ensure every process contributes to productivity.</p>
      <div className="about-values">{values.map(({ title, text, image, icon }) => <article className="about-value" key={title}>
        <Media src={asset(image)} className="hover-media" alt="" />
        <div className="value-content"><span className={`value-symbol ${icon === 'thumb.svg' ? 'value-symbol-thumb' : 'value-symbol-asset'}`}><Image src={`/sites/nafas/figma/${icon}`} width={icon === 'thumb.svg' ? 35.1937 : 86} height={icon === 'thumb.svg' ? 33.0001 : 87} alt="" /></span><h3>{title}</h3><p>{text}</p></div>
      </article>)}</div>
    </section>

    <section id="visi-misi" className="purpose-section content-section">
      <Media src="/sites/nafas/figma/purpose-background.png" className="hero-background" />
      <div className="container">
        <div className="purpose-heading"><SectionHeading label="Vision, Mission & Purpose"><span className="accent">Direction</span> and Principles Guiding Our Operations</SectionHeading><p>Our principles guide every decision and action, ensuring our vision, mission and services support the growth and needs of the nation&apos;s agricultural sector.</p></div>
        <div className="purpose-grid">
          <article className="purpose-card purpose-card-wide"><Media src="/sites/nafas/figma/purpose-wide.png" className="hero-background" /><div><h3>Why We Exist</h3><ul><li>Supporting farmers and agriculture with reliable fertilizer supply.</li><li>Contributing to food security and long-term agricultural growth.</li><li>Backed by the National Farmers Organisation (NAFAS).</li><li>Operating with professionalism and operational excellence.</li></ul></div></article>
          <article className="purpose-card flag-card purpose-vision"><Media src="/sites/nafas/figma/vision.png" className="hero-background" /><div><h3>Vision</h3><p>A farmers&apos; organisation leading the fertilizer market.</p></div></article>
          <article className="purpose-card flag-card purpose-mission"><Media src="/sites/nafas/figma/mission.png" className="hero-background" /><div><h3>Mission</h3><p>Offering the Best Products and Services to Customers and Business Partners.</p></div></article>
        </div>
      </div>
    </section>

    <section id="carta-organisasi" className="content-section leadership-section">
      <div className="container"><SectionHeading label="Organisation Chart" center><span className="accent">Leadership</span> Driving Our Operations</SectionHeading><p className="center">NAFAS Bajakimia&apos;s leadership combines strategic, operational and agronomic expertise to achieve shared goals.</p><article className="ceo-panel"><Media src="/sites/nafas/figma/ceo.png" className="hero-background" alt="Zalifudin bin Md Arshad, Chief Executive Officer" /><div><h3>Chief Executive Officer</h3><p>Zalifudin bin Md Arshad</p></div></article></div>
      <div className="wide-container department-grid">{departments.map(({ name, image }) => <article className="department-card" key={name}><Media src={`/sites/nafas/figma/${image}`} alt={`Team ${name}`} sizes="(max-width: 767px) 100vw, 20vw" /><h3>{name}</h3></article>)}</div>
    </section>

    <section className="milestone-section content-section"><Media src="/sites/nafas/figma/milestone.png" className="hero-background" /><MilestoneCarousel items={milestones} /></section>

    <section id="fakta-korporat" className="corporate-facts content-section">
      <Media src={asset(83)} className="hero-background" />
      <div className="container"><SectionHeading label="Corporate Facts" center>Corporate Profile <span className="accent">NAFAS Bajakimia</span></SectionHeading><div className="corporate-fact-list">
        <ScrollLine />
        <article><FactMarker icon="building" /><div className="fact-copy"><h3>Corporate Background</h3><ul><li>A subsidiary of the National Farmers Organisation (NAFAS).</li><li>Established on 8 October 1974 as Malaysian Urea Fertilizer Corporation Sdn. Bhd. (MUFC).</li><li>On 13 March 1992, MUFC changed its name to NAFAS Bajakimia Sdn. Bhd. (NBKSB).</li><li>NBKSB&apos;s paid-up capital is RM4,500,000.00.</li></ul></div></article>
        <article><FactMarker icon="document" /><div className="fact-copy"><h3>Ministry of Finance Registration</h3><p><strong>NBKSB is a private limited company registered with the Ministry of Finance under the following codes:</strong></p><ul><li>100102 – Chemical Industry</li><li>100103 – Chemical Water Treatment</li><li>120102 – Agricultural Pesticides</li><li>120101 – Fertilizers</li></ul></div></article>
        <article><FactMarker icon="grid" /><div className="fact-copy"><h3>Ministry of Finance Field Codes</h3><h4>Chemicals & Laboratory</h4><ul><li>060102 – Chemicals, Chemical Materials and Laboratory Equipment / Chemicals / Industrial Chemicals</li><li>060103 – Chemicals, Chemical Materials and Laboratory Equipment / Chemicals / Water Treatment Chemicals</li></ul><h4>Agriculture</h4><ul><li>070101 – Agriculture, Forestry and Livestock / Fertilizers and Pesticides / Fertilizers and Nutrients</li><li>070102 – Agriculture, Forestry and Livestock / Fertilizers and Pesticides / Insecticides / Pests, Weeds and Plants</li></ul><h4>Related Services</h4><ul><li>222102 – Services / Plantation, Fisheries, Animal and Wildlife Services / Horticulture</li><li>222104 – Services / Plantation, Fisheries, Animal and Wildlife Services / Agriculture, Crops, Farms, Gardens, Forests and Forest Plantations</li></ul></div></article>
        <article><FactMarker icon="shield" /><div className="fact-copy"><h3>Petronas Vendor Registration</h3><ul><li>21141313s – Warehousing</li><li>21141314s – Warehousing Services</li><li>24181100s – Forklift Services</li><li>21141311s – Container Handling</li></ul></div></article>
      </div></div>
    </section>

    <section id="lokasi" className="about-locations content-section"><div className="wide-container"><div><h2>Strategic Locations Across Malaysia</h2><p>We stay close to you to ensure timely fertilizer deliveries nationwide through an efficient, reliable distribution network that meets customer needs.</p></div><Media src={asset(69)} alt="NAFAS location network map in Peninsular Malaysia, Sabah and Sarawak" className="contain" /></div></section>
    <CallToAction />
  </div>;
}

