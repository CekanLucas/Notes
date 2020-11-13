<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
  #stack-container {
    position: fixed;
    height: 5em;
    display: flex;
    flex-direction: column-reverse;
    bottom:5vh;
    right: 5vw;
}
h1{color:purple}
</style>
</head>    

<div id="stack-container">
<img src="https://rxjs.dev/assets/images/logos/Rx_Logo_S.png" alt="Typescript Logo">
</div>

<big><b class="SkyBlue"><i class="Orange">R</i>eactive E<i class="Orange">x</i>tention for <i class="Orange">J</i>ava<i class="Orange">S</i>cript</b></big>

<b class="Violet">A asynchronous library for making asynchronous observable streams</b> 

## <big class="Purple" style="size:2em;">Stream</big> <span class="DarkViolet">A sequence of values over time</span>

<big class="Tomato">Reactive Programming</big> <br>= **<span class="Purple">Streams</span>** + **<span class="Violet">Operators</span>**

This is in stark contrast to imperative management which is more akin of changing states

We cannotnot read the stream on its own to do so we need to utilize the `subscriber` operator which acts as a callback to work oneach value tht os throughthe stream another value is the `interval` operator wich determines time between values.We can chain multipleoperators to one Observable tocreate operator chains wwhich adds a operatoion to each dubsequent stream. 

## Observables

>   | Single   |  Multiple
--|--|-
**Pull** | Function |Iterator 
**Push** | Promise | Observables 



>   | Producer   |  Consumer
--|--|-
**Pull** | **Passive**: produces data when requested |**Active**: decides when data is requested 
**Push** | **Acive**: produces data at its own pace|**Passive**: reacts to received data 

``` js
import { Observable } from 'rxjs';

// $ at the end is standard naming convention for observable
const observable$ = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
```

`mergemap` 
```ts
obs$.mergeMap( x => )
```
`switchmap`