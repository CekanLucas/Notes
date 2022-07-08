// ;(async () => {
//   if ('serviceWorker' in navigator) {
//     try {
//       const reg = await navigator.serviceWorker.register('./serviceWorkie.js')
//       log('successfully registered', reg)
//       log('installing sw', reg.installing)
//       log('waiting sw', reg.waiting)
//       log('active sw', reg.active)
//       ServiceWorker

//       const installingSW = reg.installing // could be Null
//       installingSW && installingSW.addEventListener('statechange', (e) =>
//         log('state changed', e.target.state),
//       )
//     } catch (error) {
//       log('registration unsuccessful', error)
//     }
//     return
//   }
// })()

navigator.serviceWorker
  .register('/Markdown/serviceWorkie.js')
  .then((registration) => {
    log('registration successful', registration)

    // const sw = registration.installing // could be Null
    // if (sw)
    //   sw.addEventListener('statechange', (e) => {
    //     console.log('state changed to: ', e.target.state)
    //   })

    // registration.addEventListener('updatefound',
    //   e => log('updatefound', e.target.installing)
    // )
  })
  .catch((error) => {
    log('registration unsuccessful', error)
  })
navigator.serviceWorker.ready.then((reg) => {
  log('activated', reg.active)
  // log worker currently in control of the page
  log('in control', navigator.serviceWorker.controller)
})

navigator.serviceWorker.addEventListener('controllerchange', (e) =>
  log('new sw has taken control', e),
)

function log(str, other) {
  console.log('service worker:\t' + str + '\n', other)
}
