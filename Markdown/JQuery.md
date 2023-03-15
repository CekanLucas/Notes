<link rel=stylesheet href="./css.css" >
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="../JSprograms/JQuery.ts"></script>

[link to JQuery JS File](../JSprograms/JQuery.ts)

# <span class="OrangeRed">JQuery</span> <span style="color:lightgreen">freeCodeCamp</span> & <span class="Aqua">John Duckett Book</span>

jQuery is one of the many libraries for JavaScript. It is designed to simplify scripting done on the client side. jQuery's most recognizable characteristic is its **dollar sign (`$`) syntax**. With it, you can easily manipulate elements, create animations and handle input events.

## Learn How Script Tags and Document Ready Work

 The important thing to know is that code you put inside this function will run as soon as your browser has loaded your page.

>This is important because without your document ready function, your code may run before your HTML is rendered, which would cause bugs.

```html
<script>
    $(document).ready(function() { //run functions after html loads 
        
     // Apply the Animate.css bounce class to button elements
            $("button").addClass("animated bounce");
            $(".well").addClass("animated shake");
            $("#target3").addClass("animated fadeout");
     //we can remove class
            $("#target2").removeClass("btn-default"); 
     //change css 
            $("#target1").css("color", "blue");
     //change property 
            $("#target1").prop("disabled", true);
     //rewrite text
            $("h3").html("<em>jQuery Playground</em>");
     //remove element 
            $("#target4").remove()
     //move one element to another 
            $("#target4").appendTo("#left-well");
     //use clone to copy element 
            $("#target2").clone().appendTo("#right-well");
     // target certain child 
            $(".target:nth-child(3)").addClass("animated bounce");
     // make entire body fade
            $("body").addClass("animated fadeOut");


    });
</script>
``` 
> **Note:** `.ready()` method is <i class="text-red-600 bg-red-300">&nbsp;deprecated &nbsp;</i> use <code style="filter: hue-rotate(190deg);" class="hover:hue-rotate-15">jQuery(function() { })</code>

All jQuery functions start with a `$`, usually referred to as a `dollar sign operator`, or as `bling`.
jQuery often selects an HTML element with a selector, then does something to that element.

## Change Text Inside an Element Using jQuery
Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.

jQuery has a function called `.html()` that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.

jQuery also has a similar function called `.text()` that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.

Note that while the `<i>` tag has traditionally been used to emphasize text, it has since been coopted for use as a tag for icons. The `<em>` tag is now widely accepted as the tag for emphasis. 


>jQuery has a function called `parent()` that allows you to access the parent of whichever element you've selected.

>jQuery has a function called `children()` that allows you to access the children of whichever element you've selected.

>Query uses CSS Selectors to target elements. The `target:nth-child(n)` CSS selector allows you to select all the nth elements with the target class or element type. 
<span style="color:orange">You can also target elements based on their positions using `:odd` or `:even` selectors.</span>

## Finding Elements

Jquery uses CSS kind of selectors
### Basic Selectors
| Selector                                                       | Description                   |
| -------------------------------------------------------------- | ----------------------------- |
| <span class="text-yellow-500">*</span>                         | All Elements                  |
| <span class="text-yellow-500"><i>element</i></span>            | All element name              |
| <span class="text-yellow-500">#id</span>                       | Element with **id**           |
| <span class="text-yellow-500">.class</span>                    | Element with the **class**    |
| <i><span class="text-yellow-500">selector, selector</span></i> | Way to add multiple selectors |

### Hierarchy 

| Selector                                                        | Description                                                                                              |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <span class="text-yellow-500"><i>ancestor descendant</i></span> | A element that is a descendant of another element *eg. li a*                                             |
| <span class="text-yellow-500"><i>parent > child</i></span>      | If you want direct child of another element **use * in place of child to select all children of parent** |
| <span class="text-yellow-500"><i>previous ~ siblings</i></span> | select all elements that are siblings of previous element                                                |

### Basic Filters

