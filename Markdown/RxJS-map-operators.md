<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/CSS.css"/>
    <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style>
  body ::selection {
  /*highlighting*/
  background: transparent;
  text-shadow: 
    1px  0px 1px ,
    0px  1px 1px ,
    -1px  0px 1px ,
    0px -1px 1px ,
    0px  1px black ,
    1px  0px black ,
    -1px  0px black ,
    0px -1px black ;
  text-outline: black;  
}
  #stack-container {
    position: fixed;
    height: 5em;
    display: flex;
    flex-direction: column-reverse;
    bottom:5vh;
    right: 5vw;
}
</style>
</head>    

<div id="stack-container">
<img src="https://rxjs.dev/assets/images/logos/Rx_Logo_S.png" alt="Typescript Logo">
</div>

# Mapping in RxJS 
## Simple example
```js
const namesObservable = of('Pete', 'Mike');

namesObservable.pipe( // pipe returns an observable
  map( name => `${name} is awesome!`)
).subscribe( result => console.log('${result}'));

/* CONSOLE
  Pete is awesome!
  Mike is awesome!
*/
```

## Complicated Example 
<span class="Yellow">Here we make the observable return a observable</span>

```js
// A FAKE SERVER OBJECT: 

const http = {   getAwesomeMessagesObservable(name): Observable<string> { 
      return of(`${name} is awesome! (msg #1)`, 
                `${name} is awesome! (msg #2)`);
   } 
   // the "of" returns an observable 
   // this particular one will produce 2 events
}

/*  
FOR THE VALUE "Pete", ONCE WE SUBSCRIBE, THIS SHOULD RETURN:
 Pete is awesome! (msg #1)
 Pete is awesome! (msg #2) */

 // Awesome ajax mapping
 namesObservable.pipe(   
  map( 
    name => http.getAwesomeMessagesObservable(name) )
  ).subscribe(result => console.log(`${result}`));
  
// CONSOLE: We have completly failed :(
// [object Object]
// [object Object]
```
<big class="FireBrick">We have failed becuase result returns an observable</big>

## We need to Employ <big class="Aqua">Flattening</big>
```js
// Awesome ajax mapping

namesObservable.pipe(   
  map(name => http.getAwesomeMessagesObservable(name) ))
    .subscribe(resultObservable => { 
      resultObservable
        .subscribe(result => 
          console.log(`${result}`
        ) 
    )
});
// CONSOLE:
// Pete is awesome (msg #1)
// Pete is awesome (msg #2)
// Mike is awesome (msg #1)
// Mike is awesome (msg #2)
```
<big class="SkyBlue">Above is called the <b class="red">Merge Strategy</b></big> this merging strategy may not be the best becuase it can lead to memory leaks and wierd bugs 

<big><b class="SteelBlue">There are 4 <span class="Aqua">Flattening Strategies</span></b></big>

- **Merge Strategy** just subscribe to every observable from the last map observable
  
- **Switch Strategy** unsubscribing from the last mapped observable, when new one arrives
  
- **Concat Strategy** Queing up every new Observable and subscribing to a new observable only when the last observable completed
  
- **Exhaust Strategy** do nothing strategy 

`mergeAll`