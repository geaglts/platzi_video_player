const VERSION = "v1";

self.addEventListener("install", (event) => {
    event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    // get
    if (request.method !== "GET") {
        return;
    }

    // buscar en cache
    event.respondWith(cachedResponse(request));

    // Actualizar el cache
    event.waitUntil(updateCache(request));
});

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        "/",
        "/index.html",
        "/favicon.ico",
        "/assets/index.js",
        "/assets/MediaPlayer.js",
        "/assets/plugins/AutoPlay.js",
        "/assets/plugins/AutoPause.js",
        "/assets/index.css",
        "/assets/BigBuckBunny.mp4",
        "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const respose = await fetch(request);
    return cache.put(request, respose);
}
