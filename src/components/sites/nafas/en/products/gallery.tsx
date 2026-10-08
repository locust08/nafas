// Generated from the BM design source by scripts/generate-english.mjs.
'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Media } from '../shared/sections';
import styles from "../../products/products.module.css";

export function ProductGallery({ name, images }: { name: string; images: string[] }) {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const move = (offset: number) => setSelected(current => (current + offset + images.length) % images.length);
  return <div className={`product-gallery ${styles.gallery}`}>
    <div className={styles.thumbnails}>{images.map((src, index) => <button key={src} type="button" aria-label={`View packaging ${index === 0 ? "front" : "back"}`} aria-pressed={selected === index} onClick={() => setSelected(index)}><Media src={src} /></button>)}</div>
    <div className={styles.mainImage} onTouchStart={event => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={event => { if (touchStart.current === null) return; const delta = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(delta) > 40) move(delta > 0 ? -1 : 1); touchStart.current = null; }}><button type="button" className={styles.zoom} aria-label={`Enlarge image ${name}`} onClick={() => dialog.current?.showModal()}><Media src={images[selected]} alt={`${name}, packaging ${selected === 0 ? "front" : "back"}`} priority /><Image className={styles.zoomIcon} src="/sites/nafas/figma/product-front.png" alt="" width={30} height={30} /></button>{images.length > 1 && <div className={styles.galleryArrows}><button type="button" onClick={() => move(-1)} aria-label="Previous image"><ArrowLeft size={20}/></button><button type="button" onClick={() => move(1)} aria-label="Next image"><ArrowRight size={20}/></button></div>}</div>
    <dialog ref={dialog} className={styles.lightbox} aria-label={`Packaging image ${name}`} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><button type="button" className={styles.close} aria-label="Close image" onClick={() => dialog.current?.close()}><X aria-hidden="true" /></button><Media src={images[selected]} alt={`Packaging ${name}`} /></dialog>
  </div>;
}
