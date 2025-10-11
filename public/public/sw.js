// Basic offline-first service worker tailored for Next.js app router
// Avoid precaching unknown hashed assets that change per build.

const STATIC_CACHE = 'jfk9-static-v2';
const DYNAMIC_CACHE = 'jfk9-dynamic-v2';

// Small, robust pre-cache list of stable assets only
const STATIC_FILES = [
  '/',
  '/favicon.ico',
  '/Joint_Forces_K9_Group_Logo.svg',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(STATIC_CACHE);
        await cache.addAll(STATIC_FILES);
      } catch {
        // Ignore individual failures to avoid aborting install
        // console.warn('[SW] Precache failed');
      }
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Clean up old caches
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
            return caches.delete(key);
          }
        })
      );
      await self.clients.claim();
    })()
  );
});

// Network-first for navigations to keep HTML fresh; cache-first for static assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.origin !== location.origin) return;

  // Keep SSR/HTML up to date - network first for navigation
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(request);
          if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            // Await the cache put operation to avoid race conditions
            await cache.put(request, networkResponse.clone());
            return networkResponse;
          }
          // For non-ok responses (404, 500, etc), return the actual error response
          // Only fallback to cache for network failures (caught below)
          return networkResponse;
        } catch {
          // Network failed, try cache fallback
          const cached = await caches.match(request);
          return cached || caches.match('/');
        }
      })()
    );
    return;
  }

  // Static assets: cache-first then network
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (
          response &&
          response.status === 200 &&
          (request.url.includes('/_next/static/') ||
            /\.(?:css|js|png|jpg|jpeg|svg|webp|ico|woff2?)$/i.test(
              request.url
            ))
        ) {
          const cache = await caches.open(STATIC_CACHE);
          // Await the cache put operation to avoid race conditions
          await cache.put(request, response.clone());
        }
        return response;
      } catch {
        // Network failed, return 504 since we already checked cache above
        return new Response('Network Error', { status: 504 });
      }
    })()
  );
});

// Background sync placeholder
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(Promise.resolve());
  }
});

// Push notifications (optional)
self.addEventListener('push', (event) => {
  if (!event.data) return;
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: { dateOfArrival: Date.now(), primaryKey: 1 },
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});
