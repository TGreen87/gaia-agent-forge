// Plausible event stubs (wiring later). Use in client components only.

export type GaiaEvent = 
  | 'playbook_downloaded' 
  | 'discovery_booked' 
  | 'demo_run'
  | 'view_proof'
  | 'view_pilot_plan'
  | 'view_search_with_citations'
  | 'webvitals_cls'
  | 'webvitals_inp'
  | 'webvitals_lcp'
  | 'webvitals_fid'

type PlausibleFn = (event: string, options?: { props?: Record<string, string | number | boolean> }) => void

declare global {
  interface Window {
    plausible?: PlausibleFn
  }
}

export function logEvent(event: GaiaEvent, props?: Record<string, string | number | boolean>): void {
  try {
    if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
      window.plausible(event, props ? { props } : undefined)
    }
  } catch {
    // no-op
  }
}


