// Generated from the BM design source by scripts/generate-english.mjs.
'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { sampleTestimonials } from "@/lib/nafas/en/testimonials";
import { Media } from '../shared/sections';

export function ProductTestimonials() {
  const [active, setActive] = useState(0);
  const item = sampleTestimonials[active];
  return <section className="container product-testimonials" aria-label="Sample testimonials"><div className="testimonial-feature"><button type="button" className="resource-arrow" disabled={active === 0} aria-label="Previous testimonial" onClick={() => setActive(value => value - 1)}><ArrowLeft /></button><Media src="/sites/nafas/figma/testimonial-image.png" alt="Sample fertilizer application on a farm" /><blockquote key={item.id} className="testimonial-copy" aria-live="polite"><p className="eyebrow">Testimonials</p><h2>{item.title}</h2><p>{item.quote}</p><footer><strong>{item.attribution}</strong><br />{item.role}<br /><span>{item.location}</span><small className="testimonial-sample">Sample testimonial — not yet verified</small></footer></blockquote><button type="button" className="resource-arrow testimonial-next" disabled={active === sampleTestimonials.length - 1} aria-label="Next testimonial" onClick={() => setActive(value => value + 1)}><ArrowRight /></button></div><div className="testimonial-dots" aria-label="Select testimonial">{sampleTestimonials.map((sample, index) => <button key={sample.id} type="button" aria-label={`Testimonials ${index + 1}`} aria-pressed={index === active} onClick={() => setActive(index)} />)}</div></section>;
}
