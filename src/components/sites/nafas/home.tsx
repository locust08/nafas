import { ArrowRight, Building2, Ship, Sprout, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { asset, assets } from '@/lib/nafas/assets';
import { articles } from '@/lib/nafas/news';
import { CountUp, HeroVideo } from './shared/motion';
import { HomeMap } from './home-map';
import { ButtonLink, CallToAction, Media, SectionHeading } from './shared/sections';

const expertise = [
  { image:19, icon:Ship, title:'Kepakaran Pembekalan Urea Berskala Besar', text:'Mengkhusus dalam pengimportan, pengedaran baja Urea berskala besar.' },
  { image:107, icon:Building2, title:'Kebolehpercayaan Disokong Institusi dan Industri', text:'Beroperasi di bawah NAFAS dengan tadbir urus kukuh dan kestabilan jangka Panjang.' },
  { image:58, icon:Truck, title:'Kawalan Rantaian Bekalan Bersepadu', text:'Pengurusan sumber hingga pengedaran memastikan bekalan boleh dipercayai.' },
  { image:6, icon:Sprout, title:'Pengalaman Terbukti Selama Beberapa Dekad', text:'Pengalaman lebih 50 tahun dalam rangkaian bekalan baja dan pertanian.' },
];
// The Figma strip uses sample marks. They are displayed as design placeholders,
// without presenting them as verified NAFAS partners.
const partnerLogos = [
  { image:51, name:'ADNOC' }, { image:122, name:'Aramco' },
  { image:66, name:'DEWA' }, { image:41, name:'ExxonMobil' },
  { image:74, name:'Ministry of Water and Electricity' }, { image:119, name:'JKR' },
  { image:5, name:'Larsen & Toubro' }, { image:72, name:'Microsoft' },
  { image:42, name:'Jabatan Air Sabah' }, { image:20, name:'Dubai World Trade Centre' },
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
      <Image className="farmer-layer-image" src={assets.farmer} alt="Peladang memeriksa hasil tanaman di ladang" fill sizes="(max-width: 767px) 76vw, 40vw" />
    </div>
  </div>;
}

export function HomePage() {
  return <>
    <section className="home-hero">
      <HeroVideo />
      <div className="hero-copy">
        <h1>Daripada Peladang untuk Peladang</h1>
        <p>Kami membantu memperkasa pertanian moden dengan penyelesaian yang meningkatkan hasil, memelihara alam, dan menyokong generasi akan datang.</p>
        <div className="actions"><ButtonLink href="/tentang-kami">Info Lanjut</ButtonLink><ButtonLink href="/hubungi-kami" outline>Hubungi Kami</ButtonLink></div>
      </div>
      <div className="hero-curve" aria-hidden="true">
        <svg className="hero-curve-shape" viewBox="0 0 438 99" preserveAspectRatio="none">
          <path d="M0 0C55 0 105.3 7 115.1 30C132.9 71.9 174 99 219.5 99H0Z" />
          <path d="M438 0C383 0 333.7 7 323.9 30C306.1 71.9 265 99 219.5 99H438Z" />
        </svg>
      </div>
      <a href="#gambaran-syarikat" className="explore-link" aria-label="Terokai gambaran syarikat">
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
            <SectionHeading label="Gambaran Syarikat">Menyokong Rantaian Bekalan Baja Negara Sejak <span className="accent">1974</span></SectionHeading>
            <p>Nafas Bajakimia Sdn Bhd anak syarikat milik penuh Pertubuhan Peladang Kebangsaan merupakan pembekal baja terkemuka sejak 1974, mengkhusus dalam pengimportan, pembuatan, pergudangan dan pengedaran baja bagi menyokong pertanian mampan.</p>
            <ButtonLink href="/tentang-kami">Info Lanjut</ButtonLink>
          </div>
          <LayeredFarmerImage />
        </div>
      </section>
    </div>
    <section className="capacity reveal"><SectionHeading label="Kepakaran / Keupayaan" center>Kepakaran Kami <span className="accent">dalam</span> Rantaian Bekalan Baja Negara</SectionHeading><Media src={assets.capacity} className="capacity-image" alt="Fasiliti dan rantaian bekalan pertanian" /><div className="metrics container">{[[350000,'Kapasiti Keseluruhan'],[200000,'Kapasiti Import Strategik'],[220000,'Kapasiti Pembungkusan']].map(([number,label]) => <div className="metric" key={label}><CountUp value={Number(number)} suffix=" MT" /><span>{label}</span></div>)}</div></section>
    <section className="location split-section reveal"><div className="container split-grid"><HomeMap /><div className="split-copy"><SectionHeading label="Lokasi Kami">Rangkaian Lebih Dekat Untuk <span className="accent">Seluruh Negara</span></SectionHeading><p>Kami beroperasi di seluruh Malaysia dengan rangkaian fasiliti depot dan pusat pengedaran bagi memastikan bekalan baja yang konsisten dan boleh dipercayai.</p></div></div></section>
    <section className="background-section reveal"><Media src={assets.values} /><div className="container"><div className="split-copy"><SectionHeading label="Nilai Membina Perubahan"><span className="accent">Dipacu</span> pengalaman,<br /><span className="accent">disokong</span> kepercayaan</SectionHeading><p>Kami memastikan bekalan baja yang stabil dan berkualiti melalui operasi bersepadu dan rangkaian nasional yang kukuh, menyokong pertumbuhan pertanian secara mampan.</p></div></div></section>
    <section className="wide-container expertise-grid" aria-label="Kepakaran NAFAS Bajakimia">
      {expertise.map((item) => {
        const Icon = item.icon;
        return <article className="expertise-card reveal" key={item.title}>
          <Media src={asset(item.image)} className="expertise-image" alt="" sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 23vw" />
          <div className="expertise-content"><span className="expertise-icon"><Icon size={27} aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.text}</p></div>
        </article>;
      })}
    </section>
    <section className="partners" aria-label="Contoh susun atur logo rakan">
      <div className="partner-marquee"><div className="partner-names">
        {[...partnerLogos, ...partnerLogos].map((logo, index) => <span key={`${logo.name}-${index}`} aria-hidden={index >= partnerLogos.length}>
          <Image src={asset(logo.image)} alt={index < partnerLogos.length ? `${logo.name} — logo contoh` : ''} width={160} height={64} sizes="160px" />
        </span>)}
      </div></div>
    </section>
    <section className="background-section planet-section reveal">
      <Media src={assets.planet} className="planet-visual" alt="Landskap pertanian pada waktu senja" sizes="100vw" />
      <div className="container"><div className="split-copy">
        <SectionHeading label="Untuk Planet Kita"><span className="accent">Komitmen</span> Kelestarian Jaminan Makanan</SectionHeading>
        <p>Kami menyokong kelestarian pertanian dengan baja bertanggungjawab, rantaian bekalan cekap serta pematuhan piawaian demi produktiviti dan keselamatan makanan negara.</p>
        <ButtonLink href="/kelestarian">Info Lanjut</ButtonLink>
      </div></div>
    </section>
    <section className="news-section">
      <Media src={asset(105)} className="news-landscape" alt="" sizes="100vw" />
      <div className="container">
        <SectionHeading label="Berita Terkini" center><span className="accent">Berita</span> dan <span className="accent">inisiatif</span> Terkini NBK</SectionHeading>
        <div className="center"><ButtonLink href="/berita-media">Info Lanjut</ButtonLink></div>
        <div className="home-news-layout">
          {articles.slice(0, 1).map((article) => <article className="home-news-featured reveal" key={article.slug}>
            <Media src={asset(27)} alt="Pemandangan bandar pada waktu senja" sizes="(max-width: 767px) 100vw, 40vw" />
            <div className="home-news-featured-copy"><p className="eyebrow">{article.category}</p><h3>NAFAS Bajakimia Menyertai Contractor Forum 2023</h3><p>{article.excerpt}</p><Link href={`/berita-media/${article.slug}`}>Baca Selanjutnya <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </article>)}
          <div className="home-news-side">
            <article className="home-news-template reveal"><Media src={asset(32)} alt="" sizes="180px" /><div><p className="news-template-label">Contoh kandungan</p><h3>Pengukuhan Rantaian Bekalan Baja bagi Musim Penanaman</h3><p>Kandungan berita akan dikemas kini.</p></div></article>
            <article className="home-news-template reveal"><Media src={asset(9)} alt="" sizes="180px" /><div><p className="news-template-label">Contoh kandungan</p><h3>Komitmen terhadap Tadbir Urus dan Kualiti Operasi</h3><p>Kandungan berita akan dikemas kini.</p></div></article>
          </div>
        </div>
      </div>
    </section>
    <CallToAction />
  </>;
}


