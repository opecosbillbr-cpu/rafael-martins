const CACHE_NAME = "rafael-martins-v1";

const urlsToCache = [
  "/rafael-martins/",
  "/rafael-martins/index.html",
  "/rafael-martins/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
