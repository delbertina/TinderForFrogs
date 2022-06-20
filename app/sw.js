(function () {
  const VERSION = '{%VERSION%}';
  const files = [
    'images/frog.png',
    'images/frog.svg',
    'images/frog-brown-1.png',
    'images/frog-brown-2.jpg',
    'images/frog-brown-3.jpg',
    'images/frog-brown-4.jpg',
    'images/frog-green-1.jpg',
    'images/frog-green-2.jpg',
    'images/frog-green-3.png',
    'images/frog-green-4.jpg',
    'images/frog-white-1.png',
    'images/frog-white-2.png',
    'images/frog-white-3.png',
    'images/frog-white-4.jpg',
    'app.js',
    'ce-carousel.js',
    'ce-details.js',
    'ce-item.js',
    'custom-elements.min.js',
    'helper.js',
    './',
    'manifest.json',
    'styles.css'
  ];

  self.oninstall = event => event.waitUntil(
    caches.open(`tinderforfrogs-${VERSION}`)
      .then(cache => cache.addAll(files))
  );

  self.onactivate = event => event.waitUntil(
    caches.keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .map(c => c.split('-'))
            .filter(c => c[0] === 'tinderforfrogs')
            .filter(c => c[1] !== VERSION)
            .map(c => caches.delete(c.join('-')))
        )
      )
  );

  self.onfetch = event => event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
})();