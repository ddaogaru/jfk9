"use client";

import { useEffect } from "react";

// Define Google Analytics gtag type
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters: Record<string, unknown>
    ) => void;
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Enhanced performance monitoring for static HTML
    if (typeof window !== "undefined" && "performance" in window) {
      // Track page load performance
      const trackPageLoad = () => {
        const navigation = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            request: navigation.responseStart - navigation.requestStart,
            response: navigation.responseEnd - navigation.responseStart,
            dom:
              navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart,
            load: navigation.loadEventEnd - navigation.loadEventStart,
            total: navigation.loadEventEnd - navigation.fetchStart,
          };

          // Send to analytics (if configured)
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "page_load_time", {
              event_category: "Performance",
              event_label: "Static HTML",
              value: Math.round(metrics.total),
            });
          }
        }
      };

      // Monitor Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            const lcp = entry.startTime;

            // Track LCP performance
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "lcp", {
                event_category: "Web Vitals",
                event_label: "Largest Contentful Paint",
                value: Math.round(lcp),
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ["largest-contentful-paint"] });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "first-input") {
            const fidEntry = entry as PerformanceEventTiming;
            const fid = fidEntry.processingStart - fidEntry.startTime;

            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "fid", {
                event_category: "Web Vitals",
                event_label: "First Input Delay",
                value: Math.round(fid),
              });
            }
          }
        }
      });

      fidObserver.observe({ entryTypes: ["first-input"] });

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

        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "cls", {
            event_category: "Web Vitals",
            event_label: "Cumulative Layout Shift",
            value: Math.round(clsValue * 1000), // Convert to integer
          });
        }
      });

      clsObserver.observe({ entryTypes: ["layout-shift"] });

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "resource") {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) {
              // Log slow resources
              // console.warn('🐌 Slow resource:', resource.name, resource.duration, 'ms');
            }
          }
        }
      });

      resourceObserver.observe({ entryTypes: ["resource"] });

      // Track page load when complete
      if (document.readyState === "complete") {
        trackPageLoad();
      } else {
        window.addEventListener("load", trackPageLoad);
      }

      // Track service worker registration
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then(() => {
          // Service worker ready
        });
      }

      return () => {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        resourceObserver.disconnect();
        window.removeEventListener("load", trackPageLoad);
      };
    }
  }, []);

  return null;
}
