// Generated from the BM design source by scripts/generate-english.mjs.
'use client';

import { useEffect, useState } from 'react';
import { CalendarDays, Sprout } from 'lucide-react';

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/monthly-visitors', { signal: controller.signal })
      .then(response => response.ok ? response.json() : null)
      .then((data: unknown) => {
        if (data && typeof data === 'object' && 'count' in data && Number.isSafeInteger(data.count)) setCount(Number(data.count));
      }).catch(() => {});
    return () => controller.abort();
  }, []);
  return <div className="visitor-panel" aria-label="Visitor statistics">
    <div className="visitor-stat"><span className="visitor-icon"><Sprout size={27} aria-hidden="true" /></span><div><strong>—</strong><span>Visitors Today</span></div></div>
    <div className="visitor-stat"><span className="visitor-icon"><CalendarDays size={26} aria-hidden="true" /></span><div><strong aria-live="polite">{count === null ? '—' : count.toLocaleString('en-MY')}</strong><span>Visitors This Month</span></div></div>
  </div>;
}
