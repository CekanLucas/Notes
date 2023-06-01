# Function Categories

## Polynomials

> $p(x)$ is a polynomial of degree $n$, $n=0,1,2,\cdots$ is a function of the form 
>
> $$p(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots +a_1x + a_0$$
>
> $dom(p) = \Bbb{R}$\
> $a_i$ = coefficients $a_n\ne 0$ = lead coefficient $a_0$ = constant term


If $a_i\in\Bbb{Z}$, we say $p(x)$ has integer coefficients and we write\
$\Bbb{Z}[x]=\Set{\text{ of all polynomial with integer coefficient }}$

Similarly we define $\Bbb{Q}[x], \Bbb{R}[x], \Bbb{C}[x]$ as the sets of all polynomials with rational, real, or complex coefficients respectively

> If $a_n=1$, we call $p(x)$ a **monic polynomial**


### The Fundamental Theorem of Algebra

> {bdg-info}`The Fundamental Theorem of Algebra`\
> A polynomial of degree n has exactly n complex zeroes, counting multiplicity 

$x_0$ is a zero of $p(x)$ iff $p(x_0)=0$ ie: a solution of the equation $p(x)=0$

---

The **multiplicity** of $x_0$ is the largest value of $k$ such that $p(x)=(x-x_0)^kq(x)$ where $q(x_0)\ne 0$

$(x-x_0)^k$ is called a linear factor of $p(x)$ of degree $k$

{bdg-secondary}`Fact` If $p(x)\in\Bbb{R}[x]$, $p$ has real numbers as coefficients, then $p(x)$ can be factored into a product of linear terms (possibly repeated) if irreducible quadratic terms (possibly repeated)

### Quadratic Formula

An **irreducible quadratic** has the form $ax^2+bx+c=0$ when $b^2-4ac<0$

{bdg-info}`Quadratic Formula ` if $ax^2+bx+c=0$ iff

$$x = \frac{-b\pm\sqrt{b^2-4ac}}{2a}$$

```{admonition} Example
:class: warning

Let $p(x)=(2x-1)^4(x+3)^2(x^2-4x+13)^2$\
$deg(p)= 4+2+4=10$\
**All the multiplicities of the zeros must add up to 10**

{bdg-danger}`Real Zeroes` 

$x=1/2$ multiplicity 4\
$x=-3$ multiplicity 2

{bdg-danger}`Complex Zeroes`

$$
x^2-4x+13&(x-2)^2-4+13\\
b^2-4ac=16-52<0&=(x-2)^2+9=0\\
iff\ (x-2)^2&=-9\\
x-2&=\pm\sqrt{-9}=\pm 3i\\
x&= 2\pm 3i\\
$$

$x=2+3i$ multiplicity 2\
$x=2-3i$ multiplicity 2
```

{bdg-secondary}`Recall` $r(x)=p(x)/q(x)$ where $p$, $q$ are polynomials is called a **rational function** $dom(r)=\Set{x\in\Bbb{R}\mid q(x)\ne 0}$

## Rational Functions 

### Basic Rational Functions

The simplest rational function is $f(x) = \frac{1}{x}$, $dom(\frac{1}{x})=\Set{x\in\Bbb{R}\mid x\ne 0}$

#### Features of Graph

1) Has vertical and horizontal asymptote

##### Horizontal Asymptotes

This a reflection of the fact that: 

$$\lim_{x\to 0^\pm}\frac{1}{x}=\pm\infty$$

That is, the closer to $x=0$ , $f(x)=\frac{1}{x}$ it becomes larger and larger *that is f becomes <u>unbounded</u>*

##### Vertical Asymptotes

This a reflection of the fact that: 

$$\lim_{x\to\infty^\pm}\frac{1}{x}=\pm\infty$$

That is, the higher the absolute value of $x$ is, the closer $\frac{1}{x}$ is to 0

### General Rational Functions

$$r(x)=\frac{p(x)}{g(x)}$$

