    

# <b class="text-gray-400">Service Workers</b>

[Excellent way to learn -> mastery games](https://mastery.games/serviceworkies/)

## Lifecycle 
<span class="text-xl text-yellow-400 capitalize">service worker lifecycle</span>
[Service Worker Guide](https://web.dev/reliable/service-workers-cache-storage)
[Service Worker Intro](https://developers.google.com/web/fundamentals/primers/service-workers/)
[Service Worker Lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)
[Introduction to Service Worker](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker-slides)

<span class="text-blue-100">The <span class="text-green-300 font-bold">4</span> stages of the service workers life cycle</span>
1. install
2. wait
3. activate
4. terminate

### Register Service Worker
```ts
navigator.serviceWorker.register(scriptUrl: string | url)

//  this actually returns a promise so 
const reg = await navigator.serviceWorker.register(scriptUrl)

// reg keeps track of service workers in three states as properties
reg.installing
reg.waiting
reg.active

// these properties return a service worker or null
//example
ServiceWorker { 
  scriptURL: "eg -> /serviceWorkie.js", 
  state:
    "parsed"       // begin if code good
    "installing"   // installing 
    "installed"    // installed this is the waiting stage
    "activating"   // transitioning to active stage
    "activated"    // in active stage
    "redundant",   // in terminated state
  onstatechange: null,
  onerror: null }

  // Lets add statechange event to the installing Service Worker
  const installingSW = reg.installing // could be Null
  installingSW && installingSW.addEventListener('statechange', 
    (event) =>
      log('state changed', event.target.state),
  )
// Note: parsed and installing state skipped by the time we added the event listener

/* OUTPUT
service worker: state changed installed
service worker: state changed activating 
service worker: state changed activated
*/

/* A better event is the 'updatefound' 
which fires when a new service worker begins waiting

Now if we refresh the page nothing will happend because sw.installing would be Null since new service worker is not installing
*/

registration.addEventListener('updatefound', 
  e => console.log(e.target.installing)
)
```
Technically `navigator.serviceWorker` is knows as a <b class="text-yellow-400">service worker container</b>

```ts
// using containter.ready for when a service worker reaches activated state
navigator.serviceWorker.ready
.then((reg) => log('Activated', reg.active))
// unlike before refresh hits event since there is always a sw that is active
```
<b class="text-yellow-400 text-xl">( service worker container ).`controller`</b>

<span class="text-yellow-300">This references the service worker currently in control of the page</span>

```ts
navigator.serviceWorker.ready
.then((reg) => log('in control', 
  navigator.serviceWorker.controller))
```
<span class="text-yellow-300">The service worker is only in control if it was active when the page was loaded</span>


## Reaction 
<span class="text-xl text-yellow-400 capitalize">reacting to lifecycles</span>
[Working with Service Workers](https://web.dev/reliable/service-workers-cache-storage/codelab-service-workers)
[Service Worker Mindset](https://web.dev/service-worker-mindset/)
[Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
When Service Workers are installed & activated
When registrations are successful
Service Worker state & state updates
Container & the .ready promise
Force updates with skipWaiting()

```js
// listening to the install event in service worker code
self.addEventListener('install', () => console.log("installed!"))
```


## Control
<span class="text-xl text-yellow-400 capitalize">intercepting requests</span>
How to intercept and respond to requests
How to hit the network manually with fetch()
What happens to a Service Worker when stopped
Details of Service Worker page control
How to bypass an active, controlling Service Worker during development
How to take immediate control using clients.claim()

## Cache
<span class="text-xl text-yellow-400 capitalize">working with caches</span>