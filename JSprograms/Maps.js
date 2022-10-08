// A Javascript Map data structure is often called a *HashTable* 'in C# it is known as a Dictionary'

const newMap = new Map()

newMap.set(
  /* key */ 'obj',
  /* value */ {
    1: 1,
    2: 'a',
    a: 'c',
  },
)

console.log('getting value', newMap.get('obj')) //?
newMap.set(1, 1)
console.log('map has 1?', newMap.has(1)) //?
console.log('getting size', newMap.size) //?
newMap.delete(1)
console.log('getting size', newMap.size) //?
console.log('map has 1?', newMap.has(1)) //?
newMap.clear()
console.log('getting size', newMap.size) //?

// Iterating over the elements of Map

newMap
  .set(1, 2)
  .set(2, 'two')
  .set(3, 2 * 2)

for (let keyValue of newMap) {
  console.log(keyValue) //?
}

for (let [key, value] of newMap) {
  console.log(key, value) //?
}

// .entries is the default itterator
for (let keyValue of newMap.entries()) {
  console.log(keyValue) //?
}

// Array.prototype.forEach works!
newMap.forEach((key, value) => {
  console.log(key, value) //?
})

//iterating over keys
console.log(Array.from(newMap.keys()).join(' , '))

//iterating over values
console.log(Array.from(newMap.values()).join(' , '))


// Map from an iterable collection

const arr = ['one', 'two', 'three']

const arrMap = new Map( arr.map( (v, i) => [i, v]))
console.log(
  Array.from(arrMap.keys()).join(' , '),
  Array.from(arrMap.values()).join(' , ')
)

// helper method using a generator function
// skip this 

function* toKeyValue(arr, keySelector) {
  for(let item of arr){
    yield [keySelector(item), item]
  }
}

/* CHEAT SHEET */

/* 
//// Basic ////
const map = new Map() // create a new map
const map = new Map(iterator) // create a map from iterator
const value = map.get('key) // if key is not in map returns undefined
map.set('key', 'value') // add item to map
map.delete('key') // delete item from map return true if successful else false
map.has('key) // returns boolean on wether item exists in map
map.size // returns number of items in map
map.clear() // removes all items in map

//// Iterating Map ////

map.forEach((key, value, map) => {})

map.entries() // returns [key, value] collection DEFAULT ITERATOR 

map.keys()
map.values()
*/