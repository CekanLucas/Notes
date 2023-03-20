<head>
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
  <link rel="stylesheet" href="../CSS.css">
  <script src="../CSS.js"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

<style> 
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
/* Themes */
h1, h2, h3, h4, h5, h6 {
  color: goldenrod;
}

</style>
</head>    
<div id="stack-container">
  <a href=""><img src="" alt="Logo"></a>
</div>

# Heading 1
## Heading 2 
### Heading 3 
#### Heading 4 
##### Heading 5 
###### Heading 6 
    < code goes here> 

*This text will be italic*
_also italic_

**This text will be bold**
__also bold__

_You **can** combine them_

## Unordered
* Item 1
* Item 2
  * Item 2a
  * Item 2b

## Ordered
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

## Blockquotes
As Kanye West said:

> We're living the future so
> the present is our past.

## Inline Code

I think you should use an
`<addr>` element here instead.

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}

``` 
    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }

## Task Lists (only on github)

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

## Tables
You can create tables by assembling a list of words and dividing them with hyphens - (for the first row), and then separating each column with a pipe |:

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

| a   | b   |
| --- | --- |
| >   | a   |
| 2   | 2   |

| a   | b   |
| --- | --- |
|     | 1   |
| ^   | 2   |

Automatic linking for URLs
Any URL (like dkcenterofarts.netlify.com) will be automatically converted into a clickable link.

Strikethrough
Any word wrapped with two tildes (like ~~this~~) will appear crossed out.

If you want to embed images, this is how you do it:

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1024px-Markdown-mark.svg.png)

If you'd like to quote someone, use the > character before the line:

> Coffee. The finest organic suspension ever devised... I beat the Borg with it.
> - Captain Janeway

## Markdown plus h2 with a custom ID ##         {#id-goes-here}
[Link back to H2](#id-goes-here)

This is a paragraph, which is text surrounded by whitespace. Paragraphs can be on one 
line (or many), and can drone on for hours.  

Here is a Markdown link to [Warped](https://warpedvisions.org), and a literal <http://link.com/>. 
Now some SimpleLinks, like one to [google] (automagically links to are-you-
feeling-lucky), a [wiki: test] link to a Wikipedia page, and a link to 
[foldoc: CPU]s at foldoc.  

Now some inline markup like _italics_,  **bold**, and `code()`. Note that underscores in 
words are ignored in Markdown Extra.

![picture alt](/images/photo.jpeg "Title is optional")     

> Blockquotes are like quoted text in email replies
>> And, they can be nested

* Bullet lists are easy too
- Another one
+ Another one

1. A numbered list
2. Which is numbered
3. With periods and a space

And now some code:

    // Code is just text indented a bit
    which(is_easy) to_remember();

~~~

// Markdown extra adds un-indented code blocks too

if (this_is_more_code == true && !indented) {
    // tild wrapped code blocks, also not indented
}

~~~

Text with  
two trailing spaces  
(on the right)  
can be used  
for things like poems  

### Horizontal rules

* * * *
****
--------------------------

## Markdown plus tables ##

| Header | Header | Right |
| ------ | ------ | ----: |
| Cell   | Cell   |   $10 |
| Cell   | Cell   |   $20 |

* Outer pipes on tables are optional
* Colon used for alignment (right versus left)

## Markdown plus definition lists ##

Bottled water
: $ 1.25
: $ 1.55 (Large)

Milk
Pop
: $ 1.75

* Multiple definitions and terms are possible
* Definitions can include multiple paragraphs too

*[ABBR]: Markdown plus abbreviations (produces an \<abbr> <abbr> tag)

Markdown provides backslash escapes for the following characters:

\\   backslash       
\`   backtick       
\*   asterisk       
_   underscore       
{}  curly braces       
[]  square brackets       
()  parentheses       
\#   hash mark       
\+   plus sign       
\-   minus sign (hyphen)       
.   dot       
!   exclamation mark       

Plants need CO<sub>2</sub>  
E=MC<sup>2</sup> 

> Email-style angle brackets are used for blockquotes.
>> You can also nest them.
>>
> * You can quote a list.
> * Etc.

> To break the nested blockquote, add a space between lines.

## Text colors and fonts
In his beard lived three <span style="color:red">cardinals</span>

Look <span style="font-family:Papyrus; font-size:2em;">this text is in Papyrus</span> neat

<div style="font-family:Arial;font-size: 1.5em">
This text is in Arial 
</div>

<div style="font-family:Verdana;font-size: 1.5em">
This text is in Verdana 
</div>

<div style="font-family:Helvetica;font-size: 1.5em">
This text is in Helvetica 
</div>


# Chain Middleware to Create a Time Server 

Middleware can be mounted at a specific route using     
` app.METHOD(path, middlewareFunction)`  
Middleware can also be **_chained_** inside route definition. 

Look at the following example: 

```` javascript
app.get('/user', function(req, res, next) { 
req.user = getTheUserSync(); // Hypothetical synchronous operation 
next(); // to call next function after above line 
}, function(req, res) { //function is chained
res.send(req.user); 
}) 
````                            

<span style="color:skyblue">This approach is useful to split the server operations into smaller units. That leads to a better app structure, and the possibility to reuse code in different places.</span> <span style="color:gold">This approach can also be used to perform some validation on the data.</span> At each point of the middleware stack you can block the execution of the current chain and pass control to functions specifically designed to handle errors. Or you can pass control to the next matching route, to handle special cases. We will see how in the advanced Express section. 

In the route `app.get('/now', ...)` chain a middleware function and the final handler. In the middleware function you should add the current time to the request object in the `req.timekey`. You can use new `Date().toString()`. In the handler, respond with a <span style="color:orange">JSON object</span>, taking the structure `{time: req.time}`. 
