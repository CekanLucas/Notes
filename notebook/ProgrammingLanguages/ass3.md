# Assignment 3

1) **(10 points) Do problem 5 on page 413**
**Consider the following program written in C syntax:**
```c
void swap(int a, int b) {
  int temp;
  temp = a;
  a = b;
  b = temp;
}
void main() {
  int value = 2, list[5] = {1, 3, 5, 7, 9};
  swap(value, list[0]);
  swap(list[0], list[1]);
  swap(value, list[value]);
}
```
**For each of the following parameter-passing methods, 
what are all of the values of the variables `value` 
and `list` after each of the three calls to swap?**

<b>a.</b> **Passed by value**

<font color="indianred">

<b>After call #1</b>: 
&nbsp; `value`: <code style="filter:hue-rotate(300deg)">2</code> 
&nbsp; `list `: { <code style="filter:hue-rotate(300deg)">1</code>, <code style="filter:hue-rotate(300deg)">3</code>, <code style="filter:hue-rotate(300deg)">5</code>, <code style="filter:hue-rotate(300deg)">7</code>, <code style="filter:hue-rotate(300deg)">9</code> }

<b>After call #2</b>: 
&nbsp; `value`: <code style="filter:hue-rotate(300deg)">2</code> 
&nbsp; `list `: { <code style="filter:hue-rotate(300deg)">1</code>, <code style="filter:hue-rotate(300deg)">3</code>, <code style="filter:hue-rotate(300deg)">5</code>, <code style="filter:hue-rotate(300deg)">7</code>, <code style="filter:hue-rotate(300deg)">9</code> }

<b>After call #3</b>: 
&nbsp; `value`: <code style="filter:hue-rotate(300deg)">2</code> 
&nbsp; `list `: { <code style="filter:hue-rotate(300deg)">1</code>, <code style="filter:hue-rotate(300deg)">3</code>, <code style="filter:hue-rotate(300deg)">5</code>, <code style="filter:hue-rotate(300deg)">7</code>, <code style="filter:hue-rotate(300deg)">9</code> }

No change because <i>pass-by-value</i> is a copy operation
</font>

<b>b.</b> **Passed by reference**

<font color="indianred">

<b>After call #1</b>: 
&nbsp; `value`: <code style="filter:hue-rotate(300deg)">1</code> 
&nbsp; `list `: { <code style="filter:hue-rotate(300deg)">2</code>, <code style="filter:hue-rotate(300deg)">3</code>, <code style="filter:hue-rotate(300deg)">5</code>, <code style="filter:hue-rotate(300deg)">7</code>, <code style="filter:hue-rotate(300deg)">9</code> }

<b>After call #2</b>: 
&nbsp; `value`: <code style="filter:hue-rotate(300deg)">1</code> 
&nbsp; `list `: { <code style="filter:hue-rotate(300deg)">3</code>, <code style="filter:hue-rotate(300deg)">2</code>, <code style="filter:hue-rotate(300deg)">5</code>, <code style="filter:hue-rotate(300deg)">7</code>, <code style="filter:hue-rotate(300deg)">9</code> }

<b>After call #3</b>: 
&nbsp; `value`: <code style="filter:hue-rotate(300deg)">2</code> 
&nbsp; `list `: { <code style="filter:hue-rotate(300deg)">3</code>, <code style="filter:hue-rotate(300deg)">1</code>, <code style="filter:hue-rotate(300deg)">5</code>, <code style="filter:hue-rotate(300deg)">7</code>, <code style="filter:hue-rotate(300deg)">9</code> }

<i>pass-by-reference</i> works <u>directly</u> with memory addresses
</font>

<b>c.</b> **Passed by value-result**

<font color="indianred">

<b>After call #1</b>: 
&nbsp; `value`: <code style="filter:hue-rotate(300deg)">1</code> 
&nbsp; `list `: { <code style="filter:hue-rotate(300deg)">2</code>, <code style="filter:hue-rotate(300deg)">3</code>, <code style="filter:hue-rotate(300deg)">5</code>, <code style="filter:hue-rotate(300deg)">7</code>, <code style="filter:hue-rotate(300deg)">9</code> }

