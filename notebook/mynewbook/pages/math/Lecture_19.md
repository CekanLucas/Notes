# Recurrence Relations
> Recurrence Relations ( a brief intro)

Let $\left\{a_{n}\right\}_{n=0}^{+\infty}$ be a sequence of numbers, real or complex

A **recurrence relation** is a rule, or function, that defines the general term $a_{n}$ in terms of one ore more of the preceding terms, $a_{0}, a_{1}, \ldots, a_{n-1}$

That is, $a_{n}=f\left(a_{0}, a_{1}, \cdots, a_{n-1}\right), \forall n=1,2, \cdots$

A **solution** of a recurrence relation is a sequence $\left\{a_{n}\right\}_{n=0}^{+\infty}$ whose terms satisfy the recurrence relation

Recurrence relations can have more than one solution. To ensure that a recurrence relation has exactly one solution, we can specify initial conditions for our solution

These are just specific values for some terms $a_{0}, a_{1}, \ldots, a_{n_{0}}$ of a solution.

We will look at a number of examples to clarify these concepts

**Example 1** The number of bacteria in a colony doubles every hour. If we initially have 5 bacteria to begin with, how many are there after 5 hours? after $n$ hrs?

We start with 5 , so after

Time (hours) | Number of Bacteria
:---: | :---:
0|5
1|10
2|20
3|40
4|80
5|160

Now if we let $a_{n}=$ number of bacteria after $n$ hours, we have the **recurrence relation**

(i) $a_{n}=2 a_{n-1}\qquad, \qquad n=1,2,3 \cdots$

with the **initial condition**

(ii) $a_{0}=5$

Equations (i) a (ii) together form an *"initial value recurrence relation"* with a *unique solution* $\left\{a_{n}\right\}_{x=0}^{+\infty}$ with $a_{0}=5$.

Thus after $n$ hours we have $a_{n}$ bacteria where

$$
\begin{array}{l}
a_{n}=2 a_{n-1} \\
a_{0}=5
\end{array}
$$

**Example 2** Classical Example due to *Leonardo di Pisa aka Fibonacci* 13th  century AD book *"Liber Abaci"* Italian for counting numbers  where does the word *abbacus* comes from 

A young pair of rabbits, I male, I female, are put on an island. A pair of rabbit can't breed until they are 2 months old. after they are 2 months old, each pain produces another pair each month. assuming no deaths "find the number of rabbits after the $n$ month" (ie find a recurrence relation for these numbers)

To analyze the situation consider the following chart:

$\begin{array}{cccc}\text { Month } & \text { Reproducing } & \begin{array}{c}\text { Young } \\ \text { Pairs }\end{array} & \begin{array}{c}\text { Total } \\ \text { Pairs }\end{array} \\ 1 & 0 & 1 & 1 \\ 2 & 0 & 1 & 1 \\ 3 & 1 & 1 & 2 \\ 4 & 1 & 2 & 3 \\ 5 & 2 & 3 & 5 \\ 6 & 3 & 5 & 8\end{array}$

Let $f_{n}=$ number pairs of rabbits after $n$ months. We have $f_{1}=f_{2}=1$ since there is no breeding going on. That is each new pair comes from a pair at least 2 months old

To determine the recurrence relation we employ backwards reasoning.

Let $n \geqslant 3$.

If the number of pairs in the $n$<sup>th</sup> month is $f_{n}$, it is equal to the number of pairs in month $n-1, f_{n-1}$, plus the number of new born pairs. The number of new born pairs is equal to the number of pairs at least 2 months old, ie $f_{n-2}$,

$\begin{aligned} \text { Thus } \quad f_{n} & =f_{n-1}+f_{n-2}, \quad n=3,4, \cdots \\ \text { and } \quad f_{1} & =1 \\
f_{2} & =1
\end{aligned}$

$$
$$