| Selector                                                             | Description                                                        |
| -------------------------------------------------------------------- | ------------------------------------------------------------------ |
| <span class="text-yellow-500 font-mono">:not(<i>selector</i>)</span> | All Elements except ones in the *selector*                         |
| <span class="text-yellow-500 font-mono">:first</span>                | The first element in selection                                     |
| <span class="text-yellow-500 font-mono">:last</span>                 | The last element in selection                                      |
| <span class="text-yellow-500 font-mono">:even</span>                 | Elements with a even index in selection                            |
| <span class="text-yellow-500 font-mono">:odd</span>                  | Elements with a odd index in selection                             |
| <span class="text-yellow-500 font-mono">:eq(<i>index</i>)</span>     | Elements with a index equal to the one in the parameter            |
| <span class="text-yellow-500 font-mono">:gt(<i>index</i>)</span>     | Elements with a index number greater than the one in the parameter |
| <span class="text-yellow-500 font-mono">:lt(<i>index</i>)</span>     | Elements with a index number lesser than the one in the parameter  |
| <span class="text-yellow-500 font-mono">:header</span>               | All `<h1> - <h6>` elements                                         |
| <span class="text-yellow-500 font-mono">:animated</span>             | Elements that are currently being animated                         |
| <span class="text-yellow-500 font-mono">:focus</span>                | The element that currently has focus                               |

### Content Filters 
| Selector                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| <span class="text-yellow-500 font-mono">:contains(<i>text</i>)</span> | All Elements that contain the specified text in parameter             |
| <span class="text-yellow-500 font-mono">:empty</span>                 | All Elements that have no children                                    |
| <span class="text-yellow-500 font-mono">:parent</span>                | All Elements that have a child note *can be text or element*          |
| <span class="text-yellow-500 font-mono">:has(<i>selector</i>)</span>  | Elements that contain at least one element that matches that selector |

### Visibility Filters 
| Selector                                                | Description                                       |
| ------------------------------------------------------- | ------------------------------------------------- |
| <span class="text-yellow-500 font-mono">:hidden</span>  | All Elements that are hidden                      |
| <span class="text-yellow-500 font-mono">:visible</span> | All Elements that <u>take up space on a page </u> |

### Child Filters 
| Selector                                                               | Description                                 |
| ---------------------------------------------------------------------- | ------------------------------------------- |
| <span class="text-yellow-500 font-mono">:nth-child(<i>expr</i>)</span> | Value here is non zero based                |
| <span class="text-yellow-500 font-mono">:first-child</span>            | First child from current selection          |
| <span class="text-yellow-500 font-mono">:last-child</span>             | Last child from current selection           |
| <span class="text-yellow-500 font-mono">:only-child</span>             | When there is only one child of the element |

### Attribute Filters 
| Selector                                                                | Description                                                              |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| <span class="text-yellow-500 font-mono">[attribute]</span>              | Elements that carry the specified attribute **any value**                |
| <span class="text-yellow-500 font-mono">[attribute='value']</span>      | Elements that carry the specified attribute with the specified value     |
| <span class="text-yellow-500 font-mono">[attribute!='value']</span>     | Elements that carry the specified attribute but not that specified value |
| <span class="text-yellow-500 font-mono">[attribute^='value']</span>     | The value of the attribute begins with this value                        |
| <span class="text-yellow-500 font-mono">[attribute$='value']</span>     | The value of the attribute ends with this value                          |
| <span class="text-yellow-500 font-mono">[attribute*='value']</span>     | The value appears somewhere in the attribute                             |
| <span class="text-yellow-500 font-mono">[attribute                      | ='value']</span>                                                         | Equal to a given string, or starting with string followed by a hyphen |
| <span class="text-yellow-500 font-mono">[attribute~='value']</span>     | The value should be one of the values in a space separate list           |
| <span class="text-yellow-500 font-mono">[attribute1][attribute2]</span> | Elements that match all selectors                                        |

### Forms
| Selector                                                 | Description                             |
| -------------------------------------------------------- | --------------------------------------- |
| <span class="text-yellow-500 font-mono">:input</span>    | All input elements                      |
| <span class="text-yellow-500 font-mono">:text</span>     | All text elements                       |
| <span class="text-yellow-500 font-mono">:password</span> | All password inputs                     |
| <span class="text-yellow-500 font-mono">:radio</span>    | All radio buttons                       |
| <span class="text-yellow-500 font-mono">:checkbox</span> | All checkboxes                          |
| <span class="text-yellow-500 font-mono">:submit</span>   | All `submit` buttons                    |
| <span class="text-yellow-500 font-mono">:image</span>    | All `<img>` elements                    |
| <span class="text-yellow-500 font-mono">:reset</span>    | All reset buttons                       |
| <span class="text-yellow-500 font-mono">:button</span>   | All `<button>` elements                 |
| <span class="text-yellow-500 font-mono">:file</span>     | All file inputs                         |
| <span class="text-yellow-500 font-mono">:selected</span> | All selected items from drop-down lists |
| <span class="text-yellow-500 font-mono">:enabled</span>  | All enabled form elements               |
| <span class="text-yellow-500 font-mono">:disabled</span> | All disabled form elements              |
| <span class="text-yellow-500 font-mono">:checked</span>  | All checked radio buttons or checkboxes |

