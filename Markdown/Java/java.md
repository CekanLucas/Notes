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

# JAVA 
      
## Compilation 

Java programs are compiled by the Java compiler or `Javac` and then run whith the `Java` command  

## Primitives 

note the suffixes needed to distinguish numbers so that they are not just `int` or `long` 
<b class="Yellow">L for long f for float d  double </b>         

<span class="Yellow">
     
</span>

``` java
int myInt;          // default: 0
long myLong;        // default: 0L
float myFloat;      // default: 0.00f
double myDouble;    // default: 0.00d
char myChar;        // default: '\u0000'
boolean myBoolean;  // default: false
```
### number
``` java
byte mybyte;        // -128 to +127
short myshort;      // -32,768 to +32,768
long myLong;        // + or - 2.14 billion
```
### String
`String` is not a primitive type it is a object 

```java
// use + to concatenate
String concat = "This"+"string"+"is"+"being"+"concatenated"
```

### Constant Notation
```java
// note case
public final int MY_CONSTANT =100;
```

### Ternary Operator
exactly like <b class="Yellow">Javascript</b>
```java
result = testCondition ? value1 : value2;
```

### Equality
You could use `=` or the `.equals()` operator
```java
boolean b1 = s1.equals(s2);
boolean b1 = (s1 == s2);
```
### <big class="LightGreen">From</big> is included while <big class="FireBrick">To</big> is excluded
For example `String.substring(from, to)`
> remember indexes start from 0

### Best way to specify type
```java
// parameterised type
List<String> oceans = 
  Arrays.asList( "Pacific", "Atlantic", "Indian");

// raw type
List oceans = 
  Arrays.asList( "Pacific", "Atlantic", "Indian");
```

Should use <b class="LightGreen">parameterised type</b> becuase allow compile time checks which reduces errors and <b class="HotPink">raw types</b> ussually need to be cast to convert to suitable types, as a added bonus they are also backward compatible

### Java is pass by value
So a object is not the actual object but a pointer to the object's location in memory

### Pass arguments to Java program
```java 
public static void main ( String[] args) {

// you can access command line arguments with args[i] however these are always as String so they have to be converted to other types

}
```