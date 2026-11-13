'use client';

import { useState } from 'react';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import { distributorCount, distributorStates, type Distributor } from '@/lib/nafas/distributors';
import './distributor-directory.css';

export type DistributorLabels = {
  all: string;
  filterLabel: string;
  address: string;
  phone: string;
  email: string;
  companyNo: string;
  googleMap: string;
  waze: string;
  countSuffix: string;
};

function mapLinks(distributor: Distributor, state: string) {
  const query = encodeURIComponent(`${distributor.address}, ${distributor.postcode} ${state}, Malaysia`);
  return {
    google: distributor.map ?? `https://www.google.com/maps/search/?api=1&query=${query}`,
    waze: `https://waze.com/ul?q=${query}&navigate=yes`,
  };
}

export function DistributorDirectory({ labels }: { labels: DistributorLabels }) {
  const [active, setActive] = useState('all');
  const visible = distributorStates.filter((state) => active === 'all' || state.slug === active);
  const shown = visible.reduce((total, state) => total + state.distributors.length, 0);

  return <div className="distributor-directory">
    <div className="distributor-filter" role="group" aria-label={labels.filterLabel}>
      <button type="button" className={active === 'all' ? 'active' : ''} aria-pressed={active === 'all'} onClick={() => setActive('all')}>{labels.all} ({distributorCount})</button>
      {distributorStates.map((state) => <button key={state.slug} type="button" className={active === state.slug ? 'active' : ''} aria-pressed={active === state.slug} onClick={() => setActive(state.slug)}>{state.name} ({state.distributors.length})</button>)}
    </div>
    <p className="distributor-status" role="status" aria-live="polite">{shown} {labels.countSuffix}</p>
    <div className="distributor-grid">
      {visible.flatMap((state) => state.distributors.map((distributor) => {
        const links = mapLinks(distributor, state.name);
        return <article key={`${state.slug}-${distributor.name}`} className="distributor-card">
          <div className="distributor-card-header">
            <h3>{distributor.name}</h3>
            <span className="distributor-badge">{state.name}</span>
          </div>
          <div className="distributor-info-list">
            <div className="distributor-info-row"><MapPin size={16} aria-hidden="true" /><div><strong>{labels.address}:</strong><br />{distributor.address}, {distributor.postcode} {state.name}.</div></div>
            <div className="distributor-info-row"><Phone size={16} aria-hidden="true" /><div><strong>{labels.phone}:</strong><br />{distributor.phones.map((phone, index) => <span key={phone}>{index > 0 && ' / '}<a href={`tel:${phone.replace(/[^\d+]/g, '')}`}>{phone}</a></span>)}</div></div>
            {distributor.email && <div className="distributor-info-row"><Mail size={16} aria-hidden="true" /><div><strong>{labels.email}:</strong><br /><a href={`mailto:${distributor.email}`}>{distributor.email}</a></div></div>}
            {distributor.regNo && <div className="distributor-info-row"><Building2 size={16} aria-hidden="true" /><div><strong>{labels.companyNo}:</strong><br />{distributor.registrar ? `${distributor.registrar} ` : ''}{distributor.regNo}</div></div>}
          </div>
          <div className="distributor-actions">
            <a className="distributor-map" href={links.google} target="_blank" rel="noopener noreferrer"><i className="distributor-map-icon map-pin" aria-hidden="true" /><span>{labels.googleMap}</span></a>
            <a className="distributor-map waze" href={links.waze} target="_blank" rel="noopener noreferrer"><i className="distributor-map-icon waze-logo" aria-hidden="true" /><span>{labels.waze}</span></a>
          </div>
        </article>;
      }))}
    </div>
  </div>;
}
