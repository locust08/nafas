import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  FlaskConical,
  Globe,
  Handshake,
} from 'lucide-react';
import { asset } from '@/lib/nafas/assets';
import { CallToAction, Media, SectionHeading } from '@/components/sites/nafas/shared/sections';
import { CountUp, HeroVideo, ScrollLine } from '@/components/sites/nafas/shared/motion';
import { MilestoneCarousel } from '@/components/sites/nafas/inner-interactions';
import '@/components/sites/nafas/inner-pages.css';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali NAFAS Bajakimia Sdn. Bhd., pembekal baja sejak 1974, nilai teras, kepimpinan dan perjalanan syarikat.',
};

const values = [
  { title: 'Kualiti', text: 'Fokus pada baja berkualiti, nilai kompetitif dan kepuasan pelanggan.', image: 23, icon: 'thumb.svg' },
  { title: 'Kecemerlangan Perkhidmatan', text: 'Menetapkan garis masa jelas serta penghantaran tepat dan boleh dipercayai.', image: 2, icon: 'star-badge.svg' },
  { title: 'Kebolehpercayaan Logistik', text: 'Rangkaian nasional memastikan penyimpanan dan pengedaran cekap Malaysia.', image: 15, icon: 'shield-badge.svg' },
  { title: 'Daya Saing', text: 'Pengalaman industri dekad memastikan operasi cekap dan kompetitif.', image: 57, icon: 'trend-badge.svg' },
];

const departments = [
  { name: 'Bahagian Pemasaran dan Jualan', image: 'department-sales.png' },
  { name: 'Bahagian Operasi dan Logistik', image: 'department-operations.png' },
  { name: 'Bahagian Kewangan dan Akaun', image: 'department-finance.png' },
  { name: 'Bahagian Agronomi & Teknikal', image: 'department-agronomy.png' },
  { name: 'Bahagian Pengurusan dan Pentadbiran', image: 'department-management.png' },
];

