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
h1,h2,h3,h4,h5,h6{
    font-family:;
    color:RoyalBlue;
    font-weight: bolder;
    text-align: center;
}
dt{
  font-weight: bold;
  font-size: 22px;
  color: BlueViolet
}
dd{
  font-weight: bold;
  font-size: 16px;
  color: Cyan; 
}
</style>
</head>
<div id="stack-container">
<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="Typescript Logo">
</div>

# TypeScript <span class="text-blue-300 font-extralight">Generics</span>

<span class="text-blue-600 font-semibold ">Without generics, we would either have to give the identity function a specific type or give it a any type</span>

```typescript
function identity(arg: number): number {
  return arg;
}

// working with types rater than values
const identityFunction = <Type>(arg: Type): Type => arg;

// same as output:string
const output = <string>identityFunction('mystring');
```

We can use something called <b class="Orange">type argument inference</b> to allow the typescript compiler to infer the type of `Type`

<p class="LimeGreen">Below we are infering the array of typed elements, so that compiler knows args has the length property</p>

```ts
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

//alternatively
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
```
## Generics Types
lets learn how to create generic types like `Array<Type>`

