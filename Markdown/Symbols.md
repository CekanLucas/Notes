<head>
  <link 
 
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">

<style> 
.symbol {
    color:blueviolet;
}
.iterator {
    color:coral;
}
</style>
</head>    

# <span class="symbol">Symbols</span>

 > <span class="symbol"> A new primitive data type introduced in ES6, special characteristic being that they are <span class="Violet">unique</span> and <span class="Violet">immutable</span></span>

```js
let sym = Symbol(); //make new symbol

let symbol = Symbol("sym"); // Symbol(sym)

let type = typeof Symbol(); // symbol

let sym1 = Symbol("unique");
let sym2 = Symbol("unique");
(sym1 === sym2); // false

// use Symbol.for to access symbol registry
let sym1for = Symbol.for("unique");
let sym2for = Symbol.for("unique");
(sym1for === sym2for); // true

//Symbol.keyfor pass in symbol and get description
Symbol.keyFor(sym1for); // "unique"
```