The recurrence relation with initial conditions (2) has a unique solution called\ 
The <u>Fibonacci numbers (Fibonacci' Sequence)</u>

$$
\begin{aligned}
f^{f} & =\{1,1 , 2 , 3,5,8,13,21,34,55,89,144, \cdots\} \\
& =\left\{f_{n}\right\}_{n=1}^\infty
\end{aligned}
$$

**Example 3** (Related)

A flight of stairs has $n$ steps that one can climb one step at a time or two steps at a time. How many ways can one climb the stairs?

Let $t_{n}=$ number of ways to get to the $n^{\text {th }}$ step Our last step is either 1 step or 2 steps

Thus $t_{n}=t_{n-1}+t_{n-2}$

Now

$$
\begin{aligned}
& t_{1}=1 \\
& t_{2}=2
\end{aligned}
$$


![](https://cdn.mathpix.com/cropped/2023_06_13_ca0c710297620b1e9a0bg-05.jpg?height=325&width=495&top_left_y=1051&top_left_x=1241)
And $t_{n}$ satisfies

$$
\left.\begin{array}{l}
t_{n}=t_{n-1}+t_{n-2} \\
t_{1}=1 \\
t_{2}=2
\end{array}\right\}
$$

![](https://cdn.mathpix.com/cropped/2023_06_13_ca0c710297620b1e9a0bg-05.jpg?height=263&width=406&top_left_y=1357&top_left_x=1383)

and

$$
J=\{1,2,3,5,8,13, \cdots\}
$$

Clearly $t_{x}=f_{x+1}$ from example 2

**Exercise** Let $a_{n}=$ number of bit strings of length $n$ that <u>do not</u> have 2 consecutive zeros

Show $a_{1}=2, a_{2}=3$ and that $a_{n}=f_{n+2}=n+2^{n d}$ Fibonacci number

**Example 3** Suppose we have a computer system that considers a string of decimal digits a valid codeword if it has an even number of 0 digits. Fore example

$$
\begin{aligned}
& 120430900 \text { valid } \\
& 120430901 \text { invalid }
\end{aligned}
$$

Let $a_{n}=$ number of valid $n$ digit codewords\
Find a recurrence relation for $a_{n}$.

Fist note $a_{1}=9$, since 0 is the only invalid I digit string.

How do we get a valid $n$-digit string from a string $n-1$ digit long.

2 ways: 
i) append $1-9$ onto a valid $x-1$ digit string in $9 a_{n-1}$ ways
ii) append 0 to an invalid $x-1$ digit sting

Now there are $10^{n-1}\qquad n-1$ digit strings of which $a_{n-1}$ are valid,\
so there are $10^{n-1}-a_{n-1}$ invalid $n-1$ digit strings

Thus

$$
\begin{aligned}
a_{n} & =9\cdot a_{n-1}+\left(10^{n-1}-a_{n-1}\right), \\
\text { That is }\qquad a_{n} & =8\cdot a_{n-1}+10^{n-1}, \\
a_{1} & =9
\end{aligned}
$$

The Recurrence Relation (1) - (4) give us information on how to calculate the general term $a_{n}$, using terms that came before, starting from our initial conditions

It can be impractical to calculate $a_{n}$ from the recurrence relation, and we cant really investigate the long term behavior (as $n \rightarrow+\infty$ ).

If we can find a formula $a_{n}=f(n)$ for the general term we call it a *closed form* of the solution

Let us reconsider (1)

$$
\begin{aligned}
& a_{n}=2 a_{n-1} \\
& a_{0}=5
\end{aligned}
$$

We have

$$
\begin{aligned}
& a_{1}=2 \cdot 5 \\
& a_{2}=2 \cdot a_{1}=2 \cdot 2 \cdot 5=2^{2} \cdot 5 \\
& a_{3}=2 a_{2}=2 \cdot 2^{2} \cdot 5=2^{3} \cdot 5 \\
& \vdots \\
& a_{n}=2 \cdot a_{n-1}=2 \cdot 2^{n-1} \cdot 5=2^{n} \cdot 5\\
& \vdots \quad \text{by induction}\\
\end{aligned}
$$

Thus
$$
a_{n}=f(n)=2^{n} \cdot 5 \text { is a closed form solution of (1)}
$$

This method of finding a closed form solution (assuming it exists) of a recurrence relation is called **iteration**. It in not in general of much use.

It would be nice to be able to "write down" the closed solution of a recurrence relation. This is not possible for all recurrence relations but there is a special type we can solve in this manner, and actually say a lot about the possible solutions

**Definition** A linear homogeneous recurrence relation of degree $k$ with constant coefficients is one of the form

<div id="eq5"></div> 

**(5)** $a_{n}=c_{1} a_{n-1}+c_{2} a_{n-2}+\cdots+c_{k} a_{n-k},\quad n \geqslant k$\
where $c_{1}, c_{2}, \cdots, c_{k}$ are constants and $c_{k} \neq 0$,

**<u>linear:</u>** the R.H.S. of [5](#eq5) is a linear combination of $a_{n-1}, \cdots, a_{n-k}$

**<u>homogeneous:</u>** no terms that are not multiples of $a_{n-1}, \cdots, a_{n-k}$ *so no n powers*

**<u>constant coefficients:</u>** coefficients of $a_{n-1}, \cdots, q_{n-k}$ don't depend on $n$

**<u>degree k:</u>** $a_{n}$ depends on the previous $k$ terms $a_{n-1}, \cdots, a_{n-k}$

Of our examples so far

1) linear homogeneous, degree 1, const coefficients
2) linear homogeneous, degree 2, const coefficients
3) linear homogeneous, degree 2, const coefficients
4) linear non-homogeneous, degree 1, const coefficients