3 types of asymptotes 
1) **Vertical Asymptotes** - occur at $x=a$ when $g(a)=0$
2) **Horizontal Asymptotes** - occur when $\lim_{x\to\pm\infty}$ is a finite number. This means, in particular $deg(p)\le deg(g)$ and if $\lim_{x\to\pm\infty}$, the horizontal asymptote us given by $y=a$
3) **Skew or Slant Asymptotes** - occurs when $deg(p)=deg(g) + 1$

### Inverse Rational Functions

Certain types of rational functions, called **linear fractional transformations**, have inverse functions

These L.F.T's are those rational functions of the form:

$$f(x)=\frac{ax+b}{cx+d}\ \ \text{ where a,b,c,d are real constants}$$

We can show that these functions are 1-1 on $dom(f)=\Set{x\in\Bbb{R}\mid x\ne\frac{-d}{c}}\ (c\ne 0)$ 

and we find thier inverse function $f^{-1}(x)$ in order to find $range(f)$ since:

$$
dom(f^{-1})&=\ range(f)\\ 
dom(f)&=\ range(f^{-1})\\ 
$$

```{admonition} Illustrate by example 
let below be a real function

$$f(x)=\frac{2x+1}{x-1}$$

1) find $dom(f)$

$$
dom(f)
&=\Set{x\in\Bbb{R}\mid x-1\ne 0}\\
&=\Set{x\in\Bbb{x}\mid x\ne 1}\\
&= \Bbb{R}\backslash\Set{1}\\
&=(-\infty,1)\cup (1,+\infty)\\
$$

2) Show that $f$ is 1-1 on it's domain

{bdg-success}`Solution` 

let $x_1,x_2\in dom(f)$ and suppose $f(x_1)=f(x_2)$ Then 

$$
\frac{2x_1+1}{x_1-1}&=\frac{2x_2+1}{x_2-1}\\
(2x_1+1)(x_2-1)&=(2x_2+1)(x_1-1)\\
2x_1x_2-2x_1+x_2-1&=2x_1x_2-2x_2+x_2-1\\
3x_2&=3x_1\\
x_2&=x_1\\
$$

**Therefore, by definition, f is 1-1 on its domain**

3) Find $f^{-1}(x)$ and hence find the range of $f$

{bdg-success}`Solution` To find $f^{-1}(x)$ , we write $x=f(y)$ and solve for $y$\
Then we will have $y=f^{-1}(x)$

$$
x &= \frac{2y+1}{y-1}\\
x(y-1) &= 2y + 1\\
xy-x &= 2y + 1\\
xy-2y &= x + 1\\
y(x-2) &= x + 1\\
y &= \frac{x + 1}{x-2} = f^{-1}(x)\\
$$

Thus $dom(f^{-1})=range(f)=\Set{x\in\Bbb{R}\mid x\ne 2}=\Bbb{R}\backslash\Set{2}$
```

```{note}
$$(f^{-1}\circ f)(x) = x$$
```

## Algebraic Functions

We all have seen the concept of *taking the square root* of a positive number

Formally, the square root is a <strong><u>fractional power</u></strong>\
We write $\sqrt{x}$ to mean $x^{\frac{1}{2}}$

### nth Root Function

Let $x\in\Bbb{R}$ We define, for $n=2,3,\cdots$\
$y=x^{\frac{1}{n}}$ iff $x=y^n$

Then $y=x^{\frac{1}{n}}$ is called the nth root function, $n=2,3,\cdots$

The first thing we must do is determine for what values of $x\in\Bbb{R}$ this formulation makes sense, ie what is $dom(x^{\frac{1}{n}})$

When $n$ is even, $n=2k$, then $y=x^{\frac{1}{n}}=x^{\frac{1}{2k}}$ iff\
$x=y^{2k}=(y^k)^2\ge 0,\ \forall y\in\Bbb{R}$

Thus $f(x)=x^{\frac{1}{n}}$ is defined only for $x\ge 0$ when n is even\
we don't have this restriction when $n$ is odd

thus,

$$
dom(x^{\frac{1}{n}})=
\begin{cases}
  &[0,+\infty)\text{ if n even, n>0}\\
  &\Bbb{R}\text{ if $n$ odd, $n$ > 0}
\end{cases}
$$

