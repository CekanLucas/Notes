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
.mongo{
  font-weight: bold;
  color: lightgreen;
  font-family: arial;
  font-size: large;
}
</style>
</head>    
<div id="stack-container">
  <a href="https://docs.mongodb.com/"><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="Logo"></a>
</div>

[***Back to Main Article***](./mongodb.md)


#  <small class="SpringGreen">MongoDB - Shell</small>

To start the shell <span class="mongo">mongo</span> 

```bash
$mongo 

MongoDB shell version: 4.2 
connecting to: test

# shell is fully featured 
# you can do math

> x = 200;
200
> x / 5;
40

# You can use js libraries
> Math.sin(Math.PI / 2)
1
> new Date("20109/1/1")
ISODate("20109-01-01T05:00:00Z")
> "Hello, World!".replace("World". "Mongodb")
Hello, Mongodb!

# you can even use functions
> function factorial (n) {
... if (n <= 1) return 1;
... return n * factorial(n -1);
... }
> factorial(5)
120
```