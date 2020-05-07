/* 
---Iterator Protocol---
- loop through data structure one by one 
- return done when looping finished
*/

let num = [1, 2, 3, 4, 5];
let currIndex = 0;
const getInterator = (arr, nextIndex) => {
  let iterator = Symbol.iterator;
  return {
    [iterator]() {
      return {
        next: function () {
          if (nextIndex < arr.length) {
            const valueToReturn = arr[nextIndex];
            nextIndex++;
            return {
              value: valueToReturn,
              done: false,
            };
          } else {
            return { done: true };
          }
        },
      };
    }
  }
};

let it = getInterator();

console.log( it[Symbol.iterator]().next() );
// { value: 1, done: false }
console.log( it[Symbol.iterator]().next() );
// { value: 2, done: false }
console.log( it[Symbol.iterator]().next() );
// { value: 3, done: false }
console.log( it[Symbol.iterator]().next() );
// { value: 4, done: false }
console.log( it[Symbol.iterator]().next() );
// { value: 5, done: false }
console.log( it[Symbol.iterator]().next() );
// { done: true }

nextIndex = 0;// reset index
console.log( [...it] );
// [ 1, 2, 3, 4, 5 ]