This situation is explained easily using the graphs of the functions $g(x)=x^n$ and notice that $f(x)=x^{\frac{1}{n}}$ is the **inverse function** of $g(x)$

```{note}
$g\circ f(x) = g(x^{\frac{1}{n}})=(x^{\frac{1}{n}})^n=x^1=x$\
$f\circ g(x) = f(x^n)=(x^n)^{\frac{1}{n}}=x^1=x$
```
The graph of $y=x^n$ for the two difference cases $n$ even and $n$ odd makes a difference in the graph shape, for even. 

> **With the graph just by applying horizontal line test we know right away that the function is 1-1**

We see that $x^n$, $n$ odd is invertible $\forall x\in\Bbb{R}$\
$x^n$, n even invertible on $[0,+\infty)$, or $(-\infty,0]$

Thus we also have

When $n$ is even $(x^n)^\frac{1}{n} = |x|,\ \forall x\in\Bbb{R}$ Why is this? Think when $\sqrt{x^2} = |x|$\
$(x^\frac{1}{n})^n = x,\ \forall x\in\Bbb{R}\ n\ odd$\
$\forall x\in[0,+\infty),n\ even$

> The general rule is stated that *you can't take even fractional roots of negative numbers* **in practice we restrict the domain**

#### Other Rational Powers of x

Let $r=\frac{p}{q}>0$ where $p$, $q$ are integers, no common divisors, $q\ne 0$

We define $y=x^r=(x^p)^{\frac{1}{q}}$ or $y=x^{\frac{p}{q}}$ iff $y^q=x^p$

In general, to avoid problems, we will require that $x\ge 0$, to take natural powers, $r>0$ ie $dom(x^r)=[0,+\infty)$

When $r<0$, we write $r-t, t>0$ and define $x^r=x^{-t}=\frac{1}{x^t}$

Now,

$$
dom(x^r)=
\begin{cases}
  &[0,+\infty),r>0\\
  &[0,+\infty),r<0\\
\end{cases}
$$

$r$ rational, $r\notin\Bbb{Z}$, with the exception noted before that 

$$
dom(x^{\frac{1}{n}})=
\begin{cases}
  &\Bbb{R},\text{ $n$ positive odd integer}
  &\Bbb{R}\backslash\Set{0},\text{n negative odd integer}
\end{cases}
$$

```{note}
$\Bbb{R}\backslash\Set{0}\equiv\Set{x\in\Bbb{R}\mid x\ne 0}$
```

Functions like $x^{\frac{1}{n}},x^r$ are special cases of a type of function called **algebraic**

An algebraic function is one that only has rational combinations of rational powers of polynomials

{bdg-secondary}`Example` Of a **Algebraic Function**

$$f(x)=\sqrt{\frac{x+1}{x+x^{\frac{3}{2}}}}$$

---

{bdg-info}`Formal definition`

> $y(x)$ is an albraic function iff $\exists$ polynomials $p_0(x),\cdots ,p_t(x)$ such that $y(x)$ satisfies the equation $t\in\Bbb{Z}^+$
>
> $$ p_t(x)y^t+p_{t-1}(x)y^{t-1}+\cdots +p_1(x)y+p_0(x) = 0$$

{bdg-secondary}`Example` Of a **Algebraic Function**
Just like previous example

$$
[f(x)]^2&=\frac{x+1}{x+x^{\frac{3}{2}}}\\
(x+x^{3/2})f^2 &= x+1\\
x^{3/2}f^2 &= (x+1)-xf^2\\
x^3f^4&=[(x+1)-xf^2]^2\\
&=(x+1)^2-2x(x+1)f^2+x^2f^4\\
(x^3-x^2)f^4 + 2x(x+1)f^2-(x+1)^2&=0\\
p_4 =&\ x^3-x^2,\\
p_3 =&\ 0,\\
p_2 =&\ 2x(x+1),\\
p_1 =&\ 0,\\
p_0 =&\ -(x+1)^2\\
$$

The functions defined on $\Bbb{R}$ that we have looked so far are all algebraic

We have $\Set{polynomials}\subseteq\Set{rational\ functions}\subseteq\Set{algebraic\ functions}$

