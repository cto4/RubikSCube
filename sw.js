var fileList=[
  "sw.js",
  "index.html",
  "manifest.json",
  "assets/css/gcube.css",
  "assets/css/style.css",
  "assets/js/script.js",
  "assets/lib/jquery.min.js",
  "assets/lib/gcube.js",
  "assets/images/logo-512.png",
  "assets/images/logo-128.png",
  "assets/images/full.svg",
  "assets/images/moon.png"
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
      var files;
      for(i=0;i<=fileList.length;i++){
        files += + cache.add(fileList[i]);
      }
      return files;
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});