An example of a non-linear recurrence relation would be

$$
a_{n}=a_{n-1}+a_{n-2}^{2},
$$

and $a_{n}=n a_{n-1}+4 a_{n-2}$ is homogenous\
*linear without constant coefficients*

The study of **linear recurrence relations** relies heavily on the techniques of *linear algebra*

As this is a brief intro, we wont explore the theory in great detail but instead consider some basic results

The key to our development of closed solutions lies in our reconsideration of **example (1)**

There we found $a_{n}=a_{0} \cdot 2^{n}$ and so let us look for solutions of [5](#eq5) of the form

$$
a_{n}=a \cdot r^{n}
$$

If we substitute this in [5](#eq5) we get

$$
a r^{n}=c_{1} a r^{n-1}+c_{2} a r^{n-2}+\cdots+c_{k} a \cdot r^{n-k}
$$

Now divide by ${ar}^{n-k}$ and rearrange to get

$$
p(r)=r^{k}-c_{1} r^{k-1}-c_{2} r^{k-2}-\cdots-c_{k-1} r-c_{k}=0
$$

**Note** $p(r)=r^{k}-c_{1} r^{k-1}-\cdots-c_{k}$ is called the **characteristic polynomial** of the linear, homogenous, recurrence relation with constant coefficients\
$a_{n}=c_{1} a_{n-1}+\cdots+c_{k} a_{n-k}, c_{k} \neq 0$ and $a_{n}=a \cdot r^{n}$ is a solution of [5](#eq5) iff $P(r)=0$

**Facts** 
1) The zeros of $p(r)$ determine all the solutions of [5](#eq5)
2) A recurrence relation of degree $k$ has $k$-degrees of freedom\
This means that there will be $k$ arbitrary constants in a <u>general solution</u> of [5](#eq5)
3) For every initial condition we impose on a solution, we eliminate a degree of freedom/
$\therefore$ 1 initial conditions $\Rightarrow$ unique solution

(as we have seen in our examples)

<div id="superposition">(4)</div>

## The Principle of Superposition

Any linear combination of solutions of [5](#eq5) is again a solution of [5](#eq5)

That is, if $\left\{a_{n}^{1}\right\},\left\{a_{n}^{2}\right\}, \cdots,\left\{a_{n}^{2}\right\}$ are solutions of [5](#eq5) then so is

$\left\{a_{1} a_{n}^{1}+a_{2} a_{n}^{2}+\cdots+a_{1} a_{n}^{l}\right\}$,\
This is because [5](#eq5) is a **linear homogeneous recurrence relation**

---
<a id="eq7"><!-- (7) --></a> 
We now turn our attention to **2nd order homogenous linear recurrence relations with constant coefficients** because they are completely solvable, *(Proofs omitted)*

Let us suppose, $c_{1}, c_{2} \in \mathbb{R}$ are given constants,

$$
a_{n}=c_{1} a_{n-1}+c_{2} a_{n-2}
$$

The characteristic polynomial equation for [above](#eq7) is

See  $ p(r)=r^{2}-c_{1} r-c_{2}=0 $

The equation $p(r)=0$ has either

1) $2$ real distinct solutions $r_{1}, r_{2}$
2) $1$ real solution, $r_{1}$ *"zero of order 2 "!*
3) $2$ complex conjugate solutions,\
$r_{1}=a+i b\\
r_{2}=a-i b\\
i^{2}=-1 $

**Case 1** $p(r)=0$ has 2 real roots $r_{1}, r_{2}$

Then <u>every</u> solution of [7](#eq7) is of the form $a_{n}=a_{1} r_{1}^{n}+a_{2} r_{2}^{n}$ where $a_{1}, a_{2}$ are arbitrary real numbers. If we set 1 initial condition we will be able to write $a_{2}$ in terms of $a_{1}$. If we set 2 initial conditions we will determine $a_{1}, a_{2}$ uniquely

**Example** Let $a_{n}=a_{n-1}+2 a_{n-2},\qquad n \geqslant 2$ (9)

The characteristic equation for (9) is $r^2 - r -2=(r+1)(r-1)=0$ \
*Thus* $r_{1}=-1, r_{2}=2$ and every solution of (9) has the form

$$
a_{n}=a_{1}(-1)^{n}+a_{2} 2^{n},\qquad n \geqslant 0 \quad\text{(10)}
$$

If we now impose the condition $a_{0}=1$, we substitute $n=0$ in <b>(10)</b> to get

$$
1=a_{1}+a_{2} \textit{ or } a_{2}=1-a_{1}
$$

and then

$$
a_{n}=a_{1}(-1)^{n}+\left(1-a_{1}\right) 2^{n} \quad\text{(11)}
$$

If we now insist that $a_{1}=-2$, we substitute $n=1$ in <b>(11)</b> to get

$$
-2=a_{1}(-1)^{1}+\left(1-a_{1}\right) 2^{1}=2-3 a_{1}
$$

and $3 a_{1}=4 \Rightarrow a_{1}=\frac{4}{3} \cdot \left(1-\frac{4}{3}=-\frac{1}{3}\right)$

Thus $a_{n}=\frac{4}{3}(-1)^{n}-\frac{1}{3} 2^{n}$ is the unique solution of the **Initial Value** recurrence relation (13)

$$
\begin{array}{l}
a_{n}=a_{n-1}+2 a_{n-2},\quad n=2,3, \cdots \\
a_{0}=\ 1 \\
a_{1}=-2
\end{array}
$$

---
**Case 2**$\quad p(r)=0$ has one real root $r_{1}$

Then every solution of [7](#eq7) is of the form

$$
a_{n}=\left(a_{1}+a_{2} n\right) r_{1}^{n} \text {, where }
$$

$a_{1}, a_{2}$ are arbitrary real numbers. The same comments on initial conditions still hold. *(For case 3 as well)*

---
**Example** Consider the recurrence relation

$$
\begin{aligned}
& a_{n}=a_{n-1}+a_{n-2} \\
& p(r)=r^{2}-r-1=0 \\
& \therefore \quad r=\frac{1 \pm \sqrt{(-1)^{2}-4(1)(-1)}}{2}=\frac{1 \pm \sqrt{5}}{2} \\[2em]
& \therefore \quad a_{n}=a_{1}\left(\frac{1+\sqrt{5}}{2}\right)^{n}+a_{2}\left(\frac{1-\sqrt{5}}{2}\right)^{n}
\end{aligned}
$$

Let $\varphi=\frac{1+\sqrt{5}}{2},-\frac{1}{\varphi}=\frac{1-\sqrt{5}}{2}$ and $a_{n}=a_{1} \varphi^{n}+a_{2}\left(\frac{-1}{\varphi}\right)^{n}$

---
**Exercises**

1) If $a_{0}=a_{1}=1$, find $a_{1}, a_{2}$.
2) What is $\varphi=\frac{1+\sqrt{5}}{2}$ called?
---

**Example** Let $a_{n}=a_{n-1}-\frac{1}{4} a_{n-2}$

The characteristic equation is $r^{2}-r+\frac{1}{4}=0$ That is,

$\left(r-\frac{1}{2}\right)^{2}=0$, so $r_{1}=\frac{1}{2}$ is the sole real solution.

Thus every solution of equation is of the from

$$
a_{n}=\left(a_{1}+a_{2} n\right)\left(\frac{1}{2}\right)^{n}
$$

If we now require $a_{0}=2, a_{1}=6$, we have, by above,

$$
\begin{aligned}
& n=0: 2=a_{1}: \\
& n=1: \quad 6=\left(a_{1}+a_{2}\right) \frac{1}{2}
\end{aligned}
$$

*Thus* $12=2+a_{2}, a_{2}=10$.

Thus the solution to

$$
\begin{aligned}
& a_{n}=a_{n-1}-\frac{1}{4} a_{n-2},\quad n \geqslant 2 \\
& a_{0}=2 \\
& a_{1}=6
\end{aligned}
$$

$$
\textrm{is }\qquad a_{n}=(2+10 n)\left(\frac{1}{2}\right)^{n}=\frac{(1+5 n)}{2^{n-1}}
$$

---
**Example** What is $a_{10}$ ?

![](https://cdn.mathpix.com/cropped/2023_06_13_ca0c710297620b1e9a0bg-17.jpg?height=200&width=1510&top_left_y=210&top_left_x=278)

**Case 3** $p(r)$ has 2 complex conjugates roots:

$$
r_1=a+ib\\
r_{2}=a-i b
$$

Then every solution of [7](#eq7) is of the form

$$
a_{n}=R^{n}\left(a_{1} \cos n \theta+a_{2} \sin n \theta\right)
$$

where $R=\sqrt{a^{2}+b^{2}}$, and $\theta$ is the unique angle, $0 \leq \theta<2 \pi$ such that

$$
\cos \theta=\frac{a}{R}, \sin \theta=\frac{b}{R} .
$$

---
**Note** This case is not covered in the text\
($\S$ $8.1$ and $8.2$ on recurrence relations - read these sections and examples for the other cases)

---
**Limits of Ratios** of solutions to recurrence relations have importance in other topics in math

Suppose $\left\{a_{n}\right\}$ is a solution of the recurrence relation

(7) $a_{n}=c_{1} a_{n-1}+c_{2} a_{n-2},\quad n \geqslant 2$

Suppose $\displaystyle\lim _{n \rightarrow+\infty}\left(\frac{a_{n}}{a_{n-1}}\right)=L\neq 0$ is a finite number.

Then if we divide (7) by $a_{n-1}$ we get

$$
\begin{aligned}
\frac{a_{n}}{a_{n-1}} & =c_{1}+c_{2} \frac{a_{n-2}}{a_{n-1}} \\
& =c_{1}+\frac{c_{2}}{\left[\frac{a_{n-1}}{a_{n-2}}\right]}
\end{aligned}
$$

Now let $n \rightarrow+\infty$ to get

$$
\begin{aligned}
& L=c_{1}+\frac{C_{2}}{L}, or \\
& L^{2}=c_{1} L+c_{2}
\end{aligned}
$$

ie, $L^{2}-c_{1} L-c_{2}=0$ Thus $p(L)=0$, where $p(r)$ is the
characteristic polynomial for (7)

Thus $\displaystyle\lim _{n \rightarrow \infty} \frac{a_{n}}{a_{n-1}}=r_{11}$ or $r_{2}$.

Which one will depend on the initial conditions. (18)

---
**Example** Solve $a_{n}=2 a_{n-1}+8 a_{n-2}$

$$
a_{0}=5, \quad a_{1}=2
$$

**Solution** The characteristic equation is

$$
\begin{aligned}
 r^{2}-2 r-8&=0 \\
 (r+2)(r-4)&=0 \\
\therefore \ r&=-2,4
\end{aligned}
$$

Thus $a_{n}=a_{1}(-2)^{n}+a_{2} 4^{n}$

$$
\begin{array}{ll}
 \underline{n=0} & a_{0}=5=x_{1}+x_{2} \\
&a_{1}=2=-2 a_{1}+4 a_{2}
\end{array}
$$

In matrix form $\left[\begin{array}{cc}1 & 1 \\ -2 & 4\end{array}\right]\left[\begin{array}{l}a_{1} \\ a_{2}\end{array}\right]=\left[\begin{array}{l}5 \\ 2\end{array}\right]$

$$
\begin{aligned}
\therefore\left[\begin{array}{l}
a_{1} \\
x_{2}
\end{array}\right] & =\left[\begin{array}{cc}
1 & 1 \\
-.2 & 4
\end{array}\right]^{-1}\left[\begin{array}{l}
5 \\
2
\end{array}\right]=\frac{1}{6}\left[\begin{array}{cc}
4 & -1 \\
2 & 1
\end{array}\right]\left[\begin{array}{l}
5 \\
2
\end{array}\right] \\
& =\frac{1}{6}\left[\begin{array}{c}
18 \\
12
\end{array}\right]=\left[\begin{array}{l}
3 \\
2
\end{array}\right] \\
\therefore \quad a_{n} & =3(-2)^{n}+2 \cdot 4^{n} \\
\text { ie } a_{n} & =3(-2)^{n}+2^{2 n+1}
\end{aligned}
$$

---
**Example** Solve $a_{n}=\frac{5}{2} a_{n-1}-a_{n-2}$ for $ a_{0}=1, a_{1}=0 $

**Solution** Characteristic, equation

$$
\begin{aligned}
& r^{2}-\frac{5}{2} r-1=0 \\
ie\qquad& 2 r^{2}-5 r-2=0
\end{aligned}
$$

$$
\begin{gathered}
a=2, \quad b=-5, \quad c=-2 \\[1em]
r=\frac{5 \pm \sqrt{25+16}}{4}=\frac{5 \pm \sqrt{41}}{4} \\[1em]
\therefore \quad a_{n}=a_{1}\left(\frac{5+\sqrt{41}}{4}\right)^{n}+a_{2}\left(\frac{5-\sqrt{41}}{4}\right)^{n} \\
a_{0}=1=a_{1}+a_{2} \\
a_{1}=0=a_{1}\left(\frac{5+\sqrt{41}}{4}\right)+a_{2}\left(\frac{5-\sqrt{41}}{4}\right)
\end{gathered}
$$

**Exercise** Find $a_{1}, a_{2}$.

$$
\text { P551\#3,4 }
$$
