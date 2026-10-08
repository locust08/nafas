// Generated from the BM design source by scripts/generate-english.mjs.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categoryProducts, getCategory, products } from "@/lib/nafas/en/products";
import { ProductTestimonials } from "@/components/sites/nafas/en/products/testimonials";
import { Breadcrumbs, ButtonLink, CallToAction, SectionHeading } from "@/components/sites/nafas/en/shared/sections";
import { ProductGrid } from "@/components/sites/nafas/en/products/catalog";
import { ProductGallery } from "@/components/sites/nafas/en/products/gallery";
import { QuoteButton, QuoteCart } from "@/components/sites/nafas/en/products/quote";
import { ProductCertificates } from "@/components/sites/nafas/en/products/certificates";
import '@/components/sites/nafas/inner-pages.css';
import styles from '@/components/sites/nafas/products/products.module.css';

type Props = { params: Promise<{ kategori: string; slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return products.map((product) => ({ kategori: product.category, slug: product.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori, slug } = await params;
  const product = products.find((item) => item.category === kategori && item.slug === slug);
  if (!product) notFound();
  return { title: product.name, description: `Information and specifications for ${product.name} from NAFAS Bajakimia. Contact us for product enquiries.` };
}

export default async function ProductPage({ params }: Props) {
  const { kategori, slug } = await params;
  const product = products.find((item) => item.category === kategori && item.slug === slug);
  const category = getCategory(kategori);
  if (!product || !category) notFound();
  const related = categoryProducts(kategori).filter((item) => item.slug !== slug).slice(0, 4);
  return <div className="figma-page product-inner-page"><div className={`wide-container ${styles.detailWrap}`}><div className={styles.detailBreadcrumb}><Breadcrumbs items={[{ label: "Products", href: "/en/produk" }, { label: category.name, href: `/en/produk/${kategori}` }, { label: product.name === category.name ? `Information ${product.name}` : product.name }]} /></div><section className={`product-detail ${styles.detailGrid}`}>
    <ProductGallery name={product.name} images={["/sites/nafas/figma/product-bag.png", "/sites/nafas/figma/product-back.png"]} />
    <div className={styles.detailInfo}><h1 className={styles.detailTitle}>{product.name}</h1><p><strong>Product Category:</strong> {category.name}</p>{product.specs.length ? <table className={`product-specs ${styles.specs}`}><caption className="sr-only">Specifications {product.name}</caption><tbody>{product.specs.map((spec) => <tr key={spec.label}><th scope="row">{spec.label}</th><td>{spec.value}</td></tr>)}</tbody></table> : <p className={styles.description}>Please contact us for blended fertilizer formulations and specifications.</p>}{product.description && <p className={styles.description}>{product.description}</p>}{product.note && <p className={styles.description}>{product.note}</p>}<div className="actions"><QuoteButton slug={product.slug} name={product.name} /><QuoteCart /><ButtonLink href={`/en/hubungi-kami?produk=${encodeURIComponent(product.name)}`}>Send Enquiry</ButtonLink>{product.brochureUrl ? <a className="button button-outline" href={product.brochureUrl} download>Download Brochure</a> : <button className="button button-outline" type="button" disabled title="Brochure not yet available">Download Brochure</button>}</div><details className={styles.documents}><summary>Product Documents</summary><p className="product-document-unavailable">The brochure, Material Safety Data Sheet (MSDS) and Certificate of Analysis (COA) are not yet available for download. Please contact us for product documents.</p></details></div>
  </section></div><ProductCertificates /><ProductTestimonials /><section className={`container ${styles.related}`}><SectionHeading label="Products" center>Related <span className="green">Products</span></SectionHeading><ProductGrid items={related} /></section><CallToAction /></div>;
}
