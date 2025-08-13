"use client"
import { useEffect } from 'react'
import { trackWebVitals } from '@/lib/vitals'

export default function TrackVitals() {
  useEffect(() => {
    trackWebVitals()
  }, [])

  return null
}
