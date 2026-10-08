// Generated from the BM design source by scripts/generate-english.mjs.
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, X } from 'lucide-react';
import { productHref, products } from "@/lib/nafas/en/products";

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
  }}><ShoppingBag size={19} aria-hidden="true" />{added ? "Added to Quote" : "Add to Quote"}<span className="sr-only">: {name}</span></button>;
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
  return <div className="quote-cart" onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}><button type="button" className="quote-trigger button button-outline" aria-label={`Quote, ${selected.length} products`} aria-expanded={open} onClick={() => setOpen(value => !value)}><ShoppingBag size={22} aria-hidden="true" />Cart <span>{selected.length}</span></button>{open && <div className="quote-panel"><div className="quote-panel-heading"><strong>Quote</strong><button type="button" aria-label="Close quote" onClick={() => setOpen(false)}><X size={18} /></button></div>{selected.length ? <><ul>{selected.map(product => <li key={product.slug}><Link href={productHref(product)} onClick={() => setOpen(false)}>{product.name}</Link><button type="button" aria-label={`Remove ${product.name}`} onClick={() => writeQuote(items.filter(slug => slug !== product.slug))}><X size={16}/></button></li>)}</ul><Link className="button" href={`/en/hubungi-kami?produk=${encodeURIComponent(selected.map(product => product.name).join(', '))}`} onClick={() => setOpen(false)}>Send Enquiry</Link></> : <p>No products selected yet.</p>}</div>}</div>;
}
