const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  '/index.html',
  '/static/js/*',
  '/static/css/style.css',
  '/static/images/*',
  '/static/fonts/*',
  '/admin/*',
  '/blog/*',
  '/booking/*',
  '/cbt/*',
  '/hypnotherapy/*',
  '/posts/*',
  '/services/*',
  '/tags/*',
  '/wellbeing/*',
  '/yinyoga/*',
];

// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
if (navigator.share) {
    navigator.share({
      title: 'JH | Online Therapies',
      text: 'Online therapies to help develop and overcome any issue',
      url: 'https://www.justinehodgsonhypnotherapy.com/',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }