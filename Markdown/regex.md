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
  color:steelblue;
  text-shadow: none;
}

</style>
</head>    
<div id="stack-container">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/OOjs_UI_icon_regular-expression-progressive.svg/1920px-OOjs_UI_icon_regular-expression-progressive.svg.png" width="100px" alt="Logo"></a>
</div>

<!-- # Regex -->

<style>
  #playground, #regex{
    color: white;
    width: 100%;
    font-size: 1.2em;
    padding: 1em;
    box-sizing: border-box;
  }
  #playground {
    background-color: rgba(100, 100, 100, 0.3);
    height: 50vh;
  }
  #regex {
    color: steelblue;
  }
</style>

<p id="playground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita temporibus nesciunt ullam autem numquam voluptas commodi accusantium. Temporibus voluptatum facilis sed aliquid debitis aut ullam reprehenderit deleniti? Exercitationem, quos?</p>

<input type="text" name="regex" id="regex" class="font-mono bg-gray-400 bg-opacity-25">

<script src="regex.js"></script>

```javascript
// these are identical
const reg1 = /pattern/g
const reg2 = new RegExp('pattern', 'flags')

// the are two method for RegExp
/a/g.test('abc') //=> true
/d/g.test('abc') //=> false

/a/g.exec('abc') //=> [ 'a', index: 0, input: 'abc', groups: undefined ]
```

### Quantifiers <a href="#playground" class="text-xs">playground &circlearrowleft;</a>

You can search repeated patterns using a number in the `{}`


```javascript
/a{1}/g.test('aaa') //=> true
/a{3}/g.test('aaa') //=> true
/a{4}/g.test('aaa') //=> false
```