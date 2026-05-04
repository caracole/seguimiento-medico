/* MediTrace Service Worker — Cache hors-ligne */
const CACHE_NAME = 'meditrace-v2026.3';
const ASSETS = [
  './',
  './meditrace.html',
  './manifest.json',
  './icon_ardoise_cyan.svg',
  'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js',
  'https://cdn.jsdelivr.net/npm/tesseract.js@4/dist/tesseract.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
];

/* Installation : mettre en cache tous les fichiers essentiels */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching app assets');
      return cache.addAll(ASSETS).catch(err => {
        console.warn('[SW] Some assets failed to cache:', err);
        /* Cache ce qu'on peut, ne bloque pas l'installation */
        return Promise.allSettled(
          ASSETS.map(url => cache.add(url).catch(() => console.warn('[SW] Failed:', url)))
        );
      });
    })
  );
  self.skipWaiting();
});

/* Activation : nettoyer les anciens caches */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => {
          console.log('[SW] Deleting old cache:', k);
          return caches.delete(k);
        })
      )
    )
  );
  self.clients.claim();
});

/* Fetch : Network first, fallback to cache */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  /* Ne pas intercepter les appels API (Claude, Tesseract data) */
  if (url.hostname === 'api.anthropic.com' ||
      url.pathname.includes('traineddata') ||
      event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        /* Mettre en cache la réponse fraîche */
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        /* Hors-ligne : servir depuis le cache */
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          /* Fallback vers la page principale */
          if (event.request.mode === 'navigate') {
            return caches.match('./meditrace.html');
          }
          return new Response('Offline', { status: 503 });
        });
      })
  );
});
