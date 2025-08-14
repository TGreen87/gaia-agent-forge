export function track(name: string, props?: Record<string, any>) {
  if (typeof window === 'undefined') return;
  try { /* @ts-ignore */ window.plausible && window.plausible(name, { props }); } catch {}
}