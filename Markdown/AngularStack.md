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
  
</style>
</head>    

<div id="stack-container">
<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="Typescript Logo">
<img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular Logo">
<a href="./NestJS.md"><img alt="NestJS Logo" src="https://docs.nestjs.com//assets/logo-small.svg"></a>
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

## Angular Directives <small>list</small>
<ul type="circle">
  <li><b class="HotPink">ng-app</b> It defines the root level element of an application</li>
  <li><b class="HotPink">ng-bind</b> It binds the content of an html element to application data</li>
  <li><b class="HotPink">ng-bind-html</b> It binds the inner html of an html element to application data and also removes dangerous code from the html string</li>
  <li><b class="HotPink">ng-bind-template</b> Specifies that text content should be replaced witha template</li>
  <li><b class="HotPink">ng-blur</b> Specifies a behaviour on blur events</li>
  <li><b class="HotPink">ng-change</b> Specifies a behaviour on change events when user is changing the content</li>
  <li><b class="HotPink">ng-checked</b> Specifies if element is checked or not</li>
  <li><b class="HotPink">ng-class</b> Specifies css classes on html elements</li>
  <li><b class="HotPink">ng-class-even</b> same as ng-class but will only take effect on even rows</li>
  <li><b class="HotPink">ng-class-odd</b> same as ng-class but will only take effect on odd rows</li>
  <li><b class="HotPink">ng-click</b> specifies an expression to evaluate when an element is being clicked</li>
  <li><b class="HotPink">ng-cloak</b> prevents flickering when your application is being loaded</li>
  <li><b class="HotPink">ng-controller</b> defines the controller object for an application</li>
  <li><b class="HotPink">ng-copy</b> specifies a behaviour on copy events</li>
  <li><b class="HotPink">ng-csp</b> changes content security policy</li>
  <li><b class="HotPink">ng-cut</b> specifies a behaviour on cut events</li>
  <li><b class="HotPink">ng-dblclick</b> specifies a behaviour on double click events</li>
  <li><b class="HotPink">ng-focus</b> specifies a behaviour on focus events</li>
  <li><b class="HotPink">ng-hide</b> hides or shows html elements</li>
  <li><b class="HotPink">ng-href</b> specifies a url for <code>&lt;a&gt;</code> element</li>
  <li><b class="HotPink">ng-if</b> removes the element if condition is false</li>
  <li><b class="HotPink">ng-include</b> includes html in an application</li>
  <li><b class="HotPink">ng-init</b> defines initial values for a application</li>
  <li><b class="HotPink">ng-jq</b> specifies that the application must use a library, like JQuery</li>
  <li><b class="HotPink">ng-keydown</b> specifies behavior on keydown events</li>
  <li><b class="HotPink">ng-keypress</b> specifies behavior on keypress events</li>
  <li><b class="HotPink">ng-keyup</b> specifies behavior on keyup events</li>
  <li><b class="HotPink">ng-list</b> converts text into a list (array)</li>
  <li><b class="HotPink">ng-open</b> specifies the open attribute of a element</li>
  <li><b class="HotPink">ng-options</b> specifies <code>&lt;options&gt;</code> in a <code>&lt;select&gt;</code>list</li>
  <li><b class="HotPink">ng-paste</b>specifies a behavior on paste events</li>
  <li><b class="HotPink">ng-pluralize</b> specifies a message display ccording to en-us localization rules</li>
  <li><b class="HotPink">ng-readonly</b> specifies readonly attribute of an element</li>
  <li><b class="HotPink">ng-required</b> specifies required attribute of an element</li>
  <li><b class="HotPink">ng-selected</b> specifies selected attribute of an element</li>
  <li><b class="HotPink">ng-show</b> shows or hides an element</li>
  <li><b class="HotPink">ng-src</b> specifies the src attribute of <code>&lt;img&gt;</code>element</li>
  <li><b class="HotPink">ng-srcset</b> specifies the srcset attribute of <code>&lt;img&gt;</code>element</li>
  <li><b class="HotPink">ng-style</b> specifies the style attribute of an element</li>
  <li><b class="HotPink">ng-submit</b> specifies expressions to run on the onsubmit events</li>
  <li><b class="HotPink">ng-switch</b> specifies condition that will be ised to show/hide child elements</li>
  <li><b class="HotPink">ng-translude</b> specifies point to insert transcluded elements</li>
  <li><b class="HotPink">ng-value</b> specifies the value of an input element</li>
  <li><b class="HotPink">ng-disabled</b> specifies if element is disabled or not</li>
  <li><b class="HotPink">ng-form</b> specifies html form to inherit controls from</li>
  <li><b class="HotPink">ng-model</b> binds the value of html controls to application data</li>
  <li><b class="HotPink">ng-model-options</b> It specifies how updates in model are done</li>
  <li><b class="HotPink">ng-mousedown</b> specifies a behaviour on mousedown events</li>
  <li><b class="HotPink">ng-mouseenter</b> specifies a behaviour on mouseenter events</li>
  <li><b class="HotPink">ng-mouseleave</b> specifies a behaviour on mouseleave events</li>
  <li><b class="HotPink">ng-mousemove</b> specifies a behaviour on mousemove events</li>
  <li><b class="HotPink">ng-mouseover</b> specifies a behaviour on mouseover events</li>
  <li><b class="HotPink">ng-mouseup</b> specifies a behaviour on mouseup events</li>
  <li><b class="HotPink">ng-non-bindable</b> specifies that no data binding can happen in this element, or it's children</li>
  <li><b class="HotPink">ng-repeat</b> defines a template for each data in collection</li>
