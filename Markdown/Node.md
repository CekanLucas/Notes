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
     1px  0px   1px ,  0px  1px   1px ,
    -1px  0px   1px ,  0px -1px   1px ,
     0px  1px black ,  1px  0px black ,
    -1px  0px black ,  0px -1px black ;
  text-outline: red;
}
</style>
</head>    

<div id="stack-container">

<a href="https://nodejs.org/dist/latest-v12.x/docs/api/"><img src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png" alt="Node JS Logo"></a>
</div>

# Node.js
Build upon google chrome <b class="SkyBlue">v8 Javascript engine</b>. Provides <span class="Purple"> asynchronous </span>, <b class="Teal">event driven</b>, <b class="Crimson">I/O based</b>, <i class="SteelBlue">cross platform runtime environment</i> for the development of <span class="Yellow">server side JS applications</span> 

<abbr title="Read, Evaluate, Print, Loop">**REPL**</abbr> mode is used when you type `node` in the terminal

``` bash
# to run a js file using node
node filename.js

# to exit node from file or REPL
process.exit()

# display env 
process.env 

# print the result of the last operation
_
```

## Dot Commands
<b class="Lime">These are special commands all starting with the `.`</b>

`.help` shows dot command help

`.editor` enables editor mode, to write multiline JS, enter <span class="Khaki">cntr + D</span> to run code

`.break` when in multiline this aborts further input same as <span class="Khaki">cntr + C</span>

`.clear` resets the REPL context to empty object and clears any multiline expression 

`.load` loads a JS file relative to current working directory 

`.save` saves all you entered in the REPL session to a file (specify the filename)

`.exit` exits the repo same as  <span class="Khaki">cntr + C</span> two times

```js 
[1,2,3].forEach( num => { //press enter
... // you are automatically in multiline mode
... console.log(num);
...)} 
1
2
3

// could use C/C++ style string format
console.log('My %s has %d years', 'cat', 2) // My cat has 2 years
```
`%s`  formats variable as a <b class="SkyBlue">string</b> 
`%d`  formats variable as a <b class="SkyBlue">number</b>
`%i`  formats variable as a <b class="SkyBlue">interger part only</b>
`%o`  formats variable as a <b class="SkyBlue">object</b> 

`console.clear()` clears console
`console.count()` counts elements 

```js
const function2 = () => console.trace()
const function1 = () => function2()
function1()
```
<b class="Crimson">Result</b>

    Trace
    at function2 (repl:1:33)
    at function1 (repl:1:25)
    at repl:1:1
    at ContextifyScript.Script.runInThisContext (vm.js:44:33)
    at REPLServer.defaultEval (repl.js:239:29)
    at bound (domain.js:301:14)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at REPLServer.onLine (repl.js:440:10)
    at emitOne (events.js:120:20)
    at REPLServer.emit (events.js:210:7)

#### Calculate Time Spent

`console.time()` &/Or `console.timeEnd` 

## stdout and stderr 

`console.log` print to something called <b class="Orchid" title="standard output ">stdout</b> but `console.error` print to <b class="OrangeRed" title="standard error ">stderr</b> stream instead

## Coloring Output 
```js 
console.log('\x1b[33m%s\x1b[0m', 'hi!')
```

But just use <b class="Chalk">Chalk</b>

## Reading Environmental Variables
Use the `process` core module of <b class="Lime">Node.js</b> provides the `env` 
``` js 
process.env.NODE_ENV // development
```

## Reading Arguments from Command Line
Use the `argv` core module of <b class="Lime">Node.js</b> provides the `env` 
``` js 
const args = process.argv.slice(2) // development
```

<b><a href="https://www.youtube.com/watch?v=Oe421EPjeBE&list=WL&index=16">Node and Express Full Course</a></b>

### Globals 


`__dirname` <b class="HotPink">path to current directory</b>

`__filename` <b class="HotPink">file name</b>

`require` <b class="HotPink">function to use modules (CommonJS)</b>

`module` <b class="HotPink">info about current module (file)</b>

`process` <b class="HotPink">env info where the program is being executed</b>
