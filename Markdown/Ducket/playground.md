<link rel="stylesheet" href="CSS/playground.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

[Back To Main File](ducket.md)


## Dom Munipulation 

<div id="page">
  <h1 id="header">List</h1>
  <h2>Buy groceries</h2>
  <ul id="todo"><li id="one" class="hot"><em>fresh</em> figs</li><li id="two" class="hot">pine nuts</li><li id="three" class="hot">honey</li><li id="four">balsamic vinegar</li></ul>
  <div id="scriptResults"></div>
</div>

Click to Run Chosen Below Script & For Code link here [<i class="fas fa-external-link-alt"></i>](./scripts/scripts.ts)
<div id='script-buttons' class="buttons is-centered">
  <button class='button is-centered is-warning is-small' onclick='getElementByIdScript()'>getElementById </button>
  <button class='button is-centered is-warning is-small' onclick='getElementsByClassNameScript()'>getElementsByClassName
    </button>
  <button class='button is-centered is-warning is-small' onclick='getElementsByTagNameScript()'>getElementsByTagName </button>
  <button class='button is-centered is-warning is-small' onclick='querySelectorScript()'>querySelector </button>
  <button class='button is-centered is-warning is-small' onclick='nodeListScript()'>Node List </button>
  <button class='button is-centered is-warning is-small' onclick='siblingScript()'>Sibling </button>
  <button class='button is-centered is-warning is-small' onclick='childScript()'>Child </button>
  <button class='button is-centered is-warning is-small' onclick='nodeValueScript()'>Node
    Value </button>
  <button class='button is-centered is-warning is-small' onclick='textScript()'>Text </button>
  <button class='button is-centered is-warning is-small' onclick='innerHtmlScript()'>Inner
    HTML </button>
  <button class='button is-centered is-warning is-small' onclick='addElementScript()'>Add
    Element </button>
  <button class='button is-centered is-warning is-small' onclick='removeElementScript()'>Remove
    Element </button>
  <button class='button is-centered is-warning is-small' onclick='getAttributeScript()'>Get
    Attribute </button>
  <button class='button is-centered is-warning is-small' onclick='setAttributeScript()'>Set
    Attribute </button>
  <button class='button is-centered is-warning is-small' onclick='removeAttributeScript()'>Remove
    Attribute </button>
</div>

## Events 

<div id="page">
  <h1>List King</h1>
  <h2>New Account</h2>
    <form method="post" action="http://www.example.org/register">
      <label for="username">Create a username: </label>
      <input type="text" id="username" />
      <div id="feedback"></div>
      <label for="password">Create a password: </label>
      <input type="password" id="password" />
      <input type="submit" value="sign up!" />
    </form>
</div>

  <div id="page">
    <h1>List King</h1>
    <h2>Buy groceries</h2>
    <ul id="shoppingList">
      <li class="complete"><a href="itemDone.php?id=1"><em>fresh</em> figs</a></li>
      <li class="complete"><a href="itemDone.php?id=2">pine nuts</a></li>
      <li class="complete"><a href="itemDone.php?id=3">honey</a></li>
      <li class="complete"><a href="itemDone.php?id=4">balsamic vinegar</a></li>
    </ul>
  </div>

  </div>


  </div>
</div>

```Mermaid
graph TB;
  parent>get <code>&lt; ul &gt;</code> element for shopping list] --> addevent{is<br><code>addEventListener</code><br>supported}
  addevent -- Yes --> y[use <code>attachEventListener</code>]
  addevent -- No --> n[use <code>attachEvent</code>]
  y --> event(<b>Event <code>click</code> on any link in the list</b>)
  n --> event
  event --> a
  subgraph Function:<code>itemDone</code>Removes an item when completed
  a[<b>Create Variables:</b><br><code>target</code>: element that was clicked]--> b[Get element clicked Call <code>getTarget</code>]
  b-->e>remove <code>&lt; li &gt;</code> from <code>&lt; ul &gt;</code>]
  e-->f{is <code>preventDefault</code><br>Supported}
  f--Y-->preventDefault
  f--N-->returnValue
  end
```
```mermaid
graph TB
  subgraph Function:<code>getTarget</code>Get element that user clicked
  f{is there no<br><b>Event Object</b> }--Y-->a[Get target of event]
  f--N-->b[Get target of event]
  end
```
```ts
/* Event Scripts (of above diagram) */

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
```

<div id="stats">
  screenX: <input type="text" id="sx" /> 
  screenY: <input type="text" id="sy" /><span class="divider">|</span> 
  pageX: <input type="text" id="px" /> 
  pageY: <input type="text" id="py" /><span class="divider">|</span>
  clientX: <input type="text" id="cx" /> 
  clientY: <input type="text" id="cy" />
</div>

<form id="messageForm">
  <h2>My profile</h2>
  <textarea id="message"></textarea>
  <div id="charactersLeft">180 characters</div>
  <div id="lastKey"></div>
</form><br>

<form method="post" action="http://www.example.org/register" id="formSignup">
  <h2>Membership</h2>
  <label for="package" class="selectbox"> Select a package: </label>
  <select id="package">
    <option value="annual">1 year ($50)</option>
    <option value="monthly">1 month ($5)</option>
  </select>
  <div id="packageHint" class="tip"></div>
  <input type="checkbox" id="terms" />
  <label for="terms" class="checkbox"> Check to agree to terms &amp; conditions</label>
  <div id="termsHint" class="warning"></div>
  <input type="submit" value="next" />
</form>

**Note**: Above does not work because `submit` events for forms *do not work* in markdown go to [html](./ducket.html) to test feature

<h1>List King</h1>
<h2 id="noteName">Audio Note</h2>
<form action="http://example.org/">
  <label for="noteInput">Enter note name:</label>
  <input type="text" id="noteInput" />
  <div id="buttons">
    <a data-state="record" href="">record</a>
  </div>
</form>

<!-- keep script at the bottom -->
<script src="scripts/scripts.ts"></script>


## Playing with Jquery

<div id="page">
  <h1 id="header">List</h1>
  <h2>Buy groceries <span id="counter"></span></h2>
  <ul>
    <li id="one" class="hot"><em>fresh</em> figs</li>
    <li id="two" class="hot">pine nuts</li>
    <li id="three" class="hot">honey</li>
    <li id="four">balsamic vinegar</li>
  </ul>
  <div id="newItemButton"><button href="#" id="showForm">new item</button></div>
  <form id="newItemForm">
    <input type="text" id="itemDescription" placeholder="Add description" />
    <input type="submit" id="add" value="add" />
  </form>
</div>