self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('catatan-v1').then(cache => {
      return cache.addAll([
        '/',
        '/Index.html',
        '/styles.css',
        '/Script.js',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
