<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
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
<div id="stack-container">
  <a href=""><img src="" alt="Logo"></a>
</div>

link to [example file](../JSprograms/Maps_Sets.js)

# Maps

A **Javascript Map data structure** is often called a *HashTable* in C# it is known as a *Dictionary*

It is a structure based on <b class="text-red-600">Keys</b> *mapped to a* <b class="text-purple-500">Values</b>
## Basic
```js
const map = new Map() // create a new map
const map = new Map(iterator) // create a map from iterator
const value = map.get('key') // if key is not in map returns undefined
map.set('key', 'value') // add item to map
map.delete('key') // delete item from map return true if successful else false
map.has('key') // returns boolean on whether item exists in map
map.size // returns number of items in map
map.clear() // removes all items in map
```

## Interating a Map

```js
map.forEach((key, value, map) => {})

map.entries() // returns [key, value] collection DEFAULT ITERATOR 

map.keys()
map.values()
```

## Sets

These are like the Map data structure but no a key value pairs and **no duplications**

> **Note** iternally to check duplication Sets use strict equality <span class="text-yellow-600"></span>
> *eg* `===` `==`

## Basic
```js
const set = new Map() // create a new set
const set = new Map(iterator) // create a set from iterator
const value = set.add('key') // add item to set and is chainable
set.delete('value') // delete item from set return true if successful else false
set.has('value') // returns boolean on whether item exists in set
set.size // returns number of items in set
set.clear() // removes all items in set
```

## Interating a Set

```js
set.forEach((key, value, set) => {})

set.value() // returns value iterator DEFAULT ITERATOR 

set.keys()
set.values()
set.entries()
```