## <span id="jquery-actions">Doing things with selections</span>

### Content Filters
Get or change content of elements, attribute, text node
<div class="columns">

<div class="column">

#### Get / Change Contents
<a href="#element-content"><span class="text-blue-500 font-mono">.html()</span></a>
<a href="#element-content"><span class="text-blue-500 font-mono">.text()</span></a>
<a href="#update-element-content"><span class="text-blue-500 font-mono">.replaceWith()</span></a>
<a href="#update-element-content"><span class="text-blue-500 font-mono">.remove()</span></a>
</div>

<div class="column">

#### Elements
<a href="#inserting-elements"><span class="text-purple-300 font-mono">.before()</span></a>
<a href="#inserting-elements"><span class="text-purple-300 font-mono">.after()</span></a>
<a href="#inserting-elements"><span class="text-purple-300 font-mono">.prepend()</span></a>
<a href="#inserting-elements"><span class="text-purple-300 font-mono">.append()</span></a>
<a href="#"><span class="text-purple-300 font-mono">.remove()</span></a>
<a href="#"><span class="text-purple-300 font-mono">.clone()</span></a>
<a href="#"><span class="text-purple-300 font-mono">.unwrap()</span></a>
<a href="#"><span class="text-purple-300 font-mono">.detach()</span></a>
<a href="#"><span class="text-purple-300 font-mono">.empty()</span></a>
<a href="#"><span class="text-purple-300 font-mono">.add()</span></a>
</div>

<div class="column">

#### Attributes
<a href="#element-attributes"><span class="text-pink-300 font-mono">.attr()</span></a>
<a href="#element-attributes"><span class="text-pink-300 font-mono">.removeAttr()</span></a>
<a href="#element-attributes"><span class="text-pink-300 font-mono">.addClass()</span></a>
<a href="#css"><span class="text-pink-300 font-mono">.css()</span></a>

#### Form Values
<a href="#"><span class="text-pink-600 font-mono">.val()</span></a>
<a href="#"><span class="text-pink-600 font-mono">.isNumeric()</span></a>
</div>
</div>

### Finding Element
Find and select elements to work with & traverse the DOM

<div class="columns">
       <div class="column">

#### General
<a href="#"><span class="text-green-600 font-mono">.find()</span></a>
<a href="#"><span class="text-green-600 font-mono">.closest()</span></a>
<a href="#"><span class="text-green-600 font-mono">.parent()</span></a>
<a href="#"><span class="text-green-600 font-mono">.parents()</span></a>
<a href="#"><span class="text-green-600 font-mono">.children()</span></a>
<a href="#"><span class="text-green-600 font-mono">.sibling()</span></a>
<a href="#"><span class="text-green-600 font-mono">.next()</span></a>
<a href="#"><span class="text-green-600 font-mono">.nextAll()</span></a>
<a href="#"><span class="text-green-600 font-mono">.prev()</span></a>
<a href="#"><span class="text-green-600 font-mono">.prevAll()</span></a>
</div>

<div class="column">

#### Filter / Test
<a href="#"><span class="text-green-300 font-mono">.filter()</span></a>
<a href="#"><span class="text-green-300 font-mono">.not()</span></a>
<a href="#"><span class="text-green-300 font-mono">.has()</span></a>
<a href="#"><span class="text-green-300 font-mono">.is()</span></a>
<a href="#"><span class="text-green-300 font-mono">.contain()</span></a>

#### Order in Selection
<a href="#"><span class="text-green-100 font-mono">.eq()</span></a>
<a href="#"><span class="text-green-100 font-mono">.lt()</span></a>
<a href="#"><span class="text-green-100 font-mono">.gt()</span></a>
</div>
</div>

### Dimension/Position
Get or update the dimensions or position of a box
<div class="columns">

