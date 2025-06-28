
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('document-sorter').then(function(cache) {
      return cache.addAll(['/', '/index.html', '/static/js/main.js', '/manifest.json']);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
