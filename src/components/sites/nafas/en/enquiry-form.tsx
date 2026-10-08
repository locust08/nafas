// Generated from the BM design source by scripts/generate-english.mjs.
'use client';
import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { enquiryOptions } from "@/lib/nafas/en/enquiry-options";
const states = ['Johor','Kedah','Kelantan','Melaka','Negeri Sembilan','Pahang','Pulau Pinang','Perak','Perlis','Sabah','Sarawak','Selangor','Terengganu','Kuala Lumpur','Labuan','Putrajaya'];
export function EnquiryForm({ product = '' }: { product?: string }) {
  const [email, setEmail] = useState('');
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = ["Products","Name","Phone","Email","Company","State","Crop Type","Farm Size","Enquiry Type","Enquiry"].map(label => `${label}: ${String(data.get(label) ?? '').trim()}`).join('\n\n');
    setEmail(`mailto:info@nafas.com.my?subject=${encodeURIComponent(`NAFAS Bajakimia Enquiry — ${data.get("Enquiry Type")}`)}&body=${encodeURIComponent(body)}`);
  }
  return <form className="contact-form" onSubmit={prepare} onChange={() => setEmail('')}>
    {product && <input type="hidden" name="Products" value={product} />}
    <div className="field"><label htmlFor="nama">Name <span aria-hidden="true">*</span></label><input id="nama" name="Name" required autoComplete="name" maxLength={120}/></div>
    <div className="field"><label htmlFor="telefon">Phone Number</label><input id="telefon" name="Phone" type="tel" autoComplete="tel" maxLength={40}/></div>
    <div className="field"><label htmlFor="emel">Email <span aria-hidden="true">*</span></label><input id="emel" name="Email" type="email" required autoComplete="email" maxLength={200}/></div>
    <div className="field"><label htmlFor="syarikat">Company Name</label><input id="syarikat" name="Company" autoComplete="organization" maxLength={200}/></div>
    <div className="field"><label htmlFor="negeri">State <span aria-hidden="true">*</span></label><select id="negeri" name="State" required defaultValue=""><option value="" disabled>Select a state</option>{states.map(state => <option key={state}>{state}</option>)}</select></div>
    <div className="field"><label htmlFor="tanaman">Crop Type</label><select id="tanaman" name="Crop Type" defaultValue=""><option value="">Select a crop type</option>{enquiryOptions.crops.map(option => <option key={option}>{option}</option>)}</select></div>
    <div className="field"><label htmlFor="luas">Farm Size</label><select id="luas" name="Farm Size" defaultValue=""><option value="">Select farm size</option>{enquiryOptions.landSizes.map(option => <option key={option}>{option}</option>)}</select></div>
    <div className="field"><label htmlFor="jenis">Enquiry Type <span aria-hidden="true">*</span></label><select id="jenis" name="Enquiry Type" required defaultValue=""><option value="" disabled>Select enquiry type</option>{enquiryOptions.types.map(option => <option key={option}>{option}</option>)}</select></div>
    <div className="field full-width"><label htmlFor="pertanyaan">Message <span aria-hidden="true">*</span></label><textarea id="pertanyaan" name="Enquiry" required minLength={10} maxLength={3000} rows={6}/></div>
    <p className="full-width muted">Prepare your enquiry to send through your email application. Fields marked * are required.</p>
    <button className="button" type="submit">Prepare Enquiry<ArrowRight size={20}/></button>
    {email && <div className="full-width form-status" role="status"><p>Your enquiry is ready for review. Open your email application to send it to info@nafas.com.my.</p><a className="button" href={email}><Mail size={18}/>Open Email Application</a></div>}
  </form>;
}