<div class="column">

#### Dimension
<a href="#"><span class="text-red-100 font-mono">.height()</span></a>
<a href="#"><span class="text-red-100 font-mono">.width()</span></a>
<a href="#"><span class="text-red-100 font-mono">.innerHeight()</span></a>
<a href="#"><span class="text-red-100 font-mono">.innerWidth()</span></a>
<a href="#"><span class="text-red-100 font-mono">.outerHeight()</span></a>
<a href="#"><span class="text-red-100 font-mono">.outerWidth()</span></a>
<a href="#"><span class="text-red-100 font-mono"> $(document).height()</span></a>
<a href="#"><span class="text-red-100 font-mono"> $(document).width()</span></a>
<a href="#"><span class="text-red-100 font-mono"> $(window).height()</span></a>
<a href="#"><span class="text-red-100 font-mono"> $(window).width()</span></a>
</div>
<div class="column">

#### Position
<span class="text-red-200 font-mono">.offset()</span>
<span class="text-red-200 font-mono">.position()</span>
<span class="text-red-200 font-mono">.scrollLeft()</span>
<span class="text-red-200 font-mono">.scrollRight()</span>
</div>
</div>

<div class="column">

</div>

### Effect & Animation
Add effects and animations to parts of the page

<div class="columns">

<div class="column">

#### Basic
<span class="text-indigo-500 font-mono">.show()</span>
<span class="text-indigo-500 font-mono">.hide()</span>
<span class="text-indigo-500 font-mono">.toggle()</span>
</div>

<div class="column">

#### Fading
<span class="text-indigo-200 font-mono">.fadeIn()</span>
<span class="text-indigo-200 font-mono">.fadeOut()</span>
<span class="text-indigo-200 font-mono">.fadeTo()</span>
<span class="text-indigo-200 font-mono">.fadeToggle()</span>
</div>

<div class="column">

#### Sliding
<span class="text-indigo-400 font-mono">.slideDown()</span>
<span class="text-indigo-400 font-mono">.slideUp()</span>
<span class="text-indigo-400 font-mono">.slideToggle()</span>
</div>

<div class="column">

#### Custom
<span class="text-indigo-700 font-mono">.delay()</span>
<span class="text-indigo-700 font-mono">.stop()</span>
<span class="text-indigo-700 font-mono">.animate()</span>
</div>
</div>

### Events
Create event listener for each element in the selection

<div class="columns">

<div class="column">

#### Document / File
<span class="text-yellow-100 font-mono">.ready()</span>
<span class="text-yellow-100 font-mono">.load()</span>
</div>

<div class="column">

#### User Interaction
<span class="text-yellow-800 font-mono">.on()</span>

>**Note:** Old methods like <span class="text-yellow-800 font-mono">.click()</span>, <span class="text-yellow-800 font-mono">.hover()</span> and deprecated in favour of <span class="text-yellow-800 font-mono">.on()</span>
</div>
</div>

## Jquery Example

Recommend to go to example and try JQuery code

[link](./Ducket/jqueryExample.html)


### Matched Sets or Jquery Selections
*You can select one or more elements when you select elements a jQuery object is returned* 

```js
const singleElement = $('ul')
```

| Index | Element Node |
| ----- | ------------ |
| 0     | ul           |

```js
const multipleElement = $('li')
```

| Index | Element Node |
| ----- | ------------ |
| 0     | ul#one.hot   |
| 0     | ul#two.hot   |
| 0     | ul#three.hot |
| 0     | ul#four      |

```js
const content =  multipleElement.html()
> '<em>fresh</em> figs'
// Notice it returned only the first element 

multipleElement.html('updated')
// this updates all the innerHtml to 'updated'
```
### Ready Page

```js
// Shortcut for ready event method on DOM
// note: $(document).ready() is now deprecated
// another means is to use the load event 
// note: don't use .load() use .on() as with all events

$( function() {
  // script goes here
} )

jQuery(function () {
  // script goes here
})
```

with the above we now don't need to have scripts at the end of the closing body tag

### <a href="#jquery-actions"><span id="element-content">Element Content</span></a>

```javascript
$().html() // to get even the tags and other markup

// => <em>emphasized text</em> other text 

$().text() // to get just get text

// => emphasized text other text 
```

### <a href="#jquery-actions"><span id="update-element-content">Update Element Content</span></a>

