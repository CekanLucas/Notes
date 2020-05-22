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

<img src="https://testing-library.com/img/octopus-64x64.png" alt="" style="" id=scale-img>

<form action="">
  
  <span id="text-scalex">ScaleX</span>
  <input id=range-scalex type="range" min=-2 max=2 value=1 step=0.1>
  <span id="counter-scalex">1</span>

  <span id="text-scaley">ScaleY</span>
  <input id=range-scaley type="range" min=-2 max=2 value=1 step=0.1>
  <span id="counter-scaley">1</span>

</form>

<script>
const img = document.getElementById("scale-img");

const counterScaleX = document.querySelector('#counter-scalex');
const rangeScaleX = document.querySelector('#range-scalex');

const counterScaleY = document.querySelector('#counter-scaley');
const rangeScaleY = document.querySelector('#range-scaley');
// btn.onclick = e => console.log(e);

// Scale Event Listeners
rangeScaleX.addEventListener('input', function (e) {
  // change counter based on range slider
  counterScaleX.innerText = rangeScaleX.value;
  // tranform img transform property based on range
  img.style.transform = `scaleX(${rangeScaleX.value})`;
});
rangeScaleY.addEventListener('input', function (e) {
  // change counter based on range slider
  counterScaleY.innerText = rangeScaleY.value;
  // tranform img transform property based on range
  img.style.transform = `scaleY(${rangeScaleY.value})`;
});
</script>