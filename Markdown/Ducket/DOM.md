<link rel="stylesheet" href="CSS/DOM.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="scripts/DOM.ts"></script>

[Back To DOM](../DOM.md)

## Starting Html for DOM Munipulation

```html
<div id="page">
  <h1 id="header">List</h1>
  <h2>Buy groceries</h2>
  <ul id="todo">
    <li id="one" class="hot"><em>fresh</em> figs</li>
    <li id="two" class="hot">pine nuts</li>
    <li id="three" class="hot">honey</li>
    <li id="four">balsamic vinegar</li>
  </ul>
</div>
```
<div id="page">
  <h1 id="header">List</h1>
  <h2>Buy groceries</h2>
  <ul id="todo"><li id="one" class="hot"><em>fresh</em> figs</li><li id="two" class="hot">pine nuts</li><li id="three" class="hot">honey</li><li id="four">balsamic vinegar</li></ul>
  <div id="scriptResults"></div>
</div>

Click to Run Chosen Below Script & Click Link to go to Code
<div id='script-buttons' class="buttons is-centered">
  <button class='button is-centered is-warning is-small' onclick='getElementByIdScript()'>getElementById&nbsp;<a
      href="#getElementByIdScript"><i class="fas fa-file"></i></a> </button>
  <button class='button is-centered is-warning is-small' onclick='getElementsByClassNameScript()'>getElementsByClassName
    &nbsp;<a href="#getElementsByClassNameScript"><i class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='getElementsByTagNameScript()'>getElementsByTagName &nbsp;<a
      href="#getElementsByTagNameScript"><i class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='querySelectorScript()'>querySelector &nbsp;<a
      href="#querySelectorScript"><i class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='nodeListScript()'>Node List &nbsp;<a
      href="#nodeListScript"><i class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='siblingScript()'>Sibling &nbsp;<a href="#siblingScript"><i
        class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='childScript()'>Child &nbsp;<a href="#childScript"><i
        class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='nodeValueScript()'>Node
    Value &nbsp;<a href="#nodeValueScript"><i class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='textScript()'>Text &nbsp;<a href="#textScript"><i
        class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='innerHtmlScript()'>Inner
    HTML &nbsp;<a href="#innerHtmlScript"><i class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='addElementScript()'>Add
    Element &nbsp;<a href="#addElementScript"><i class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='removeElementScript()'>Remove
    Element &nbsp;<a href="#removeElementScript"><i class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='getAttributeScript()'>Get
    Attribute &nbsp;<a href="#getAttributeScript"><i class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='setAttributeScript()'>Set
    Attribute &nbsp;<a href="#setAttributeScript"><i class="fas fa-file"></i></a></button>
  <button class='button is-centered is-warning is-small' onclick='removeAttributeScript()'>Remove
    Attribute &nbsp;<a href="#removeAttributeScript"><i class="fas fa-file"></i></a></button>
</div>


## Get Element By Id [<i id='getElementByIdScript' class="fas fa-link"></i>](#page)
```ts
  const el = document.getElementById('one')

  // Change the value of the class attribute.
  el.className = 'cool'
```

## Get Elements By Class Name [<i id='getElementsByClassNameScript' class="fas fa-link"></i>](#page)
```ts
  const elements = document.getElementsByClassName('hot')

  // If 3 or more are found with 'hot' class select third element from NodeList and change class attribute
  if (elements.length > 2) 
    elements[2].className = 'cool'
```
## Get Element By Tag Name [<i id='getElementsByTagNameScript' class="fas fa-link"></i>](#page)
```ts
  const elements = document.getElementsByTagName('li')

  // If 1 or more li elements are found change 1st element's class
  if (elements.length > 0) elements[0].className = 'cool'
```
## Query Selectors [<i id='querySelectorScript' class="fas fa-link"></i>](#page)
```ts
  // querySelector only returns the first match
  document.querySelector('li.hot').className = 'cool'

  // querySelectorAll returns a NodeList
  // The third li element is then selected and changed
  document.querySelectorAll('li.hot')[1].className = 'cool'
```

