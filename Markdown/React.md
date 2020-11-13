<head>
 
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">

<style> 
 

</style>
</head>    


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" height="200px" style="float:left">

<span style="color:skyblue">**React**</span>, popularized by the evil <span class="SlateBlue">***Facebook***</span>, is an open-source JavaScript library for building user interfaces. It is used to <span class="Gold">create components</span>, <span class="SkyBlue">handle state and props</span>, <span class="Lime">utilize event listeners</span> and <span class="Orange">certain life cycle methods to update data as it changes</span>.
<span class=""><span class="Beige">**<span class="SkyBlue">**React** </span>uses a syntax extension of JavaScript called <span class="Turquoise">JSX</span> that allows you to write <span class="DarkOrange">HTML</span> directly within JavaScript. This has several benefits. It lets you use the full programmatic power of JavaScript within <span class="DarkOrange">HTML</span>, and helps to keep your code readable. For the most part, JSX is similar to the <span class="DarkOrange">HTML</span> that you have already learned, however there are a few key differences that will be covered throughout these challenges.**</span></span>

<span class="SkyBlue"> <b>React </b> combines <span class="DarkOrange"><b>HTML</b></span> with JavaScript functionality to create its own markup language, <span class="Turquoise">***JSX***</span>. This section will introduce you to all of these concepts and how to implement them for use with your own projects.</span>

For instance, because <span class="Turquoise">JSX</span> is a syntactic extension of JavaScript, you can actually write JavaScript directly within <span class="Turquoise">JSX</span>. 

Simply include the code you want to be treated as JavaScript within curly braces: `{'this is treated as JavaScript code'}`</span>

## Create a Simple <span class="Turquoise">JSX</span> Element</span>

><span class="SkyBlue">React </span>is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.

<span class="Beige"><span class="SkyBlue">**React**</span> uses a syntax extension of JavaScript called <span class="Turquoise">JSX</span> that allows you to write <span class="DarkOrange">HTML</span> directly within JavaScript. This has several benefits. It lets you use the full programmatic power of JavaScript within <span class="DarkOrange">HTML</span>, and helps to keep your code readable. For the most part, <span class="Turquoise">JSX</span> is similar to the <span class="DarkOrange">HTML</span> that you have already learned, however there are a few key differences that will be covered throughout these challenges.**</span></span>

For instance, because <span class="Turquoise">JSX</span> is a syntactic extension of JavaScript, you can actually write JavaScript directly within <span class="Turquoise">JSX</span>. To do this, you simply include the code you want to be treated as JavaScript within curly braces: `{'this is treated as JavaScript code'}`

However, because <span class="Turquoise">JSX</span> is not valid JavaScript, <span class="Turquoise">JSX</span> code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process. For your convenience, it's already added behind the scenes for these challenges. If you happen to write syntactically invalid <span class="Turquoise">JSX</span>, you will see the first test in these challenges fail.

<span class="Turquoise">It's worth noting that under the hood the challenges are calling `ReactDOM.render(JSX, document.getElementById('root'))`. This function call is what places your JSX into React's own lightweight representation of the DOM. <span class="SkyBlue"><b>React</b> </span>then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.</span>

# Create a Complex JSX Element 
One important thing to know about nested JSX is that it <u>must return a single element</u>. This one parent element would wrap all of the other levels of nested elements. For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.

<span class="Green">Valid JSX:</span>
```HTML
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```
<span class="IndianRed">Invalid JSX:</span>
```HTML
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```
# Add Comments in <span class="Turquoise">JSX</span>
<span class="Turquoise">JSX</span> is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, <span class="Turquoise">JSX</span> has its own way to do this.

To put comments inside <span class="Turquoise">JSX</span>, you use the syntax `{/* */}` to wrap around the comment text.

# Render <span class="DarkOrange">HTML</span> Elements to the DOM
So far, you've learned that <span class="Turquoise">JSX</span> is a convenient tool to write readable <span class="DarkOrange">HTML</span> within JavaScript. With React, we can render this <span class="Turquoise">JSX</span> directly to the <span class="DarkOrange">HTML</span> DOM using React's rendering API known as <span class="Orange">***ReactDOM***</span>.