All other types of functions defined on $\Bbb{R}$ or parts of it are called **transcendental functions** 

Examples of these types of functions are the trigonometric functions $(\sin x,\cos x,\tan x,\sec x, \csc x, \cot x)$ and their inverses {bdg-warning}`not discussed in this course`

**Exponential Functions** and their inverses ie **logarithms** and many more

The first function $n!$ can be considered to be the values of the transcendental function $\Gamma(x)$ **Gamma Function** when $x$ is an integer, and thus is essentially a transcendental function

In fact, $\Gamma(n+1) = n!$ {bdg-danger}`Don't need to know this`

$$\Gamma(z)=\int_0^{+\infty}t^{z-1}e^{-t}dt$$

### Exponential Functions and Logarithms 

Let $b\in\Bbb{R}, b>1$ For every **rational number** $x$ we can define $b^x$ as we have seen before 

The function $y=b^x$ is called the **exponential function** with base $b$ 

We can extent the definition of $b^x$ to al <u>real</u> values of x by a process called **definition by continuity**

We note some facts about real and rational numbers

Every irrational number can be approximated to <u>any</u> accuracy by a rational number

The formal way to say this is:
> Every irrational number is the limit of a sequence of rational numbers ordered

A sequence is a subset $\Set{a_1, a_2, \cdots,a_n,\cdots}={a_n}^\infty_{n=1}$ **order matters**\
If $a\in\Bbb{R}\backslash\Bbb{Q}=\Bbb{Q}^c=$ irrational numbers\
then $\exists\Set{{a_n}^\infty_{n=1}}\subseteq\Bbb{Q}$ such that $x=\lim_{n\to +\infty}a_n$

We then define $b^x=\lim_{n\to +\infty}(b^{a_n})$

In practical terms, to evaluate $b^x$, $x$ irrational take a rational number, r, <u>very close</u> to x and evaluate $b^r$ and say that effectively this is $b^x$. How close $r$ must be to $x$ depends on $b$ and the degree of accuracy required

Traditionally a commonly base was 10, ie $y=10^x$ Today, due to influence of computer science, $y=2^x$ is being used more and more

There is a special base, $e$ = **Euler's number** is in $y=e^x$ that arises from calculus

$$
e=\sum_{k=0}^{+\infty}\frac{1}{k!}&=1+ \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \cdots\\
&=1+1+\frac{1}{2}+ \frac{1}{6} + \frac{1}{24} + \cdots\\
&= 2.718281882845904523535360287471352662497757\cdots
$$

> $e$ is a irrational number
>> In fact $e$ is a special type of irrational number called **transcendental**

From graph we see exponential functions are 1-1 hence they have a inverse

#### Properties of Exponential Functions

$$
b^xb^y&=b^{x+y}\\
\frac{b^x}{b^y}&=b^{x-y}\\
(b^x)^y&=b^{xy}\\
b^{-x}&=\frac{1}{b^x}\\
b^0&=1\\
$$

## Logarithms

$$y = b^a \iff log_b(y) = a$$ 

````{admonition} Properties of Logarithms
:class: tip

1) $log_b(xy)= log_bx +log_by$
2) $log_b(x^n) = n\log_bx, \forall n \in \Bbb{R}$
  - In particular $\log_b(\frac{1}{x})=-\log_b(x)$
````

{bdg-secondary}`Proof 1`

$$
Let\ z &= log_b(xy), a=log_b(x), v+log_b(y)\\
Then\\
b^z&=xy\ and
b^u &= x\\
b^v&=y\\
so\ b^z&=xy=b^ub^v=b^{u+v}
$$

and since the exponential function is 1-1 

this tells us that $z=u+v$

ie,
$log_b(xy) = log_bx +log_by$

{bdg-secondary}`Proof 2`

$$
Let\ u &= log_b(\frac{1}{x}), v=log_b(x)\\
Then\ b^u&=\frac{1}{x}\ , b^v = x
b^\frac{1}{u} &= x\\
b^{-u}&=x\\
\therefore -u=v\ or\ u=-v\\
ie\ log_b(1/x)=-;pg_b(x)\\
$$

