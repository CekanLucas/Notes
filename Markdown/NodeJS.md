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
#stack-container {
    position: fixed;
    height: 5em;
    display: flex;
    flex-direction: column-reverse;
    bottom:5vh;
    right: 5vw;
    width: 20vw
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
```