<span class="Orange">***ReactDOM***</span> offers a simple method to render <span class="SkyBlue">**React** </span>elements to the DOM which looks like this: `ReactDOM.render(componentToRender, targetNode)`, where the first argument is the <span class="SkyBlue">**React** </span>element or component that you want to render, and the second argument is the DOM node that you want to render the component to. Remember to use `document.getElementById()`

As you would expect, `ReactDOM.render()` must be called after the <span class="Turquoise">JSX</span>  element declarations, just like how you must declare variables before using them.

# Define an <span class="DarkOrange">HTML</span> Class in <span class="Turquoise">JSX</span>
One key difference in <span class="Turquoise">JSX</span> is that you can no longer use the word `class` to define <span class="DarkOrange">HTML</span> classes. This is because `class` is a reserved word in JavaScript. <span class="RoyalBlue">Instead, <span class="Turquoise">JSX</span> uses `className`.</span>

In fact, the naming convention for all <span class="DarkOrange">HTML</span> attributes and event references in <span class="Turquoise">JSX</span> become <span class="Yellow">camelCase</span>. For example, a click event in <span class="Turquoise">JSX</span> is `onClick`, instead of `onclick`. Likewise, `onchange` becomes `onChange`. While this is a subtle difference, it is an important one to keep in mind moving forward.

# Learn About Self-Closing <span class="Turquoise">JSX</span> Tags
So far, you’ve seen how <span class="Turquoise">JSX</span> differs from <span class="DarkOrange">HTML</span> in a key way with the use of `className` vs. `class` for defining <span class="DarkOrange">HTML</span> classes.

Another important way in which JSX differs from <span class="DarkOrange">HTML</span> is in the <span class="Gold">idea of the self-closing tag.</span>

In <span class="DarkOrange">HTML</span>, almost all tags have both an opening and closing tag: `<div></div>`; the closing tag always has a forward slash before the tag name that you are closing. However, there are special instances in <span class="DarkOrange">HTML</span> called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start.

For example the line-break tag can be written as `<br>` or as `<br />`, but should never be written as `<br></br>`, since it doesn't contain any content.

In <span class="Turquoise">JSX</span>, the rules are a little different. Any <span class="Turquoise">JSX</span> element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as `<br />` in order to be valid <span class="Turquoise">JSX</span> that can be transpiled. A `<div>`, on the other hand, can be written as `<div />` or `<div></div>`. The difference is that in the first syntax version there is no way to include anything in the `<div />`. You will see in later challenges that this syntax is useful when rendering <span class="SkyBlue">**React** </span>components.

# Create a <span class="Gold">Stateless Functional Component</span>

><span class="Gold">Components</span> are the core of <span class="SkyBlue">**React** </span>. Everything in <span class="SkyBlue">**React** </span>is a <span class="Gold">component</span> and here you will learn how to create one **using Javascript functions**.

## <span class="Green">Good Components are:

<span class="Green">**Composable**:</span> 
<span class="Lime">we can combine them together to build complex interfaces</span><br>
<span class="Green">**Encapsulated**:</span> 
<span class="Lime">we can build them in isolation</span><br>
<span class="Green">**Reuseable**:</span> 
<span class="Lime">we can use them in different parts of our without duplicating code</span><br>
<span class="Green">**Testable**:</span> 
<span class="Lime">we can isolate them for certain types of testing</span><br>

There are two ways to create a <span class="Gold">**React Component**</span>. The first way is to use a **JavaScript function**. Defining a <span class="Gold">component</span> in this way creates a <span class="Gold">stateless functional component</span>. The concept of state in an application will be covered in later challenges. For now, think of a <span class="Gold">stateless component</span> as one that can <span class="LightGreen">receive data</span> and <span class="Lime">render it</span>, but does not <span class="IndianRed">manage or track changes</span> to that data. 

