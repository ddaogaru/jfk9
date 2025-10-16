// Basic offline-first service worker tailored for Next.js app router
// Avoid precaching unknown hashed assets that change per build.

const STATIC_CACHE = 'jfk9-static-v7';
const DYNAMIC_CACHE = 'jfk9-dynamic-v6';
const RUNTIME_CACHE = 'jfk9-runtime-v5';

// Small, robust pre-cache list of stable assets only
const STATIC_FILES = [
  '/',
  '/favicon.ico',
  '/manifest.json',
  '/nate_schoemer.webp',
  '/jeff_eastburn.png',
  '/jst.png',
];

const HERO_VIDEO_PATHS = new Set(['/logo_video_site.webm', '/logo_video_site.mp4']);
const IMAGE_RUNTIME_PATHS = new Set(['/footer_background.webp', '/joint_forces_k9_logo.webp']);

function shouldRuntimeCache(url) {
  return HERO_VIDEO_PATHS.has(url.pathname) || IMAGE_RUNTIME_PATHS.has(url.pathname);
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request)
    .then(async (response) => {
      if (response && response.status === 200) {
        try {
          await cache.put(request, response.clone());
        } catch {
          // Ignore cache put failures (e.g., quota exceeded)
        }
      }
      return response;
    })
    .catch(() => undefined);

  if (cachedResponse) {
    // Trigger background update but serve cached response immediately
    fetchPromise.catch(() => undefined);
    return cachedResponse;
  }

  const networkResponse = await fetchPromise;
  if (networkResponse) {
    return networkResponse;
  }

  return new Response('Network Error', { status: 504 });
}

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
          if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE && key !== RUNTIME_CACHE) {
            return caches.delete(key);
          }
        })
      );
      await Promise.all([
        caches.open(STATIC_CACHE),
        caches.open(DYNAMIC_CACHE),
        caches.open(RUNTIME_CACHE),
      ]);
      await self.clients.claim();
    })()
  );
});

// Optional: allow manual purge from the client via postMessage
self.addEventListener('message', (event) => {
  if (!event.data) return;
  const { type } = event.data;
  if (type === 'PURGE_CACHES') {
    event.waitUntil(
      (async () => {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
        // Recreate empty caches with current names to avoid races
        await Promise.all([
          caches.open(STATIC_CACHE),
          caches.open(DYNAMIC_CACHE),
          caches.open(RUNTIME_CACHE),
        ]);
        const allClients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
        for (const client of allClients) {
          client.postMessage({ type: 'PURGE_COMPLETE' });
        }
      })()
    );
  }
});

// Network-first for navigations to keep HTML fresh; cache-first for static assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.origin !== location.origin) return;

  if (shouldRuntimeCache(url)) {
    event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
    return;
  }

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
