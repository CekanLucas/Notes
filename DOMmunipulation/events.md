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

### Events

There are **3 major ways** of doing events 
1. attach function attributes directly to html elements
1. set the “on_event_” property on the DOM object in your JavaScript
1. attach event listeners to the nodes in your Javascript <span class="span Red">**Preffered Method**</span>

<button id="click1" class="button is-info is-outlined is-rounded is-fullwidth" onclick="alert('Hello World')">ClickMe</button>

```html
<!-- Method 1 -->
<button onclick="alert('Hello World')">Click Me</button>
```
```js
// Method 2
// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
```
```js
// Method 3
// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

/* 
e is the event object is comes with references to the target node itself
*/
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
```

