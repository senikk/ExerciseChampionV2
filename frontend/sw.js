self.addEventListener('install', function(event) {
    console.log('[ServiceWorker] Installed');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});