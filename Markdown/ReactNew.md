<head>
 
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
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
}

.react {
  color:skyblue;
  font-weight:bolder;
}
.component {
  color:gold;
  font-weight:bolder;
}
.JS {
  color:yellow;
}
.JSX {
  color:cyan;
}
.props {
  font-weight: bold;
  color: blueviolet;
}
.state {
  font-weight: bold;
  color: khaki;
}
.hooks {
  font-weight: bold;
  color: teal;
}
</style>
</head>    

# <span class="react">React</span> <small>Updated</small>

In <span class="react">React</span> we use <span class="JS">functions</span> to create <span class="component">components</span>

<span class="Yellow"><span class="react">React components</span> are functions that take input argumunts called <span class="Purple">props</span> and return what should be *rendered*  </span>they ussually represent **<span class="SkyBlue">UI</span> fundamental units of logic** such as a button, header whith a image, list of links etc. 
``` js
function Tweet(props) {
  return (
    <article className="tweet">
      <header className="tweet__header">
        <img className="tweet__header-avatar" src={props.avatar} />
        <h2 className="tweet__header-name">{props.name}</h2>
      </header>
      <main className="tweet__content">
        <p>{props.content}</p>
      </main>
      <footer className="tweet__footer">{props.date}</footer>
    </article>
  );
}
```

<b><span class="JSX">JSX</span></b> :
``` jsx
const element = <h2 className="name">Name</h2>
```

<span class="JS">Javascript</span> :
``` js
const element = React.createElement("h2", {
  className: "name" //jsx uses className instead of class
}, "Name")
```
 `React.createElement(type, [props], [...children])` function allows us to create heirachy of DOM nodes
``` JSX
import React from "react";

// JSX here describes static tweet
function Tweet() {
  return (
    <article className="tweet">
      <header className="tweet__header">
        <img
          className="tweet__header-avatar"
          src="https://api.adorable.io/avatars/64/react@adorable.png"
          alt="Avatar"
        />
        <h2 className="tweet__header-name">React</h2>
      </header>
      <main className="tweet__content">
        <p>A JavaScript library for building user interfaces</p>
      </main>
      <footer className="tweet__footer">May 29th, 2013</footer>
    </article>
  );
}
```
Click [here](CreateComponentJS.md) for link to same function in <span class="JS">normal JS</span>


> The tweet <span class="component">component</span> can be created with `const tweet = <Tweet />` 

# ReactDOM.render
`ReactDOM.render(element, container)`

> <span class="Red">! Always start component names with a capital letter to distinguish from DOM names</span>

``` jsx
import React from "react";
import ReactDOM from "react-dom";

function Tweet(props) {
  return (
    <article className="tweet">
      <header className="tweet__header">
        <img className="tweet__header-avatar" src={ props.avatar } />
        <h2 className="tweet__header-name">{ props.name }</h2>
      </header>
      <main className="tweet__content">
        <p>{ props.content }</p>
      </main>
      <footer className="tweet__footer">{ props.date }</footer>
    </article>
  );
}
```

``` jsx
// ussually call call render function to render the application
ReactDOM.render(  {/*  library to render component  */}
  <Tweet
    name="React"
    avatar="https://api.adorable.io/avatars/64/react@adorable.png"
    content="A JavaScript library for building user interfaces"
    date="May 29th, 2013"
  />,
  <!-- Render to DOM for div with id=root  -->
  document.getElementById("root")
)
```

# Rules for using <span class="JSX">JSX</span> 

<h2>Rule #1 <small class=react>All tags must be closed</small> </h2>
All tags must be closed. There are two ways to close a tag.

* Use an open and a close tag.
* Use a self-closing tag

eg. no unclosed `<img>`

<h2>Rule #2 <small class=react>A child tag must close before its parent</small> </h2>
A child tag must close before its parent. We are creating a tree structure. So the last one to open is the next one to close.

<h2>Rule #3 <small class=react>All JSX expressions must result in one root level element</small> </h2>
<b>All <span class="JSX">JSX expressions </span>must result in one root level element</b> A function can only return one value. A component is defined using a JavaScript function so the same rules apply.

