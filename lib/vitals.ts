// lib/vitals.ts
// Sends Web Vitals to Plausible as custom events. Works on static export.
import { logEvent } from './analytics'

// Type definitions for Web Vitals
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number
  processingEnd: number
  duration: number
}

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

export function trackWebVitals() {
  if (typeof window === 'undefined') return

  // Track LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      
      if (lastEntry.entryType === 'largest-contentful-paint') {
        logEvent('webvitals_lcp', { value: Math.round(lastEntry.startTime) })
      }
    })
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
  }

  // Track FID (First Input Delay)
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as PerformanceEventTiming
          logEvent('webvitals_fid', { value: Math.round(firstInputEntry.processingStart - firstInputEntry.startTime) })
        }
      })
    })
    
    observer.observe({ entryTypes: ['first-input'] })
  }

  // Track CLS (Cumulative Layout Shift)
  if ('PerformanceObserver' in window) {
    let clsValue = 0
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as LayoutShift
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value
          }
        }
      })
    })
    
    observer.observe({ entryTypes: ['layout-shift'] })
    
    // Send CLS on page unload
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && clsValue > 0) {
        logEvent('webvitals_cls', { value: Math.round(clsValue * 1000) / 1000 })
        clsValue = 0
      }
    })
  }

  // Track INP (Interaction to Next Paint)
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        if (entry.entryType === 'interaction') {
          const interactionEntry = entry as PerformanceEventTiming
          logEvent('webvitals_inp', { value: Math.round(interactionEntry.duration) })
        }
      })
    })
    
    observer.observe({ entryTypes: ['interaction'] })
  }
}
