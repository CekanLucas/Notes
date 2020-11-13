<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../../boilerplate/color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../../boilerplate/CSS.css"/>
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
</style>
</head>    

# JAVA <small class="Grey">Arrays</small>

A <b class="RebeccaPurple">array</b> is a collection of variables of the same type

``` java
// here is how we would declare a int array of size 5
int[] arr = new int[5];
// assign value to index position 2
// remember index values are zero based
arr[2] = 25;

//example of array literal declaration
String[] myLetters = {"A", "B", "C", "D"};
myLetters.length // 4 

//multidimentional array
int[][] multiArr = {{1,2}, {2,5,6}};
```

### Enhanced Arrays 
Sometimes called <b class="BlueViolet">for each loops</b>
```java
int[] primes = {2, 3, 5, 7};

for (int t: primes) {
  System.out.print(t);
} // 2357
```