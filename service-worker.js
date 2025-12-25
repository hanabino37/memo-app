const CACHE_NAME = 'tm-v1';
const urlsToCache = [
    './index.html',
    './icon.png',
    './manifest.json'
];

// インストール処理
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});

// リクエスト処理（ネットワーク優先）
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
