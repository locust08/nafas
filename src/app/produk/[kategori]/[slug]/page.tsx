import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categoryProducts, getCategory, products } from '@/lib/nafas/products';
import { ProductTestimonials } from '@/components/sites/nafas/products/testimonials';
import { Breadcrumbs, ButtonLink, CallToAction, SectionHeading } from '@/components/sites/nafas/shared/sections';
import { ProductGrid } from '@/components/sites/nafas/products/catalog';
import { ProductGallery } from '@/components/sites/nafas/products/gallery';
import { QuoteButton, QuoteCart } from '@/components/sites/nafas/products/quote';
import { ProductCertificates } from '@/components/sites/nafas/products/certificates';
import '@/components/sites/nafas/inner-pages.css';
import styles from '@/components/sites/nafas/products/products.module.css';

type Props = { params: Promise<{ kategori: string; slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return products.map((product) => ({ kategori: product.category, slug: product.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori, slug } = await params;
  const product = products.find((item) => item.category === kategori && item.slug === slug);
  if (!product) notFound();
  return { title: product.name, description: `Maklumat dan spesifikasi ${product.name} NAFAS Bajakimia. Hubungi kami untuk pertanyaan produk.` };
}

export default async function ProductPage({ params }: Props) {
  const { kategori, slug } = await params;
  const product = products.find((item) => item.category === kategori && item.slug === slug);
  const category = getCategory(kategori);
  if (!product || !category) notFound();
  const related = categoryProducts(kategori).filter((item) => item.slug !== slug).slice(0, 4);
  return <div className="figma-page product-inner-page"><div className={`wide-container ${styles.detailWrap}`}><div className={styles.detailBreadcrumb}><Breadcrumbs items={[{ label: 'Produk', href: '/produk' }, { label: category.name, href: `/produk/${kategori}` }, { label: product.name === category.name ? `Maklumat ${product.name}` : product.name }]} /></div><section className={`product-detail ${styles.detailGrid}`}>
    <ProductGallery name={product.name} images={["/sites/nafas/figma/product-bag.png", "/sites/nafas/figma/product-back.png"]} />
    <div className={styles.detailInfo}><h1 className={styles.detailTitle}>{product.name}</h1><p><strong>Kategori Produk:</strong> {category.name}</p>{product.specs.length ? <table className={`product-specs ${styles.specs}`}><caption className="sr-only">Spesifikasi {product.name}</caption><tbody>{product.specs.map((spec) => <tr key={spec.label}><th scope="row">{spec.label}</th><td>{spec.value}</td></tr>)}</tbody></table> : <p className={styles.description}>Sila hubungi kami untuk maklumat formulasi dan spesifikasi baja campuran.</p>}{product.description && <p className={styles.description}>{product.description}</p>}{product.note && <p className={styles.description}>{product.note}</p>}<div className="actions"><QuoteButton slug={product.slug} name={product.name} /><QuoteCart /><ButtonLink href={`/hubungi-kami?produk=${encodeURIComponent(product.name)}`}>Hantar Pertanyaan</ButtonLink>{product.brochureUrl ? <a className="button button-outline" href={product.brochureUrl} download>Muat Turun Brosur</a> : <button className="button button-outline" type="button" disabled title="Brosur belum tersedia">Muat Turun Brosur</button>}</div><details className={styles.documents}><summary>Dokumen Produk</summary><p className="product-document-unavailable">Brosur, Material Safety Data Sheet (MSDS) dan Certificate of Analysis (COA) belum tersedia untuk dimuat turun. Sila hubungi kami untuk dokumen produk.</p></details></div>
  </section></div><ProductCertificates /><ProductTestimonials /><section className={`container ${styles.related}`}><SectionHeading label="Produk" center>Produk <span className="green">Berkaitan</span></SectionHeading><ProductGrid items={related} /></section><CallToAction /></div>;
}
