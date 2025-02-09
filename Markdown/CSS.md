<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/color"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/CSS.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">

<style> 
</style>

</head>    

# CSS (cascading style sheets)

>Practice CSS selectors <br>
<b class="Orange">CSS diner:</b> [link](http://flukeout.github.io/)

### pseudo-selectors

<p class="flex justify-around filter -hue-rotate-30">
  <code>`selector:first-child`</code> <code>`selector:last-child`</code> <code>`selector:only-child`</code>
</p>

> If a element has only one child it will be all <span class="text-400 font-bold">first last and only child</span>

<p class="text-center text-green-100">counting from beginning > <code>:nth-child( [n] ) </code><code>:nth-last-child( [n] )</code> < counting from last</p>

`:empty`

`:not(x)` negation

### `of-type` Selectors

`:first-of-type`

`:nth-of-type(n)`
`:nth-of-type(even)`
`:nth-of-type(6n+2)`

`:only-of-type`
`:last-of-type`

### Attribute Selectors

<p class="font-mono">[ <em>attribute</em> ] eg <code>[id]</code></p>
<p class="font-mono">[ <em>attribute</em> = <em>value</em> ] eg <code>[id=col23]</code></p>
<p class="font-mono">[ <em>attribute</em> ^= <em><strong>starts</strong>-with-value</em> ] eg <code>[id^=col]</code></p>
<p class="font-mono">[ <em>attribute</em> $= <em><strong>ends</strong>-with-value</em> ] eg <code>[id$=3]</code></p>
<p class="font-mono">[ <em>attribute</em> *= <em><strong>contains</strong>-value</em> ] eg <code>[id*=3]</code></p>

## Centering Recipes
### Horizontal Centering Fluid Blocks 
Horizontal centering of blocks of unkown width 
``` css
#horizontal-center{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
#vertical-center{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
/* Default */
a {
  color: blue;
}
/* Unvisited links */
a:link {
  color: blue;
}
/* Visited links */
a:visited {
  color: purple;
}
/* Hover state */
a:hover {
  color: red; 
}
/* Focused state */
a:focus {
  color: orange;
}
/* Activated state */
a:active {
  color: green;
}
```
#### example
<blockquote id='horizontal-center'> This is centered</blockquote> 

<br><hr>

* The `left` property relates to the size of parent 
* The `transform` property relates to the child size 
* thus it will be centered
   
Horizontal centering of blocks of kown width 
``` css
#horizontal-center{
  width: 550px;
  margin: 0 auto;
}
#vertical-center{
  position: absolute;
  top: 50%;
  height: 400px;
  margin-top:-200px;
}
/* vertically align text */
#vertical-center{
  height: 40px;
  line-height:40px;
}
```
#### example
<blockquote id='horizontal-center'> This is centered</blockquote> 

<br><hr>

* `auto` makes the browser calculate unkown portion


### Make Text Unselectable
```css
.noselect {
  user-select: none;
}
```

### Background Repeat 
`background-repeat` property allows us to specify if background image will repeat horizontally `repeat-x` or vertically `repeat-y`, or use `no-repeat` to prevent this

```css
body {
  background-image: url(image.jpg);
  background-repeat: repeat-x;
}
```

### Transform 
<span class="GoldenRod">This property allows you to modify the coordinate space</span>

<div style="text-align:center">
  <img src="https://testing-library.com/img/octopus-64x64.png" id=scale-img>
</div>

<form action="">
  
  <fieldset>
    <legend> <b>Scale</b> </legend>
<span id="text-scalex">ScaleX</span>
<input id=range-scalex type="range" min=-2 max=2 value=1 step=0.1>
<span id="counter-scalex">1</span>

<span id="text-scaley">ScaleY</span>
<input id=range-scaley type="range" min=-2 max=2 value=1 step=0.1>
<span id="counter-scaley">1</span>
  </fieldset>

</form>

<script>
const img = document.getElementById("scale-img");

const counterScaleX = document.querySelector('#counter-scalex');
const rangeScaleX = document.querySelector('#range-scalex');
let valueScaleX = 1;

const counterScaleY = document.querySelector('#counter-scaley');
const rangeScaleY = document.querySelector('#range-scaley');
let valueScaleY = 1;


// Scale Event Listeners
rangeScaleX.addEventListener('input', function (e) {
  const transform = `scaleX(${valueScaleX}) scaleY(${valueScaleY})`;
  // change counter based on range slider
  counterScaleX.innerText = rangeScaleX.value;
  // tranform img transform property based on range
  valueScaleX = rangeScaleX.value;
  img.style.transform = transform;
});
rangeScaleY.addEventListener('input', function (e) {
  const transform = `scaleX(${valueScaleX}) scaleY(${valueScaleY})`;
  // change counter based on range slider
  counterScaleY.innerText = rangeScaleY.value;
  // tranform img transform property based on range
  valueScaleY = rangeScaleY.value;
  img.style.transform = transform;
});
</script>

# Pseudo - Classes 

```css
/* Default */
a {
  color: blue !important;
}
/* Unvisited links */
a:link {
  color: blue !important;
}
/* Visited links */
a:visited {
  color: purple !important;
}
/* Hover state */
a:hover {
  color: red !important; 
}
/* Focused state */
a:focus {
  color: orange !important;
}
/* Activated state */
a:active {
  color: green !important;
}
```

<a href="#">Example LInk</a>

## Text Styles
### Text Transform
<span class="" style="text-transform: uppercase">upper case</span>
<span class="" style="text-transform: capitalize">upper case</span>
<span class="" style="text-transform: lowercase">LOWER CASE</span>

### Text Decoration

<u class="" style="text-decoration: none">none: remove decoration</u>
<span class="" style="text-decoration: underline">underline</span>
<span class="" style="text-decoration: overline; line-height:3">overline</span>
<span class="" style="text-decoration: line-through">line-through</span>

### Text Shadow
1st value --> **horizontal offset** 
2nd value --> **vertical offset** 
3rd value --> **blur offset** 
4th value --> **color of shadow** 

> Multiple Shadows can be added if comma seperated

```css
selectors {
  text-shadow: 3px 2px 1px red, 1px 5px 6px blue;
}
```

# The Box Model

<style>
#box, #margin, #padding, #content, .borders{
  background: rgba(100, 100, 100, 0.4);
  height: 100%;
  border: dotted 10px 5px red;
  padding: 1em;
  margin: 0;
  line-height: 2em;
  box-sizing: border-box;
}

