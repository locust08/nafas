'use client';
import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { enquiryOptions } from '@/lib/nafas/enquiry-options';
const states = ['Johor','Kedah','Kelantan','Melaka','Negeri Sembilan','Pahang','Pulau Pinang','Perak','Perlis','Sabah','Sarawak','Selangor','Terengganu','Kuala Lumpur','Labuan','Putrajaya'];
export function EnquiryForm({ product = '' }: { product?: string }) {
  const [email, setEmail] = useState('');
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = ['Produk','Nama','Telefon','E-mel','Syarikat','Negeri','Jenis Tanaman','Luas Ladang','Jenis Pertanyaan','Pertanyaan'].map(label => `${label}: ${String(data.get(label) ?? '').trim()}`).join('\n\n');
    setEmail(`mailto:info@nafas.com.my?subject=${encodeURIComponent(`Pertanyaan NAFAS Bajakimia — ${data.get('Jenis Pertanyaan')}`)}&body=${encodeURIComponent(body)}`);
  }
  return <form className="contact-form" onSubmit={prepare} onChange={() => setEmail('')}>
    {product && <input type="hidden" name="Produk" value={product} />}
    <div className="field"><label htmlFor="nama">Nama <span aria-hidden="true">*</span></label><input id="nama" name="Nama" required autoComplete="name" maxLength={120}/></div>
    <div className="field"><label htmlFor="telefon">Nombor Telefon</label><input id="telefon" name="Telefon" type="tel" autoComplete="tel" maxLength={40}/></div>
    <div className="field"><label htmlFor="emel">E-mel <span aria-hidden="true">*</span></label><input id="emel" name="E-mel" type="email" required autoComplete="email" maxLength={200}/></div>
    <div className="field"><label htmlFor="syarikat">Nama Syarikat</label><input id="syarikat" name="Syarikat" autoComplete="organization" maxLength={200}/></div>
    <div className="field"><label htmlFor="negeri">Negeri <span aria-hidden="true">*</span></label><select id="negeri" name="Negeri" required defaultValue=""><option value="" disabled>Pilih negeri</option>{states.map(state => <option key={state}>{state}</option>)}</select></div>
    <div className="field"><label htmlFor="tanaman">Jenis Tanaman</label><select id="tanaman" name="Jenis Tanaman" defaultValue=""><option value="">Pilih jenis tanaman</option>{enquiryOptions.crops.map(option => <option key={option}>{option}</option>)}</select></div>
    <div className="field"><label htmlFor="luas">Luas Ladang</label><select id="luas" name="Luas Ladang" defaultValue=""><option value="">Pilih keluasan</option>{enquiryOptions.landSizes.map(option => <option key={option}>{option}</option>)}</select></div>
    <div className="field"><label htmlFor="jenis">Jenis Pertanyaan <span aria-hidden="true">*</span></label><select id="jenis" name="Jenis Pertanyaan" required defaultValue=""><option value="" disabled>Pilih jenis pertanyaan</option>{enquiryOptions.types.map(option => <option key={option}>{option}</option>)}</select></div>
    <div className="field full-width"><label htmlFor="pertanyaan">Mesej <span aria-hidden="true">*</span></label><textarea id="pertanyaan" name="Pertanyaan" required minLength={10} maxLength={3000} rows={6}/></div>
    <p className="full-width muted">Sediakan pertanyaan anda untuk dihantar melalui aplikasi e-mel. Medan bertanda * diperlukan.</p>
    <button className="button" type="submit">Sediakan Pertanyaan<ArrowRight size={20}/></button>
    {email && <div className="full-width form-status" role="status"><p>Pertanyaan anda sedia untuk disemak. Buka aplikasi e-mel untuk menghantarnya kepada info@nafas.com.my.</p><a className="button" href={email}><Mail size={18}/>Buka Aplikasi E-mel</a></div>}
  </form>;
}
