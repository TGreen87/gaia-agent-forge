// lib/vitals.ts
// Sends Web Vitals to Plausible as custom events. Works on static export.
import { onCLS, onINP, onLCP } from 'web-vitals';

export function initWebVitals() {
  if (typeof window === 'undefined') return;
  const send = (name: string, value: number) => {
    try {
      // @ts-ignore
      if (window.plausible) window.plausible(name, { props: { value: Math.round(value) } });
    } catch {}
  };
  onCLS((m) => send('webvitals_cls', m.value));
  onINP((m) => send('webvitals_inp', m.value));
  onLCP((m) => send('webvitals_lcp', m.value));
}
