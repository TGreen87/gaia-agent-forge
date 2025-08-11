// Plausible event stubs (wiring later). Use in client components only.

export type GaiaEvent = 'playbook_downloaded' | 'discovery_booked' | 'demo_run'

export function logEvent(event: GaiaEvent, props?: Record<string, string | number | boolean>) {
  try {
    // @ts-ignore - plausible may not exist yet
    if (typeof window !== 'undefined' && (window as any).plausible) {
      // @ts-ignore
      (window as any).plausible(event, { props })
    }
  } catch {
    // no-op
  }
}


