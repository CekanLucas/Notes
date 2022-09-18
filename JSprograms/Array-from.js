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
console.log(`the price of all your wares is ${itemsArray.price()} golden coins`);