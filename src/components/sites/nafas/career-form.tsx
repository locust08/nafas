'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export function CareerForm() {
  const [draft, setDraft] = useState('');
  return <form className="career-form" onChange={() => setDraft('')} onSubmit={event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Nama: ${data.get('name')}\nTelefon: ${data.get('phone')}\nE-mel: ${data.get('email')}\nBidang diminati: ${data.get('interest')}\n\n${data.get('message')}`;
    setDraft(`mailto:info@nafas.com.my?subject=${encodeURIComponent('Pertanyaan Kerjaya NAFAS Bajakimia')}&body=${encodeURIComponent(message)}`);
  }}>
    <div className="field"><label htmlFor="career-name">Nama penuh *</label><input id="career-name" name="name" required autoComplete="name" maxLength={120} /></div>
    <div className="field"><label htmlFor="career-email">E-mel *</label><input id="career-email" name="email" type="email" required autoComplete="email" /></div>
    <div className="field"><label htmlFor="career-phone">Telefon *</label><input id="career-phone" name="phone" type="tel" required autoComplete="tel" /></div>
    <div className="field"><label htmlFor="career-interest">Bidang diminati *</label><input id="career-interest" name="interest" required maxLength={120} /></div>
    <div className="field full-width"><label htmlFor="career-message">Pengenalan ringkas *</label><textarea id="career-message" name="message" required minLength={20} maxLength={3000} rows={5} /></div>
    <p className="full-width muted">Borang ini menyediakan draf e-mel untuk semakan anda. Lampirkan CV dalam aplikasi e-mel sebelum menghantar. Tiada permohonan dihantar terus daripada laman ini.</p>
    <button type="submit" className="button">Sediakan Permohonan</button>
    {draft && <div className="full-width form-status" role="status"><p>Draf sedia. Sila lampirkan CV dan semak penerima sebelum menghantar.</p><a href={draft} className="button"><Mail size={18} /> Buka Aplikasi E-mel</a></div>}
  </form>;
}
