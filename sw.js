const CACHE_NAME = 'v6_cache';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://tailwindcss.com',
  'https://cloudflare.com',
  'https://cloudflare.com',
  'https://cloudflare.com'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});


