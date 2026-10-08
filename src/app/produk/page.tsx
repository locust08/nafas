import type { Metadata } from 'next';
import Link from 'next/link';
import { categories, categoryProducts } from '@/lib/nafas/products';
import { CallToAction, Media, PageHero, SectionHeading } from '@/components/sites/nafas/shared/sections';
import { ProductAudience, ProductBenefits } from '@/components/sites/nafas/products/catalog';
import styles from '@/components/sites/nafas/products/products.module.css';

export const metadata: Metadata = { title: 'Produk Kami', description: 'Terokai tujuh kategori baja NAFAS Bajakimia: baja tunggal, gred tinggi, sebatian, sebatian kompak, foliar, organik dan campuran.' };

export default function ProductsPage() {
  return <div className="figma-page products-overview"><PageHero title="Produk Kami" image="/sites/nafas/figma/category-background.png" foreground="/sites/nafas/figma/category-bags.png" className="product-category-hero"><p>NAFAS Bajakimia Sdn. Bhd. menyediakan rangkaian baja untuk memenuhi keperluan sektor pertanian dan perladangan di seluruh Malaysia.</p><p>Terokai tujuh kategori baja dan maklumat produk kami.</p></PageHero><ProductAudience /><ProductBenefits /><section className={`container ${styles.listing}`}><SectionHeading label="Produk" center>Gambaran Keseluruhan <span className="green">Produk</span></SectionHeading><div className={`${styles.grid} ${styles.overviewCards}`}>{categories.map(category => <Link key={category.slug} href={`/produk/${category.slug}`} className={`product-card ${styles.card}`}><Media src="/sites/nafas/figma/product-bag.png" alt={`Contoh imej ${category.name}`} /><p>Kategori Produk</p><h3>{category.name}</h3><span className="sr-only">{categoryProducts(category.slug).length} produk — Lihat Semua</span></Link>)}</div></section><CallToAction /></div>;
}
