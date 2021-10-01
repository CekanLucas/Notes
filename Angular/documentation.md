<head>
 
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
.angular {
  font-weight: bold;
  color: crimson;
}
</style>
</head>    
<div id="stack-container">
  <a href="https://angular.io/guide/what-is-angular"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png" alt="Angular Logo"></a>
</div>

#  <span class="angular">Angular</span>

Here is the minimum <span class="angular">Angular</span> component
``` ts
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  `
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
```

to use this component you write into a template
``` html
  <hello-world></hello-world>
```

When angular renders this component, resulting DOM looks like
``` html
<hello-world>
    <h2>Hello World</h2>
    <p>This is my first component!</p>
</hello-world>
```

<big class="RoyalBlue">Angular's component model offers <b class="DarkKhaki">strong encapsulation</b> and an <b class="Khaki">intuitive application structure</b>. Components also make your application <b class="HotPink">painless to unit test</b> and can <b class="LightPink">improve the overall readability of your code</b>.</big>

## Dynamic Values
```html
<p>{ {message} }</p>
```
```ts
import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html'
})
export class HelloWorldInterpolationComponent {
    message = 'Hello, World!';
}
```

<b class="Cream">When application Loads</b>
```html
<p>Hello, World!</p>
```

<b class="ForestGreen">Properties not just content. Use brackets for element  or properties </b>
```html
<p
  [id]="sayHelloId"
  [style.color]="fontColor">
  You can set my color in the component!
</p>
```
<b class="IndianRed">For element event listeners - use parentheses</b>
```html
<button
  [disabled]="canClick"
  (click)="sayMessage()">
  Trigger alert message
</button>
```
```ts
sayMessage() {
  alert(this.message);
}
```

## <i class="angular">Angular</i> setup

```bash
# install angular cli as a local dev depenendency
npm i -D @angular/cli

# create initial angular workspace
npx ng new my-app

# navigate to app folder 
# --open -o : automatically open in browser
npx ng serve --open

# generate heroes component
npx ng generate component heroes
```
## Basic Concepts

<b class="angular">Angular</b> is a platform and framework for building <i class="Khaki">single-page client applications</i> using <b class="Orange">HTML</b> and <b class="SteelBlue">TypeScript</b>

<span class="SteelBlue"><big >Angular is written in TypeScript</big> It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.</span>

The architecture of an Angular application relies on certain fundamental concepts. The basic building blocks of the Angular framework are Angular components that are organized into `NgModules`. `NgModules` collect related code into functional sets; an Angular application is defined by a set of `NgModules`. An application always has at least a <b class="OrangeRed">root module</b> that enables bootstrapping, and typically has many more feature modules.

* > Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data.

* >Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.

Modules, components and services are classes that use 
<b><i class="RebeccaPurple">decorators</i></b> <i class="Violet">These mark their type and provide metadata that tells Angular how to use them</i>

* The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.

* The metadata for a service class provides the information Angular needs to make it available to components through dependency injection (DI).

An application's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.

## Components 
Example `component.ts` 

<div class="columns">
  <div class="column">

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
  </div>
  <div class="column">

You always import the `Component` symbol from the <span class="angular">angular library</span>

`@Component` is the decorator where you define metadata for the component
<b class="SkyBlue">Three Metadata Properties</b>
1. `selector` - component's CSS element selector
1. `templateUrl` - location of the component's template file
1. `styleUrl` - location of the component's private CSS styles

`ngOnInit()` is a <a href="https://angular.io/guide/lifecycle-hooks#oninit">lifecycle hook</a> angular calls this after creating a component good place to place initialisation logic

Dont forget to expor class so that it could be used elsewhere
  </div>
</div>

## Format with the `UppercasePipe`

```html
<h2>{{hero.name | uppercase}} Details</h2>
```

The browser refreshes and now the hero's name is displayed in capital letters.

The word `uppercase` in the <b><i class="Gray">interpolation binding</i></b>, right after the pipe operator  `|` , activates the built-in `UppercasePipe`.

> Pipes are a good way to format strings, currency amounts, dates and other display data. Angular ships with several built-in pipes and you can create your own.

## Iterate with `*ngFor` directive

```html
<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes"> <!-- Here is where we use directive -->
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
```

The `*ngFor` is Angular's repeater directive. It repeats the host element for each element in a list.

* \<li> is the host element.
* heroes holds the mock heroes list from the HeroesComponent class, the mock heroes list.
* hero holds the current hero object for each iteration through the list.

> :warning: Don't forget the asterisk (*) in front of ngFor. It's a critical part of the syntax.

The `*ngIf` is Angular's directive

* display if element exists
