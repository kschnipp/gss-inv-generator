const CACHE_NAME = "pwa-form-cache-v1";
const FILES_TO_CACHE = [
  "/gss-inv-generator/",
  "/gss-inv-generator/index.html",
  "/gss-inv-generator/style.css",
  "/gss-inv-generator/app.js",
  "/gss-inv-generator/manifest.json",
  "/gss-inv-generator/icons/icon-192.png",
  "/gss-inv-generator/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
