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

> `*ngIf` is another that will only show element when it exists
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

# Angular Services

Angular can generate a service with following command
    
  This generates a empty service called transportation within the application
    
    ng generate service transportation
    
```ts
//import files reside here will be used by the service
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TransportationService 
{
  // methods here used by service to export data
  constructor() {  }
}
```
## Angular Events 

``` html
<!-- app.component.html -->
<button (click)="triggerEvent()">Trigger Event</button>
```
```ts
// app.component.ts
triggerEvent() {
  alert('event triggered');
}
```
The parentheses around click is how angular does <span class="Tomato">event binding</span>

## Two Way Data Binding
```html
<input [(ngModal)] = "data">
```

`[()]` <span class="Yellow"> Banana in a box</span> is the construct that allows two way data binding

> Angular **modals** as implemented via `ngModal` have nothing to do with databases or storange on the backend it is just where Angular temporarily stores and holds data within a frnt-end application

<b class="SkyBlue">A modal is simply a container that stores information or a container that stores variables we say *representation of domain data* data that can be accessed <u>both</u> by component and view</b>

### To use Two Way Data Binding 

```ts
import { FormsModule } from "angular/forms";
```

### sending Hard coded data to a service 

```ts
// addPokemon method accepts pokemon of type Pokemon
// adds it to existing array of pokemon
addPokemon(pokemon: Pokemon){
  this.pokemons.push(pokemon)
}
```

# Databases 
We are going to use both <b class="SkyBlue">Postregress</b> and <b class="LightGreen">MongoDB</b> these are the primary examples 

- <span class="Orange">**relational databases** - store data in tables </span>
- <span class="BlueViolet">**non-relational databases** - store data in collections (like with JSON)</span>

We need to store data we cant use **variables** becuase variables dont <strong class="Tomato">persist</strong> this is an example of <b class="Lime">Volatile (or memory) Storage</b> we want non-volatile