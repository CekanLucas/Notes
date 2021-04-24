<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>
<div id="stack-container">
<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="Typescript Logo">
</div>

# TypeScript

<strong>Uses <u>statically typed</u> variables in stark contrast to dynamic typing in regular javascript</strong>

## Core Types

|         |                   |                                                                           |
| ------- | ----------------- | ------------------------------------------------------------------------- |
| number  | 1, 5.3, -10       | All numbers, no differentiation between integers or floats                |
| string  | 'hi', "hi", \`hi` | All text values                                                           |
| boolean | true, false       | Two truthy or falsey values                                               |
| Object  | { age:30 }        | Any JS object but more specifically type `Object`                         |
| Array   | [ 1, 2, 3]        | Any Array, can be flexible or strict with regards to element types        |
| Tuple   | [ 'string',2 ]    | Added by Typescript: Fixed-length Array                                   |
| Enum    | enum { NEW, OLD } | Added by Typescript: Automatically enumerated global constant identifiers |
| Any     | \*                | really flexible avoid whenever possible                                   |

```ts
//  ----- types -----
const name: string = "bulbasaur";
// other types
const level: number = 32;
const isTrue: string = false;
const data: any;
```

## Tuples

### Assignment for fixed length Array

```ts
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //here is how we declare a tuple
} = {
  name: "Lucas",
  age: 28,
  hobbies: ["Chess", "Hiking"],
  role: [3, "dev"], // its like a any[] array but better defined
};
```

## ENUMS

### <small>Collections of Constants</small>

```ts
enum evolutionLevels {
  first: "ghastly",
  second: "haunter",
  third: "gengar"
};
console.log(evolutionLevels.second);
// outputs: "haunter"
```

## Unions

### Assignment of multiple Accepted types or literal types

`|` is the <b class="GoldenRod">union</b> operator
need to check at runtime with the `typeof` operator

```ts
function combine(input: number | string, input2: number | string) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
```

## Custom Types

### <small>Specify Shape of Data</small>

```ts
interface pokemon {
  name: string;
  idNumber: number;
  // question mark specifies field is optional
  evolveThroughTrade?: boolean;
  moves: string[];
} // this is known as a "contract"

//  need to specify certain number of fields else contract void

type Pokemon = pokemon; //make our own type with a type alias
```

## ts.config.json

See end of <a href="https://www.youtube.com/watch?v=BwuLxPH8IDs&t=2551s" title="TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!">this</a> video to get detailed breakthrough of options

    tsc --init

<b class="HotPink">tsconfig.json</b>: sets compilation option when you run command `tsc`

```json
{
  "compilerOption": {
    // verbose explanations if you use tsc --init main option listed below
    "target" : "es6", // specify ecmascript version,
    "lib" : [ // this are the default libraries when you set target above
      "dom",
      "es6",
      "dom.iterable",
      "scripthost"
    ],
    "module" : "commonjs" // so much trouble with this option
  },
  "exclude" : {
    // files to exclude from compilation
    "example.ts",
    "node_modules", // this is default already
    "**/**.ts" // could use glob patterns
  },
  "include" : {
    // opposite of "exclude" could specify files or folders
  }
}
```

## Never

use `never` type for function that never returns anything <span class="Orange">or always throws a exception</span>

```ts
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
```

## Type Assertion

use `as`to tell compiler what the type is

```ts
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```

# <a href="https://www.youtube.com/watch?v=wD5WGkOEJRs">Ted Neward Busy TypeScript Developer Guide to Advanced Typescipt </a>

Other static typed languages <i>Java, C# etc</i> use <b class="BlueViolet" title="its all about naming">nominal subtypes</b> whilst ipt is about <b class="Lime">structural subtyping</b>

### Intersection types <small class="Violet">compound types</small>

```ts
type F1 = (a: string, b: string) => void;
type F2 = (a: number, b: number) => void;

var f: F1 & F2 = (a: string | number, b: string | number) => {};

f("hello", "world"); // OK
f(1, 2); // OK
f(1, "test"); // Error!
```

As you can see it need to match the function signature
Dont get mixed up between union `|` and intercection `&` <span class="Khaki">one is a or and another is a and</span>

### Decorator

```ts
function example(target) {
  console.log("do something with the 'target'", target);
}

@example
class Example1 {}

const e1 = new Example1();
// prints "Do something with 'target' class Example1 {}"
```

- applied to the constructor of the class
- can be used to observe, modify, or replace a class definition
- called at runtime, with the constructor of the decorated class as its only argument
- returning a value replaces the class declaration with the provided constructor function

