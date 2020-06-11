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
<style> 
.object {
    color:yellow;
}
.iterator {
    color:coral;
}
</style>
</head>    

# Iterators and Generators 
## Iterators 

 > <span class="Orange">**<span class="iterator">Iterator:</span>** A <span class="DarkOrange">special type of object </span>that <span class="LightSalmon">returns items from a sequence one at a time</span> and <span class="DarkSalmon">remembers its position within the sequence</span></span>

```js
const getInterator = () => {
    let num = [1,2,3,4,5];
    let nextIndex = 0;

    // take into account done condition 
    // otherwise return next value 
  return {
    next: function () {
      if (nextIndex < num.length) {
        const valueToReturn = num[nextIndex];
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

// lets use our iterator 
let it = getIterator();

it.next(); // Object {value: 1 done: false}
it.next(); // Object {value: 2 done: false}
it.next(); // Object {value: 3 done: false}
it.next(); // Object {value: 4 done: false}
it.next(); // Object {value: 5 done: false}
it.next(); // Object {value: 5 done: false}
it.next(); // Object {value: 6 done: true}
```

The <span class="iterator">Iterator</span> defined above  follows the <span class="iterator">iterator protocol</span>

<span class="Yellow">Built in Javascript defined as <span class="iterator">iterables</span> </span>
- <span class="Coral">arrays</span>
- <span class="Coral">srings</span>
- <span class="Coral">maps</span>
- <span class="Coral">sets</span> 
- `for ... of` <span class="Coral">kind of loops</span>

# Generators

> Special type of function that work as a factory for interators ~Mozzila Docs

`yield` tells function to exit and return value when function is called next time function execution continues right after yield instead of again.

```js
function * getGenerator() { // * means generator
  let currentNumber = 1;
  while (currentNumber < 6){
    yield currentNumber++;
  }
}

let gen = getGenerator(); 

gen.next()
gen.next()
gen.next()
```