``` jsx
// bad return two root elements 
return (
  <div>
  </div>
  <input />
)
```
<h2>Rule #4 <small class=react>No HTML comments</small> </h2>

> **No HTML comments.**

``` jsx
return (
  <div>
    <!--- Not allowed --->
    {/* Allowed */}
  </div>
)
```

# React Elements 

A element in <span class="react">React</span> is the most basic building block for describing your <span class="SkyBlue">application's UI</span> 

> ### <span class="Red">Elements are immutable</span> 
> and thier children cant be updated after rendering. So elements are describing the <span class="SkyBlue">UI</span> at that specific time <span class="Orange"><i>like a snapshot</i></span>

<span class="Tomato"><u>To define Element</u></span><br>
which are just objects plain ol objects which can be rendered cheaply by the DOM 
``` jsx
const element = React.createElement(
  'p', // type 
  null, //props
  "Lucas's React Notes" //children
)

// ---- Using JSX ----
const element = <p>Lucas's React Notes</p>
``` 

On the webpage you can display your `<p>` element as a child of the root div using `ReactDOM.render()`;


``` jsx
ReactDOM.render(
  element,
  document.getElementById('root')
)


// we can combine components eg <Table /> components made from <row /> components 
``` 
***The difference between <span class="SkyBlue">React components</span> and <span class="Cyan">React Elements</span>*** 
* React components return React Elements 

## What are <span class="props">props</span>
<span class="react">Components</span> can take inputs similiar to functions through the use of <span class="props">props</span>, these are <span class="JS">plain ol JS objects</span> whose properties represents the arguments of a <span class="react">component </span>these objects are also immutable 

``` jsx 
ReactDOM.render(
  <h1>
    Lucas greets 
    {this.props.otherPerson}
  </h1>
)

// pass props to an element

const el = (
  <Greeting name='John' />;
);

// define default props 

Greeting.defaultProps = (
  name: 'User'
);

```

### Component <span class="LimeGreen">Keys</span>
Give each <span class="react">component</span> a <span class="LimeGreen">unique key</span> otherwise there would be a error 

A <span class="LimeGreen">key</span> is basically a <span class="props">prop</span> of a <span class="react">component</span> needed when <span class="react">components</span> are created through looping
``` jsx
<Component
  key = { 'use unique key or use index as key' },
  prop1 = {'value'},
  prop2 = {'value'}
/>
```

### `props.children`

Sometimes a component does not have any children. When it does, it can access them using `props.children`

``` jsx
function Button(props) {
  return <button>{props.children}</button>;
}
```

### Event Handling

In JSX event handlers are in camel case. You can pass a function reference to the function

``` jsx
// add onClick event handler to button
function Button(props) {
  return (
    <button onClick={event => /* event handling */}>
      {props.children}
    </button>
  );
}

// pass a function to event handler
function Button(props) {
  function onClicked(event) {
    console.log("Button Clicked");
  };

  return <button onClick={onClicked}>{props.children}</button>;
}

// need to add onClick listener to button otherwise event will trigger the event handling
function Button(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
```


## What is <span class="state">state</span>

You can think of <span class="state">state</span> as __private data__ only accessible from within the <span class="react">component</span>

To <span class="state">store state</span>, we need to use a magical feature of <span class="react">React</span> called <span class="hooks">hooks</span>. Specifically the `useState` <span class="hooks">hook</span>.

We `import` the `useState` <span class="hooks">hook</span> into the module. It is natural to import it along with <span class="react">React</span>.
``` jsx
import React, { useState } from "react";
```
The `useState` function receives an<span class="state"> initial state</span> as an argument and **returns an array**. 

1.  the **current value** for the <span class="state">state</span>. 

2.  is a <span class="JS">function</span> that can update the <span class="state">state</span> and cause a render.

``` jsx
function Application(props) {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Button onClick={(event) => setCount(count + 1)}>Increment</Button>
      <h1>Button was clicked {count} times.</h1>
    </main>
  )
};
```
## Controlled Components
<span class="Orange">Certain HTML form elements maintain their state.</span> An `<input>` element keeps track of what the current value is. The same is true for `<textarea>` and `<select>`. <span class="LimeGreen">It is preferable for React to manage all of the application state including what is currently typed into an </span>`<input>`