#padding {
  border: dotted 5px white; 
}

#box {
  background: none;
  width: 50%;
  text-align: center;
  margin: auto;
  height: 100%;
}
#box:before {
  content: 'Box Model';
  font-weight: bold;
  font-size: 1.1em;
}
</style>

<div id="box">
  <div id="margin">
  Margin
  <fieldset id="padding">
    <legend>Border</legend>
    Padding <br class="emptyline">
    <div id="content">
      Content
    </div>
  </fieldset>
  </div>
</div>

Use `box-sizing` of value `border-box` so that padding and border width are not added to box size so that the width is the final determination of size

### Border Styles

<style>
  .borders>fieldset>legend {
    color: palegoldenrod;
    padding: 0 1em;
    font-weight: bolder;
    font-family: monospace;
    height: 2em;
  }
</style>

<div class="borders">
  <fieldset class="borders" style="border:goldenrod 5px solid">
    <legend>solid</legend>
  </fieldset>
  <fieldset class="borders" style="border:goldenrod 5px dotted">
    <legend>dotted</legend>
  </fieldset>
  <fieldset class="borders" style="border:goldenrod 5px dashed">
    <legend>dashed</legend>
  </fieldset>
  <fieldset class="borders" style="border:goldenrod 5px double">
    <legend>double</legend>
  </fieldset>
  <fieldset class="borders" style="border:goldenrod 5px groove">
    <legend>groove</legend>
  </fieldset>
  <fieldset class="borders" style="border:goldenrod 5px ridge">
    <legend>ridge</legend>
  </fieldset>
  <fieldset class="borders" style="border:goldenrod 5px solid">
    <legend>border7</legend>
  </fieldset>
  <fieldset class="borders" style="border:goldenrod 5px inset">
    <legend>inset</legend>
  </fieldset>
  <fieldset class="borders" style="border:goldenrod 5px outset">
    <legend>outset</legend>
  </fieldset>
</div>

## Styling Lists

* **default** `ul` `list-style-type:disc`
1. **default** `ol` `list-style-type:decimal`