## Node List [<i id='nodeListScript' class="fas fa-link"></i>](#page)
```ts
  const hotItems = document.querySelectorAll('li.hot')
  if (hotItems.length > 0)
    for (let i = 0; i < hotItems.length; i++) hotItems[i].className = 'cool'
```

## Sibling Script [<i id='siblingScript' class="fas fa-link"></i>](#page)
```ts
  // Select the starting point and find its siblings.
  const startItem = document.getElementById('two')
  const prevItem = startItem.previousElementSibling
  const nextItem = startItem.nextElementSibling

  // Change the values of the siblings' class attributes.
  prevItem.className = 'complete'
  nextItem.className = 'cool'
```
## Child Script [<i id='childScript' class="fas fa-link"></i>](#page)
```ts
  // Select the starting point and find its children.
  const list = document.getElementsByTagName('ul')[0]
  const firstChild = list.firstElementChild
  const lastChild = list.lastElementChild

  // Change the values of the children's class attributes.
  firstChild.className = 'complete'
  lastChild.className = 'cool'
```

## Node Value Script [<i id='nodeValueScript' class="fas fa-link"></i>](#page)
```ts
  const itemTwo = document.getElementById('two')
  // Get its text content and change pine nuts to kale
  let elText = itemTwo.firstChild.nodeValue
  elText = elText.replace('pine nuts', 'kale')

  itemTwo.firstChild.nodeValue = elText
```
## Text Script [<i id='textScript' class="fas fa-link"></i>](#page)
```ts
  const firstItem = document.getElementById('one')

  // Show the content of these two properties at the end of the list
  let msg = `<p>textContent: ${firstItem.textContent}</p>`
  msg += `<p>innerText: ${firstItem.innerText}</p>`

  document.getElementById('scriptResults').innerHTML = msg

  firstItem.textContent = 'sourdough bread'
```
## Inner HTML [<i id='innerHtmlScript' class="fas fa-link"></i>](#page)
```ts
  const firstItem = document.getElementById('one')
  const itemContent = firstItem.innerHTML

  // Update the content of the first list item so it is a link
  firstItem.innerHTML = `<a href="http://example.org">${itemContent}</a>`
```
## Add Element Script [<i id='addElementScript' class="fas fa-link"></i>](#page)
```ts
  // Create a new element and store it in a variable.
  const newEl = document.createElement('li')

  // Create a text node and store it in a variable.
  const newText = document.createTextNode('quinoa')

  // Attach the new text node to the new element.
  newEl.appendChild(newText)

  // Find the position where the new element should be added.
  const position = document.getElementsByTagName('ul')[0]

  // Insert the new element into its position.
  position.appendChild(newEl)
```

## Remove Element Script [<i id='removeElementScript' class="fas fa-link"></i>](#page)
```ts
  // define element that is going to be removed
  const removeEl = document.getElementsByTagName('li')[3]

  // Find the element which contains the element to be removed
  const containerEl = document.getElementsByTagName('ul')[0]

  // Remove the element
  containerEl.removeChild(removeEl)
```
## Get Attribute Script [<i id='getAttributeScript' class="fas fa-link"></i>](#page)
```ts
  const firstItem = document.getElementById('one')

  if (firstItem.hasAttribute('class')) {
    const attr = firstItem.getAttribute('class')

    // Add the value of the attribute after the list
    document.getElementById(
      'scriptResults',
    ).innerHTML = `<p>The first item has a class name: ${attr}</p>`
  }
```
## Set Attribute Script [<i id='setAttributeScript' class="fas fa-link"></i>](#page)
```ts
  const firstItem = document.getElementById('one')
  firstItem.className = 'complete'

  const fourthItem = document.getElementsByTagName('li').item(3)
  // NOTE: The following line should say fourthItem (not el2)
  fourthItem.setAttribute('class', 'cool') // Add an attribute to it
```
## Remove Attribute Script [<i id='removeAttributeScript' class="fas fa-link"></i>](#page)
```ts
  const firstItem = document.getElementById('one')

  if (firstItem.hasAttribute('class')) firstItem.removeAttribute('class')
```