> We call this pattern a **controlled component**

``` jsx
function Application(props) {
  const [name, setName] = useState("");

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Please enter your name"
      />
      <h1>Hello, {name}.</h1>
    </main>
  );
}
```
The `<input>` element becomes a **controlled component** when we provide a `value` prop and an `onChange` event handler that can update the value.

1. A user types a single character "A" into the input element.
2. The onChange event handler is triggered.
 1. It invokes the setName function to change the state.
 2. When the state changes, React calls the component function.
 3. The useState call returns the current value which is "A".
3. The input element has its value set to "A".
 4. The browser displays the "Hello, {name}." message as "Hello, A".

As the user types more letters, we run this process for each change to the input. The value of the `name` state always contains the most recent user input. Another benefit is that you can call` setName("")` at any point to empty the `<input>`.


## Rules of useEffect Hook 

### Rule #1
>Don't call Hooks inside loops, conditions, or nested functions.
### Rule #2
>Only call Hooks from inside React components.
### Rule #3
>The effect method that we pass to `useEffect` must either return undefined or a function

#### Example Pattern
``` jsx
function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`/search?term=${term}`).then(setResults);
  }, [term]);

  return (
    <>
      <SearchBar value={term} onChange={setTerm} />
      <Results results={results} />
    </>
  );
}

```

# Combine state into one object 

``` jsx 
const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {}
});

```
## Working with objects 
* spread operator 
  > use the spread operator to create a new object with all of the existing keys of `state`. 
  
  >Any keys declared after will overwrite existing keys.
  ``` jsx
  const state = { day: "Monday", days: [] };
  setState({ ...state, day: "Tuesday" });
  ```
* Object.assign
  >Merge objects with `Object.assign`
  ``` jsx
  const state = { day: "Monday", days: [] };
  setState(Object.assign({}, state, { day: "Tuesday" });
  ```
  >Notice that the first argument passed to `assign` is an empty object. Without this detail, we would mutate the `state` which is an anti-pattern.
* Aliasing Actions 
  >could just define a function to set state 
  ``` jsx
  const setDay = day => setState({ ...state, day });
  ```

# Custom Hooks 

> **A custom Hook is a function that must start with the word** `use`

Since we must call a custom Hook from within a component, a custom Hook can call other custom or built-in Hooks.

# DO NOT MUTATE STATE
<span class="SkyBlue">**Use immutable patterns using the**</span> `spread operator`
```jsx
// use spread operator
const original = { one: 1 };
const bad = original;
const good = { ...original };

console.log(original === original); // true
console.log(original === bad); // true
console.log(original === good); // false

// relevant example
const original = { one: 1, sub: { two: 2 } };
const copy = { ...original, sub: { ...original.sub } };

console.log(original === copy); // false
console.log(original.sub === copy.sub); // false

// This will only copy the first level of keys. The example below shows how the copy two levels

const original = { one: 1, sub: { two: 2 } };
const copy = { ...original, sub: { ...original.sub } };

console.log(original === copy); // false
console.log(original.sub === copy.sub); // false

// adding to object 
const original = { one: 1 };
const copy = { ...original, two: 2 };

console.log(original === copy); // false

/* original */
{
  one: 1
}

/* copy */
{
  one: 1,
  two: 2
}

// update takes advantage of the fact that keys declared later in the object overwrite previous values.

const original = { one: 1, two: 3 };
const copy = { ...original, two: 2 };

console.log(original === copy); // false

/* original */
{
  one: 1,
  two: 3
}

/* copy */
{
  one: 1,
  two: 2
}

// merging multiple objects 
const first = { one: 1 };
const second = { two: 2 };
const copy = { ...first, ...second };

console.log(copy === copy); // true
console.log(first === copy); // false
console.log(second === copy); // false

/* first */
{one: 1}

/* second */
{two: 2}

/* copy */
{one: 1, two: 2}

```
With this you can update, add keys to objects. Order keys declared later overwrite earlier declared keys. 