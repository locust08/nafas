'use client';

import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Download, FileText, X } from 'lucide-react';
import type { MonthlyPoster, SustainabilityReport } from '@/lib/nafas/resources';
import { Media } from './shared/sections';

const months = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];

export function MonthlyPosters({ items }: { items: MonthlyPoster[] }) {
  const years = [...new Set(items.map(item => item.year))].sort((a, b) => b - a);
  const [year, setYear] = useState(years[0]);
  const [start, setStart] = useState(0);
  const [selected, setSelected] = useState<MonthlyPoster | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const posters = items.filter(item => item.year === year).sort((a, b) => b.month - a.month);
  function show(poster: MonthlyPoster) { setSelected(poster); dialog.current?.showModal(); }
  return <div className="monthly-posters">
    <div className="poster-navigation">{years.length > 1 ? <nav className="resource-years" aria-label="Tahun poster">{years.map(value => <button key={value} type="button" aria-pressed={value === year} onClick={() => { setYear(value); setStart(0); }}>{value}</button>)}</nav> : <p className="resource-single-year">{year ?? '2026'}</p>}
    <div className="poster-months" aria-label="Bulan tersedia">{posters.map((poster) => <button key={poster.id} type="button" onClick={() => show(poster)}>{months[poster.month - 1]}</button>)}</div></div>
    {posters.length ? <div className="monthly-poster-gallery"><button type="button" className="resource-arrow" aria-label="Poster sebelumnya" disabled={start === 0} onClick={() => setStart(value => Math.max(0, value - 1))}><ArrowLeft /></button><div className="monthly-poster-grid">{posters.slice(start, start + 3).map(poster => <button key={poster.id} type="button" className="monthly-poster-card" onClick={() => show(poster)}><Media src={poster.image} alt={poster.title} sizes="(max-width: 767px) 85vw, 20vw" /><span>Poster {poster.month === 9 ? "Sep" : months[poster.month - 1]} {poster.year}</span></button>)}</div><button type="button" className="resource-arrow" aria-label="Poster seterusnya" disabled={start >= posters.length - 3} onClick={() => setStart(value => Math.min(Math.max(0, posters.length - 3), value + 1))}><ArrowRight /></button></div> : <p className="resource-empty">Poster baharu akan dikemas kini di sini.</p>}
    <dialog ref={dialog} className="resource-dialog poster-preview-dialog" aria-labelledby="poster-preview-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} onClose={() => setSelected(null)}><button type="button" className="resource-close" aria-label="Tutup poster" onClick={() => dialog.current?.close()}><X /></button>{selected && <><Media src={selected.image} alt={selected.title} className="contain" sizes="(max-width: 767px) 90vw, 600px" /><div><p className="eyebrow">{months[selected.month - 1]} {selected.year}</p><h3 id="poster-preview-title">{selected.title}</h3><p>{selected.description}</p>{selected.sample && <p className="resource-sample">Poster contoh — kandungan akhir menunggu pengesahan.</p>}</div></>}</dialog>
  </div>;
}

export function ReportLibrary({ items }: { items: SustainabilityReport[] }) {
  const [selected, setSelected] = useState<SustainabilityReport | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  return <div className="report-library"><div className="report-years" aria-label="Tahun laporan">{[...new Set(items.map(item => item.year))].map(year => <span key={year}>{year}</span>)}</div>{items.map(report => <article className="sustainability-report" key={report.id}><Media src={report.cover} alt={`Kulit ${report.title}`} sizes="(max-width: 767px) 70vw, 264px" /><div><h3>{report.title}</h3><p>{report.description}</p><button type="button" className="button" onClick={() => { setSelected(report); dialog.current?.showModal(); }}>Lihat Laporan <ArrowRight size={22} /></button></div></article>)}{!items.length && <p className="resource-empty">Laporan baharu akan dikemas kini di sini.</p>}
    <dialog ref={dialog} className="resource-dialog report-preview-dialog" aria-labelledby="report-preview-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} onClose={() => setSelected(null)}><button className="resource-close" type="button" aria-label="Tutup laporan" onClick={() => dialog.current?.close()}><X /></button>{selected && <><div className="report-file-preview">{selected.pdfUrl ? <iframe src={selected.pdfUrl} title={`Pratonton ${selected.title}`} /> : <><FileText size={54} aria-hidden="true" /><p>Pratonton PDF belum tersedia</p><span>Fail laporan akan ditambah apabila dibekalkan.</span></>}</div><div><p className="eyebrow">Laporan — {selected.year}</p><h3 id="report-preview-title">{selected.title}</h3><p>{selected.description}</p>{selected.pdfUrl ? <a className="button" href={selected.pdfUrl} download><Download size={20} />Muat Turun PDF</a> : <button type="button" className="button" disabled><Download size={20} />Muat Turun PDF</button>}{selected.sample && <p className="resource-sample">Contoh susun atur — laporan belum diterbitkan.</p>}</div></>}</dialog>
  </div>;
}
