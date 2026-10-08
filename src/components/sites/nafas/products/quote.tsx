'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, X } from 'lucide-react';
import { productHref, products } from '@/lib/nafas/products';

const storageKey = 'nafas-quote-products';

function readQuote(): string[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string' && products.some(product => product.slug === item)) : [];
  } catch { return []; }
}

function writeQuote(items: string[]) {
  try { localStorage.setItem(storageKey, JSON.stringify(items)); } catch { return; }
  window.dispatchEvent(new Event('nafas-quote-change'));
}

export function QuoteButton({ slug, name }: { slug: string; name: string }) {
  const [added, setAdded] = useState(false);
  useEffect(() => {
    const update = () => setAdded(readQuote().includes(slug));
    update();
    window.addEventListener('nafas-quote-change', update);
    window.addEventListener('storage', update);
    return () => { window.removeEventListener('nafas-quote-change', update); window.removeEventListener('storage', update); };
  }, [slug]);
  return <button type="button" className="button" aria-pressed={added} onClick={() => {
    const items = readQuote();
    if (!items.includes(slug)) writeQuote([...items, slug]);
  }}><ShoppingBag size={19} aria-hidden="true" />{added ? 'Dalam Sebut Harga' : 'Tambah ke Sebut Harga'}<span className="sr-only">: {name}</span></button>;
}

export function QuoteCart() {
  const [items, setItems] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setItems(readQuote());
    update();
    window.addEventListener('nafas-quote-change', update);
    window.addEventListener('storage', update);
    return () => { window.removeEventListener('nafas-quote-change', update); window.removeEventListener('storage', update); };
  }, []);
  const selected = products.filter(product => items.includes(product.slug));
  return <div className="quote-cart" onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}><button type="button" className="quote-trigger button button-outline" aria-label={`Sebut harga, ${selected.length} produk`} aria-expanded={open} onClick={() => setOpen(value => !value)}><ShoppingBag size={22} aria-hidden="true" />Troli <span>{selected.length}</span></button>{open && <div className="quote-panel"><div className="quote-panel-heading"><strong>Sebut Harga</strong><button type="button" aria-label="Tutup sebut harga" onClick={() => setOpen(false)}><X size={18} /></button></div>{selected.length ? <><ul>{selected.map(product => <li key={product.slug}><Link href={productHref(product)} onClick={() => setOpen(false)}>{product.name}</Link><button type="button" aria-label={`Buang ${product.name}`} onClick={() => writeQuote(items.filter(slug => slug !== product.slug))}><X size={16}/></button></li>)}</ul><Link className="button" href={`/hubungi-kami?produk=${encodeURIComponent(selected.map(product => product.name).join(', '))}`} onClick={() => setOpen(false)}>Hantar Pertanyaan</Link></> : <p>Belum ada produk dipilih.</p>}</div>}</div>;
}
