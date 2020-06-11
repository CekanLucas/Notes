<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/color"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/CSS.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style>
.map {
  color: cyan;
  font-weight: bold;
}
.set {
  color: magenta; 
  font-weight: bold;
}
.key {
  color: yellow;
}
.value {
  color: tomato; 
}
</style>
</head>    


<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" height="200px" style="float:left;margin:20px;">




# ECMA script 

## New Numerals

### Math.trunc()

`Math.trunc` will drop any numbers after the decimal point wether the number is positive or negative.

```JS
Math.trunc(1.2343); //1
Math.trunc(-3242.34); //-3242
```
`Math.cbrt` returns the cubed root of a number

```JS
Math.cbrt(27); //3
```
`Math.sign` returns a value that represents wether a number is positive (1), negative(-1), positive zero (0), negative (-0) and `NaN`

```JS
Math.sign(1); //1
Math.sign(-1); //-1
```

# Loops of JS

## `Array.prototype.forEach()`

``` js
arr.forEach( function(el) {
  //code to run for each element of arr
})
```
## `Array.prototype.for()`
- `Array.prototype.for( in )`
``` js
// returns index
arr.for( (let varName in varArr) => {
  console.log(varArr[varName]);
})
// prefered way of using for...in
arr.for( (let [index,varName] in varArr.entries() ) => {
  console.log(varArr[varName]);
})
```
- `Array.prototype.for( let varName of varArr)`

``` js
// prefered
arr.for( (et varName of varArr) => {
  console.log(varArr);
})
```
# Objects 

>get array of keys of object:
>`Object.keys(arr)`

``` js

personKeys = Object.keys()


```

# <span class="map">Map</span> <small><em><sub>New Data Type</sub></em></small>

> A <span class="map">Map object</span> can be used to hold <b class="SkyBlue"><span class="key">key</span>/<span class="value">value</span> pairs</b><br> A key or value in a map can be anything (objects and primitive values).

The syntax `new Map([iterable])` creates a <span class="map">Map object</span> where iterable is an array or any other iterable object whose elements are arrays (with a <b class="SkyBlue"><span class="key">key</span>/<span class="value">value</span> pair</b> each).

<span class="SkyBlue"><b>An Object is similar to Map but there are important differences:</b></span>
1) The keys can be any type including functions, objects, and any primitive
2) You can get the size of a Map
3) You can directly iterate over Map
4) Performance of the Map is better in scenarios involving frequent addition and removal of <b class="SkyBlue"><span class="key">key</span>/<span class="value">value</span> pairs</b>

```js
// --- size property ---
// returns the number of key/value pairs in a map
let map = new Map([['k1', 'v1'], ['k2', 'v2']]);
console.log(map.size); // 2 Try It Yourself
```
## Methods
`set(key, value)` Adds a specified <b class="SkyBlue"><span class="key">key</span>/<span class="value">value</span> pair</b> to the <span class="map">map</span>.

> If the <span class="key">specified key</span> <u>already exists</u>, <spna class="value">
  value corresponding to it
</spna> is replaced with the <span class="value">specified value</span>.

`get(key)` Gets the <span class="value">value</span> corresponding to a <span class="key">specified key</span> in the <span class="map">map</span>. 
>If the <span class="key">specified key</span> doesn't exist, `undefined` is returned.

`has(key)` Returns `true` if a <span class="key">specified key</span> exists in the <span class="map">map</span> and `false` otherwise.

`delete(key)` Deletes the <b class="SkyBlue"><span class="key">key</span>/<span class="value">value</span> pair</b> with a <span class="key">specified key</span> from the <span class="map">map</span> and returns true. Returns false if the element does not exist.

`clear()` Removes all <b class="SkyBlue"><span class="key">key</span>/<span class="value">value</span> pairs</b>s from <span class="map">map</span>.

`keys()` Returns an Iterator of keys in the <span class="map">map</span> for each element.

`values()` Returns an Iterator of values in the <span class="map">map</span> for each element.

`entries()` Returns an Iterator of `array[key, value]` in the <span class="map">map</span> for each element.

> <b class="map">Map supports different data types i.e. 1 and "1" are two different keys/values</b>  

# <span class="set">Set</span> <small><em><sub>New Data Type</sub></em></small>
> A <span class="set">Set object</span> can be used to hold <u><b>unique</b></u> <span class="value">values</span><br>
A <span class="value">value</span> in a <span class="set">set</span> can be anything (objects and primitive values)

The syntax `new Set([iterable])` creates a <span class="set">Set</span> object where iterable is an array or any other iterable object of <span class="value">values</span>
```js
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); // 5 Try It Yourself
```
## Methods
`add(value)` Adds a new element with the <span class="value">given value</span> to the <span class="set">Set</span>

`delete(value)` Deletes a <span class="value">specified value</span> from the <span class="set">set</span>

`has(value)` Returns `true` if a <span class="value">specified value</span> <i><u>exists</u></i> in the <span class="set">set</span> and `false` otherwise

`clear()` Clears the <span class="set">set</span>

`values()` Returns an Iterator of <span class="value">values</span> in the <span class="set">set</span>

> <span class="set">Set supports different data types i.e. `1` and `"1"` are two different values</span><br>
> <span class="set">`NaN` and `undefined` can also be stored in Set</span>