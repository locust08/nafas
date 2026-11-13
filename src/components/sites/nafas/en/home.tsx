// Generated from the BM design source by scripts/generate-english.mjs.
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { asset, assets } from "@/lib/nafas/en/assets";
import { articles } from "@/lib/nafas/en/news";
import { CountUp, HeroVideo } from './shared/motion';
import { HomeMap } from './home-map';
import { ButtonLink, CallToAction, Media, SectionHeading } from './shared/sections';

const expertise = [
  { image:19, icon:'ship', title:"Large-scale Urea Supply Expertise", text:"Specialising in large-scale urea fertilizer importing and distribution." },
  { image:107, icon:'building', title:"Reliability Backed by Institutions and Industry", text:"Operating under NAFAS with strong governance and long-term stability." },
  { image:58, icon:'truck', title:"Integrated Supply Chain Management", text:"Management from sourcing to distribution ensures reliable supply." },
  { image:6, icon:'sprout', title:"Decades of Proven Experience", text:"More than 50 years of experience in fertilizer and agricultural supply networks." },
];
// Strategic partner logos supplied by the client ("Logo Rakan Strategik" folder).
// `wide` marks landscape logos that get a wider slot in the marquee.
const partnerLogos = [
  { image:'/sites/nafas/assets/partners-v4/mardi.png', name:'MARDI' },
  { image:'/sites/nafas/assets/partners-v4/mpob.png', name:'MPOB' },
  { image:'/sites/nafas/assets/partners-v4/lembaga-koko-malaysia.png', name:'Malaysian Cocoa Board' },
  { image:'/sites/nafas/assets/partners-v4/lembaga-getah-malaysia.png', name:'Malaysian Rubber Board' },
  { image:'/sites/nafas/assets/partners-v4/felcra-berhad.png', name:'FELCRA Berhad' },
  { image:'/sites/nafas/assets/partners-v4/felda.png', name:'FELDA' },
  { image:'/sites/nafas/assets/partners-v4/maybank.png', name:'Maybank' },
  { image:'/sites/nafas/assets/partners-v4/cimb.png', name:'CIMB Bank' },
  { image:'/sites/nafas/assets/partners-v4/al-rajhi-bank.png', name:'Al Rajhi Bank' },
  { image:'/sites/nafas/assets/partners-v4/sinergi-perdana.png', name:'Sinergi Perdana', wide:true },
  { image:'/sites/nafas/assets/partners-v4/sd-guthrie.png', name:'SD Guthrie' },
  { image:'/sites/nafas/assets/partners-v4/th-plantations.png', name:'TH Plantations', wide:true },
  { image:'/sites/nafas/assets/partners-v4/ioi.jpg', name:'IOI' },
  { image:'/sites/nafas/assets/partners-v4/genting-plantations.png', name:'Genting Plantations', wide:true },
  { image:'/sites/nafas/assets/partners-v4/boustead-plantations.png', name:'Boustead Plantations' },
  { image:'/sites/nafas/assets/partners-v4/phosphate-resources-malaysia.png', name:'Phosphate Resources Malaysia', wide:true },
];

function LayeredFarmerImage() {
  return <div className="media split-media layered-farmer">
    <div className="farmer-layer farmer-ghost ghost-left reveal" aria-hidden="true">
      <Image className="farmer-layer-image" src={assets.farmer} alt="" fill sizes="(max-width: 767px) 92vw, 55vw" />
    </div>
    <div className="farmer-layer farmer-ghost ghost-right reveal" aria-hidden="true">
      <Image className="farmer-layer-image" src={assets.farmer} alt="" fill sizes="(max-width: 767px) 92vw, 55vw" />
    </div>
    <div className="farmer-layer farmer-front reveal">
      <Image className="farmer-layer-image" src={assets.farmer} alt="Farmer inspecting crops in a field" fill sizes="(max-width: 767px) 76vw, 40vw" />
    </div>
  </div>;
}

