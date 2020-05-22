<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./CSS.css"/>
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

#horizontal-center{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
</head>    

# CSS (cascading style sheets)
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
```
#### example
<blockquote id='horizontal-center'> This is centered</blockquote> 

<br><hr>

* The `left` property relates to the size of parent 
* The `trasform` property relates to the child size 
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