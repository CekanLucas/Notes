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

#  <span class="react">Typescript</span> <small class="Teal">Design Patterns</small>

<div class="columns">
  <div class="column">
  
``` ts
export interface IAnimal {
  name: string;
  age: number;
}

class Cat implements IAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```
</div>

<div class="column">

### Error Message
Class **Cat** incorrectly implements interface **IAnimal**.
  Property **age** is missing in type **Cat** but required in type **IAnimal**.ts(2420)

</div>
</div>

