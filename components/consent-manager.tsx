"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    updateConsent?: (consent: Partial<Record<string, 'granted' | 'denied'>>) => void;
    gtag?: (...args: any[]) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
    dataLayer?: unknown[];
  }
}

export default function ConsentManager() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Expose an easy way to update consent elsewhere in the app or via a banner
    window.updateConsent = (consent) => {
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', consent);
      } else {
        // queue until gtag is ready
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(['consent', 'update', consent]);
      }
    };
  }, []);

  return null;
}
