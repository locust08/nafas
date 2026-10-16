// Generated from the BM design source by scripts/generate-english.mjs.
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, categoryProducts, getCategory } from "@/lib/nafas/en/products";
import { CallToAction, PageHero, SectionHeading } from "@/components/sites/nafas/en/shared/sections";
import { ProductAudience, ProductBenefits, ProductGrid } from "@/components/sites/nafas/en/products/catalog";
import styles from '@/components/sites/nafas/products/products.module.css';

type Props = { params: Promise<{ kategori: string }>; searchParams: Promise<{ page?: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return categories.map((category) => ({ kategori: category.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).kategori);
  if (!category) notFound();
  return { title: category.name, description: `Range of ${category.name} from NAFAS Bajakimia. Explore product information and specifications for your agricultural needs.` };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const category = getCategory((await params).kategori);
  if (!category) notFound();
  const items = categoryProducts(category.slug);
  const pages = Math.max(1, Math.ceil(items.length / 12));
  const requested = Number((await searchParams).page);
  const page = Number.isInteger(requested) && requested > 0 ? Math.min(requested, pages) : 1;
  const visibleItems = items.slice((page - 1) * 12, page * 12);
  const description = category.slug === 'baja-tunggal'
    ? 'NAFAS Bajakimia Sdn. Bhd. offers a complete range of straight fertilizers for the specific nutrient requirements of crops across Malaysia’s agricultural and plantation sectors. The range includes Urea Prill (UP), Urea Granular (UG), Muriate of Potash (MOP), Phosphate Rock (CIRP / ERP), Ammonium Sulphate (AS), Ammonium Chloride (AC), Borate (B), Zeolite (Zeo), Ground Magnesium Limestone (GML), Calcium Magnesium Carbonate (Dolomite), Kieserite (Kies), and Magnesium Oxide (MgO), formulated to meet industry standards and different crop nutrient requirements.'
    : `NAFAS Bajakimia Sdn. Bhd. offers a range of ${category.name} for Malaysia’s agricultural and plantation sectors. Each product is formulated to meet industry standards and different crop nutrient requirements.`;

  return <div className="figma-page product-category-page"><PageHero title={category.name} image="/sites/nafas/figma/category-background.png" foreground="/sites/nafas/figma/category-bags.png" className="product-category-hero"><p>{description}</p></PageHero><ProductAudience /><ProductBenefits /><section className={`container ${styles.listing}`}><SectionHeading label="Products" center>Range of <span className="green">{category.name}</span></SectionHeading><ProductGrid items={visibleItems} />{pages > 1 && <nav className={styles.pagination} aria-label="Product pages">{page > 1 ? <Link href={page === 2 ? `/en/produk/${category.slug}` : `/en/produk/${category.slug}?page=${page - 1}`}>Previous</Link> : <span aria-disabled="true">Previous</span>}{Array.from({ length: pages }, (_, index) => index + 1).map(number => <Link key={number} href={number === 1 ? `/en/produk/${category.slug}` : `/en/produk/${category.slug}?page=${number}`} aria-current={page === number ? 'page' : undefined}>{number}</Link>)}{page < pages ? <Link href={`/en/produk/${category.slug}?page=${page + 1}`}>Next</Link> : <span aria-disabled="true">Next</span>}</nav>}</section><CallToAction /></div>;
}
