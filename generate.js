
// see Iterators and Generators in my Notes

function * getGenerator() { // * means generator
  let currentNumber = 1;
  while (currentNumber < 6){
    yield currentNumber++;
  }
}

let gen = getGenerator()
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

/* RETURNS if you run this file
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ value: undefined, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
*/