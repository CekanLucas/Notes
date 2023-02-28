<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
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
h1, h2, h3, h4, h5, h6 {
  color: #94c02f;
}
code, ul, strong, em {
  filter: hue-rotate(260deg);
}

</style>
</head>    
<div id="stack-container">
  <a href="https://docs.emmet.io/cheat-sheet/"><img src="https://emmet.io/-/4076541266/i/logo.svg" alt="Logo"></a>
</div>

# Emmet

## Decrement / Increment

<span class="text-xl">ctrl + (**magnitude**) + ( `[` = *decrement* `]` = *increment* )</span>

`shift` = 1
`alt` = 0.1
`shift + alt` = 10

- Increment Number by **1**: `ctrl+shift+]`
- Decrement Number by **1**: `ctrl+shift+[`
- Increment Number by **0.1**: `ctrl+alt+]`
- Decrement Number by **0.1**: `ctrl+alt+[`
- Increment Number by **10**: `ctrl+shift+alt+]`
- Decrement Number by **10**: `ctrl+shift+alt+[`

## Tag modifying

<span class="text-xl">ctrl + shift + A (**action**)</span>

##### Wrap with Abbreviation `ctrl+shift+A A`
##### Show Emmet Commands `ctrl+shift+A C`

Other tag actions
- Remove Tag `ctrl+shift+A D`
- Split/Join Tag `ctrl+shift+A J`
- Update Tag `ctrl+shift+A M`

## Syntax


<span class="text-2xl font-mono">
  <span class="text-red-400">p</span> 
  <span class="text-purple-400">#id </span>
  <span class="text-green-400">.class1.class2</span>
  <span class="text-yellow-400">[atrr1=2 atrr2=3 atrr3]</span>
  <span class="text-blue-400">{inner text}</span>
</span>

&nbsp;

<span class="text-xl font-mono">
  <span class="text-red-400">&lt;p</span> 
  <span class="text-purple-400">id="id" </span>
  <span class="text-green-400">class="class1 class2"</span>
  <span class="text-yellow-400">[atrr1="2" atrr2="3" atrr3=""]</span>
  <span class="text-red-400">&gt;</span> <br>
  <span class="text-blue-400 m-10">inner text</span>
  <br>  <span class="text-red-400">&lt;p/&gt;</span> 
</span>

&nbsp;

<div class="columns">
  <div class="column text-xl font-bold">
  
### Child: `>`
    nav>ul>li
  </div>
  <div class="column text">
  
``` html
<nav>
  <ul>
    <li></li>
  </ul>
</nav>
```
  </div>
</div>


<div class="columns">
  <div class="column text-xl font-bold">

### Multiplication: `*`
    ul>li*5
  </div>
<div class="column">

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```
</div>
</div>

<div class="columns">

<div class="column text-xl font-bold">

### Sibling: `+`
    div+p+bq
</div>

<div class="column">

```html
<div></div>
<p></p>
<blockquote></blockquote>
```
</div>
</div>


<div class="columns">

<div class="column text-xl font-bold">

### Grouping: `( )`
    div>(header>ul>li*2>a)+footer>p
</div>
<div class="column">

```html
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```
</div>
</div>

<div class="columns">

<div class="column text-xl font-bold">

### Climb up: `^`
    div+div>p>span+em^bq
</div>
<div class="column">

```html
<div></div>
<div>
  <p><span></span><em></em></p>
  <blockquote></blockquote>
</div>
```
</div>
</div>


<div class="columns">
  <div class="column text-xl font-bold">

    div+div>p>span+em^^bq
  </div>
<div class="column">

```html
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```
</div>

</div>

<div class="columns">

<div class="column text-xl font-bold">

### Numbering: `$`

    ul>li.item$*5
</div>
<div class="column">

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>
```
</div>


</div>

<div class="columns">
  <div class="column text-xl font-bold">
      
    h$[title=item$]{Header $}*3
  </div>
  <div class="column">

```html
<h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3>
```
  </div>
</div>

<div class="columns">
  <div class="column text-xl font-bold">
  
    ul>li.item$$$*5
  </div>

<div class="column">

```html
<ul>
  <li class="item001"></li>
  <li class="item002"></li>
  <li class="item003"></li>
  <li class="item004"></li>
  <li class="item005"></li>
</ul>
```
</div>

</div>

<div class="columns">
  <div class="column text-xl font-bold">

    ul>li.item$@-*5
  </div>
  <div class="column">  

```html
<ul>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>
```
  </div>  
</div>

<div class="columns">
  <div class="column text-xl font-bold">
  
    ul>li.item$@3*5
  </div>

<div class="column">

```html
<ul>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
  <li class="item6"></li>
  <li class="item7"></li>
</ul>
```
</div>

</div>