We now use the previous proof repeatedly to get the result $\forall n\in\Bbb{Z}$ then $\forall n\in\Bbb{Q}$ and then by *continuity* for $\forall n\in\Bbb{R}$

$$log_b(x^n) = n\log_bx$$

#### Change of Base

Let $log_a(x)=z$ then $x=a^z$ so that $log_b(x)=log_b(a^z)=z\log_b(a)$ or

$$log_a(x)=\frac{log_b(x)}{log_b(a)}$$

### Additional Proof 

Suppose $log_23=\frac{p}{q},(p,q)>0$\
$3=2^{\frac{p}{q}}$ or $3^q=2^p$\
This is impossible since $3^q$ is odd and $2^p$ is even 

Now 

$$\sqrt{2}^{\log_23}=(2^{\frac{1}{2}})^{log_23}=2^{\frac{1}{2}\log_23}=2{log_2\sqrt{3}}=\sqrt{3}$$

which is irrational 

Now $2log_23$ is also irrational and $(\sqrt{2})^{2log_23}=(\sqrt{2}^2)^{2log_23}=2^{log_23}=3$

Thus $(irrational)^{irrational}$ can be irrational or rational

> The number $(\sqrt{2})^{\sqrt{2}}$ is the square root of Hilbert's number $2^{\sqrt{2}}$ and the head part is to show $2^{\sqrt{2}}$ is irrational

## Floor and Ceiling Function

The functions are important in discrete mathematics because they take a continuous variable $x$ and turn it into a discrete integer variable

The functions *rounds down* to the nearest integer while the ceiling functions *rounds up* to the nearest integer

### Floor Function

$\lfloor x\rfloor$ Largest Integer less than or equal to $x$

This is called the **greatest integer function** or the **integer part of x** and is written $[x]$

### Ceiling Function

$\lceil x\rceil$ Smallest Integer greater than or equal to $x$

Because of how these look graphed, floor and ceiling functions are called **step functions**

## Growth of Functions 

Here we are concerned with the behavior of functions for very large values of the variable that is we consider 

$$\lim_{x\to +\infty}f(x)\ or\ \lim_{x\to -\infty}f(x)$$

To do this we need our functions to be defined in a **neighborhood of infinity**

If we consider the limit at $+\infty$, then the $dom(f)$ must contain an interval of the form $[a,+\infty)=\Set{x\in\Bbb{R}\mid x\ge a}$

If we are considering the limit at $-\infty$, then $dom(f)$ must contain an interval of the form $(-\infty,a]=\Set{x\in\Bbb{R}\mid x\le a}$

### Rates of growth

#### Big O notation

Here we are comparing the rate of growth at $\infty$ of two functions.
We will state all our results for functions defined in a neighborhood of $+\infty$, We can easily state similar results fir $-\infty$. We do this because in computer science one uses these result to analyze the complexity of algorithm  

Let $f(x)$ and $g(x)$ be defined in a neighborhood of $+\infty$. That is, for some

$$
a\in\Bbb{R}, [a,+\infty)\subseteq\ &dom(f)\\
[a,+\infty)\subseteq\ &dom(g)\\
or\\
[a,+\infty)\subseteq\ &dom(f)\cap dom(g)
$$

We say $f(x)\text{ is Big O }g(x)\ as\ x\to +\infty$ and write $f(x)=O(g(x))$ if\
$\exists\ real \ number\ (k,C), k\ge a, C>0$\
such stat $|f(x)|\le C|g(x)|,\forall x\ge k$\
We also say **f is dominated by g**

The numbers $k$,$C$ are called **witnesses** to $f(x)=O(g(x))$

```{note}
If one pair $(k,C)$ *witness* $f(x)=O(g(x))$ then $(k,C)$ are also witnesses for all $k_1>k$, $C_1>C$ 
```

{bdg-secondary}`Example` Let $f(x)=4x^3+2x^2,\ g(x)=x^3$ then $f(x)=O(g(x))$ or $f(x)=O(x^3)$

---

{bdg-danger}`Proof`

Since $dom(f) = dom(g) = \Bbb{R}$, each contains neighborhood of $+\infty$ 

