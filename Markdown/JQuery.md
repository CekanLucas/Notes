<link rel=stylesheet href="./css.css" >
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="../JSprograms/JQuery.ts"></script>

[link to JQuery JS File](../JSprograms/JQuery.ts)

# <span class="OrangeRed">JQuery</span> <span style="color:lightgreen">freecodecamp</span> & <span class="Aqua">John Duckett Book</span>

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