<b>After call #2</b>: 
&nbsp; `value`: <code style="filter:hue-rotate(300deg)">1</code> 
&nbsp; `list `: { <code style="filter:hue-rotate(300deg)">3</code>, <code style="filter:hue-rotate(300deg)">2</code>, <code style="filter:hue-rotate(300deg)">5</code>, <code style="filter:hue-rotate(300deg)">7</code>, <code style="filter:hue-rotate(300deg)">9</code> }

<b>After call #3</b>: 
&nbsp; `value`: <code style="filter:hue-rotate(300deg)">2</code> 
&nbsp; `list `: { <code style="filter:hue-rotate(300deg)">3</code>, <code style="filter:hue-rotate(300deg)">1</code>, <code style="filter:hue-rotate(300deg)">5</code>, <code style="filter:hue-rotate(300deg)">7</code>, <code style="filter:hue-rotate(300deg)">9</code> }

<i>pass-by-value-result</i> copies <u>two-way</u>
</font>


2) **(10 points) Do problem 19 on page 442**
    &nbsp;19.   Compare the efficiency of the deep-access methods to that of the shallow-access methods, in terms of both calls and non-local accesses

&bull;  <b>deep-access</b>low references to distant non-local fast subprogram linkage

&bull;  <b>shallow-access</b> fast references to distant non-local slow subprogram linkage

3) **(10 points) Do problem 2 on page 443**
    &nbsp;2. Show the stack with all activation record instances, including static and dynamic chains & when execution reaches position 1 in the following skeletal program
    Assume `bigsum` is at level 1

<div class="columns">
  <div class="column">
  
```js
function bigsum() {
  var mysum;

  function a() {
    var x;
    function b(sum) {
      var y, z;
      ...
      c(z);
      ...
    } // end of b
    ...
    b(x);
    ...
  } // end of a

  function c(plums) {
    ... //=> position 1
  } // end of c

  var 1;
  ...
  a();
  ...
} // end of bigsub
```

  </div>
  <div class="column">

##### Sequence of procedure calls
    bigsum calls a
    a calls b
    b calls c
  
##### Call Stack

<table class="t">
  <tr class="t">
    <td class="font-bold bg-yellow-900 font-mono" rowspan="4">c</td>
    <td class="font-bold bg-yellow-900">Parameter</td>
    <td class="font-mono">plums</td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-yellow-900">Dynamic Link</td>
    <td></td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-yellow-900">Static Link</td>
    <td class="font-mono">bigsum</td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-yellow-900">Return Address</td>
    <td class="">to b</td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-red-900 font-mono" rowspan="6">b</td>
    <td class="font-bold bg-red-900">Local Variable</td>
    <td class="font-mono">y</td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-red-900">Local Variable</td>
    <td class="font-mono">z</td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-red-900">Parameter</td>
    <td class="font-mono">sum</td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-red-900">Dynamic Link</td>
    <td></td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-red-900">Static Link</td>
    <td class="font-mono">a</td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-red-900">Return Address</td>
    <td class="">to a</td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-blue-900 font-mono" rowspan="4">a</td>
    <td class="font-bold bg-blue-900">Local Variable</td>
    <td class="font-mono">x</td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-blue-900">Dynamic Link</td>
    <td></td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-blue-900">Static Link</td>
    <td class="font-mono">bigsum</td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-blue-900">Return Address</td>
    <td class="">to main</td>
  </tr>
  <tr class="t">
    <td class="font-bold bg-green-900 font-mono" rowspan="1">bigsum</td>
    <td class="font-bold bg-green-900">Local Variable</td>
    <td class="font-mono">mysum</td>
  </tr>
</table>

  </div>
</div>






4) **(10 points) Consider the following program:**
```js
function f1( ) {
    var x = 10;
    function f2(fx) {
        var x;
        x = 6;
        fx ( );
    };

    function f3( ) {
        print x;
    };
    f2( f3);
};
```

**For each of the following two binding methods, what would the program print?**

&nbsp;**shallow binding**
the referencing environment of the printing function `f3` is that of `f2` 
so the local variable of `x` and <font color="orange"><b>output would be 6</b></font>

&nbsp;**deep binding** 
the referencing environment of the printing function `f3` is that of `f1` 
so the local variable of `x` and <font color="orange"><b>output would be 10</b></font>