```javascript
$().replaceWith() // also returns the replaced elements
$().remove()
```

### <a href="#jquery-actions"><span id="inserting-elements">Inserting Elements</span></a>

<span class="font-mono text-red-500"> $().before()</span> insert content before selected element(s)
<span class="font-mono text-green-500"> $().after()</span>  insert content after selected element(s)
<span class="font-mono text-blue-500"> $().prepend()</span>  insert content inside the selected element after opening tag
<span class="font-mono text-purple-500"> $().append()</span>  insert content inside the selected element before closing tag

<style>
  .slide-in-point {
    /* border-left: 3px solid red; */
    margin-right: 0.5em
  }
  .slide-in-content {
    position: absolute;
  }
  @keyframe slideIn {
    from {
      right: 50%;
    }
    to {
      right: 0%;
    }
  }
  #before #prepend #append #after {
    position: relative;
    overflow: hidden;
  }
  
  /* todo: fix animation */
  #before:hover::after #after:hover::after #prepend:hover::after #append:hover::after{
    overflow: hidden;
    position: relative;
    animation: slideIn 5s forwards;
    right: 50%;
    font-size: 80%;
    opacity: 1;
    margin-left: 1em
  }

  #before:hover::after {
    content: " $().before() ";
  }
  #prepend:hover::after {
    content: " $().prepend() ";
  }
  #append:hover::after {
    content: " $().append() ";
  }
  #after:hover::after {
    content: " $().after() ";
  }
</style>

<p class="font-mono text-2xl text-center">
<span id="before" class="slide-in-point text-red-500">|</span>&lt;tag&gt;
<span id="prepend" class="slide-in-point text-blue-500">|</span>Content
<span id="append" class="slide-in-point text-purple-500">|</span>&lt;/tag&gt
<span id="after" class="slide-in-point text-green-500">|</span>
</p>


### <a href="#jquery-actions"><span id="element-attributes">Attribute Values</span></a>

```javascript
$('selector').attr('id') // get attribute value
$('selector').attr('id', 'new-id') // update attribute value
$('selector').removeAttr('id') // remove attribute
```
<p class="font-bold text-center filter -hue-rotate-90"> <code>.addClass()</code> <code>.removeClass()</code> </p>


### <a href="#jquery-actions"><span id="css">CSS Properties</span></a>

```javascript
const getCSSValue = $('selector').css('background-color')
$('selector').css('background-color', '#272727') // set css property


// Use object notation to set multiple properties
$('selector').css({
  'background-color': '#272727',
  'font-family': 'courier'
})
```

### <a href="#jquery-actions"><span id="elements-attributes">Attribute Values</span></a>

```javascript
$('selector').attr('id') // get attribute value
$('selector').attr('id', 'new-id') // update attribute value
$('selector').removeAttr('id') // remove attribute
```
<p class="font-bold text-center filter -hue-rotate-90"> <code>.addClass()</code> <code>.removeClass()</code> </p>


### <a href="#jquery-actions"><span id="elements-each">Looping through Elements</span></a>

`.each(fn)` this is like a loop allowing statements to be executed on each element in a set
`this` or `$(this)` to accessed the current element in a each block

```javascript
$('li').each(function() {
  const ids = this.id
  $(this).append('appended content')
})
```

## Events with Jquery

<style>
  table.jquery-events {
    font-family: mono;
    color: lemonchiffon
  }
  table.jquery-events tr>:first-child {
    color: bisque;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1em;
    text-shadow: 1px 1px  1px white;
    text-align: center;
  }
</style>

<table class="jquery-events text-blue-300">
  <tr>
    <td>ui</td>
    <td>focus, blur, change</td>
  </tr>
  <tr>
    <td>keyboard</td>
    <td>input, keydown, keyup, keypress</td>
  </tr>
  <tr>
    <td>mouse</td>
    <td>click, dblclick, mouseup, mousedown, mouseover, mousedown</td>
  </tr>
  <tr>
    <td>form</td>
    <td>submit, select, change</td>
  </tr>
  <tr>
    <td>document</td>
    <td>ready, load, unload</td>
  </tr>
  <tr>
    <td>browser</td>
    <td>error, resize, scroll</td>
  </tr>
</table>

### Event Object

```javascript
$('selector').on('event', function(e){
  // e is the event object
  eventType = e.type
})
```