>To create a <span class="Gold">component</span> with a *function*, you simply write a **JavaScript function** that returns either <span class="Turquoise">JSX</span> or null. **One important thing to note is that <span class="SkyBlue">React </span>requires your function name to begin with a *<u>capital letter</u>.* Here's an example of a stateless functional <span class="Gold">component</span> that assigns an <span class="DarkOrange">HTML</span> class in <span class="Turquoise">JSX</span>**
```JSX
// After being transpiled, the <div> will have a CSS class of 'customClass'
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```
Because a <span class="Turquoise">JSX</span> <span class="Gold">component</span> represents <span class="DarkOrange">HTML</span>, you could put several <span class="Gold">components</span> together to create a more complex <span class="DarkOrange">HTML</span> page. This is one of the key advantages of the <span class="Gold">component</span> architecture <span class="SkyBlue">**React** </span>provides. It allows you to compose your UI from many separate, isolated <span class="Gold">components</span>. This makes it easier to build and maintain complex user interfaces.

## Create a <span class="Gold">React Component</span> using Classes <sup>use hooks instead</sup>

The other way to define a <span class="Gold">React component</span> is with the *ES6 class syntax.* 
>In the following example, `Kitten extends React.Component`:

```JavaScript
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```
This creates an ES6 class `Kitten` which `extends` the `React.Component class`. 

So the `Kitten class` now has access to many useful <span class="SkyBlue">**React**</span> features, such as <span class="HotPink">local state</span> and <span class="Violet">lifecycle hooks</span>. 

Also notice the `Kitten class` has a `constructor` defined within it that calls `super()`. It uses `super()` to call the `constructor` of the parent class, in this case `React.Component`. The `constructor` is a special method used during the initialization of objects that are created with the `class` keyword. It is best practice to call a component's constructor with super, and pass props to both. This makes sure the component is initialized properly. For now, know that it is standard for this code to be included. Soon you will see other uses for the constructor as well as props.

## Create a Component with <span class="Gold">Composition</span>

Now we will look at how we can compose multiple <span class="SkyBlue">**React** </span> components together. Imagine you are building an App and have created three components, a Navbar, Dashboard, and Footer.

To compose these components together, you could create an App parent component which renders each of these three components as children. To render a component as a child in a <span class="SkyBlue">**React** </span> component, you include the component name written as a custom <span class="DarkOrange">HTML</span> tag in the <span class="Turquoise">JSX</span>. 

