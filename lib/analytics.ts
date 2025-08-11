// Plausible event stubs (wiring later). Use in client components only.

export type GaiaEvent = 'playbook_downloaded' | 'discovery_booked' | 'demo_run'

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