Now, when $x\ge 1$, $4x^3+2x^2\le 4x^3 +2x^3 =6x^3$\
since for $x\ge 1,\ x^2\ \le x^3$\
Thus for $x\ge 1$, 

$$|f(x)|=4x^3+2x^2\le 6|g(x)| = 6x^3 + f(x)= O(x^3)$$

here the witnesses are $(k, C) = (1,6)$

```{note}

for $x\ge 1,\ g(x)=O(f(x))$ since $x^3\le 4x^3+2x^2$

> In this case $f=O(g) + g=O(f)$
>> If this is so, we say that $f+g$ have the same order of growth

---

Note also, for $x\le 1$, $f(x) = 4x^3+2x^2\le 6x^3\le 6x^4$\
so\
$f(x)=O(x^4)$ also

This raises the general question of what is the best big O estimate for a function
```

{bdg-info}`Definition`

A function $f(x)$ defined on a neighborhood of infinity is called **bounded at infinity** if $f(x)\le C, \forall x\ge k$

We write $f(x) = O(1)\ as\ x\to +\infty$

Example:

$$
\sin x=O(1)\ as\ x\to +\infty
$$

Big O is useful in evaluating limits at infinity when $g(x)\to 0$ as $x\to +\infty$ since if $f(x)=O(g)$ we have $|f(x)|\le C|g(x)|\to 0\ as\ x\to +\infty$ so $f(x)\to 0$ as $x \to +\infty$, as well

````{admonition} Theorem 
Let $f(x)$ be a polynomial of degree $k$\
Then $f(x)=O(x^k)\ as\ c\to +\infty$

---

{bdg-danger}`Proof`

Let $f(x)=a_kx^k+a_{k-1}x^{k-1}+\cdots + a_1x + a_0,\ where\ a_k\ne 0$

Then for $x\ge 1$, $|x|^l\le |x|^k,\ for\ l=0,1,\cdots ,k-1$ also $|x|^l=|x|^k,\forall x,\forall l$
````

The **triangle inequality for absolute values** says 

$$|a+b|\le |a|+|b|,\ \forall a, b\in\Bbb{R}$$

This is easily generalized to any finite sum of numbers:

$$|b_1+\cdots +b_n|\le |b_1|+\cdots +|b_n|$$

Now for $x\ge 1$,

$$
|f(x)| &= | a_k x^k + \cdots + a_0 |\\
&\le | a_k | | x^k| + \cdots + | a_1 | | x| + |a_0|\\
&= (|a_k| + \cdots + |a_0|) |x^k| =C|x^k|
$$

Thus, $f(x)=O(x^k)$ as $x\to +\infty$ whenever $f$ a polynomial of degree $k$

```{admonition}

{bdg-primary}`Corollary`

{bdg-danger}`Proof`

If $f(x)$ is a polynomial of degree $k$, then $f(x)=0(x^l),\forall l/ge 1$ and the result follows immediately from above inequality for $|f(x)|, x\ge 1$
```

We return to the question of big O estimate 

First consider what it means for $f(x)$ to be not $O(g(x))$

To do this we formally negate the definition of $f(x)=O(g(x))$ as $x\to +\infty$

$$
\neg (\exists k, \exists C > 0\ \ \ x\ge k\to |f(x)|\le C|g(x))\\
\equiv\forall k, \forall C > 0, |f(x_0)|>C|g(x)|\ for\ some\ x_0\ge k
$$

{bdg-secondary}`Example` Let $f(x)=x^2\ ,\ g(x)=x$

Let $c>0$ be arbitrary, then\
$|f(x)|= |x|^2>C|x|$ whenever $|x|>C$, ie, $x>C$\
take karb{bdg-danger}`what`, $x_0 = max(C + 1, k)$

Thus $|f(x_0)| > C | g(x_0) |$ for this $x_0$\
So, $x^2$ is not $O(x)$

