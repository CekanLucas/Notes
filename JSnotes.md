<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./CSS.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:400&display=swap" 
      rel="stylesheet">

<style> 

html>body, p {
  font-family: ubuntu;
  font-size: 1.1em;
  text-shadow:none;
}
h2>code, p>code, li>code, div>code {
    background-color: #09A;
    border-radius: 7px;
    box-shadow: 
      1px 1px 1px #000,
      -1px -1px 1px #FFF,
      -1px 1px 2px #000,
      1px -1px 2px #000;
    color: #00f;
    margin: 5px;
    padding: 2px;
    font-family: 'Fira Mono', monospace;
    text-shadow:none;
    font-size:0.8em
}
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

# Binary and Octal Notation 


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