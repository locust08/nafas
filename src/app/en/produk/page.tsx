// Generated from the BM design source by scripts/generate-english.mjs.
import type { Metadata } from 'next';
import Link from 'next/link';
import { categories, categoryProducts } from "@/lib/nafas/en/products";
import { CallToAction, Media, PageHero, SectionHeading } from "@/components/sites/nafas/en/shared/sections";
import { ProductAudience, ProductBenefits } from "@/components/sites/nafas/en/products/catalog";
import styles from '@/components/sites/nafas/products/products.module.css';

export const metadata: Metadata = { title: "Our Products", description: "Explore NAFAS Bajakimia's seven fertilizer categories: straight, high grade, compound, compacted compound, foliar, organic and blended." };

export default function ProductsPage() {
  return <div className="figma-page products-overview"><PageHero title="Our Products" image="/sites/nafas/figma/category-background.png" foreground="/sites/nafas/figma/category-bags.png" className="product-category-hero"><p>NAFAS Bajakimia Sdn. Bhd. offers a range of fertilizers to meet the needs of agriculture and plantations throughout Malaysia.</p><p>Explore our seven fertilizer categories and product information.</p></PageHero><ProductAudience /><ProductBenefits /><section className={`container ${styles.listing}`}><SectionHeading label="Products" center>Overview <span className="green">Products</span></SectionHeading><div className={`${styles.grid} ${styles.overviewCards}`}>{categories.map(category => <Link key={category.slug} href={`/en/produk/${category.slug}`} className={`product-card ${styles.card}`}><Media src="/sites/nafas/figma/product-bag.png" alt={`Sample image ${category.name}`} /><p>Product Categories</p><h3>{category.name}</h3><span className="sr-only">{categoryProducts(category.slug).length} products — View All</span></Link>)}</div></section><CallToAction /></div>;
}