```{admonition} Theorem 

Let $f(x)=O(g(x))$ as $x\to +\infty$\
and let $g(x)=O(h(x))$ as $x\to +\infty$\
then $f(x)$ is $O(h(x))$ as $x\to +\infty$\

---
{bdg-secondary}`Proof by Definition`

By Definition\
$\exists C_1 > 0 , k_1\text{ such that } |f(x)|\le C_1|g(x)|, \forall x\gt k_1$\
$\exists C_2 > 0 , k_2\text{ such that } |g(x)|\le C_2|h(x)|, \forall x\gt k_2$

thus,\
$|f(x)\le c_1|g(x)|\le c_1c_2|h(x), \forall x \ge max(k_1, k_2)$

If $f$, $g$, $h$ are as in theorem, and suppose $h(x)$ is not $O(g(x))$, then we say that $g(x)$ provides a better O estimate of $f(x)$ than $h(x)$ does

If $f(x)=O(g(x))\ and\ h(x)\ is\ not\ O(g(x)) \forall h(x)\ such\ that\ f(x)=O(h(x))$

then we call $f(x)=O(g(x))\ as\ x\to +\infty$

The **best O-estimate** of $f(x)$ as $x\to +\infty$ 

> The **best O-estimate** is an awkward concept to deal with and even stull only gives upper bounds for growth

```{warning}
There are other estimates that we will look at later
```

```{note}
We could have easily stated these results in the special case of an integer variable
```

{bdg-secondary}`Example 1` let $f(n) = n!$

then $n! = 1\cdot 2 \cdot 3 \cdots n \le n \cdot n \cdots n = n^n$\
thus $n! = O(n^n)$ as $n\to +\infty$

{bdg-secondary}`Example 2` Let $f_b(n) = log_bn, b> 1$

Now it is easily shown that $n<2^n, \forall n\ge 1$

$log_2(n) < lof_2(2^n) = n$

and, using *change of base formula for logarithms*

$$log_bn = \frac{log_2n}{log_2b}<\frac{1}{log_2k}\cdot n$$

so $log_b(n) = O(n)$ as $n\to +\infty$ for any base $b>1$

----

{bdg-primary}`Theorem 3` Let $f_1(x)=O(g_1(x)), f_2(x)=O(g_2(x))$ as $x\to +\infty$

Then\

---

a) $f_1(x) + f_2(x) = O(max(|g_1(x)|, |g_2(x)|))$ as $x\to +\infty$

---

{bdg-secondary}`Proof`

$$
|f_1(x) + f_2(x)| &\subseteq |f_1(x)| + |f_2(x)|\\
&\subseteq C_1|g_1(x)| + C_2|g_2(x)|\\
&\subseteq (C_1 + C_2)\ \max(|g_1(x)|,|g_2(x)|)\ \forall x\ \ge \max(k_1,k_2)
$$

---

b) $f_1(x) \cdot f_2(x) = O(g_1(x)\cdot g_2(x))$ as $x\to +\infty$

---

{bdg-secondary}`Proof`

$$
|f_1(x)f_2(x)| &= |f_1(x)| \cdot |f_2(x)|\\
&\le C_1|g_1(x)| \cdot C_2|g_2(x)|\\
&\subseteq (C_1C_2)|g_1(x)\cdot g_2(x)|\\
\\
\forall x \ge \max (k_1, k_2)
$$

---

{bdg-success}`Corollary` Let $f_1(x)=O(g_(x)) + f_2(x)=O(g(x))$ as $x\to +\infty$

Then,\
a) $f_1(x) +f_2(x) = O(g(x))$ as $x\to +\infty$
b) $f_1(x)\cdot f_2(x) = O(g^2(x))$ as $x\to +\infty$

{bdg-secondary}`Example` Let $f(n) = 3n \ln(n!) + (n^2 + 3)\ln n$

We have $\ln (n!) \le \ln(n^n) = n\ln n$ so $\ln (n!) = O(n\ln n)$

and so $3n\ln (n!) = O(n^2\ln n)$ by theorem 3

also  $n^2 + 3 = O(n^2)$ by theorem 1 so\
$(n^2 + 3)\ln n = O(n^2\ln n)$

$\therefore f(n) = O(n^2\ln n)$ as $n\to +\infty$

{bdg-secondary}`Exercise` find a O-estimate for $f(x)=(x+1)\ln(x_2+1) + 3x^2$\
{bdg-success}`Hint` $0<x\ln x\le x^2$ for $x>1$

> The O-estimate of a function gives an upper bound for the growth of f(x) as $x\to +\infty$ (or as $x\to -\infty$)
>
> The $\Omega$-estimate gives a lower bound for the growth of a function

```{admonition} Definition
:class: note