<ul style="list-style-type:square;list-style-position:inside;list-style-color:yellow">
  <li>square</li>
  <li style="list-style-position:inside">here the <code>list-style-position: inside</code></li>
  <li style="list-style-position:outside">default <code>list-style-position: outside</code></li>
</ul>
<ul style="list-style-type:decimal">
  <li>decimal</li>
</ul>
<ul style="list-style-type:disc">
  <li>disc</li>
</ul>
<div class="columns">
  <ul class="column" style="list-style-type:lower-alpha">
    <li>lower-alpha</li>
    <li>lower-alpha</li>
    <li>lower-alpha</li>
  </ul>
  <ul class="column" style="list-style-type:upper-alpha">
    <li>upper-alpha</li>
    <li>upper-alpha</li>
    <li>upper-alpha</li>
  </ul>
</div>

<div class="columns">
  <ul class="column" style="list-style-type:lower-roman">
    <li>lower-roman</li>
    <li>lower-roman</li>
    <li>lower-roman</li>
    <li>lower-roman</li>
    <li>lower-roman</li>
    <li>lower-roman</li>
    <li>lower-roman</li>
    <li>lower-roman</li>
    <li>lower-roman</li>
    <li>lower-roman</li>
  </ul>
  <ul class="column" style="list-style-type:upper-roman">
    <li>upper-roman</li>
    <li>upper-roman</li>
    <li>upper-roman</li>
    <li>upper-roman</li>
    <li>upper-roman</li>
    <li>upper-roman</li>
    <li>upper-roman</li>
    <li>upper-roman</li>
    <li>upper-roman</li>
    <li>upper-roman</li>
  </ul>
</div>

```css
ul, ol {
  /* default for ol=decimal ul=disc */
  list-style-type: circle | disc | square | lower-roman etc;
  list-style-position: default=outside | inside;
  /* Probably better to set list-style-type=none and position background image left */
  list-style-image: url("bullet.jpg");
}

long-cut {
  list-style-type: circle;
  list-style-position: inside;
  list-style-image: url('demo.png');
}
short-cut {
  list-style: circle inside url('demo.jpg');
}
```

## Styling Links

```css 
a {
  color: green; /* default=blue */
  text-decoration: none; /* default=underline */
}
```

### Psuedo Selector

a:link
a:visited
a:active
a:hover

#### example

<style>
  ul#link-styling {
    padding: 0;
    margin-top 10px;
    width: 100%;
  }
  ul#link-styling>li {
    display: inline;
  }
  ul#link-styling>li>a {
    outline: none;
    text-decoration: none;
    display: inline-block;
    margin-left: 1%;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    width: 31%;
    color: white;
    background: green;
  }
  ul#link-styling>li>a:hover {
    background: blue;
  }
</style>

<ul id="link-styling">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Contacts</a></li>
</ul>

<style>
  .alert {
    color: red;
  }
  .warn {
    color: yellow;
  }
  .error {
    color: firebrick;
  }
  /* Notice the :is psuedoselector */
  li:is(.error, .alert, .warn) {
    text-decoration: underline;
    font-weight: bolder;
  }
  li:empty+li:before {
    content:"This li is empty";
  }
</style>

<ul class="columns">
  <li class="alert column">alert</li>
  <li class="warn column">warn</li>
  <li class="error column">error</li>
  <li class="alert warn column">alert warn</li>
  <li class="column"></li>
  <li class="column"> </li>
</ul>

### `:is` psuedoselector 
`:is` allows the application of rules to a _group of selectors_
```css
  li:is(.error, .alert, .warn) {
    text-decoration: underline;
    font-weight: bolder;
  }
```

### `:blank` & `:empty` psuedoselector 
`:empty` select elements if there are no children textnodes or whitespace
`:blank` like above but allows for blank spaces <span class="warn">experimental and most browsers not having support</span>
> <span class="text-red-500 font-bold">Note:</span> *content* cant be changed except for **:before** and **:after** this is why we use the addition **+** remember css and content where supposed to be separate 
```css
  li:empty+li:before {
    content:"This li is empty";
  }
```

### `:in-range` & `:out-range`

<style>
  #range-input:in-range {
    color: yellow;
    font-weight: bold;
    background-color: grey;
    outline: 5px green solid;
  }
  #range-input:out-of-range {
    color: yellow;
    font-weight: bold;
    background-color: grey;
    outline: 5px red solid;
  }
