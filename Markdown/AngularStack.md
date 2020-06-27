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
  #stack-container {
    position: fixed;
    height: 5em;
    display: flex;
    flex-direction: column-reverse;
    bottom:5vh;
    right: 5vw;
  }
    #stack-container > img {
 
  }
  
</style>
</head>    

# <span class="react">React</span> <small>Updated</small>
 */
In <span class="react">React</span> we 

<div id="stack-container">
<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="Typescript Logo">
<img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular Logo">
<img src="https://nuxtjs.org/logos/nuxt-square.svg" alt="Nuxt.js Logo">
</div>

# TypeScript

<strong>Uses <u>statically typed</u> variables in stark contrast to dynamic typing in regular javascript</strong> 

``` ts
//  ----- types ----- 
const name:string = "bulbasaur";
// other types
const level:number = 32;
const isTrue:string = false;
const data:any;
```
## ENUMS 
### <small>Collections of Constants</small>

``` ts
enum evolutionLevels {
  first: "ghastly",
  second: "haunter",
  third: "gengar"
};
console.log(evolutionLevels.second);
// outputs: "haunter"
```

## Custom Types 
### <small>Specify Shape of Data</small>

``` ts
interface pokemon {
  name:string,
  idNumber:number,
  // question mark specifies field is optional
  evolveThroughTrade?:boolean,
  moves:string[]
}; // this is known as a "contract"

//  need to specify certain number of fields else contract void 
```

# Angular 

In Angular you always have 4 files 

```
App
  ~ app.component.css 
  ~ app.component.ts // where variables are declared/modified
  ~ app.component.html // the view: takes data and displays it
  ~ app.module.ts
```

``` ts
// app.component.ts 

import { Component } from "@angular/core"

// automatically generated configurations
@ Component ({
  selector : 'my-app',
  templateURL : './app.component.html',
  styleUrls : ['./app.component.css'] 
})

export class AppComponent {
  name = "Bulbasaur"
}
``` 

lled <strong>interpolation</strong> the insertion of variables from component to view. 

```html
<!-- app.component.html -->
You, caught {{name}}
<!-- In browser You, caught Bulbasuar -->
```
## Iterating through String Arrays

```ts
// In component
pokemons: string[] = ['Gyrados', 'Clefairy', 'Gengar'] 
```
```html
<div *ngFor='let pokemon of pokemons'>
  {{pokemon}}
</div>
<!-- In browser will display 
  Gyrados 
  Clefairy
  Gengar
-->
```
> `*ngFor` is a **structural directive** which modify HTML according to the variable data that they are associated with

## Iterating with Indices

```ts
// In component
pokemons: string[] = ['Gyrados', 'Clefairy', 'Gengar'] 
```
```html
<div *ngFor='let pokemon of pokemons;
let i=index'>
  pokemon {{ i }} is {{ pokemon }}
</div>
<!-- In browser will display 
  pokemon 0 is Gyrados 
  pokemon 1 is Clefairy
  pokemon 2 is Gengar
-->
```
> `i`  could be named anything but `index` is a keyword