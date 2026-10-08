// Generated from the BM design source by scripts/generate-english.mjs.
import Link from 'next/link';
import Image from 'next/image';
import { categories, getCategory, productHref, type FertilizerProduct } from "@/lib/nafas/en/products";
import { Media, SectionHeading } from '../shared/sections';
import styles from "../../products/products.module.css";

export function CategoryNavigation({ active }: { active?: string }) {
  return <nav aria-label="Product categories" className="category-tabs">{categories.map((category) => <Link key={category.slug} href={`/en/produk/${category.slug}`} aria-current={active === category.slug ? 'page' : undefined}>{category.name}</Link>)}</nav>;
}

export function ProductCard({ product }: { product: FertilizerProduct }) {
  const category = getCategory(product.category);
  return <Link href={productHref(product)} className={`product-card ${styles.card}`}>
    <Media src="/sites/nafas/figma/product-bag.png" alt={`Sample packaging ${product.name}`} />
    <p>{category?.name}</p><h3>{product.name}</h3><span className="sr-only">Product Details</span>
  </Link>;
}

export function ProductGrid({ items }: { items: FertilizerProduct[] }) {
  return <div className={`product-grid ${styles.grid}`}>{items.map((product) => <ProductCard product={product} key={product.slug} />)}</div>;
}

const audience = [
  { title: "Oil Palm Plantations and Large-scale Agriculture", text: "Quality fertilizer supply supporting yields on large-scale farms.", image: "audience-estate" },
  { title: "Fertilizer Suppliers and Distributors", text: "Efficient, consistent fertilizer supply for trusted distributors.", image: "audience-distribution" },
  { title: "Farmers and Organised Agricultural Groups", text: "Practical fertilizer solutions for farming communities and agricultural organisations.", image: "audience-community" },
  { title: "Government and Institutional Agriculture", text: "Government agency partnerships strengthen sustainable agricultural development.", image: "audience-institution" },
];
const benefits = [
  { text: "Stable, consistent supply supported by strong import and logistics networks." },
  { text: "High-quality products through internal inspections and standardised processes." },
  { text: "Operational efficiency through integrated warehousing and distribution capabilities." },
  { text: "Long-term supply confidence backed by institutional ownership and decades of industry experience." },
];

export function ProductAudience() {
  return <section className={`wide-container ${styles.audience}`}><SectionHeading label="Who We Serve" center>For Every Need in <span className="green">the Agricultural Sector</span></SectionHeading><p className={styles.intro}>We supply fertilizers and solutions to plantations, distributors, farming communities and agricultural institutions.</p><div className="audience-grid">{audience.map(({ title, text, image }) => <article key={title} className={`${styles.audienceCard} reveal`}><Media src={`/sites/nafas/figma/${image}.png`} className={styles.audienceImage} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 22vw" /><span className={`${styles.audienceIcon} ${image === "audience-estate" || image === "audience-distribution" ? styles.compositeBadge : ""}`}>{image === "audience-institution" ? <span className="v3-font-icon" aria-hidden="true">&#xf66f;</span> : <Image src={`/sites/nafas/figma/${image}-icon.svg`} alt="" width={image === "audience-community" ? 27 : 86} height={image === "audience-community" ? 33 : 87} />}</span><div className={styles.audienceCopy}><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>;
}

export function ProductBenefits() {
  return <section className={styles.benefits}><div className={styles.benefitArtwork}><Media src="/sites/nafas/figma/benefits-photo.png" className={styles.benefitImage} /><Media src="/sites/nafas/figma/benefits-curve.svg" className={styles.benefitCurve} /><Media src="/sites/nafas/figma/benefits-frame.png" className={styles.benefitFrame} /></div><div className={styles.benefitCopy}><SectionHeading label="Benefits & Results"><span className="green">Value</span> for Our Customers</SectionHeading><ul>{benefits.map(({ text }, index) => <li key={text}>{index < 3 ? <Image src={`/sites/nafas/figma/${["benefit-supply", "benefit-quality", "benefit-operations"][index]}.svg`} alt="" width={[36,39,43][index]} height={44} /> : <span className="v3-font-icon v3-handshake" aria-hidden="true">&#xf2b5;</span>}<p>{text}</p></li>)}</ul></div></section>;
}
