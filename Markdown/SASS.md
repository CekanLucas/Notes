<head>
 
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">

<style> 

</style>
</head> 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/320px-Sass_Logo_Color.svg.png" height="200px" style="float:right">

<span class="Violet"><b class="HotPink">SASS</b>, or **<span style="color:hotpink">S</span>yntactically <span style="color:hotpink">A</span>wesome <span style="color:hotpink">S</span>tyle<span style="color:hotpink">S</span>heets**, is a language extension of CSS. It adds features that aren't available using basic CSS syntax. Sass makes it easier for developers to simplify and maintain the style sheets for their projects.</span>

<b class="HotPink">SASS</b> can extend the CSS language because it is a preprocessor. It takes code written using Sass syntax, and converts it into basic CSS. This allows you to <span style="color:yellow">create variables</span>, <span style="color:orange">nest CSS rules</span> into others, and <span style="color:lime">import other Sass files</span>, among other things. The result is more compact, easier to read code.

<span style="color:palegreen">There are two syntaxes available for Sass. The first, known as ***SCSS (Sassy CSS)*** , is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. Files using this syntax have the `.scss` extension.</span>

<span style="color:lime">The second and older syntax, known as the indented syntax (or sometimes just "***Sass***"), uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties. Files using this syntax have the `.sass` extension.</span>

## Store Data with Sass Variables
One feature of Sass that's different than CSS is it uses `variables`. They are declared and set to store data, similar to JavaScript.

In JavaScript, variables are defined using the `let` and `const` keywords. In Sass, variables start with a `$` followed by the variable name.

```scss
//set variables
$main-fonts: Arial, sans-serif;
$headings-color: green;

//To use variables:
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.

## Nest CSS with Sass
Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.

Normally, each element is targeted on a different line to style it, like so:

```scss
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
```
For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:

```scss
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```

## Create Reusable CSS with Mixins
In Sass, a <span style="color:darkorange">mixin</span> is a group of CSS declarations that can be reused throughout the style sheet.

Newer CSS features take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may need vendor prefixes. Consider `box-shadow`:

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```
It's a lot of typing to re-write this rule for all the elements that have a box-shadow, or to change each value to test different effects.

<span style="color:darkorange">Mixins</span> are like functions for CSS. Here is how to write one:
```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x, $y, $blur, $c;
  -moz-box-shadow: $x, $y, $blur, $c;
  -ms-box-shadow: $x, $y, $blur, $c;
  box-shadow: $x, $y, $blur, $c;
}
```
The definition starts with <span style="color:royalblue">@mixin</span> followed by a custom name. The parameters `(the $x, $y, $blur, and $c in the example above)` are optional.

Now any time a box-shadow rule is needed, only a single line calling the mixin replaces having to type all the vendor prefixes. A mixin is called with the `@include` directive:
```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

## Use @if and @else to Add Logic To Your Styles
The `@if` directive in Sass is useful to test for a specific case - it works just like the if statement in JavaScript.

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```
And just like in JavaScript, `@else` if and `@else` test for more conditions:
```scss
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

## Use `@for` to Create a Sass Loop
The `@for` directive adds styles in a loop, very similar to a `for` loop in JavaScript.

`@for` is used in two ways: ***start through end*** or ***start to end***. The main difference is that "start to end" excludes the end number, and "start through end" includes the end number.
```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```
The ` #{$i}` part is the syntax to combine a variable `i` with text to make a string. When the Sass file is converted to CSS, it looks like this:
```scss
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```
This is a powerful way to create a grid layout. Now you have twelve options for column widths available as CSS classes.

## Use @each to Map Over Items in a List
We showed how the `@for` directive uses a starting and ending value to loop a certain number of times. Sass also offers the `@each` directive which loops over each item in a list or map.

>On each iteration, the variable gets assigned to the current value from the list or map.
```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```
A `map` has slightly different syntax. Here's an example:
```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```
Note that the `$key` variable is needed to reference the keys in the map. Otherwise, the compiled CSS would have color1, color2... in it.

Both of the above code examples are converted into the following CSS:
```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```
## Apply a Style Until a Condition is Met with `@while`
The `@while` directive is an option with similar functionality to the <span style="color:orange">JavaScript while loop</span>. It creates CSS rules until a condition is met.

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```
First, define a variable `$x` and set it to `1`. Next, use the `@while` directive to create the grid system while `$x` is less than `13`. After setting the CSS rule for width, `$x` is incremented by `1` to avoid an infinite loop.

## Split Your Styles into Smaller Chunks with <span style="color:aqua"><span style="color:aqua">Partial</span>s</span>
><span style="color:aqua"><span style="color:aqua">Partial</span>s</span> in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.

Names for <span style="color:aqua"><span style="color:aqua">partial</span>s</span> start with the underscore `_` character, which tells Sass it is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with the `.scss` file extension. To bring the code in the <span style="color:aqua">partial</span> into another Sass file, use the `@import` directive.

For example, if all your mixins are saved in a <span style="color:aqua">partial</span> named  `_mixins.scss`, and they are needed in the `main.scss` file, this is how to use them in the main file:

```scss
// In the  main.scss  file

@import 'mixins'
```
`Note that the underscore is not needed in the import statement` - Sass understands it is a <span style="color:aqua">partial</span>. Once a <span style="color:aqua">partial</span> is imported into a file, all variables, mixins, and other code are available to use.
____
## Extend One Set of CSS Styles to Another Element
Sass has a feature called <span style="color:magenta">extend</span> that makes it easy to borrow the CSS rules from one element and build upon them in another.

For example, the below block of CSS rules style a `.panel` class. It has a background-color, height and border.
```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```
Now you want another panel called .big-panel. It has the same base properties as `.panel`, but also needs a `width` and `font-size`.

It's possible to copy and paste the initial CSS rules from `.panel`, but the code becomes repetitive as you add more types of panels.

The <span style="color:magenta">extend</span> directive is a simple way to reuse the rules written for one element, then add more for another:
```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```
The `.big-panel` will have the same properties as `.panel` in addition to the new styles.