```ts
// // Method Decorators \\ \\
function enumerable(value: boolean) {
  return function(target; any, propertyKey: string, descriptor:
  PropertyDescriptor){
    descriptor.enumerable = value
  }
}
class Greeter{
  greeting: string; 
  constructor(message: string) {
    this.greeeting = message;
  }

  @enumerable(false)
  greet() { // will no longer be seen when enumerating Greeter instance
    return "Hello, " = this.greeting;
  }
}
```

## Type Aliases vs Interface
The difference is that you can never add properties or types to a type alias but you can always <b class="BlueViolet">extend</b> with a interface other than that all features of `type` are available to `interface`



<div id="interface-type" class="columns">
<span id="interface"  class="column">
<b class="Violet">Extending a interface</b>

``` ts 
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getbear{}
bear.name
bear.honey
```
<b class="Violet">Adding new fields to an existing interface</b>

``` ts 
interface Window {
  title: string
}
interface Window {
  ts: TypeScriptApi
}
const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```
</span>

<span class="column">
<b class="DarkOrchid">Extending a type via intersection</b>

``` ts 
type Animal {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

const bear = getbear{}
bear.name
bear.honey
```  
<b class="DarkOrchid">A type cannot be changed after being created</b>
``` ts 
type Window = {
  title: string
}
type Window = {
  ts: TypeScriptApi
}
// Error: Duplucate identifier 'Window'
```
</span>
</div>

# Learn X in Y

<a href="https://learnxinyminutes.com/docs/ipt/">Typescript</a>

```ts
// There are 3 basic types in TypeScript
const isDone: boolean = false;
const lines: number = 42;
const name: string = "Lucas";

// But you can omit the type annotation if the variables are derived
// from explicit literals
const isDone = false;
const lines = 42;
const name = "Anders";

// When it's impossible to know, there is the "Any" type
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Use const keyword for constants
const numLivesForCat = 9;
numLivesForCat = 1; // Error

// For collections, there are typed arrays and generic arrays
let list: number[] = [1, 2, 3];
// Alternatively, using the generic array type
let list: Array<number> = [1, 2, 3];

// For enumerations:
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Lastly, "void" is used in the special case of a function returning nothing
function bigHorribleAlert(): void {
  alert("I'm a little annoying box!");
}

// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use type inference

// The following are equivalent, the same signature will be inferred by the
// compiler, and same JavaScript will be emitted
let f1 = function (i: number): number {
  return i * i;
};
// Return type inferred
let f2 = function (i: number) {
  return i * i;
};
// "Fat arrow" syntax
let f3 = (i: number): number => {
  return i * i;
};
// "Fat arrow" syntax with return type inferred
let f4 = (i: number) => {
  return i * i;
};
// "Fat arrow" syntax with return type inferred, braceless means no return
// keyword needed
let f5 = (i: number) => i * i;

// Interfaces are structural, anything that has the properties is compliant with
// the interface
interface Person {
  name: string;
  // Optional properties, marked with a "?"
  age?: number;
  // And of course functions
  move(): void;
}

// Object that implements the "Person" interface
// Can be treated as a Person since it has the name and move properties
let p: Person = { name: "Bobby", move: () => {} };
// Objects that have the optional property:
let validPerson: Person = { name: "Bobby", age: 42, move: () => {} };
// Is not a person because age is not a number
let invalidPerson: Person = { name: "Bobby", age: true };

// Interfaces can also describe a function type
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// Only the parameters' types are important, names are not important.
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string) {
  return src.search(sub) != -1;
};

// Classes - members are public by default
class Point {
  // Properties
  x: number;

  // Constructor - the public/private keywords in this context will generate
  // the boiler plate code for the property and the initialization in the
  // constructor.
  // In this example, "y" will be defined just like "x" is, but with less code
  // Default values are also supported

  constructor(x: number, public y: number = 0) {
    this.x = x;
  }

  // Functions
  dist() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // Static members
  static origin = new Point(0, 0);
}

// Classes can be explicitly marked as implementing an interface.
// Any missing properties will then cause an error at compile-time.
class PointPerson implements Person {
  name: string;
  move() {}
}

let p1 = new Point(10, 20);
let p2 = new Point(25); //y will be 0

// Inheritance
class Point3D extends Point {
  constructor(x: number, y: number, public z: number = 0) {
    super(x, y); // Explicit call to the super class constructor is mandatory
  }

  // Overwrite
  dist() {
    let d = super.dist();
    return Math.sqrt(d * d + this.z * this.z);
  }
}

// Modules, "." can be used as separator for sub modules
module Geometry {
  export class Square {
    constructor(public sideLength: number = 0) {}
    area() {
      return Math.pow(this.sideLength, 2);
    }
  }
}

let s1 = new Geometry.Square(5);

// Local alias for referencing a module
import G = Geometry;

let s2 = new G.Square(10);

// Generics
// Classes
class Tuple<T1, T2> {
  constructor(public item1: T1, public item2: T2) {}
}

// Interfaces
interface Pair<T> {
  item1: T;
  item2: T;
}

// And functions
let pairToTuple = function <T>(p: Pair<T>) {
  return new Tuple(p.item1, p.item2);
};

let tuple = pairToTuple({ item1: "hello", item2: "world" });

// Including references to a definition file:
/// <reference path="jquery.d.ts" />

// Template Strings (strings that use backticks)
// String Interpolation with Template Strings
let name = "Tyrone";
let greeting = `Hi ${name}, how are you?`;
// Multiline Strings with Template Strings
let multiline = `This is an example
of a multiline string`;

// READONLY: New Feature in TypeScript 3.1
interface Person {
  readonly name: string;
  readonly age: number;
}

var p1: Person = { name: "Tyrone", age: 42 };
p1.age = 25; // Error, p1.age is read-only

var p2 = { name: "John", age: 60 };
var p3: Person = p2; // Ok, read-only alias for p2
p3.age = 35; // Error, p3.age is read-only
p2.age = 45; // Ok, but also changes p3.age because of aliasing

class Car {
  readonly make: string;
  readonly model: string;
  readonly year = 2018;

  constructor() {
    this.make = "Unknown Make"; // Assignment permitted in constructor
    this.model = "Unknown Model"; // Assignment permitted in constructor
  }
}

let numbers: Array<number> = [0, 1, 2, 3, 4];
let moreNumbers: ReadonlyArray<number> = numbers;
moreNumbers[5] = 5; // Error, elements are read-only
moreNumbers.push(5); // Error, no push method (because it mutates array)
moreNumbers.length = 3; // Error, length is read-only
numbers = moreNumbers; // Error, mutating methods are missing

// Tagged Union Types for modelling state that can be in one of many shapes
type State =
  | { type: "loading" }
  | { type: "success"; value: number }
  | { type: "error"; message: string };

declare const state: State;
if (state.type === "success") {
  console.log(state.value);
} else if (state.type === "error") {
  console.error(state.message);
}

// Iterators and Generators

// for..of statement
// iterate over the list of values on the object being iterated
let arrayOfAnyType = [1, "string", false];
for (const val of arrayOfAnyType) {
  console.log(val); // 1, "string", false
}

let list = [4, 5, 6];
for (const i of list) {
  console.log(i); // 4, 5, 6
}

// for..in statement
// iterate over the list of keys on the object being iterated
for (const i in list) {
  console.log(i); // 0, 1, 2
}

// Type Assertion

let foo = {}; // Creating foo as an empty object
foo.bar = 123; // Error: property 'bar' does not exist on `{}`
foo.baz = "hello world"; // Error: property 'baz' does not exist on `{}`

// Because the inferred type of foo is `{}` (an object with 0 properties), you
// are not allowed to add bar and baz to it. However with type assertion,
// the following will pass:

interface Foo {
  bar: number;
  baz: string;
}

let foo = {} as Foo; // Type assertion here
foo.bar = 123;
foo.baz = "hello world";
```
## Type Assertions