<u>For example, in the render method you could write:</u>
``` javascript
return (
<App>
  <Navbar />
  <Dashboard />
  <Footer />
</App>
)
```
When <span class="SkyBlue">**React** </span> encounters a custom <span class="DarkOrange">HTML</span> tag that references another component (a component name wrapped in `< />` like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the <mark>App component and the **Navbar**, **Dashboard**, and **Footer**</mark>.

## Use <span class="SkyBlue">**React** </span> to Render Nested <span class="Gold">Components</span>

The last challenge showed a simple way to compose two <span class="Gold">components</span>, but there are many different ways you can compose <span class="Gold">components</span> with <span class="SkyBlue">**React** </span>.

<span class="Gold">Component composition </span>is one of <span class="SkyBlue">**React** </span>'s powerful features. When you work with <span class="SkyBlue">**React** </span>, it is important to start thinking about your user interface in terms of <span class="Gold">components</span> like the App example in the last challenge. You break down your UI into its basic building blocks, and those pieces become the <span class="Gold">components</span>. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.

## Render a <span class="Gold">Class Component</span> to the <span class="Tomato">DOM</span>

You may remember using the <span class="Orange">***ReactDOM API***</span> in an earlier challenge to render <span class="Turquoise">JSX</span> elements to the <span class="Tomato">DOM</span>. The process for rendering <span class="SkyBlue">**React** </span> components will look very similar. The past few challenges focused on components and composition, so the rendering was done for you behind the scenes. However, none of the <span class="SkyBlue">**React** </span> code you write will render to the <span class="Tomato">DOM</span> without making a call to the <span class="Orange">***ReactDOM API***</span>.

Here's a refresher on the syntax: `ReactDOM.render(componentToRender, targetNode)`. 
1. `The first argument is the React component that you want to render. `
1. `The second argument is the DOM node that you want to render that component within.`

<span class="SkyBlue">**React** </span> components are passed into `ReactDOM.render()` a little differently than <span class="Turquoise">JSX</span> elements. For <span class="Turquoise">JSX</span> elements, you pass in the name of the element that you want to render. However, for <span class="SkyBlue">**React** </span> components, you need to use the same syntax as if you were rendering a nested component, for example `ReactDOM.render(<ComponentToRender />, targetNode)`. *You use this syntax for both ES6 class components and functional components.*

# Write a <span class="Gold">React Component</span> from Scratch

<span class="Gold">React components</span> are the core building blocks of <span class="SkyBlue">**React**  applications </span>so it's important to become very familiar with writing them. Remember, a typical <span class="Gold">React component</span> is an `ES6 class` which extends `React.Component`. It has a render method that returns <span class="DarkOrange">HTML</span> (from <span class="Turquoise">JSX</span>) or null. This is the basic form of a React component. Once you understand this well, you will be prepared to start building more complex <span class="SkyBlue">**React**  projects</span>.

``` Javascript
// Define a class MyComponent that extends React.Component. 
// Its render method should return a div that contains an h1 tag with the text: My First React Component! in it. Use this text exactly, the case and punctuation matter. Make sure to call the constructor for your component, too.
// Render this component to the DOM using ReactDOM.render(). 
// There is a div with id='challenge-node' available for you to use.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
            <div>
                <h1>
                My First React Component!
                </h1>
            </div>
        );
    };
};
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))
```

## Pass <span class="Violet">Props</span> to a <span class="Gold">Stateless Functional Component</span>

It's time to look at another feature very common in <span class="SkyBlue">**React**</span>: <span class="Violet">props</span>. In <span class="SkyBlue">**React**</span>, you can pass <span class="Violet">props</span>, or <span class="Violet">properties</span>, to <span class="Gold">child components</span>. Say you have an <span class="Gold">App component</span> which renders a <span class="Gold">child component</span> called `Welcome` that is a <span class="Gold">stateless functional component</span>. You can pass `Welcome` a <span class="Violet">user property</span> by writing:

```Javascript 
<App>
  <Welcome user='Mark' />
</App>
```
You use <span class="DarkOrange">custom HTML attributes</span> that <span class="SkyBlue">**React**</span> provides support for to pass the <span class="Violet">property user </span>to the `component Welcome`. Since `Welcome` is a <span class="Gold">stateless functional component</span>, it has access to this value like so:

```Javascript
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```
It is standard to call this <span class="Violet">value props</span> and when dealing with <span class="Gold">stateless functional components</span>, you basically consider it as an argument to a function which returns <span class="Turquoise">JSX</span>. You can access the value of the argument in the function body. With <span class="Gold">class components</span>, you will see this is a little different.


>There are Calendar and CurrentDate components in the code editor. When rendering CurrentDate from the Calendar component, pass in a property of date assigned to the current date from JavaScript's Date object. Then access this prop in the CurrentDate component, showing its value within the p tags. Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.

```Javascript
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date} </p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date={Date()} />
        { /* change code above this line */ }
      </div>
    );
  }
};
```

## Pass an Array as Props

The last challenge demonstrated how to pass information from a parent component to a child component as props or properties. This challenge looks at how arrays can be passed as props. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

``` Javascript
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

The child component then has access to the array property colors. Array methods such as `join()` can be used when accessing the property.

``` Javascript
const ChildComponent = (props) => 
  <p>{props.colors.join(', ')}</p>
```

This will join all `colors array items` into a *comma separated string and produce:*

``` Javascript
<p>green, blue, red</p>
```

## Use Default Props
React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare `MyComponent.defaultProps = { location: 'San Francisco' }`, you have defined a location prop that's set to the string San Francisco, unless you specify otherwise. <mark> **React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null** </mark>.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTg4MjA5OTc0NF19
-->