</ul>

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

# ORM <small>Object Relational Mapping</small>
<b class="Gold">This is a technique that allows you to communicate with a database ussing object orientated pattern. When we talk about ORM we are ussually talking about a library that implements ORM</b>

<span class="Lime">**Advantages of ORM**</span>
<p class="Lime">Make complex quiries simpler, cutting bloat and adding lots of reusable logic in our application. Most come with built in protection against sql injections</p>

<span class="Red">**Disadvantages of ORM**</span>
<p class="Red">You lose direct control over SQL in some cases means its slower than writing SQL by hand. </p>

In this Stack we will use TypeScript ORM 
```bash
# install ORM 
npm install typeorm 
# required by typscript ORM to use as decorators
#  somewhere in main file 
#    import "reflect-metadata"
npm install reflect-metadata
# install postgress database driver 
npm install pg
```
### TypeORM Repositories
These allow us to create an object that allows us to query an entity
```ts
const repository = getRepository(pokemon);

// to insert data into pokemon entity
const pokemon = new User();
pokemon.name = "Bulbasaur";
pokemon.moveSet = ["Tackle", "Vinewhip"];
pokemon.type = {type1: "grass", type2: null};
await repository.save(pokemon);

// To select data (use find() method)
const bulbasuar = await
repository.findOne(
  {
    where:
    {name:"Bulbasaur"}
  }
)

// Update Data
bulbasaur.level = 15++;
await repository.save(bulbasaur);

// Delete Data 
await repository.delete(bulbasuar.level);
// to delete a "row" of data 
await repository.delete({name:"bulbasuar"});
```
# Nest.js 
Scalable Node.js server side applications put another way it is a type of web application server. 

To add a server folder to existing angular application

    ng add @nestjs/ng-universal
  
Now just use 

    nest generate

#### Definitions

The <span class="Crimson">front end</span> makes a <b class="Purple">request</b> to the <span class="Khaki">web server</span> the <span class="Khaki">web server</span> takes the <b class="Purple">request</b> and then gives a <b class="BlueViolet">response</b> back to the <span class="Crimson">front end</span>

A controllers job is to get a request and send back a response. The controllers have access to the data stored in the database.

```ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // the @ below is termed as a "Decorator"
  @Get()
  // in TypeScript you need to define the return type of methods
  getHello(): string {
    // here we define the response
    // return this.appService.getHello();
    return "Test"
  }
}
```
If we were to add another route we can scaffold with 
      
      nest generate controller red

###  WildCard Route 

To specify variables within routes inline wih rest architecture we use **wildcards** using the humble colon

> wildcards are key to looking for specific entries in databases
```ts 
@Get('pokedex/:generation:pokemon:move')
```

## [Observables](https://rxjs.dev/guide/observable)
