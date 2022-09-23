/* From Javascriptmancer by J. G. Garcia */

/* Array.from() is a method to convert array like objects into normal arrays */

function sortItems() {
  const items = Array.from(arguments) // argument only works for function syntax
  return items.sort()
}

console.log(sortItems('mandragora', 'amber', "elf's tongue"))

const library = new Map()
library.set('horror', ['It', 'The thing', 'horrors of Swarland'])
library.set('love', ['Romance and Betrayel', 'Beauty'])
library.set('history', ['The fall of the Kraagg Empire'])

Array.from(library).forEach((keyValuePair) => console.log(keyValuePair))

/* The second optional property is like map() function */
function sortItemsProperty(selector, ...args) {
  const items = Array.from(args, selector)
  return items.sort()
}
console.log(
  sortItemsProperty(
    (i) => i.price,
    { name: 'mandroga', price: 2 },
    { name: 'amber', price: 10 },
  ),
)

const shop = undefined

// old way
console.log(`Shop is an array: ${shop instanceof Array}`)
// new way
console.log(`Shop is an array: ${Array.isArray(shop)}`)

// -----

// alternative to the [] syntax
const ingredient = Array.of('bat wings', 'unicorn horn', 'sesame seeds')

// only corner case to use this syntax is for Array subclasses

class ItemsArray extends Array {
  price() {
    return this.map((i) => i.price).reduce((a, p) => a + p, 0)
  }
}

let itemsArray = ItemsArray.of(
  { name: 'bat', price: 10 },
  { name: 'unicorn horn', price: 10000 },
  { name: 'sesame seeds', price: 1 },
)
console.log(`the price of all your wares is ${itemsArray.price()} golden coins`)

// copywithin allows copying a portion of the array
// this copies the the portion 3 to 4 (item 4) into the index position 1
;[1, 2, 3, 4, 5, 6].copyWithin(
  /* target index */ 1,
  /* start index */ 3,
  /* end index */ 4,
)
;[1, 2, 3].fill('1:') //?
;[1, 2, 3].fill('1:', 1) //?
;[1, 2, 3].fill('1:', 1, 2) //?
Array(1, 2, 3).fill('1:', 1, 2) //?
Array(3).fill('1:', 1, 2) //?
![1, 2, 3, 4, 5, 6].includes(2) //?
;[1, 2, 3, 4, 5, 6].indexOf(3) //?

/* UNSAFE METHODS */
;[].push(1) //?
;[].push(1, 2, 3) //?
;[1, 2].pop() //?
;[1, 2].shift() //?
;[1, 2].unshift(1) //?
;[1, 2].unshift(1, 3) //?

// Array.prototype.slice( start, length n1, n2)
;[1, 2].splice(0, 1) //?
;[1, 2].splice(-1, 1) //?
;[1, 2, 3, 4].splice(1, 2) //?
;[1, 2].splice(0, 1, 'ash') //?

// Array.protoype.sort(compareFunc)
// Array.protoype.reverse()

/* SAFE METHODS */

;[1, 2, 3].concat(['1', 5]) //?
;[1, 2, 3].join(',' /* seperator */) //?

// Array.prototype.indexOf(n) 
// return index of item or -1 if not found

;[1, 2, 3].indexOf(3) //?
;[1, 2, 3].indexOf(55) //?

// Array.prototype.lastIndexOf(n) 
// return last occurence index of item of array -1 if not found

;[2, 1, 1].lastIndexOf(3) //?
;[1, 1, 1].lastIndexOf(55) //?

// Array.prototype.slice(start, end) 
// return sub array from start to end

;[1,2,3].slice(1,2) //?
;[1,2,3].slice(1) //?
;[1,2,3].slice(-1) //?