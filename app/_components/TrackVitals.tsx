"use client";
import { useEffect } from 'react';
import { initWebVitals } from '@/lib/vitals';

export default function TrackVitals() {
  useEffect(() => { initWebVitals(); }, []);
  return null;
}
