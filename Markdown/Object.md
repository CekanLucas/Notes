<head>
 
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">

<style> 

html>body, p {
  font-family: ubuntu;
  font-size: 1.1em;
  text-shadow:none;
}
h2>code, p>code, li>code, div>code, h1 code, h2 code, h3 code {
    background-color: #09A;
    border-radius: 7px;
    box-shadow: 
      1px 1px 1px #000,
      -1px -1px 1px #FFF,
      -1px 1px 2px #000,
      1px -1px 2px #000;
    color: #00f;
    margin: 5px;
    padding: 2px;
    font-family: 'Fira Mono', monospace;
    text-shadow:none;
    font-size:0.8em
}
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
</style>
</head>    

# Object


```js
// Many Ways to define object best to use object literal
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
 }
}
// two ways call properties
myObject.property // dot notation 
myObject["obnoxious property"] // bracket notation
```

## `Object.prototype`
### refs 
[Javascript.info](https://javascript.info/prototype-inheritance) 
[Javascript Prototype in Plain Language](https://web.archive.org/web/20200513181548/https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)
[Javascript Prototypal Inheritance Visualized](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)
[Prototypal Inheritance Video](https://www.youtube.com/watch?v=sOrtAjyk4lQ) *Very Good* <b class="Brown">from avelx</b>

<style>
.proto {
  font-weight: bold;
  font-style: italic;
  color:red;
}
.js {
  font-weight: bold;
  color:yellow;
}
</style>
In programming we often want to extend properties and methods in <span class="js">Javascript</span> we often use <span class="proto">Prototypal Inheritance</span>

## [[Prototype]]

In <span class="js">JavaScript</span>, objects have a special hidden property `[[Prototype]]` (as named in the specification), that is either null or references another object. That object is called <b class="Orange">a prototype</b> <span class="Teal">every object has a prototype property</span> <i class="RoyalBlue">and we access the properties all the way up the <b>prototype chain</b></i>

### Prototype-based Inheritance
The prototype is a little bit <i>magical</i>. When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, such thing is called “prototypal inheritance”. Many cool language features and programming techniques are based on it.

> Other programming languages tend to use class based inheritance so javascript is unique in this regard.

The property `[[Prototype]]` is internal and hidden, but there are many ways to set it.

> Following the ECMAScript standard, the notation `someObject.[[Prototype]]` is used to designate the prototype of someObject. Since ECMAScript 2015, the `[[Prototype]]` is accessed using the accessors `Object.getPrototypeOf()` and `Object.setPrototypeOf()`. This is equivalent to the JavaScript property `__proto__` which is non-standard but de-facto implemented by many browsers.

```js 
// from javascript.info
let animal = {
  eats: true, 
  walk() {
    alert("Animal Walk");
  }
};

let rabbit = {
  jumps: true, 
  __proto__: animal
};

// walk is taken from the prototype
rabbit.walk(); // Animal Walk

// lets create an object o from function f with properties a and b

let f = function() {
  this.a = 1; 
  this.b = 2;
}
let o = new f(); // f { a: 1, b: 2 }

// add properties in f's function's prototype
f.prototype.b = 3
f.prototype.c = 4

//do not set the prototype f.prototype = {b:3,c:4}; this will break the prototype chain

// o.[[Prototype]] has properties b and c

// o.[[Prototype]].[[Prototype]] is Object.prototype

// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null

// This is the end of the prototype chain, as null,

// by definition, has no [[Prototype]].

// Thus, the full prototype chain looks like:

// {a: 1, b: 2} -> {b: 3, c: 4} -> Object.prototype -> null

// Node Terminal
> o.a 
1
> o.b 
2
> o.c 
4
> o.d
undefined
> JSON.stringify(o)
'{"a":1,"b":2}'
```


One of them is to use the special name __proto__, like this:

> \_\_defineGetter__
> 
> \_\_defineSetter__
> 
> \_\_lookupGetter__
> 
> \_\_lookupSetter__
> 
> ## `\_\_proto__`
> If an object does not have the property then javascript will look up the `prototype chain`  
> ```js
> 
> ```
> constructor
> 
> hasOwnProperty
> 
> isPrototypeOf
> 
> propertyIsEnumerable
> 
> toLocaleString
> 
> toString
> 
> valueOf


### Cool Javascript Snippets 

``` JS
// new doesnt define binding but produces constructor as value 
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello
```

### Getters and Setters

``` JS
// --- Getters ---
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};
console.log(varyingSize.size); // → 73
console.log(varyingSize.size); // → 49

// Whenever someone reads from this object’s size property, the associated method is called.

// --- Setters ---
class Temperature {
  constructor(celsius) {
    this.celsius = celsius; 
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    return new Temperature( (value - 32) / 1.8 );
  }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit); // → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);  // → 30

// Whenever someone reads from this object’s size property, the associated method is called.
```

The Temperature class allows you to read and write the temperature
in either degrees Celsius or degrees Fahrenheit, but internally it stores only Celsius and automatically converts to and from Celsius in the
fahrenheit **getter** and **setter**.
Sometimes you want to attach some properties directly to your constructor function, rather than to the prototype. Such methods won’t have access to a class instance but can, for example, be used to provide additional ways to create instances.
Inside a class declaration, methods that have static written before their name are stored on the constructor. So the Temperature class allows
you to write `Temperature.fromFahrenheit(100)` to create a temperature using degrees Fahrenheit.

### the word `extends` 
The use of the word `extends` indicates that this class shouldn’t be directly based on the default Object prototype but on some other class.

>This is called the <span class="Blue">superclass</span> . The derived class is the  <span class="Orange">subclass</span>

## Introduction to constructor
>**constructor** is a special kind of method that gets executed when an object instance is created from a class. 

Everything inside the Pizza's constructor method will get run for the new instance of the class when we call `new Pizza();`. This is a great place to setup default state for new instances. In other words, the constructor is for setting default values for any new object's properties.

``` JS
class Pizza {
  constructor() {
    this.toppings = ["cheese"];
  }
}
```

### Using `super` 
It would be nice if the mentor's (subclass's) bio method could also just call the person's (superclass's) bio method. Indeed OOP languages allow subclasses to have a reference on the parent class. This is usually done via the `super` keyword
``` JS
// Super class
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Mentor extends Person {
  // Mentor bios need to include a bit more info
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}
// DRIVER CODE

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());
```

## `Object.create()`
Recomended way of creating objects
> <b class="Tomato">This more closely aligns with the <span class="LightBlue">prototype inheritance model</span> in <span class="Yellow">Javascript</span> than the `new` keyword</b>

[Object.create() Video](https://www.youtube.com/watch?v=CDFN1VatiJA) *Very Good* <b class="Gold">from FunFunFunction</b>
[Another Object.create() Video](https://www.youtube.com/watch?v=CDFN1VatiJA) <b class="LightCoral">from TechSmith</b>