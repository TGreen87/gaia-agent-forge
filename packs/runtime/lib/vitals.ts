import { onCLS, onINP, onLCP } from 'web-vitals';
export function initWebVitals() {
  if (typeof window === 'undefined') return;
  const send = (n: string, v: number) => {
    try { /* @ts-ignore */ window.plausible && window.plausible(n, { props: { value: Math.round(v) } }); } catch {}
  };
  onCLS(m => send('webvitals_cls', m.value));
  onINP(m => send('webvitals_inp', m.value));
  onLCP(m => send('webvitals_lcp', m.value));
}