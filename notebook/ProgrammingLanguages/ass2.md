# Assignment 2

1.  (10 points) Do problem 8 on page 229

```js
var x, y, z;
function sub1() {
  var a, y, z;
  function sub2() {
    var a, b, z;
    /* ... */
  }
  /* ... */
}

function sub3() {
  var a, x, w;
  /* ... */
}
```

  - List all the variables. along the program units where they are declared,
that are visible in the bodies of `sub1`, `sub2`, and `sub3`
assuming static scoping is used

### sub1 
**declared in `sub1`** : `a`, `y`, `z`
**visible from `main`** : `x`

### sub2 
**declared in `sub2`** : `a`, `b`, `z`
**visible from `sub1`** : `y`
**visible from `main`** : `x`

### sub3 
**declared in `sub3`** : `a`, `x`, `w`
**visible from `main`** : `y`, `z`

2.  (10 points) Do problem 11 (a) (b) (c\) on page 232
   Consider the following skeletal C program

```c
void fun1(void); /* prototype */
void fun2(void); /* prototype */
void fun3(void); /* prototype */

void main() {
  int a, b, c;
  /* ... */
}

void fun1(void) {
  int b, c, d;
  /* ... */
}

void fun2(void) {
  int c, d, e;
  /* ... */
}

void fun3(void) {
  int d, e, f;
  /* ... */
}
```
  - Given the following calling sequences and assuming that <i>dynamic scoping</i> is used
what variables are visible during execution of the last function called?
Include with each visible variable the name of the function in which it was defined

-    - (a) `main` calls `fun1`; `fun1` calls `fun2`; `fun2` calls `fun3`

In order of calls, striking-through when the current function re-declares previously visible variables
<code style="filter:hue-rotate(-60deg)">main</code> <code style="text-decoration:none">a</code>, <code style="text-decoration:line-through">b</code>, <code style="text-decoration:line-through">c</code>

<code style="filter:hue-rotate(-60deg)">fun1</code> <code style="text-decoration:none">b</code>, <code style="text-decoration:line-through">c</code>, <code style="text-decoration:line-through">d</code>

<code style="filter:hue-rotate(-60deg)">fun2</code> <code style="text-decoration:none">c</code>, <code style="text-decoration:line-through">d</code>, <code style="text-decoration:line-through">e</code>

<code style="filter:hue-rotate(-60deg)">fun3</code> <code style="text-decoration:none">d</code>, <code style="text-decoration:none">e</code>, <code style="text-decoration:none">f</code>
-    - (b) `main` calls `fun1`; `fun1` calls `fun3`

In order of calls, striking-through when the current function re-declares previously visible variables
<code style="filter:hue-rotate(-60deg)">main</code> <code style="text-decoration:none">a</code>, <code style="text-decoration:line-through">b</code>, <code style="text-decoration:line-through">c</code>

<code style="filter:hue-rotate(-60deg)">fun1</code> <code style="text-decoration:none">b</code>, <code style="text-decoration:none">c</code>, <code style="text-decoration:line-through">d</code>

<code style="filter:hue-rotate(-60deg)">fun3</code> <code style="text-decoration:none">d</code>, <code style="text-decoration:none">e</code>, <code style="text-decoration:none">f</code>

-    - (c\) `main` calls `fun2`; `fun2` calls `fun3`; `fun3` calls `fun1`

In order of calls, striking-through when the current function re-declares previously visible variables
<code style="filter:hue-rotate(-60deg)">main</code> <code style="text-decoration:none">a</code>, <code style="text-decoration:line-through">b</code>, <code style="text-decoration:line-through">c</code>

<code style="filter:hue-rotate(-60deg)">fun2</code> <code style="text-decoration:line-through">c</code>, <code style="text-decoration:line-through">d</code>, <code style="text-decoration:line-through">e</code>

<code style="filter:hue-rotate(-60deg)">fun3</code> <code style="text-decoration:line-through">d</code>, <code style="text-decoration:none">e</code>, <code style="text-decoration:none">f</code>

<code style="filter:hue-rotate(-60deg)">fun1</code> <code style="text-decoration:none">b</code>, <code style="text-decoration:none">c</code>, <code style="text-decoration:none">d</code>

1.   (10 points) Assume that the following two dimensional array is declared:    
a : array [1 .. 4] of [0 .. 2] of integer;
The row index ranges from 1 to 4 and the column index ranges from 0 to 2
The array is stored at base memory address 1000
Each integer uses 4 bytes
(Note: The row index does not start from 0 as in C-based languages.)

for row index just do $\tt i -1$ then to account for row index not starting from $0$

-    - (a) Produce a general access function to determine the 
      address of the element a[i][j] under row major order

$\tt \large a[i][j]\ \texttt{for m }\times\ n \qquad=\qquad b +
[(i \cdot n + j) \cdot size]$

$\tt \large \phantom{a[i][j]\ \texttt{for m }\times\ n} \qquad=\qquad 1000 +
[(i \cdot 3 + j) \cdot 4]$

- 
    - (b) Produce a general access function to determine the 
     address of the element a[i][j] under column major order

$\tt \large a[i][j]\ \texttt{for m }\times\ n \qquad=\qquad b +
[(j \cdot m + i) \cdot size]$

$\tt \large \phantom{a[i][j]\ \texttt{for m }\times\ n} \qquad=\qquad 1000 +
[(j \cdot 4 + i) \cdot 4]$

4. (10 points) Do problem 13 on page 327

Let the function `fun` be defined as
```c
int fun(int* k) {
  *k +=4;
  return 3 * (*k) - 1;
}
```

Suppose `fun` is used in a program as follows;

```c
void main() {
  int i = 10, j = 10, sum1, sum2;
  sum1 = (i / 2) + fun(&i);
  sum3 = fun(&j) + (j / 2);
}
```

- What are the values of `sum1` and `sum2`
    - (a) operands in the expressions are evaluated left to right? 
$$
\begin{aligned}
\colorbox{orangered}{i=10}&\qquad \colorbox{brown}{j=10}\\
\tt sum1 &\tt= (i / 2) + fun(\&i)\\
&\tt= 5 + fun(\&i)\\
&\tt= 5 + (3 \cdot (10 + 4) - 1)\qquad \colorbox{orangered}{i=14}\\
&\tt= 5 + 41\\
&\tt= 46 \\[1em]
\tt sum2 &\tt= fun(\&j) + (j / 2) \\
&\tt= (3 \cdot (10 + 4) - 1)\ \colorbox{brown}{j=14} + (j / 2) \\
&\tt= 41 + 7 \\
&\tt= 48 \\
\end{aligned}
$$



-    - (b) operands in the expressions are evaluated right to left? 

$$
\begin{aligned}
\colorbox{orangered}{i=10}&\qquad \colorbox{brown}{j=10}\\
\tt sum1 &\tt= (i / 2) + fun(\&i)\\
 &\tt= (i / 2) + (3 \cdot (10 + 4) - 1)\ \colorbox{orangered}{i=14} \\
&\tt= 7 + 41\\
&\tt= 48 \\[1em]
\tt sum2 &\tt= fun(\&j) + (j / 2) \\
&\tt= fun(\&j) + 5 \\
&\tt= \ \colorbox{brown}{j=14}\ (3 \cdot (10 + 4) - 1) + 5\\
&\tt= 41 + 5 \\
&\tt= 46 \\
\end{aligned}
$$