import type { Metadata } from 'next';
import { asset, assets } from '@/lib/nafas/assets';
import { CallToAction, PageHero, SplitSection } from '@/components/sites/nafas/shared/sections';
import '@/components/sites/nafas/inner-pages.css';
import { CertificateCarousel } from '@/components/sites/nafas/inner-interactions';

export const metadata: Metadata = { title: 'Perkhidmatan', description: 'Perkhidmatan pembungkusan, pergudangan, pengimportan dan rantaian bekalan baja NAFAS Bajakimia.' };

export default function ServicesPage() {
  return <div className="nafas-inner services-page">
    <PageHero title="Perkhidmatan Operasi dan Rantaian Bekalan Baja" image={assets.services}><p>NAFAS Bajakimia Sdn. Bhd. menyediakan rangkaian perkhidmatan operasi baja yang menyeluruh, merangkumi pengurusan perdagangan, pengimportan, pembungkusan, pergudangan serta jualan dan pengedaran. Perkhidmatan kami direka untuk menyokong kesinambungan bekalan, kecekapan operasi dan keperluan sektor pertanian di peringkat nasional.</p></PageHero>
    <SplitSection title="Operasi Pembungkusan" image={assets.packaging} reverse><p>NAFAS Bajakimia menyediakan perkhidmatan pengurusan perdagangan dan pembungkusan di Petronas Chemical Fertilizer Kedah Sdn. Bhd. yang terletak di Gurun, Kedah.</p><p>Operasi kami menyokong aktiviti pengendalian dan pembungkusan baja dengan kapasiti tahunan sehingga 220,000 tan metrik, bagi memastikan kesediaan bekalan yang cekap dan boleh dipercayai untuk pengedaran pasaran.</p></SplitSection>
    <SplitSection title="Pergudangan Baja" image={assets.storage}><p>Kami mengendalikan rangkaian gudang penyimpanan baja yang terletak secara strategik di seluruh Malaysia.</p><p>Rangkaian pergudangan di peringkat nasional ini membolehkan:</p><ul><li>Penyimpanan dan pengendalian yang cekap</li><li>Kesinambungan bekalan</li><li>Pengedaran tepat pada masanya kepada pelanggan di seluruh negara</li></ul><p>Keupayaan pergudangan kami menyokong baja import dan baja yang diproses secara tempatan.</p></SplitSection>
    <SplitSection title="Jualan & Pemasaran" image={asset(10)} reverse><p>NAFAS Bajakimia terlibat secara aktif dalam jualan dan pemasaran baja tunggal dan baja sebatian.</p><p>Produk kami dibekalkan melalui:</p><ul><li>Saluran tender terbuka</li><li>Pengedaran pasaran terbuka</li></ul><p>Kami memberi perkhidmatan kepada pelbagai jenis pelanggan termasuk syarikat perladangan, pembekal baja dan pihak berkepentingan pertanian.</p></SplitSection>
    <SplitSection title="Pengimportan Baja" image={assets.import}><p>Sumber Import Utama:</p><ol className="import-list"><li>Kanada<span>Muriate of Potash (MOP): 70,000 – 75,000 MT</span></li><li>Indonesia<span>Urea Prill: 40,000 – 50,000 MT</span></li><li>China<span>Urea Prill: 40,000 – 50,000 MT<br />DAP: 20,000 – 25,000 MT<br />MAP: 10,000 MT</span></li><li>Australia (Pulau Krismas)<span>Batu Fosfat: 45,000 – 50,000 MT</span></li></ol><p>Strategi sumber yang pelbagai ini menyokong kebolehpercayaan bekalan dan kesinambungan operasi.</p></SplitSection>
    <SplitSection title="Agronomi" image={asset(106)} reverse><p><strong>Anugerah (Certifications / Awards)</strong></p><ul><li>Pensijilan yang diterima oleh Malaysian NPK Fertilizer Sdn. Bhd.</li><li>Pensijilan yang diterima oleh NAFAS Bajakimia Sdn. Bhd.</li></ul><p>Pembekalan, Pembungkusan Semula, Pergudangan dan Perdagangan Baja</p><p>Anugerah Emas telah dianugerahkan semasa “Contractor Forum 2023” oleh Petronas Chemical Fertiliser Kedah Sdn. Bhd. bagi pencapaian tahun 2022, serta anugerah lain sejak tahun 2016 (Anugerah Gangsa) dan 2018 (Anugerah Perak).</p></SplitSection>
    <section className="recognition content-section"><CertificateCarousel items={[
      { src: '/sites/nafas/figma/certificate-gold.png', crop: 'gold', title: 'Anugerah Emas', description: 'telah dianugerahkan semasa “Contractor Forum 2023” oleh Petronas Chemical Fertiliser Kedah Sdn. Bhd. bagi pencapaian tahun 2022, serta anugerah lain sejak tahun 2016 (Anugerah Gangsa) dan 2018 (Anugerah Perak).' },
      { src: '/sites/nafas/figma/certificate-nafas.png', crop: 'nafas', title: 'NAFAS Bajakimia Sdn. Bhd.', description: 'Pensijilan yang diterima oleh NAFAS Bajakimia Sdn. Bhd. Pembekalan, Pembungkusan Semula, Pergudangan dan Perdagangan Baja' },
      { src: '/sites/nafas/figma/certificate-sgs.png', crop: 'sgs', title: 'NAFAS Bajakimia Sdn. Bhd.', description: 'Pembekalan, Pembungkusan Semula, Pergudangan dan Perdagangan Baja' },
    ]} /></section>
    <CallToAction />
  </div>;
}

