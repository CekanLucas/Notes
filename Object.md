<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./CSS.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">

<style> 

html>body, p {
  font-family: ubuntu;
  font-size: 1.1em;
  text-shadow:none;
}
h2>code, p>code, li>code, div>code {
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
## Object.prototype.  ;
> \_\_defineGetter__
> 
> \_\_defineSetter__
> 
> \_\_lookupGetter__
> 
> \_\_lookupSetter__
> 
> \_\_proto__
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
    return new Temperature((value - 32) / 1.8);
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