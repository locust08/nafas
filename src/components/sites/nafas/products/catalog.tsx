import Link from 'next/link';
import Image from 'next/image';
import { categories, getCategory, productHref, type FertilizerProduct } from '@/lib/nafas/products';
import { Media, SectionHeading } from '../shared/sections';
import styles from './products.module.css';

export function CategoryNavigation({ active }: { active?: string }) {
  return <nav aria-label="Kategori produk" className="category-tabs">{categories.map((category) => <Link key={category.slug} href={`/produk/${category.slug}`} aria-current={active === category.slug ? 'page' : undefined}>{category.name}</Link>)}</nav>;
}

export function ProductCard({ product }: { product: FertilizerProduct }) {
  const category = getCategory(product.category);
  return <Link href={productHref(product)} className={`product-card ${styles.card}`}>
    <Media src="/sites/nafas/figma/product-bag.png" alt={`Contoh pembungkusan ${product.name}`} />
    <p>{category?.name}</p><h3>{product.name}</h3><span className="sr-only">Maklumat Produk</span>
  </Link>;
}

export function ProductGrid({ items }: { items: FertilizerProduct[] }) {
  return <div className={`product-grid ${styles.grid}`}>{items.map((product) => <ProductCard product={product} key={product.slug} />)}</div>;
}

const audience = [
  { title: 'Perladangan kelapa sawit dan pertanian besar', text: 'Bekalan baja berkualiti menyokong hasil ladang berskala besar.', image: "audience-estate" },
  { title: 'Pembekal dan pengedar baja untuk ladang', text: 'Bekalan baja cekap dan konsisten untuk pengedar dipercayai.', image: "audience-distribution" },
  { title: 'Petani serta kumpulan pertanian berorganisasi', text: 'Penyelesaian baja praktikal menyokong komuniti petani dan organisasi pertanian.', image: "audience-community" },
  { title: 'Inisiatif pertanian kerajaan dan institusi', text: 'Kerjasama agensi kerajaan memperkukuh pembangunan pertanian mampan.', image: "audience-institution" },
];
const benefits = [
  { text: 'Bekalan yang stabil dan konsisten disokong oleh rangkaian import dan logistik yang kukuh.' },
  { text: 'Produk berkualiti tinggi melalui pemeriksaan dalaman dan proses yang diseragamkan.' },
  { text: 'Kecekapan operasi hasil daripada keupayaan pergudangan dan pengedaran bersepadu.' },
  { text: 'Keyakinan bekalan jangka panjang yang disokong oleh pemilikan institusi serta pengalaman industri selama beberapa dekad.' },
];

export function ProductAudience() {
  return <section className={`wide-container ${styles.audience}`}><SectionHeading label="Sasaran Kami" center>Untuk setiap keperluan dalam <span className="green">sektor pertanian</span></SectionHeading><p className={styles.intro}>Kami membekalkan baja dan penyelesaian kepada pelbagai segmen termasuk perladangan, pengedar, komuniti petani dan institusi pertanian.</p><div className="audience-grid">{audience.map(({ title, text, image }) => <article key={title} className={`${styles.audienceCard} reveal`}><Media src={`/sites/nafas/figma/${image}.png`} className={styles.audienceImage} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 22vw" /><span className={`${styles.audienceIcon} ${image === "audience-estate" || image === "audience-distribution" ? styles.compositeBadge : ""}`}>{image === "audience-institution" ? <span className="v3-font-icon" aria-hidden="true">&#xf66f;</span> : <Image src={`/sites/nafas/figma/${image}-icon.svg`} alt="" width={image === "audience-community" ? 27 : 86} height={image === "audience-community" ? 33 : 87} />}</span><div className={styles.audienceCopy}><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>;
}

export function ProductBenefits() {
  return <section className={styles.benefits}><div className={styles.benefitArtwork}><Media src="/sites/nafas/figma/benefits-photo.png" className={styles.benefitImage} /><Media src="/sites/nafas/figma/benefits-curve.svg" className={styles.benefitCurve} /><Media src="/sites/nafas/figma/benefits-frame.png" className={styles.benefitFrame} /></div><div className={styles.benefitCopy}><SectionHeading label="Manfaat & Hasil"><span className="green">Nilai</span> yang Diperoleh Pelanggan</SectionHeading><ul>{benefits.map(({ text }, index) => <li key={text}>{index < 3 ? <Image src={`/sites/nafas/figma/${["benefit-supply", "benefit-quality", "benefit-operations"][index]}.svg`} alt="" width={[36,39,43][index]} height={44} /> : <span className="v3-font-icon v3-handshake" aria-hidden="true">&#xf2b5;</span>}<p>{text}</p></li>)}</ul></div></section>;
}