</style>

The `:in-range` and `:out-of-range` allows the use of styling feedback to users without javascript
The range is specified by the *min* *max* attribute values

<form action="">
  <label for="range-input">Range 18-20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  <input type="number" name="range-input" id="range-input" min="18" max="20" value="0">
</form>

# Animations

<style>
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .spinny-boi {
    animation: spin 1.5s infinite linear;
    display: inline-block;
    font-size: 30px;
  }
</style>

<div class="rainbow-boi">Rainbow</div><br>
<div class="spinny-boi">🤢</div>
<div class="spinny-boi">🤢</div>
<div class="spinny-boi">🤢</div>
<div class="spinny-boi">🤢</div>
<div class="spinny-boi">🤢</div>
<div class="spinny-boi">🤢</div>

Using `keyframe` you can define your animation 
You can name these animations anything it doesn't have to be *spin*

<style>
  @keyframes move {
    to {
      transform: translate(50px);
    }
  }
  .dancer {
    position: relative;
    display: inline-block;
    font-size: 30px;
    position: absolute;
    right: 0;

    /*
    this is the log way of doing:
    animation: move 1s infinite alternate;
    */
    animation-name: move;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .dancers-list {
    width: 100%;
    max-width: 300px;
    position: relative;
  }

  .linear {
    animation-timing-function: linear;
  }
  .ease {
    animation-timing-function: ease;
  }
  .ease-in-out {
    animation-timing-function: ease-in-out;
  }
  .ease-in {
    animation-timing-function: ease-in;
  }
  .ease-out {
    animation-timing-function: ease-out;
  }
  .cubic-bezier {
    animation-timing-function: cubic-bezier(0,1,.5,1);
  }
</style>

<ul class="dancers-list">
  <li>linear: <span class="dancer linear">💃</li>
  <li>ease: <span class="dancer ease">💃</li>
  <li>ease-in-out: <span class="dancer ease-in-out">💃</li>
  <li>ease-in: <span class="dancer ease-in">💃</li>
  <li>ease-out: <span class="dancer ease-out">💃</li>
  <li>cubic-bezier: <span class="dancer cubic-bezier">💃</li>
</ul>

<style>
  @keyframes rainbow {
    100%,
    0% {
      color: rgb(255, 0, 0);
    }
    8% {
      color: rgb(255, 127, 0);
    }
    16% {
      color: rgb(255, 255, 0);
    }
    25% {
      color: rgb(127, 255, 0);
    }
    33% {
      color: rgb(0, 255, 0);
    }
    41% {
      color: rgb(0, 255, 127);
    }
    50% {
      color: rgb(0, 255, 255);
    }
    58% {
      color: rgb(0, 127, 255);
    }
    66% {
      color: rgb(0, 0, 255);
    }
    75% {
      color: rgb(127, 0, 255);
    }
    83% {
      color: rgb(255, 0, 255);
    }
    91% {
      color: rgb(255, 0, 127);
    }
  }
  .rainbow-boi {
    animation: rainbow 4s infinite linear;
    font-size: 30px;
  }
</style>


### More detail on the `cubic-bezier()`

The four parameters of the `cubic-bezier()` function control the shape of the easing curve, which determines the speed and timing of the animation or transition. The four parameters represent the **( <span class="text-green-300">x</span> , <span class="text-yellow-300">y</span> )** coordinates of the *two control points* that define the curve.

<span class="text-xl font-bold text-red-500 capitalize">example</span>

The first two parameters, **( <span class="text-green-300">px1</span> , <span class="text-yellow-300">py1</span> )**, control the starting point of the curve. The next two parameters, **( <span class="text-green-300">px2</span> , <span class="text-yellow-300">py3</span> )**, control the ending point of the curve. 
> These four parameters define the <span class="text-red-400">shape of the curve</span>

    cubic-bezier(0.25, 0.1, 0.25, 1)

This easing curve starts slowly, accelerates quickly, and then slows down again. It is often used for **ease-in-out** transitions, which gradually speed up and then slow down again at the end

for other example try [easing cheatsheet](https://easings.net/)

[MDN- transition timing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

[CSS tricks- transition timing functions ](https://css-tricks.com/almanac/properties/t/transition-timing-function/)