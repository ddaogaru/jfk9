'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerServiceWorker = () => {
        navigator.serviceWorker
          .register('/sw.js')
          .catch(() => {
            // Ignore registration errors; sw is optional
          });
      };

      if (document.readyState === 'complete') {
        registerServiceWorker();
      } else {
        window.addEventListener('load', registerServiceWorker, { once: true });
      }

      return () => {
        window.removeEventListener('load', registerServiceWorker);
      };
    }
  }, []);

  return null;
}
