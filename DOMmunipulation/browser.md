<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../CSS.css"/>
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
/* --- EXAMPLE --- */

let newDiv = document.createElement('div');
let newTextContent = document.createTextNode("HelloWorld");

newDiv.appendChild(newTextContent);

/* --- Adding Attributes --- */

// adds the indicated style rule
div.style.color = 'blue'

// adds several style rules
div.style.cssText = 'color:blue; background: white'

// adds several inline style rules through style attribute
div.setAttribute('style', 'color:blue; background: white')

/* --- Editing Attributes --- */

// if id exists update it to 'theDiv' else create an id
// with value "theDiv"
div.setAttribute('id', 'theDiv');        

// returns value of specified attribute, in this case
// "theDiv
div.getAttribute('id');                      

// removes specified attribute
div.removeAttribute('id');

/* --- Working with Classes --- */

// adds class "new" to your new div
div.classList.add('new');

// remove "new" class from div
div.classList.remove('new');

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle('active');

/* --- Adding Text Content --- */
// create a text node containing "Hello World!" and inserts it in div 
div.textContent = 'Hello World!'

/* --- Adding HTML Content --- */
// renders the html inside div
div.innerHTML = '<span>Hello World!</span>'
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

### <span class="RoyalBlue">Append Elements</span>


<span class="is-size-4 RoyalBlue">*parentNode*.**appendChild**(*childNode*)</span>
<br>
<span class="SteelBlue">appends *childNode* as the last child of *parentNode*</span>
<br>
<span class="is-size-4 RoyalBlue"> *parentNode*.**insertBefore**(*newNode*, *referenceNode*) </span>
<br>
<span class="SteelBlue">inserts *newNode* into *parentNode* before *referenceNode*</span>
<br>

### <span class="Crimson">Remove  Elements </span>

<span class="is-size-4 Crimson">*parentNode*.**removeChild**(*child*)</span>
<br>
<span class="Crimson">remove *child* from *parentNode* on the DOM and returns reference to *child*</span>
<br>

### Altering Elements

When you have a reference to an element, you can use that reference to alter the element’s own properties. **This allows you to do many useful alterations, like adding/removing and altering attributes, changing classes, adding inline style information and more.**

<span class="Orange"> `node.innerHTML` Overides all html code within the element</span> 

>**Note that `textContent` is preferable for adding text, and `innerHTML` should be used sparingly as it can create security risks if misused.**