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
  return <div className="figma-page product-category-page"><PageHero title={category.name} image="/sites/nafas/figma/category-background.png" foreground="/sites/nafas/figma/category-bags.png" className="product-category-hero"><p>{category.slug === 'baja-tunggal' ? 'NAFAS Bajakimia Sdn. Bhd. menyediakan rangkaian Baja Tunggal yang lengkap untuk memenuhi keperluan nutrien tanaman secara khusus di sektor pertanian dan perladangan di seluruh Malaysia.' : `NAFAS Bajakimia Sdn. Bhd. menyediakan rangkaian ${category.name} untuk memenuhi keperluan sektor pertanian dan perladangan di seluruh Malaysia.`}</p><p>Produk yang ditawarkan merangkumi {items.map((product) => product.name).join(', ')}{category.slug === 'baja-tunggal' ? ', yang diformulasikan selaras dengan piawaian industri dan keperluan nutrien tanaman yang berbeza.' : '.'}</p></PageHero><ProductAudience /><ProductBenefits /><section className={`container ${styles.listing}`}><SectionHeading label="Produk" center>Rangkaian <span className="green">{category.name}</span></SectionHeading><ProductGrid items={visibleItems} />{pages > 1 && <nav className={styles.pagination} aria-label="Halaman produk"><Link href={page === 2 ? `/produk/${category.slug}` : `/produk/${category.slug}?page=${page - 1}`} aria-disabled={page === 1} tabIndex={page === 1 ? -1 : undefined}>Sebelumnya</Link>{Array.from({ length: pages }, (_, index) => index + 1).map(number => <Link key={number} href={number === 1 ? `/produk/${category.slug}` : `/produk/${category.slug}?page=${number}`} aria-current={page === number ? 'page' : undefined}>{number}</Link>)}<Link href={`/produk/${category.slug}?page=${page + 1}`} aria-disabled={page === pages} tabIndex={page === pages ? -1 : undefined}>Seterusnya</Link></nav>}</section><CallToAction /></div>;
}
