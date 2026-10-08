'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Media } from '../shared/sections';

export function ProductCertificates() {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  useEffect(() => {
    const node = track.current;
    if (!node) return;
    const update = () => setEdges({ start: node.scrollLeft < 2, end: node.scrollLeft + node.clientWidth >= node.scrollWidth - 2 });
    const resize = new ResizeObserver(update);
    resize.observe(node);
    node.addEventListener('scroll', update, { passive: true });
    update();
    return () => { resize.disconnect(); node.removeEventListener('scroll', update); };
  }, []);
  function move(direction: number) {
    const node = track.current;
    if (!node) return;
    const card = node.firstElementChild?.getBoundingClientRect().width ?? node.clientWidth;
    const gap = Number.parseFloat(getComputedStyle(node).columnGap) || 0;
    node.scrollBy({ left: direction * (card + gap), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  return <section className="product-certificates" aria-label="Persijilan Produk"><h2 className="sr-only">Persijilan NAFAS Bajakimia — contoh sijil</h2><div className="product-certificate-controls"><button className="resource-arrow" type="button" disabled={edges.start} onClick={() => move(-1)} aria-label="Persijilan Produk sebelumnya"><ArrowLeft /></button><button className="resource-arrow" type="button" disabled={edges.end} onClick={() => move(1)} aria-label="Persijilan Produk seterusnya"><ArrowRight /></button></div><div ref={track} className="product-certificate-track" tabIndex={0} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } }} aria-label="Sijil contoh, tatal untuk melihat">{[1, 2, 3, 4].map(id => <figure key={id}><Media src="/sites/nafas/figma/product-certificate.png" alt={`Contoh sijil ${id}`} /><figcaption className="sr-only">Contoh sijil {id} — dokumen produk sebenar menunggu pengesahan</figcaption></figure>)}</div></section>;
}
