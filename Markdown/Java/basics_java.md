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

<a href="https://developer.ibm.com/tutorials/j-introtojava2/" title="Java course by IBM ">IBM Java Tutorial</a>
```Java

class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```
## The Java compiler

When you program for the <b class="Orange">Java platform</b>, you write source code in <span class="FireBrick">.java files</span> and then compile them. The compiler checks your code against the language’s syntax rules, then writes out bytecode in <span class="Lime">.class files</span>. <span class="SkyBlue">Bytecode is a set of instructions targeted to run on a <i><b class="SteelBlue">Java virtual machine (JVM)</b></i>.</span>

 ><span class="LightBlue">In adding this level of abstraction, the Java compiler differs from other language compilers, which write out assembly-language instructions suitable for the CPU chipset the program will run on.</span>

## The JVM <sub><small>Javascript Virtual Machine</small></sub>

At runtime, the <b class="SteelBlue">JVM</b> reads and interprets <span class="Lime">.class</span> files and executes the program’s instructions on the native hardware platform for which the <b class="SteelBlue">JVM</b> was written. The <b class="SteelBlue">JVM</b> interprets the bytecode just as a CPU would interpret assembly-language instructions. The difference is that the <b class="SteelBlue">JVM</b> is a piece of software written specifically for a particular platform. <span class="SkyBlue">The <b class="SteelBlue">JVM</b> is the heart of the Java language’s </span>

>“<big><b class="Teal
">write-once, run-anywhere</b></big>” principle. 

#### Javascript can run any platform
Code can run on any chipset for which a suitable JVM implementation is available. JVMs are available for major platforms like Linux™ and Windows®, and subsets of the Java language have been implemented in JVMs for mobile phones and hobbyist chips.

## Java Runtime Environment <sup>JRE</sup>

includes 
- JVM
- code libraries 
- components
- available for multiple platforms

## Packaging Classes
Becuase you can name your classes anything there is the problem of <b class="FireBrick">name collisions</b> to which java implements <b class="Green">packages as a solution</b> 

```java
// here is the standard package name
package  orgType.orgName.appName.compName;
```

It seems the JDK uses the filesystem to specify packages
```java
import ClassNameToImportant;

//to import all classes in package 
import com.lucascekan.*
```
## Classes
```java
//default class declaration
//className convention is camelCase
accessSpecifier class ClassName {
  //variables with optional initial value
  accessSpecifier dataType variableName [= initialValue];
    accessSpecifier ClassName([argumentList]) {
    constructorStatement(s)
  }
  //methods 
  accessSpecifier returnType methodName([argumentList]) {
    methodStatement(s)
  }
}

```
## <span class="Blue">accessSpecifier</span>
`public` <span class="LightBlue">any package can see variable <strong class="Crimson">Don't ever use this on variable</strong></span>

`protected` <span class="LightBlue">Any object defined in the same package or subclasses <strong class="Crimson"> even package</strong></span>

`private` <span class="LightBlue">Any object defined in the same package <strong class="Crimson">default when not specified</strong></span>


## <span class="SteelBlue">variable data type and name</span>
**data type** could be <span class="Yellow">primitive</span> or any other type ussually a <span class="Lime">class</span>
**name** is also in camelCase exept first letter is lowercase 

## <span class="Cyan">Methods</span>
methods contain strucural elements that make up the <b class="Aqua">method's signature</b> 
- accessSpecifier
- return type 
- method name 
- argument list

#### <span class="LightGreen">Constructor Methods</span>

These specify how to instantiate a class for the accessSpecifier must be the same as variable so if the class is Person that the constructor must also be Person. Remember to use `this` to reference containing object