<b class="BlueViolet">Sometimes you will have information about the type of a value that TypeScript can't know about.</b>
For example, if you're using `document.getElementById` , TypeScript only knows that this will
return some kind of `HTMLElement` , but you might know that your page will always have an
**HTMLCanvasElement with a given ID**.

In this situation, you can use a type assertion to specify a more specific type:
<Span class="Aqua">You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:</Span>
``` tsx
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas")
```

## Literal Types
<big class="ForestGreen">Could use primitive values to restrict allowable values</big>
``` ts
let x: "hello" = "hello";
// OK
x = "hello";
// ...
x = "howdy";
```
> Type "howdy" is is not not assignable to type "hello"
``` ts
type boolean = true | false
// type boolean is actually a literal type
```
### Literal Inferance
Note that typescript assumes that when you use a type literal you are expected the value to change
```ts
// this is not a error
// this is the same behviour for strings
const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}

// Solution 1a : type assertion in definition
const obj = { counter: 0 as 0};
// Solution 1b : type assertion when value used
if (someCondition) {
  obj.counter = 1 as 0; // causes error
}
// Solution 2 : Use const to convert entire object to type literal
const req = { url: "https://example.com", method: "GET" } as const;
```

### `null` and `undefined`
Typescript has types of these same names but you need `strictNullChecks` option on

<big class="Crimson">Non-null Assertion Operator (Postfix !)</big>
Writing `!` after any expression is effectively a type assertion that the
value isn't `null` or `undefined`
