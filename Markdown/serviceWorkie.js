console.log('In service Worker')

// //  install event
self.addEventListener('install', (e) => log('installed!', e))
// self.oninstall(() => log('installed!')) // gives error

//  activate event
// self.addEventListener('activate', (e) => log('activated!', e))

// force update to active state
self.skipWaiting()

self.addEventListener('activate', (e) => log('newly activated immediately', e))

addEventListener('fetch', (e) => {
  log('Listening in on Request', e.request.url)
  // e.respondWith(new Response('response intercepted'))
  e.respondWith(fetch(e.request.url)) // simply fetch the normal resources
})


function log(str, other) {
  console.log('service worker:\t' + str + '\n', other)
}
