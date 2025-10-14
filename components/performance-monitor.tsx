'use client';

import { useEffect } from 'react';

const enableLogging =
  process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_ENABLE_PERF_LOGS === 'true';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Enhanced performance monitoring for static HTML
    if (typeof window !== 'undefined' && 'performance' in window && typeof PerformanceObserver !== 'undefined') {
      const sendMetric = (name: string, params: Record<string, unknown>) => {
        if ('gtag' in window) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).gtag('event', name, params);
        }
      };

      const safeObserve = (observer: PerformanceObserver, entryTypes: PerformanceObserverInit['entryTypes']) => {
        const supported = (PerformanceObserver as unknown as { supportedEntryTypes?: string[] }).supportedEntryTypes;
        if (Array.isArray(entryTypes) && Array.isArray(supported)) {
          const allSupported = entryTypes.every((type) => supported.includes(type));
          if (!allSupported) {
            observer.disconnect();
            return;
          }
        }
        try {
          observer.observe({ entryTypes });
        } catch {
          observer.disconnect();
        }
      };
      
      // Track page load performance
      const trackPageLoad = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            request: navigation.responseStart - navigation.requestStart,
            response: navigation.responseEnd - navigation.responseStart,
            dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            load: navigation.loadEventEnd - navigation.loadEventStart,
            total: navigation.loadEventEnd - navigation.fetchStart
          };
          
          if (enableLogging) {
            console.log('📊 Page Load Metrics:', metrics);
          }

          sendMetric('page_load_time', {
            event_category: 'Performance',
            event_label: 'Static HTML',
            value: Math.round(metrics.total)
          });
        }
      };

      // Monitor Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            if (enableLogging) {
              console.log('🎯 LCP:', lcp, 'ms');
            }

            sendMetric('lcp', {
              event_category: 'Web Vitals',
              event_label: 'Largest Contentful Paint',
              value: Math.round(lcp)
            });
          }
        }
      });
      safeObserve(observer, ['largest-contentful-paint']);

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            const fid = fidEntry.processingStart - fidEntry.startTime;
            if (enableLogging) {
              console.log('⚡ FID:', fid, 'ms');
            }

            sendMetric('fid', {
              event_category: 'Web Vitals',
              event_label: 'First Input Delay',
              value: Math.round(fid)
            });
          }
        }
      });
      safeObserve(fidObserver, ['first-input']);

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
        if (enableLogging) {
          console.log('📐 CLS:', clsValue);
        }

        sendMetric('cls', {
          event_category: 'Web Vitals',
          event_label: 'Cumulative Layout Shift',
          value: Math.round(clsValue * 1000)
        });
      });
      safeObserve(clsObserver, ['layout-shift']);

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) { // Log slow resources
              if (enableLogging) {
                console.warn('🐌 Slow resource:', resource.name, resource.duration, 'ms');
              }
            }
          }
        }
      });
      safeObserve(resourceObserver, ['resource']);

      // Track page load when complete
      if (document.readyState === 'complete') {
        trackPageLoad();
      } else {
        window.addEventListener('load', trackPageLoad);
      }

      // Track service worker registration
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
          if (enableLogging) {
            console.log('🔧 Service Worker ready:', registration);
          }
        });
      }

      return () => {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        resourceObserver.disconnect();
        window.removeEventListener('load', trackPageLoad);
      };
    }
  }, []);

  return null;
}
