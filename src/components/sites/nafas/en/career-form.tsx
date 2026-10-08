// Generated from the BM design source by scripts/generate-english.mjs.
'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export function CareerForm() {
  const [draft, setDraft] = useState('');
  return <form className="career-form" onChange={() => setDraft('')} onSubmit={event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Name: ${data.get('name')}
Phone: ${data.get('phone')}
Email: ${data.get('email')}
Area of interest: ${data.get('interest')}\n\n${data.get('message')}`;
    setDraft(`mailto:info@nafas.com.my?subject=${encodeURIComponent("NAFAS Bajakimia Career Enquiry")}&body=${encodeURIComponent(message)}`);
  }}>
    <div className="field"><label htmlFor="career-name">Full name *</label><input id="career-name" name="name" required autoComplete="name" maxLength={120} /></div>
    <div className="field"><label htmlFor="career-email">Email *</label><input id="career-email" name="email" type="email" required autoComplete="email" /></div>
    <div className="field"><label htmlFor="career-phone">Phone *</label><input id="career-phone" name="phone" type="tel" required autoComplete="tel" /></div>
    <div className="field"><label htmlFor="career-interest">Area of interest *</label><input id="career-interest" name="interest" required maxLength={120} /></div>
    <div className="field full-width"><label htmlFor="career-message">Brief introduction *</label><textarea id="career-message" name="message" required minLength={20} maxLength={3000} rows={5} /></div>
    <p className="full-width muted">This form prepares an email draft for your review. Attach your CV in your email application before sending. No application is submitted directly from this website.</p>
    <button type="submit" className="button">Prepare Application</button>
    {draft && <div className="full-width form-status" role="status"><p>Your draft is ready. Please attach your CV and check the recipient before sending.</p><a href={draft} className="button"><Mail size={18} /> Open Email Application</a></div>}
  </form>;
}
