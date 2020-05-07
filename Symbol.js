let sym = Symbol(); //make new symbol

let symbol = Symbol("sym");
console.log(symbol); // Symbol(sym)

let type = typeof Symbol();
console.log(type); // symbol

let sym1 = Symbol("unique");
let sym2 = Symbol("unique");
console.log(sym1 === sym2); // false

// use Symbol.for to access symbol registry
let sym1for = Symbol.for("unique");
let sym2for = Symbol.for("unique");
console.log(sym1for === sym2for); // true

//Symbol.keyfor pass in symbol and get description
let symkeyfor = Symbol.keyFor(sym1for);
console.log(symkeyfor);