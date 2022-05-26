/*******
 * Note that types seem to break the code
 */

/* DOM muipulations scripts */

function getElementByIdScript() {
  const el = document.getElementById('one')

  // Change the value of the class attribute.
  el.className = 'cool'
}

function getElementsByClassNameScript() {
  const elements = document.getElementsByClassName('hot')

  // If 3 or more are found with 'hot' class select third element from NodeList and change class attribute
  if (elements.length > 2) elements[2].className = 'cool'
}

function getElementsByTagNameScript() {
  const elements = document.getElementsByTagName('li')

  // If 1 or more li elements are found change 1st element's class
  if (elements.length > 0) elements[0].className = 'cool'
}

function querySelectorScript() {
  // querySelector only returns the first match
  document.querySelector('li.hot').className = 'cool'

  // querySelectorAll returns a NodeList
  // The second hot li element is then selected and changed
  document.querySelectorAll('li.hot')[1].className = 'cool'
}

function nodeListScript() {
  const hotItems = document.querySelectorAll('li.hot')
  if (hotItems.length > 0)
    for (let i = 0; i < hotItems.length; i++) hotItems[i].className = 'cool'
}

function siblingScript() {
  // Select the starting point and find its siblings.
  const startItem = document.getElementById('two')
  const prevItem = startItem.previousElementSibling
  const nextItem = startItem.nextElementSibling

  // Change the values of the siblings' class attributes.
  prevItem.className = 'complete'
  nextItem.className = 'cool'
}

function childScript() {
  // Select the starting point and find its children.
  const list = document.getElementsByTagName('ul')[0]
  const firstChild = list.firstElementChild
  const lastChild = list.lastElementChild

  // Change the values of the children's class attributes.
  firstChild.className = 'complete'
  lastChild.className = 'cool'
}

function nodeValueScript() {
  const itemTwo = document.getElementById('two')
  // Get its text content and change pine nuts to kale
  let elText = itemTwo.firstChild.nodeValue
  elText = elText.replace('pine nuts', 'kale')

  itemTwo.firstChild.nodeValue = elText
}

function textScript() {
  const firstItem = document.getElementById('one')

  // Show the content of these two properties at the end of the list
  let msg = `<p>textContent: ${firstItem.textContent}</p>`
  msg += `<p>innerText: ${firstItem.innerText}</p>`

  document.getElementById('scriptResults').innerHTML = msg

  firstItem.textContent = 'sourdough bread'
}

function innerHtmlScript() {
  const firstItem = document.getElementById('one')
  const itemContent = firstItem.innerHTML

  // Update the content of the first list item so it is a link
  firstItem.innerHTML = `<a href="http://example.org">${itemContent}</a>`
}

function addElementScript() {
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
}

function removeElementScript() {
  // define element that is going to be removed
  const removeEl = document.getElementsByTagName('li')[3]

  // Find the element which contains the element to be removed
  const containerEl = document.getElementsByTagName('ul')[0]

  // Remove the element
  containerEl.removeChild(removeEl)
}

function getAttributeScript() {
  const firstItem = document.getElementById('one')

  if (firstItem.hasAttribute('class')) {
    const attr = firstItem.getAttribute('class')

    // Add the value of the attribute after the list
    document.getElementById(
      'scriptResults',
    ).innerHTML = `<p>The first item has a class name: ${attr}</p>`
  }
}
function setAttributeScript() {
  const firstItem = document.getElementById('one')
  firstItem.className = 'complete'

  const fourthItem = document.getElementsByTagName('li').item(3)
  // NOTE: The following line should say fourthItem (not el2)
  fourthItem.setAttribute('class', 'cool') // Add an attribute to it
}
function removeAttributeScript() {
  const firstItem = document.getElementById('one')

  if (firstItem.hasAttribute('class')) firstItem.removeAttribute('class')
}

/* Event Scripts */

const usernameInput = document.getElementById('username')
// usernameInput.onblur = checkUsername // traditional event handler
usernameInput.addEventListener('blur', () => {
  return checkUsername(3)
}) // event listener method

function checkUsername(maxlength) {
  const elMsg = document.getElementById('feedback')
  const elUsername = document.getElementById('username')
  // @ts-ignore // HTMLINPUT TYPE BREAKS CODE
  const userLength = elUsername.value.length
  elMsg.textContent =
    userLength < maxlength
      ? `Username must be ${maxlength} characters or more\nYou need ${
          maxlength - userLength
        } more`
      : ''
}

/** EVENT FLOW **/
// Set up event listeners to call itemDone() on click
const shoppingList = document.getElementById('shoppingList')
addClickEvent(shoppingList)

function addClickEvent(el) {
  el.addEventListener ? defaultAddListenerMethod(el) : oldAddListenerMethod(el)

  function defaultAddListenerMethod(el) {
    el.addEventListener('click',  (e) => {
      // e.stopPropagation() // note important to prevent bubbling causing link to go elsewhere
      itemDone(e)
    })
  }

  /** For Old IE method of calling itemDone */
  function oldAddListenerMethod(el) {
    el.attachEvent('onclick', (e) => itemDone(e))
  }
}

function getTarget(e) {
  // For old IE event object
  if (!e) e = window.event

  // Get the target of event
  return e.target || e.srcElement
}

function itemDone(e) {
  const target = getTarget(e)

  if (target.nodeName.toLowerCase() == 'a') {
    const elListItem = target.parentNode
    const elList = elListItem.parentNode
    elList.removeChild(elListItem)
  }
  if (target.nodeName.toLowerCase() == 'em') {
    const elListItem = target.parentNode.parentNode
    const elList = elListItem.parentNode
    elList.removeChild(elListItem)
  }
  /* Prevent the link from taking you elsewhere if preventDefault() works use preventDefault() otherwise Use old IE version similiar for stopping event propagation */
  e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true)
  e.preventDefault ? e.preventDefault() : (e.returnValue = false)
}