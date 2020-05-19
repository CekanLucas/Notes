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
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
</style>
</head>    

# JS and the DOM 

### Creating Elements

<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
<button id="click1" class="button is-info is-outlined is-rounded is-fullwidth">ClickMe</button>

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

```js
let newDiv = document.createElement('div');
let newTextContent = document.createTextNode("HelloWorld");

newDiv.appendChild(newTextContent);
```

<script>
  $("#container").onClick( () => {
    //create div element
    let newDiv = document.createElement('div');
    //create textnode (node not a element)
    let newTextContent = document.createTextNode("HelloWorld");

    // new div now has a child textnode 
    newDiv.appendChild(newTextContent);

    // select the #container div
    const container = document.querySelector('#container');

    // select the first child of #container => .display
    console.dir(container.firstElementChild);
    
    // select the .controls div
    const controls = document.querySelector('.controls');
    
    // selects the prior sibling => .display  
    console.dir(controls.previousElementSibling);                  
  })
</script>

`document.createElement('[tag]')`

`document.querySelector('[selector]')` returns first match of *selector*

`document.querySelectorAll('[selector]')` returns a *nodelist* <span class="Red"> which is <u>not a</u> array </span>containing references to all fo the matches of the *selectors*

<p class="SkyBlue">Use css selectors eg: </p>

- div.display
- .display
- #container>.display
- div#container>div.display
  
<p class="SkyBlue">Other Selectors:</p>

- `firstElementChild`
- `previousElementSibling`

**When the <span class="Orange">HTML</span> is parsed by the <span class="Orange">browser</span> it is converted into a <span class="Yellow">DOM tree</span>. Each <span class="Lime">Node</span> of the tree is an <span class="Yellow">object</span> to which we get our properties and elements to manipulate said <span class="Yellow">DOM</span>**

### Append Elements


*parentNode*.**appendChild**(*childNode*)
<p class="is-size-2 ">
  *parentNode*.**appendChild**(*childNode*)
</p>


<span class="is-size-4">appends *childnode* as the last child of *parentNode*</span>