export function HomePage() {
  return <>
    <section className="home-hero">
      <HeroVideo />
      <div className="hero-copy">
        <h1>From Farmers for Farmers</h1>
        <p>We help strengthen modern agriculture with solutions that improve yields, protect the environment and support future generations.</p>
        <div className="actions"><ButtonLink href="/en/tentang-kami">Learn More</ButtonLink><ButtonLink href="/en/hubungi-kami" outline>Contact Us</ButtonLink></div>
      </div>
      <div className="hero-curve" aria-hidden="true">
        <svg className="hero-curve-shape" viewBox="0 0 438 99" preserveAspectRatio="none">
          <path d="M0 0C55 0 105.3 7 115.1 30C132.9 71.9 174 99 219.5 99H0Z" />
          <path d="M438 0C383 0 333.7 7 323.9 30C306.1 71.9 265 99 219.5 99H438Z" />
        </svg>
      </div>
      <a href="#gambaran-syarikat" className="explore-link" aria-label="Explore the company overview">
        <svg viewBox="0 0 182 180" aria-hidden="true">
          <defs><path id="explore-circle" d="M91 18a72 72 0 1 1-.01 0" /></defs>
          <text fill="currentColor" fontSize="22" fontFamily="var(--font-circular)" fontWeight="700">
            <textPath href="#explore-circle" textLength="452" lengthAdjust="spacing">EXPLORE MORE · EXPLORE MORE · </textPath>
          </text>
        </svg>
      </a>
    </section>
    <div id="gambaran-syarikat">
      <section className="split-section overview">
        <div className="container split-grid">
          <div className="split-copy reveal">
            <SectionHeading label="Company Overview">Supporting the Nation&apos;s Fertilizer Supply Chain Since <span className="accent">1974</span></SectionHeading>
            <p>Nafas Bajakimia Sdn Bhd, a wholly owned subsidiary of the National Farmers Organisation, has been a leading fertilizer supplier since 1974, specialising in importing, manufacturing, warehousing and distribution to support sustainable agriculture.</p>
            <ButtonLink href="/en/tentang-kami">Learn More</ButtonLink>
          </div>
          <LayeredFarmerImage />
        </div>
      </section>
    </div>
    <section className="capacity reveal"><SectionHeading label="Expertise / Capabilities" center>Our Expertise <span className="accent">dalam</span> The Nation&apos;s Fertilizer Supply Chain</SectionHeading><Media src={assets.capacity} className="capacity-image" alt="Agricultural facilities and supply chain" /><div className="metrics container">{[[350000,"Total Capacity"],[200000,"Strategic Import Capacity"],[220000,"Packaging Capacity"]].map(([number,label]) => <div className="metric" key={label}><CountUp value={Number(number)} suffix=" MT" /><span>{label}</span></div>)}</div></section>
    <section className="location split-section reveal"><div className="container split-grid"><HomeMap /><div className="split-copy"><SectionHeading label="Our Location">A Closer Network for <span className="accent">the Whole Nation</span></SectionHeading><p>We operate throughout Malaysia with a network of depots and distribution centres to ensure consistent and reliable fertilizer supply.</p></div></div></section>
    <section className="background-section reveal"><Media src={assets.values} /><div className="container"><div className="split-copy"><SectionHeading label="Values That Drive Change"><span className="accent">Driven by</span> pengalaman,<br /><span className="accent">disokong</span> kepercayaan</SectionHeading><p>We ensure a stable supply of quality fertilizers through integrated operations and a strong nationwide network, supporting sustainable agricultural growth.</p></div></div></section>
    <section className="wide-container expertise-grid" aria-label="NAFAS Bajakimia Expertise">
      {expertise.map((item) => {
        const iconSrc = `/sites/nafas/figma/bugherd-v3-1/${item.icon}.svg`;
        return <article className="expertise-card reveal" key={item.title}>
          <Media src={asset(item.image)} className="expertise-image" alt="" sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 23vw" />
          <div className="expertise-content"><span className={`expertise-icon ${item.icon === 'building' ? '' : 'figma-icon-disc'}`}><Image className={item.icon === 'building' ? 'figma-building-icon' : ''} src={iconSrc} width={item.icon === 'building' ? 34 : 86} height={item.icon === 'building' ? 33 : 87} alt="" /></span><h3>{item.title}</h3><p>{item.text}</p></div>
        </article>;
      })}
    </section>
    <section className="partners" aria-label="Strategic partners">
      <div className="partner-marquee"><div className="partner-names">
        {[...partnerLogos, ...partnerLogos].map((logo, index) => <span key={`${logo.name}-${index}`} className={logo.wide ? 'wide' : undefined} aria-hidden={index >= partnerLogos.length}>
          <Image src={logo.image} alt={index < partnerLogos.length ? `${logo.name} logo` : ''} width={138} height={110} sizes="219px" />
        </span>)}
      </div></div>
    </section>
    <section className="background-section planet-section reveal">
      <Media src={assets.planet} className="planet-visual" alt="Agricultural landscape at dusk" sizes="100vw" />
      <div className="container"><div className="split-copy">
        <SectionHeading label="For Our Planet"><span className="accent">Our Commitment</span> Sustainability for Food Security</SectionHeading>
        <p>We support sustainable agriculture through responsible fertilizers, efficient supply chains and standards compliance for national productivity and food security.</p>
        <ButtonLink href="/en/kelestarian">Learn More</ButtonLink>
      </div></div>
    </section>
    <section className="news-section">
      <Media src={asset(105)} className="news-landscape" alt="" sizes="100vw" />
      <div className="container">
        <SectionHeading label="Latest News" center><span className="accent">News</span> and <span className="accent">inisiatif</span> from NBK</SectionHeading>
        <div className="center"><ButtonLink href="/en/berita-media">Learn More</ButtonLink></div>
        <div className="home-news-layout">
          {articles.slice(0, 1).map((article) => <article className="home-news-featured reveal" key={article.slug}>
            <Media src={asset(27)} alt="City skyline at dusk" sizes="(max-width: 767px) 100vw, 40vw" />
            <div className="home-news-featured-copy"><p className="eyebrow">{article.category}</p><h3>NAFAS Bajakimia Participates in Contractor Forum 2023</h3><p>{article.excerpt}</p><Link href={`/en/berita-media/${article.slug}`}>Read More <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </article>)}
          <div className="home-news-side">
            <article className="home-news-template reveal"><Media src={asset(32)} alt="" sizes="180px" /><div><p className="news-template-label">Sample content</p><h3>Strengthening Fertilizer Supply for the Planting Season</h3><p>News content will be updated.</p></div></article>
            <article className="home-news-template reveal"><Media src={asset(9)} alt="" sizes="180px" /><div><p className="news-template-label">Sample content</p><h3>Commitment to Governance and Operational Quality</h3><p>News content will be updated.</p></div></article>
          </div>
        </div>
      </div>
    </section>
    <CallToAction />
  </>;
}


