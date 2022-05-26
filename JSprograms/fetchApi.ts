/****
 * Playground for fetch
 * use quokka to run file cntrl k + q
*/

import fetch from 'node-fetch'

// const fetchRes = fetch('https://jsonplaceholder.typicode.com/todos/1')
// fetchRes
//   .then((res) => res.json())
//   .then((d) => {
//     d = JSON.stringify(d)
//     console.log(d)
//   })

;(async () => {
  const fetchRes = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  if (fetchRes.ok)
    console.log(await fetchRes.json())
  else 
    console.log("HTTP-Error: " + fetchRes.status);
    
})()