const milestones = [
  ['1974', 'Aktif dalam penjualan Baja Urea dan Campuran Baja NPK.'],
  ['1979', 'Terlibat dalam pembuatan baja campuran untuk Skim Baja Padi Persekutuan (SBPKP) NAFAS bagi pembekalan baja campuran NPK 17.5/15.5/10, 17/20/10 serta baja urea tunggal 46%N di Semenanjung Malaysia.'],
  ['1999', 'Dilantik sebagai kontraktor pergudangan bagi kerja pembungkusan baja urea di Petronas Chemicals Fertiliser Kedah Sdn. Bhd. (PCFKSB) serta sebagai pembekal baja urea di pasaran.'],
  ['2004', 'Dilantik sebagai kontraktor pergudangan dan pembungkusan serta pembekal bahan mentah kepada kilang Malaysian NPK Fertilizer Sdn. Bhd. (MNFSB).'],
  ['2010', 'Modul perniagaan NAFAS berubah apabila MNFSB hanya menerima upah bekalan, manakala pemilikan bahan mentah berada di bawah seliaan NBKSB.'],
  ['2011', 'Kerjasama dan penyelidikan bersama antara NAFAS dan Lembaga Minyak Sawit Malaysia (MPOB) telah menghasilkan baja berkualiti MPOB F3.'],
  ['2013', 'Model operasi perbelanjaan baja dikemas kini: NBKSB membekalkan bahan mentah kepada MNFSB, yang seterusnya menghasilkan dan membekalkan baja sebatian kepada NAFAS. Pada bulan Jun, MNFSB mengambil alih sepenuhnya tugas pergudangan dan pembungkusan.'],
  ['2014', 'Kerjasama dan kajian bersama antara NAFAS dan Lembaga Koko Malaysia (LKM) telah menghasilkan baja berkualiti tinggi MCB F1 HYFer.'],
  ['2018', 'NBKSB berjaya memperoleh kontrak pergudangan bagi kerja pembungkusan baja urea di PCFKSB selama 3 tahun dengan pilihan lanjutan 2 tahun.'],
  ['2019', 'Bermula Mei, modul perniagaan berubah dengan NAFAS bertindak sebagai pembeli dan pembekal bahan mentah kepada MNFSB, manakala NBKSB menguruskan kemasukan bahan mentah dengan caj pengurusan operasi.'],
  ['2020', 'NBKSB mula mengeksport 3,000 MT baja urea ke Kemboja melalui ejen jualan, Purity International, dengan kerjasama pembeli Malaysian Group Co.'],
  ['2021', 'Kontrak pergudangan dan pembungkusan baja urea di PCFKSB berjaya dilanjutkan selama 2 tahun lagi.'],
  ['2022', 'Pengeluaran produk baja berskala kecil dilancarkan sempena MAHA 2022, khusus untuk menggalakkan isi rumah pertanian.'],
  ['2023', 'NBKSB berjaya memperoleh kontrak pergudangan bagi kerja pembungkusan baja urea di PCFKSB selama 5 tahun.'],
  ['2024', 'Pelancaran baja cecair sempena MAHA 2024 bagi memenuhi permintaan semasa petani yang memerlukan produk untuk meningkatkan pertumbuhan dan hasil tanaman.'],
  ['2025', 'Pelancaran pembungkusan baharu sempena HPPNK 2025 dengan formulasi dan reka bentuk yang diperbaharui, lebih cekap, mampan dan sejajar dengan piawaian pertanian moden.'],
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
        <SectionHeading label="Gambaran Syarikat">Bekalan baja negara sejak <span className="accent">1974</span></SectionHeading>
        <p>Sejak 1974, NAFAS Bajakimia mengurus import, pengilangan, pengangkutan, dan pengedaran baja melalui cawangan PPK seluruh Malaysia.</p>
        <button className="button" type="button" disabled title="Profil syarikat belum tersedia">Muat Turun Profil Syarikat<ArrowRight size={22} aria-hidden="true" /></button>
        <div className="experience"><span className="experience-icon"><Image src="/sites/nafas/figma/thumb.svg" width={35.1937} height={33.0001} alt="" /></span><div><CountUp value={50} suffix="+" /><h3>Tahun Pengalaman</h3><p>Pengalaman luas sokong baja negara.</p></div></div>
      </div></div>
    </section>

    <section className="wide-container benefit-strip">
      {[
        { title: 'Pembekal Utama Negara', text: 'Antara pembekal utama baja yang menyumbang ekonomi sektor pertanian Malaysia.', Icon: Globe },
        { title: 'Produk Berprestasi Tinggi', text: 'Baja MPOBF3 Zeolite meningkatkan kesuburan tanah dan hasil tanaman sawit.', Icon: FlaskConical },
        { title: 'Jenama Peladang Dipercayai', text: 'Komitmen membekalkan baja berkualiti Peladang untuk kelestarian industri.', Icon: Handshake },
      ].map(({ title, text, Icon }) => <article key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}
    </section>

    <section id="nilai-teras" className="content-section wide-container about-values-section">
      <SectionHeading label="Nilai Teras" center><span className="accent">Komitmen</span> kami dalam memastikan bekalan baja yang <span className="accent">berkualiti</span></SectionHeading>
      <p className="center">Melalui gabungan kepakaran industri dan pengurusan operasi yang cekap, kami memastikan setiap proses menyumbang kepada produktiviti.</p>
      <div className="about-values">{values.map(({ title, text, image, icon }) => <article className="about-value" key={title}>
        <Media src={asset(image)} className="hover-media" alt="" />
        <div className="value-content"><span className={`value-symbol ${icon === 'thumb.svg' ? 'value-symbol-thumb' : 'value-symbol-asset'}`}><Image src={`/sites/nafas/figma/${icon}`} width={icon === 'thumb.svg' ? 35.1937 : 86} height={icon === 'thumb.svg' ? 33.0001 : 87} alt="" /></span><h3>{title}</h3><p>{text}</p></div>
      </article>)}</div>
    </section>

    <section id="visi-misi" className="purpose-section content-section">
      <Media src="/sites/nafas/figma/purpose-background.png" className="hero-background" />
      <div className="container">
        <div className="purpose-heading"><SectionHeading label="Visi, Misi & Tujuan"><span className="accent">Arah Tuju</span> dan Prinsip yang Membimbing Operasi Kami</SectionHeading><p>Teras kami membimbing setiap Keputusan dan Tindakan, memastikan visi, misi, dan perkhidmatan menyokong pertumbuhan serta keperluan sektor pertanian negara.</p></div>
        <div className="purpose-grid">
          <article className="purpose-card purpose-card-wide"><Media src="/sites/nafas/figma/purpose-wide.png" className="hero-background" /><div><h3>Mengapa Kami Wujud</h3><ul><li>Menyokong petani dan industri pertanian dengan bekalan baja yang boleh dipercayai.</li><li>Menyumbang kepada keselamatan makanan dan pertumbuhan pertanian jangka panjang.</li><li>Disokong oleh Pertubuhan Peladang Kebangsaan (NAFAS).</li><li>Beroperasi dengan profesionalisme dan kecemerlangan operasi.</li></ul></div></article>
          <article className="purpose-card flag-card purpose-vision"><Media src="/sites/nafas/figma/vision.png" className="hero-background" /><div><h3>Visi</h3><p>Pertubuhan peladang peneraju pasaran baja.</p></div></article>
          <article className="purpose-card flag-card purpose-mission"><Media src="/sites/nafas/figma/mission.png" className="hero-background" /><div><h3>Misi</h3><p>Menawarkan Produk dan Perkhidmatan yang Terbaik kepada Pelanggan dan Rakan Niaga.</p></div></article>
        </div>
      </div>
    </section>

    <section id="carta-organisasi" className="content-section leadership-section">
      <div className="container"><SectionHeading label="Carta Organisasi" center><span className="accent">Kepimpinan</span> yang menggerakkan Operasi Kami</SectionHeading><p className="center">Kepimpinan NAFAS Bajakimia menyatukan kepakaran strategik, operasi dan agronomi demi mencapai matlamat bersama.</p><article className="ceo-panel"><Media src="/sites/nafas/figma/ceo.png" className="hero-background" alt="Zalifudin bin Md Arshad, Ketua Pegawai Eksekutif" /><div><h3>Ketua Pegawai Eksekutif</h3><p>Zalifudin bin Md Arshad</p></div></article></div>
      <div className="wide-container department-grid">{departments.map(({ name, image }) => <article className="department-card" key={name}><Media src={`/sites/nafas/figma/${image}`} alt={`Pasukan ${name}`} sizes="(max-width: 767px) 100vw, 20vw" /><h3>{name}</h3></article>)}</div>
    </section>

    <section className="milestone-section content-section"><Media src="/sites/nafas/figma/milestone.png" className="hero-background" /><MilestoneCarousel items={milestones} /></section>

    <section id="fakta-korporat" className="corporate-facts content-section">
      <Media src={asset(83)} className="hero-background" />
      <div className="container"><SectionHeading label="Fakta Korporat" center>Profil Korporat <span className="accent">NAFAS Bajakimia</span></SectionHeading><div className="corporate-fact-list">
        <ScrollLine />
        <article><FactMarker icon="building" /><div className="fact-copy"><h3>Latar Belakang Korporat</h3><ul><li>Subsidiari kepada Pertubuhan Peladang Kebangsaan (NAFAS).</li><li>Ditubuhkan pada 8 Oktober 1974 dengan nama Malaysian Urea Fertilizer Corporation Sdn. Bhd. (MUFC).</li><li>Pada 13 Mac 1992, MUFC menukar nama kepada NAFAS Bajakimia Sdn. Bhd. (NBKSB).</li><li>Modal berbayar NBKSB adalah sebanyak RM4,500,000.00.</li></ul></div></article>
        <article><FactMarker icon="document" /><div className="fact-copy"><h3>Pendaftaran Kementerian Kewangan</h3><p><strong>NBKSB merupakan sebuah syarikat persendirian berhad yang berdaftar di bawah Kementerian Kewangan bagi kod berikut:</strong></p><ul><li>100102 – Industri Kimia</li><li>100103 – Rawatan Air Kimia</li><li>120102 – Racun Pertanian</li><li>120101 – Baja</li></ul></div></article>
        <article><FactMarker icon="grid" /><div className="fact-copy"><h3>Kod Bidang Kementerian Kewangan</h3><h4>Kimia & Makmal</h4><ul><li>060102 – Kimia, Bahan Kimia Dan Peralatan Makmal / Kimia / Kimia Industri</li><li>060103 – Kimia, Bahan Kimia Dan Peralatan Makmal / Kimia / Kimia Pemproses Air</li></ul><h4>Pertanian</h4><ul><li>070101 – Pertanian, Perhutanan Dan Ternakan / Baja Dan Racun / Baja Dan Nutrien</li><li>070102 – Pertanian, Perhutanan Dan Ternakan / Baja Dan Racun / Racun Serangga / Perosak, Rumpai/tumbuhan</li></ul><h4>Perkhidmatan Berkaitan</h4><ul><li>222102 – Perkhidmatan / Perkhidmatan Perladangan, Perikanan, Haiwan Dan Hidupan Liar / Hortikultur</li><li>222104 – Perkhidmatan / Perkhidmatan Perladangan, Perikanan, Haiwan Dan Hidupan Liar / Pertanian/tanaman/ Ladang/ Taman/ Hutan Dan Ladang Hutan</li></ul></div></article>
        <article><FactMarker icon="shield" /><div className="fact-copy"><h3>Pendaftaran Vendor Petronas</h3><ul><li>21141313s – Pergudangan</li><li>21141314s – Servis Pergudangan</li><li>24181100s – Forklif Servis</li><li>21141311s – Pengendalian Kontena</li></ul></div></article>
      </div></div>
    </section>

    <section id="lokasi" className="about-locations content-section"><div className="wide-container"><div><h2>Lokasi strategik di Seluruh Malaysia</h2><p>Kami sentiasa dekat dengan anda bagi memastikan bekalan baja dihantar tepat pada masanya ke seluruh negara melalui rangkaian pengedaran yang cekap, dipercayai, dan mampu memenuhi keperluan pelanggan.</p></div><Media src={asset(69)} alt="Peta rangkaian lokasi NAFAS di Semenanjung Malaysia, Sabah dan Sarawak" className="contain" /></div></section>
    <CallToAction />
  </div>;
}

