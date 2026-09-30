const CACHE_NAME = 'v5_cache'; // Mudamos para v5 para forçar a atualização limpa
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png',
  'https://cdn.tailwindcss.com', // Link do CDN corrigido aqui!
  'https://cloudflare.com', // Adicionado o link dos ícones que faltava
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'
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

