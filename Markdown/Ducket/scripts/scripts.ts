//@ts-nocheck
/*******
 * Note that types seem to break the code
 */

/* Load Event Script */
const setup = () => {
  const textInput = document.getElementById('username')
  textInput.focus()
}

// note you can add the load event to anything not just window, img, scripts etc
window.addEventListener('load', setup, false)

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

const [elMsg, elUsername, elBody, elMessage] = [
  document.getElementById('feedback'),
  document.getElementById('username'),
  document.getElementById('body'),
  document.getElementById('message'),
]

elUsername.addEventListener('blur', () => {
  return checkUsername(5)
}) // event listener method
elUsername.addEventListener('focus', tipUsername, false)

function checkUsername(maxlength) {
  const userLength = elUsername.value.length

  if (userLength < maxlength) {
    elMsg.className = 'tip'
    elMsg.textContent = 'Not long enough, yet...'
  } else {
    elMsg.textContent = ''
  }
}

function tipUsername() {
  elMsg.className = 'tip'
  elMsg.innerHTML = 'Username must be at least 5 characters'
}

/** EVENT FLOW **/
// Set up event listeners to call itemDone() on click
const shoppingList = document.getElementById('shoppingList')
addClickEvent(shoppingList)

function addClickEvent(el) {
  el.addEventListener ? defaultAddListenerMethod(el) : oldAddListenerMethod(el)

  function defaultAddListenerMethod(el) {
    el.addEventListener('click', (e) => {
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

/* Position */

function showPosition(event) {
  const [sx, sy, px, py, cx, cy] = [
    document.getElementById('sx'),
    document.getElementById('sy'),
    document.getElementById('px'),
    document.getElementById('py'),
    document.getElementById('cx'),
    document.getElementById('cy'),
  ]

  // event object has mouse position data
  sx.value = event.screenX
  sy.value = event.screenY
  px.value = event.pageX
  py.value = event.pageY
  cx.value = event.clientX
  cy.value = event.clientY
}

window.addEventListener('mousemove', showPosition, false)

/* Keyboard Events */

function charCount(e) {
  const [textEntered, charDisplay, lastkey] = [
    elMessage.value,
    document.getElementById('charactersLeft'),
    document.getElementById('lastKey'),
  ]

  const counter = 180 - textEntered.length
  charDisplay.textContent = counter
  lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode
}

elMessage.addEventListener('keyup', charCount, false)

/* FORM EVENTS */
const [
  elForm,
  elSelectPackage,
  elPackageHint,
  elTerms,
  elTermsHint,
  noteName,
  noteInput,
] = [
  document.getElementById('formSignup'),
  document.getElementById('package'),
  document.getElementById('packageHint'),
  document.getElementById('terms'),
  document.getElementById('termsHint'),
  document.getElementById('noteName'),
  document.getElementById('noteInput'),
]

function packageHint() {
  const pack = this.options[this.selectedIndex].value

  elPackageHint.innerHTML =
    pack === 'monthly' ? 'Save $10 if you pay for 1 year!' : 'Wise choice!'
}

function checkTerms(event) {
  console.log(event)
  event.preventDefault()
  if (!elTerms.checked) {
    elTermsHint.innerHTML = 'You must agree to the terms'
  }
}

elSelectPackage.addEventListener('change', packageHint, false)
// note submit event doen't work in markdown due to iframe sandbox setting not having allow-forms
// elForm.addEventListener('submit', checkTerms, false)
elForm.addEventListener('dblclick', checkTerms, false)

// Example Audio Note

const writeLabel = (e) => {
  if (!e) e = window.event // IE Fallback

  const target = e.target || e.srcElement
  const textEntered = target.value
  noteName.textContent = textEntered
}

const [record, stop] = [
  (target) => {
    target.setAttribute('data-state', 'stop')
    target.textContent = 'stop'
  },
  (target) => {
    target.setAttribute('data-state', 'record')
    target.textContent = 'record'
  },
]

const recorderControls = (e) => {
  if (!e) e = window.event // IE Fallback
  e.preventDefault()
  const target = e.target || e.srcElement
  if (e.preventDefault) e.preventDefault()
  else e.returnValue = false

  switch (target.getAttribute('data-state')) {
    case 'record':
      record(target)
      break

    case 'stop':
      stop(target)
      break
    // More Buttons could go here
  }
}

if(document.addEventListener) {
  document.addEventListener('click', (e) => recorderControls(e), false)
  noteInput.addEventListener('input', writeLabel, false)
} else {
  document.attachEvent('onclick', (e) => recorderControls(e)) 
  noteInput.attachEvent('onkeyup', writeLabel)
}