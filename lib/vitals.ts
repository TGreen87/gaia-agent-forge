// lib/vitals.ts
// Sends Web Vitals to Plausible as custom events. Works on static export.
import { logEvent } from './analytics'

export function trackWebVitals() {
  if (typeof window === 'undefined') return

  // Track LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as PerformanceEntry
      
      if (lastEntry.entryType === 'largest-contentful-paint') {
        logEvent('webvitals_lcp', { value: Math.round(lastEntry.startTime) })
      }
    })
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
  }

  // Track FID (First Input Delay) - now INP (Interaction to Next Paint)
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input') {
          logEvent('webvitals_fid', { value: Math.round(entry.processingStart - entry.startTime) })
        }
      })
    })
    
    observer.observe({ entryTypes: ['first-input'] })
  }

  // Track CLS (Cumulative Layout Shift)
  if ('PerformanceObserver' in window) {
    let clsValue = 0
    let clsEntries: PerformanceEntry[] = []
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value
          clsEntries.push(entry)
        }
      })
      
      // Send CLS when page is hidden or after 5 seconds
      if (document.visibilityState === 'hidden') {
        logEvent('webvitals_cls', { value: Math.round(clsValue * 1000) / 1000 })
        clsValue = 0
        clsEntries = []
      }
    })
    
    observer.observe({ entryTypes: ['layout-shift'] })
    
    // Send CLS on page unload
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && clsValue > 0) {
        logEvent('webvitals_cls', { value: Math.round(clsValue * 1000) / 1000 })
      }
    })
  }

  // Track INP (Interaction to Next Paint) - new Core Web Vital
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        if (entry.entryType === 'interaction') {
          const interactionEntry = entry as any
          logEvent('webvitals_inp', { value: Math.round(interactionEntry.interactionId) })
        }
      })
    })
    
    observer.observe({ entryTypes: ['interaction'] })
  }
}
