import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, categoryProducts, getCategory } from '@/lib/nafas/products';
import { CallToAction, PageHero, SectionHeading } from '@/components/sites/nafas/shared/sections';
import { ProductAudience, ProductBenefits, ProductGrid } from '@/components/sites/nafas/products/catalog';
import styles from '@/components/sites/nafas/products/products.module.css';

type Props = { params: Promise<{ kategori: string }>; searchParams: Promise<{ page?: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return categories.map((category) => ({ kategori: category.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).kategori);
  if (!category) notFound();
  return { title: category.name, description: `Rangkaian ${category.name} NAFAS Bajakimia. Terokai maklumat dan spesifikasi produk untuk keperluan pertanian anda.` };
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
    ? 'NAFAS Bajakimia Sdn. Bhd. menyediakan rangkaian Baja Tunggal yang lengkap untuk memenuhi keperluan nutrien tanaman secara khusus di sektor pertanian dan perladangan di seluruh Malaysia. Produk yang ditawarkan merangkumi Urea Prill (UP), Urea Granular (UG), Muriate of Potash (MOP), Phosphate Rock (CIRP / ERP), Ammonium Sulphate (AS), Ammonium Chloride (AC), Borate (B), Zeolite (Zeo), Ground Magnesium Limestone (GML), Calcium Magnesium Carbonate (Dolomite), Kieserite (Kies) dan Magnesium Oxide (MgO), yang diformulasikan selaras dengan piawaian industri dan keperluan nutrien tanaman yang berbeza.'
    : `NAFAS Bajakimia Sdn. Bhd. menyediakan rangkaian ${category.name} untuk memenuhi keperluan sektor pertanian dan perladangan di seluruh Malaysia. Setiap produk diformulasikan selaras dengan piawaian industri dan keperluan nutrien tanaman yang berbeza.`;

  return <div className="figma-page product-category-page"><PageHero title={category.name} image="/sites/nafas/figma/category-background.png" foreground="/sites/nafas/figma/category-bags.png" className="product-category-hero"><p>{description}</p></PageHero><ProductAudience /><ProductBenefits /><section className={`container ${styles.listing}`}><SectionHeading label="Produk" center>Rangkaian <span className="green">{category.name}</span></SectionHeading><ProductGrid items={visibleItems} />{pages > 1 && <nav className={styles.pagination} aria-label="Halaman produk">{page > 1 ? <Link href={page === 2 ? `/produk/${category.slug}` : `/produk/${category.slug}?page=${page - 1}`}>Sebelumnya</Link> : <span aria-disabled="true">Sebelumnya</span>}{Array.from({ length: pages }, (_, index) => index + 1).map(number => <Link key={number} href={number === 1 ? `/produk/${category.slug}` : `/produk/${category.slug}?page=${number}`} aria-current={page === number ? 'page' : undefined}>{number}</Link>)}{page < pages ? <Link href={`/produk/${category.slug}?page=${page + 1}`}>Seterusnya</Link> : <span aria-disabled="true">Seterusnya</span>}</nav>}</section><CallToAction /></div>;
}