We say $f(x)=\Omega(g(x))$ as $x\to +\infty$ iff\
$\exists C>0, \exists k$ such that $||f(x)\ge C|g(x)|, \forall x\ge k$

If $f(x) = O g(x)$ and $f(x)=\Omega(g(x))$ as $x\to +\infty$ then we say that $f$ and $g$ have the same **order of growth** as $x\to +\infty$ or $f(x)$ is of order $g(x)$ as $x\to +\infty$ and we write

$$f(x) = \Theta(g(x))$$ as $x\to +\infty$

$f(x)=\Theta(g(x))\ iff\ f=O(g(x))\ and\ g=O(f(x))$

{bdg-secondary}`Example` $f(x)^2 + 8x \ln x$

For $x\ge 1$, we can establish the inequalities

$$0 \le 3x^2 \le 3x^2 + 8x\ln x \le 3x^2 + 8x^2 = 11x^2$$

Thus $f(x) = O(x^2)$ as $x\to +\infty$
and $f(x)=\Omega(x^2)$ as $x\to +\infty$
Thus $f(x)=\Theta(x^2)$ as $x\to +\infty$

---

To show that $\ln x < x , x \ge 1$ consider that

$$\frac{z}{1+z}< \ln(1_z) < z\ \ for\ z>0 $$
```

```{admonition} Theorem 4
:class: Note

Let $f(x)$ be a polynomial of degree $k$ then $f(x)=\Theta(x^k)$ as $x\to +\infty$

{bdg-danger}`Proof` 

Theorem 1 tells us that ---

Thus we must show that $\exists k, C>0$ such that $|f(x)|\ge C|x|^k\ \forall x\ge k$

Let $f(x) = a_kx^k+\cdots +a_1x+a_0,\ a_l\ne 0$

$$Let\ k>\ \max(1, \frac{2km}{|a_k|})\ where\ m= \max_{i=0,\cdots ,k-1}|a_i|$$

If $x\ge k$, we have

$$|f(x)|=|a_kx^k+\cdots +a_1x+a_0|\\=\\|x|^k|a_k+\frac{a_k-1}{x}+\frac{a_k-2}{x^2}+\cdots\frac{a_1}{x^k-1}+\frac{a_0}{x^k}|$$

Now 

$$
|\frac{a_{k-i}}{x^2}|&\le|\frac{a_{k-1}}{x}|\ since\ x\ge 1\\
&\le |\frac{a_{k-i}}{k}|\ since\ x\ge k\\
&\le |\frac{a_{k-i}}{(\frac{2km}{ |a_k| })}| = |\frac{a_{k-1}}{m}| \cdot \frac{|a_k|}{2k} \color{yellow}{\frac{|a_k|}{2k}\le 1\ by\ definition}\\
&\le \frac{|a_k|}{2k}
$$

thus 

$$
\frac{-|a_k|}{2k} \le \frac{a_{k-i}}{x^i} \le \frac{|a_k|}{2k}\\
\text{ and thus } | \frac{-|a_k|}{2}\le \frac{a_{k-1}}{x}+\cdots +\frac{a_0}{x^k}|\ge\frac{|a_k|}{2}\\
\text{ this tells us that } |a_k + \frac{a_{k-1}}{x}+\cdots +\frac{a_0}{x^k}|\ge\frac{|a_k|}{2}\\
\text{ Thus } |f(x)| = |x|^k | a_k + \frac{a_{k-1}}{x}+\cdots +\frac{a_0}{x^k}|\ge\frac{|a_k|}{2}|x|^k\\
\\
=> f(x) = \Omega (x^k)\text{ as }x\to +\infty\\
\therefore f(x) = \Theta (x^k)\text{ as }x\to +\infty\text{ whenever $f(x)$ is a polynomial of degree $k$}

$$