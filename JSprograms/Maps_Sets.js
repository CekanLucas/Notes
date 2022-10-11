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



/* ////////////// SETS ////////////// */


const newSet = new Set()

// Map has 'set' but Set uses 'add' also no 'get' in Set
newSet.add(
  /* key */ 'obj',
  /* value */ {
    1: 1,
    2: 'a',
    a: 'c',
  },
)

newSet.add(1)
newSet.add(2)
newSet.add(1)
console.log('set has 1?', newSet.has(1)) //?
console.log('getting size', newSet.size) //?
newSet.delete(1)
console.log('getting size', newSet.size) //?
console.log('set has 1?', newSet.has(1)) //?
newSet.clear()
console.log('getting size', newSet.size) //?

// Iterating over the elements of Set

newSet
  .add( 2)
  .add('two')
  .add(2 * 2)

for (let keyValue of newSet) {
  console.log(keyValue) //?
}

for (let value of newSet) {
  console.log(value) //?
}

// .entries is the default itterator
for (let keyValue of newSet.entries()) {
  console.log(keyValue) //?
}

// Array.prototype.forEach works!
newSet.forEach((key, value) => {
  console.log(key, value) //?
})

//iterating over keys
console.log(Array.from(newSet.keys()).join(' , '))

//iterating over values
console.log(Array.from(newSet.values()).join(' , '))


// Set from an iterable collection

const arrSet = new Set( arr.map( (v, i) => [i, v]))
console.log(
  Array.from(arrSet.keys()).join(' , '),
  Array.from(arrSet.values()).join(' , ')
)