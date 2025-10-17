"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  measurementId: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: any[]) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

export default function GaPageView({ measurementId }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!measurementId) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

    let attempts = 0;
    const maxAttempts = 10;
    const interval = 150; // ~1.5s total wait

    const tick = () => {
      attempts += 1;
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        const page_location = typeof window !== 'undefined' ? window.location.href : undefined;
        window.gtag('config', measurementId, {
          page_path: url,
          page_location,
        });
        return; // sent successfully
      }
      if (attempts < maxAttempts) {
        setTimeout(tick, interval);
      }
    };

    tick();
  }, [measurementId, pathname, searchParams]);

  return null;
}
