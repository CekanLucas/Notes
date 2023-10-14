# More Examples

1) We start with a miscellaneous counting question\
Consider the set of positive integers less than 1000, $S=\{1,2, \cdots, 999\}$\
How many elements are divisible by\
i) 7, ii) 11, iii) 7 and 11, iv) 7 or 11, v) exactly one of 7 and 11, vi) neither 7 nor 11 ,

(i) $\frac{999}{7} = 142+\frac{5}{7}$ This means there are 142 multiples 7 in $S$

![](https://cdn.mathpix.com/cropped/2023_06_13_74b2d44aa3b0a345d987g-01.jpg?height=322&width=1257&top_left_y=1221&top_left_x=336)

or $\left.\mid \frac{999}{7}\right]=142$ multiples of $7$ in $S$

(ii) By the same reasoning, there are $\left.\left\lfloor\frac{999}{11}\right\rfloor=\lfloor 90+\frac{9}{11}\right\rfloor=90$ multiples of 11 in $\mathrm{S}$

iii) If $n$ is divisible by 7 and 11 , since $gcd(7,11)=1$, $n$ is divisible by 77\
Thus $\left\lfloor\frac{999}{77}\right\rfloor=\left\lfloor 12+\frac{75}{77}\right\rfloor=12$ multiples of 7 and 11 in $S$

iv) To facilitate our counting, let 

$$
N_{x}=\{\text { multiples of } x \text { in } S\}
$$

Then as we have seen above

$$
\left|N_{7}\right|=142,\left|N_{11}\right|=90,\left|N_{77}\right|=12=\left|N_{7} \cap N_{11}\right|
$$

Thus the number of multiples of 7 or 11 in $S$ is

$$
\begin{aligned}
\left|N_{7} \cup N_{11}\right| & =\left|N_{7}\right|+\left|N_{11}\right|-\left|N_{7} \cap N_{11}\right| \\
& =142+90-12=220
\end{aligned}
$$

v) The number of multiples of exactly <u>one</u> of 7 or 11 is the number of multiples of 7 ox 11 menus the number of multiples of 7 and 11 ,

Thus

$$
\begin{aligned}
\mid N_{7}\oplus N_{11} \mid & =\left|N_{7} \cup N_{11}\right|-\left|N_{7} \cap N_{11}\right| \\
& =220-12=208
\end{aligned}
$$

**Vi)** The numbers in $S$ that are neither multiples of 7 nor 11\
is the size of the complement of $N_{7} \cup N_{11}$

$$
\begin{aligned}
\text{ie.,}\qquad\left|N_{7} \cup N_{11}\right| & =|s|-\left|N_{7} \cup N_{11}\right| \\
& =999-220=779
\end{aligned}
$$

We now turn our attention to an algebraic result with combinatorics applications

We start by considering powers of a binomial

We have

$$
\begin{aligned}
& (x+y)^{2}=x^{2}+2 x y+y^{2} \\
& (x+y)^{3}=x^{3}+3 x^{2} y+3 x y^{2}+y^{3} \\
& (x+y)^{4}=x^{4}+4 x^{3} y+6 x^{2} y^{2}+4 x y^{3}+y^{4}
\end{aligned}
$$

A pattern io starting, to emerge. If we consider the coefficients only we see the pattern

![](https://cdn.mathpix.com/cropped/2023_06_13_74b2d44aa3b0a345d987g-03.jpg?height=271&width=694&top_left_y=1367&top_left_x=578)

Can we guess what $(x+y)^{5}$ will be? Let us confirm our guess

$$
\begin{aligned}
(x+y)^{5}= & (x+y)(x+y)^{4}\\
=&(x+y)\left[x^{4}+4 x^{3} y+6 x^{2} y^{2}+4 x y^{3}+y^{4}\right] \\
= & x^{5}+4 x^{4} y+6 x^{3} y^{2}+4 x^{2} y^{3}+x y^{4}
 +x^{4} y+4 x^{3} y^{2}+6 x^{2} y^{3}+4 x y^{4}+y^{5} \\
= & x^{5}+5 x^{4} y+10 x^{3} y^{2}+10 x^{2} y^{3}+5 x y^{4}+y^{5}
\end{aligned}
$$

Is there a formula for the coefficients of the $n^{\text {th }}$ power of the binomial $(x+y)^{n}$ ?

We see that this formula must read the same in both directions,

$$
\begin{aligned}
 1\quad&2\quad1 \\
 1\quad3&\quad3\quad1 \\
 1\quad4\quad&6\quad4\quad1 \\
 1\quad5\quad10&\quad10\quad5\quad1
\end{aligned}
$$

If we call these coefficients $c_{k}^{n}, k=0,1, \cdots, n$ we need $c_{n-k}^{n}=c_{k}^{n}$.

We have already seen such a number sequence and interestingly enough, they are called the binomial coefficients, $\left(\begin{array}{l}n \\ k\end{array}\right)$

---

This has all been the lead up to
## The Binomial Theorem

Let $x, y$ be numbers (real ore complex). Let $x$ be a non-negative integers

Then

$$
(x+y)^{n}=\sum_{k=0}^{n}\left(\begin{array}{l}
n \\
k
\end{array}\right) x^{n-k} y^{k}
$$

**Proof** We will prove this result by induction after we explore it a bit

**Exercise 1** Find the coefficient of $x^{4}$ in the expansion of $(2 x-3)^{10}$

Let $a=2 x, b=-3$, then

$$
\begin{aligned}
(2 x-3)^{10}& =(a+b)^{10}=\sum_{k=0}^{10}\left(\begin{array}{l}
10 \\
k
\end{array}\right) a^{10-k} b^{k} \\
& =\sum_{k=0}^{10}\left(\begin{array}{l}
10 \\
k
\end{array}\right)(2 x)^{10-k}(-3)^{k} \text {. We want } 10-k=4
\end{aligned}
$$

$k=6$ : coefficients of $x^{4}$ is the coefficients of\
$ \left(\begin{array}{c} 10 \\ 6 \end{array}\right)(2 x)^{4}(-3)^{6}=(210) 2^{4}(-3)^{6} x^{4} $

Coefficients of $x^{4}$ is $210 \cdot 2^{4} \cdot(-3)^{6}\\=210 \times 16 \times 729\qquad=2,449,440\qquad\checkmark$

**Exercise** Evaluate $\displaystyle N=\sum_{k=0}^{n} 4^{k}\left(\begin{array}{l}n \\ k\end{array}\right)$

$$
N=\sum_{k=0}^{n}\left(\begin{array}{l}
n \\
k
\end{array}\right) 1^{n-k} 4^{k}=(1+4)^{n}=5^{n}
$$

**Theorem** Let $r \in \mathbb{Z}^{+}, n \in \mathbb{Z}^{+}$

$$
(1+r)^{n}=\sum_{k=0}^{n} r^{k}\left(\begin{array}{l}
n \\
k
\end{array}\right)
$$

### Proof of Binomial Turn
When $n=0$, we have the trivial case

$$
(x+y)^{0}=1 \text { and } \sum_{k=0}^{0}\left(\begin{array}{l}
0 \\
k
\end{array}\right) x^{0-k} y^{k}=\left(\begin{array}{l}
0 \\
0
\end{array}\right) x^{0} y^{0}=1
$$

by convention $\left(\begin{array}{l}0 \\ 0\end{array}\right)=1$

When $n=1$,

$$
\begin{aligned}
(x+y)^{1}=x+y \qquad\text { and }\\ \sum_{k=0}^{1}\left(\begin{array}{l}
1 \\
k
\end{array}\right) x^{1-k} y^{k} & =\left(\begin{array}{l}
1 \\
0
\end{array}\right) x^{1} y^{0}+\left(\begin{array}{l}
1 \\
1
\end{array}\right) x^{0} y^{1} \\
& =x+y .
\end{aligned}
$$

also a trivia case

When $x=2$

$$
\begin{aligned}
(x+y)^{2}=x^{2}+2 x y+y^{2} & +\sum_{k=0}^{2}\left(\begin{array}{l}
2 \\
k
\end{array}\right) x^{2-k} y^{k} \\
& =\left(\begin{array}{l}
2 \\
0
\end{array}\right) x^{2} y^{0}+\left(\begin{array}{l}
2 \\
0
\end{array}\right) x^{1} y^{1}+\left(\begin{array}{l}
2 \\
2
\end{array}\right) x^{0} y^{2} \\
& =x^{2}+2 x y+y^{2}
\end{aligned}
$$

If we let $P(n)$ be the propositional function given by (1) above,\
we have shown that $P(0) \wedge P(1)\wedge P(2)$ is True.

Assume now that $P(n)$ is tue. Let us ty to prove that $P(n+1)$ is also true.

Now $P(x)$ the given

$$
\begin{aligned}
(x+y)^{n+1} & =(x+y)(x+y)^{n}=(x+y) \sum_{k=0}^{n}\left(\begin{array}{l}
n \\
k
\end{array}\right) x^{n-k} y^{k} \\
& =x\left[x^{n}+\sum_{k=1}^{n}\left(\begin{array}{l}
n \\
k
\end{array}\right) x^{n-k} y^{k}\right]+y\left[\sum_{k=0}^{n-1}\left(\begin{array}{l}
n \\
k
\end{array}\right) x^{n-k} y^{k}+y^{n}\right]
\end{aligned}
$$

$$
=x^{n+1}+\sum_{k=1}^{n}\left(\begin{array}{l}
n \\
k
\end{array}\right) x^{n+1-k} y^{k}+\sum_{k=0}^{n-1}\left(\begin{array}{l}
n \\
k
\end{array}\right) x^{n-k} y^{k+1}+y^{n+1}
$$

In the second sum, we change the index form $k$ to $l$ by the shift $k=l-1$.

then $k+1=l$ and $k=0 \Rightarrow l=1, k=n-1 \Rightarrow l=n$

Thus

$$
\begin{aligned}
(x+y)^{n+1} & =x^{n+1}+\sum_{k=1}^{n}\left(\begin{array}{l}
n \\
k
\end{array}\right) x^{n+1-k} y^{k}+\sum_{l=1}^{n}\left(\begin{array}{l}
n \\
l-1
\end{array}\right) x^{n+1-l} y^{l}+y^{n+1} \\
& =x^{n+1} \sum^n_{k=1} \left[\left(\begin{array}{l}
n \\
k
\end{array}\right)+\left(\begin{array}{c}
n \\
k-1
\end{array}\right)\right] x^{n+1-k} y^{k}+y^{n+1}
\end{aligned}
$$

where we change $l$ back to $k$ by $l=k$ in the second sum

---

**Lemma** If $k+x$ are positive integers and $k \leq n$ then

$$
\left(\begin{array}{l}
n \\
k
\end{array}\right)+\left(\begin{array}{c}
n \\
k-1
\end{array}\right)=\left(\begin{array}{c}
n+1 \\
k
\end{array}\right)
$$

---

(Te prof of the lemma is strictly algebra, given the definition of the binomial coefficients)\
(a combinatorial proof is also possible) Applying the lemma we have

$$
\begin{aligned}
(x+y)^{n+1} & =x^{n+1}+\sum_{k=1}^{n}\left(\begin{array}{c}
n+1 \\
k
\end{array}\right) x^{n+1-k} y^{k}+y^{k+1} \\
& =\sum_{k=0}^{n+1}\left(\begin{array}{c}
n+1 \\
k
\end{array}\right) x^{n+1-k} y^{k} \text { and } P(n+1)
\end{aligned}
$$

is tue.

**Thus the Binomial Theorem is proved by PMI**

**Note** The lemma is the "Theory" behind *Pascal's triangle* that quickly gives the binomial coefficients

Starting at the top with a single 1, in what we call now 0 , corresponding to $x=0$, we build the sows $1,2,3, \cdots$ that correspond to $x=1,33, \cdots$, using the lemma.

$$
\begin{aligned}
& n=0 & &1& \\
& n=1 & 1&\quad 1& \\
& n=2 & 1 \quad &2 \quad 1& \\
& n=3 & 1 \quad 3& \quad 3 \quad 1& \\
& n=4 & \quad 1 \quad 4 \quad &6 \quad 4 \quad 1&\\
& x=5 & 1 \quad 5 \quad 10& \quad 10 \quad 5 \quad 1&\rightarrow \sum=2^{5}\\
& n=6 & \quad 1 \quad 6 \quad 15 \quad &20 \quad 15 \quad 6 \quad 1& \\
& n=7 & \quad 1 \quad 7 \quad 21 \quad 35& \quad 35 \quad 21 \quad 7 \quad 1& \\
& n=8 & \quad1\quad8\quad28\quad56\quad&70\quad56\quad28\quad8\quad1&\to\sum=2^{8}\\


\end{aligned}
$$

Thus $(x+1)^{7}=x^{7}+7 x^{6}+21 x^{5}+35 x^{4}+35 x^{3}+21 x^{2}+7 x+1$

---

**Exercise 1** Find the coefficient of $x^{3} y^{4}$ in the expansion of $(3 x-4 y)^{10}$

**Solution** Note in the binomial theorem, the powers of the variables add up to the exponent of the binomial
$3+4=7$ so there is no term with, $x^{3} y^{4}$ in it
$\therefore\quad$ It's coefficient is *zero*!

---

**Exercise 2** Consider $\left(x+\frac{1}{x}\right)^{10}$\
What is the constant term in it's expansion\
(*the term with no $x$'s in it*)

$$
\left(x+\frac{1}{x}\right)^{10}=\sum_{k=0}^{10}\left(\begin{array}{c}
10 \\
k
\end{array}\right) x^{10-k}\left(\frac{1}{x}\right)^{k}
$$

Need $x$'s to cancel. If we take $k=5$ we have

$$
\left(\begin{array}{c}
10 \\
5
\end{array}\right) x^{10-5}\left(\frac{1}{x}\right)^{5}=\left(\begin{array}{c}
10 \\
5
\end{array}\right) x^{5} \cdot x^{-5}=\left(\begin{array}{c}
10 \\
5
\end{array}\right) \\[2em]
\therefore\text{ The constant term is }
\left(\begin{array}{c}10 \\ 5\end{array}\right)=
\frac{_{\cancel{10}}^2 \cdot 9 \cdot \cancel{8} \cdot 7 \cdot _{\cancel{6}}^2}
{ \cancel{5}\cdot  \cancel{4}\cdot \cancel{3} \cdot \cancel{2} \cdot 1}\\
=9 \times 7 \times 4=252
$$

### Some notes on the Binomial Theorem

$$
(x+y)^{n}=\sum_{k=0}^{n}\left(\begin{array}{l} n \\ k \end{array}\right) 
x^{n-k} y^{k} \quad, n \geqslant 0,\quad n \in \mathbb{Z}
$$

1) The coefficients $\left(\begin{array}{l}n \\ k\end{array}\right)$ \
$=$ number of ways to pick k from $n$ \
$=$ number of subsets of size $k$ in a set with $n$ elements

This leads to some interesting results about sets

We can conclude $|P(S)|=2^{|S|}$ since

$$
\begin{aligned}
(1+1)^{n}&=2^{n}=\sum_{k=0}^{n}\left(\begin{array}{l}
n \\
k
\end{array}\right)\\ &=\text { total number of subsets of $S$ (including $\emptyset, k=0, S, k=n$)} \\
\end{aligned}
$$

Also $\displaystyle(1-1)^{n}=0^{n}=0=\sum_{k=0}^{n}(-1)^{k}\left(\begin{array}{l}n \\ k\end{array}\right)
=\sum_{k \text{ even}}\left(\begin{array}{l}
n \\
k
\end{array}\right)-\sum_{k \text{ odd}}\left(\begin{array}{l}
n \\
k
\end{array}\right)
$

$\therefore$ The total number of subsets of $S$ with even number of element = total number of subsets of $S$ with odd number of elements

---
**Back to counting problems**

So far we have discussed permutation and combinations of distinguishable objects

We now consider permutation and combinations of indistinguishable objects

We are given a list of different types of object from which we may select repeatedly from any or all of the types

## Permutations with Repetition

Suppose we have a set with $n$ elements. Recall that the number of ways to permute $r$ of these elements is

$$
P(n, r)=n(n-1) \cdots(n-r+1)=\frac{n !}{(n-r) !}
$$

This is the number of different ways to take $r$ objects out of $n$, where order counts

Permutation with Repetition or Permutation with replacement is the number of ways to "indicate" $r$ objects out of $n$ where order count

Think of it as *"catch and release"*

We have $n$ ways to pick the first object, which we record on a list, and then put back into the pool of eligible choices, and then we still have $n$ choices for the second objet, and so on

Thus

$$
\text { numberr-permutations with repetition }=n^{r}
$$

**Example** How many strings of length $n$ can be made from the english alphabet?

**Answer:** $26^{x}$

---
The equivalent type of formulation to *"catch and release"* for repetition pwblems is to assume that the $r$ different objects being chosen from are $n$ different types of objects with enough of each type to satisfy the conditions imposed

---
## Combinations with Repetition

Consider the *"donut"* problem

We go to a donut shop to buy 6 donuts. There are 9 types of donuts to choose from\
Assuming there are at least 6 of each type,\
how many different ways cen we fill the order?

Since the order in which we pick the donuts does not matter to the finial outcome we can picture the situation as follows

Suppose we take out box has nine compartments, one for each type of donuts\
This means there are $8=9-1$ internal dividers

We now put the 6 donuts in a line inside the box, so that we have a now of $8+6=14$ objects, donuts is one type and dividers is the other type

Let a bar, $\mid$, represent a divider and a star, $*$, represent a donut

A choice of donuts then is represented by a string of stars and bars,

Forexample

$$
\{\mid |* * \mid * \mid * \mid | * * \mid|\}
$$

represents the following choice

| Type | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Number of that type | 0 | 0 | 2 | 1 | 1 | 0 | 2 | 0 | 0 |

Equivalently a choice of donuts is represented by a bit sting of length\
$14=(9-1)+6$ with 6 zeros in it

There are $\left(\begin{array}{c} 14 \\ 6 \end{array}\right)$ bit strings of length 14 with exactly 6 zeros in it

Thus there are

$$
\left(\begin{array}{c}
14 \\ 6
\end{array}\right)=\frac{_{\cancel{14}}^7 \cdot 13 \cdot _{\cancel{12}}^1 \cdot 11 \cdot _{\cancel{10}}^1 \cdot _{\cancel{9}}^{3}}
{\cancel{6} \cdot \cancel{5} \cdot \cancel{4} \cdot \cancel{3} \cdot \cancel{2} \cdot 1}
=7 \cdot 13 \cdot 11 \cdot 3=3003
$$

different orders of 6 donuts from 9 types.

**Theorem** The number of ways to choose $r$ object from $n$ different types of objects is

$$
\left(\begin{array}{c}
n-1+r \\ r
\end{array}\right)
$$

**Example** 
1) How many solutions are there to $x_{1}+x_{2}+x_{3}=11$ where $x_{1}, x_{2}, x_{3}$ non-negative integers?

This is the number of ways to select 11 objects from 3 types of objects, types $x_{1}, x_{2}, x_{3}$.

That is $\left(\begin{array}{c}3-1+11 \\ 11\end{array}\right)=\left(\begin{array}{l}13 \\ 11\end{array}\right)=\left(\begin{array}{l}13 \\ 2\end{array}\right)=\frac{13,12}{2 \cdot 1}=78$

**Example 2** How many solutions are there to $x_{1}+x_{2}+x_{3}=11$ if $x_{1}, x_{2}, x_{3}$ are nonnegative integers and $x_{1},\quad x_{2} \geqslant 1,\quad x_{3} \geqslant 2$ ?

We fist pick \
1 of type $x_{1}$\
1 of type $x_{2}$\
2 of type $x_{3}$

then we require that

$$
x_{1}+x_{2}+x_{3}=7 \qquad\text { for our remaining solution }
$$

and $x_{1}, x_{2}, x_{3} \geqslant 0$,

This can be done in

$$
\left(\begin{array}{c}
3-1+7 \\
7
\end{array}\right)=\left(\begin{array}{l}
9 \\
7
\end{array}\right)=\left(\begin{array}{l}
9 \\
2
\end{array}\right)=\frac{9 \cdot 8}{2.1}=36 \text { ways }
$$

## Permutations with Indistinguishable Objects

Let us consider the number of different strings that can he made from the letters of the word

$$
\operatorname{SUCCESS}
$$

There are 4 different letters to choose from

$$
\begin{aligned}
& S \rightarrow 3 \textsf { of them} \\
& U \rightarrow 1 \textsf { of them} \\
& C \rightarrow 2 \textsf { of them} \\
& E \rightarrow 1 \textsf { of them} 
\end{aligned}
$$

**Exercise** How many solutions are there to\
$x_{1}+x_{2}+x_{3}=11$ where $x_{1}, x_{2} \geqslant 0$ and $0 \leq x_{3} \leq 2$ ?

**Solution** 3 cases to consider

*Case i)* $x_{3}=0$, have $x_{1}+x_{2}=11$

number of solutions $\left(\begin{array}{c}2-1+11 \\ 11\end{array}\right)=\left(\begin{array}{l}12 \\ 11\end{array}\right)=12$

*Case ii)* $x_{3}=1$, have $x_{1}+x_{2}=10$

number of solutions $\left(\begin{array}{c}2-1+10 \\ 10\end{array}\right)=\left(\begin{array}{l}11 \\ 10\end{array}\right)=11$

*case iii)* $x_{3}=2, x_{1}+x_{2}=9$

number of sins $\left(\begin{array}{c}2-1+9 \\ 9\end{array}\right)=\left(\begin{array}{c}10 \\ 9\end{array}\right)=10$

$\therefore$ Total number of solutions is $ 10+11+12=33 $

We have a total of 7 letters to permute and this can be done in $7!$ ways. However, there are 3 copies of the letter $S$ that are indistinguishable from each other

There one $3 !=6$ ways to permute 3 objects and so each specific rearrangement of $SUCCESS$ is got in $3!$ ways

To see this think of the $S$'s as labelled $ S_{1} U C C E S_{2} S_{3} $

Then the rearrangement $S_{2} U C C E S_{1} S_{3}$ is the same word as are

$$
\begin{aligned}
& S_{2} U C C E S_{3} S_{1} \\
& S_{1} U C C E S_{3} S_{2} \\
& S_{3} U C C E S_{1} S_{2} \\
& S_{3} U C C E S_{2} S_{1}
\end{aligned}
$$

Also, each one of these rearrangements have $2!$ duplications to account for the 2 letter $C$'s

eg $S U C_{1} C_{2} E S 5$ and $S U C_{2} C_{1} E S S$ are permutations of the letters that give us the same word,

Thus there are $\displaystyle \frac{7!}{3!2!}=\frac{7\times\cancel{6}\times5\times4\times3\times\cancel{2}\times\cancel{1}}{3\times2\times1\quad2\times1}\\[1em] =420 \text { different } 7 \text { letter words obtainable from the letters in SUCCESS } $

---
**Theorem** Let $n$ objects of $k$ different types, where there are $n_{i}$ of type $\displaystyle i,\\[1em] i=1, \cdots, k\left(n=\sum_{i=1}^{k} n_{i}\right)$, be permuted. Then there are

$\displaystyle \frac{n !}{n_{1} ! n_{2} ! \cdots n_{k} !} $ different results

---
**Example** Consider the word AARDVARK.

1) How many different 8 letter words can be made from its letters?
2) How many different 8 letter words can be made from its letters if the 3 A's must occur consecutively?

**Solution**

$$
\begin{gathered}
\begin{aligned}
\text { 1) We have }  A & \rightarrow 3 \\
D & \rightarrow 1 \\
R & \rightarrow 2 \\
V & \rightarrow 1 \\
K & \rightarrow 1
\end{aligned} \\
\text { number of ways }=\frac{8 !}{3 ! 1 ! 2 ! 1 ! 1 !}=\frac{8 \cdot 7 \cdot \cancel{6} \cdot 5 \cdot 4 \cdot 3 \cdot \cancel{2} \cdot \cancel{1}}{\cancel{3}\cdot\cancel{2} \cdot \cancel{1} \cdot 2 \cdot 1}=3360 \text { ways }
\end{gathered}
$$

1) If we have all 3 A's consecutive then we must permute the 6 letters

$$
\begin{gathered}
A A A \rightarrow 1 \\
D \rightarrow 1 \\
R \rightarrow 2 \\
V \rightarrow 1 \\
K \rightarrow 1 \\
\text { number of ways }=\frac{6 !}{2 !}=6.5 .4 .3=360 \text { ways. }
\end{gathered}
$$

---
### Distributing objects into boxes

Suppose we have $n$ different objects (distinguishable) that we wish to put into $k$ distinguishable boxes such that $n_{i}$ objects go into box.

We will count the number of ways to do this by showing a $1-1$ correspondence to the permutation of $n$ objects with $k$ types of indistinguishable objects, each with $n_{i}$ objects, $i=1, \cdots, k_{\text {. }}$

List the object $1,2, \cdots, n$. List the boxes, $B_{1}, B_{2}, \cdots, B_{R}$ Assign to each number $l, 1 \leq l \leq n$, the letter of the box it goes into to get a sequence of letters $ B_{i_{1}} B_{i_{2}} \cdots B_{i_{n}}\leftarrow$ some of these can be the same letter

Every assignment of objects to boxes thus corresponds to one and only one permutation of $n$ objects of $k$ different types with $n_{i}$ of each type, $i=1, \cdots, k$.

Since two sets have the same cardinality if there is a $1-1$ correspondence between them, we have

**Theorem** The number of ways to distribute $n$ distinguishable objects into $k$ distinguishable boxes so that $n_{i}$ are placed in box $i,\quad i=1, \cdots, k$, is

$$
\frac{n !}{n_{1} ! n_{2} ! \cdots n_{k} !}
$$

**Note** If can be argued, as well, that we have $\left(\begin{array}{l}n \\ n_{1}\end{array}\right)$ ways to put $n_{1}$, items in box 1, then $\left(\begin{array}{c}n-n_{1} \\ n_{2}\end{array}\right)$ ways to put $n_{2}$ items in box 2, then $\left(\begin{array}{c}n-n_{1}-n_{2} \\ n_{3}\end{array}\right)$ ways to put $n$, items in box 3, $\cdots$, finally $\left(\begin{array}{c}n-n_{1}-n_{2}-\cdots-n_{k-1} \\ n_{k}\end{array}\right)=\left(\begin{array}{l}n_{k} \\ n_{k}\end{array}\right)=1$ ways to put $n_{k}$ items in box $k\left(n=n_{1}+\cdots+n_{k}\right)$ and thus 

**Theorem**

If $n=n_{1}+n_{2}+\cdots+n_{k}$,

$$
\begin{gathered}
\left(\begin{array}{l}
n \\
n_{1}
\end{array}\right) \cdot\left(\begin{array}{c}
n-n_{1} \\
n_{2}
\end{array}\right)\left(\begin{array}{c}
n-n_{1}-n_{2} \\
n_{3}
\end{array}\right) \cdots\left(\begin{array}{c}
n-n_{1}-\cdots-n_{k-1} \\
n_{k}
\end{array}\right) \\
=\frac{n !}{n_{1} ! n_{2} ! \cdots n_{k} !}
\end{gathered}
$$

**Examples**

1) How many ways can 5 cards be dealt to 5 players from a standard card deck?

**Solution** There are 6 boxes, 5 get 5 cards (dealt cards) and 1 box gets $52-5 \times 5=52-25=27$ cards (undealt cards)

$$
\begin{aligned}
\text { number of way }=\frac{52 !}{(5 !)^{5} 27 !} & =\text { a really big number } \\
& =2.976866584 \times 10^{29}
\end{aligned}
$$

2) How many different bridge deals are there?

**Solution** In bridge, the 52 cards are dealt equally to 4 hands, 13 in each, so

$$
\text { number of ways }=\frac{52 !}{(13 !)^{4}} \approx 5.4 \times 10^{28}
$$

3) How many bridge deals have all cards from one suit in one player's
hand?

**Solution** First pick a suit. This can be done in $\left(\begin{array}{c}
  4 \\ 1
\end{array}\right)=4$  ways

Now take all of those cards and put them in one hand

Now deal the other 39 cards to 3 hands in

$$
\frac{39!}{(13!)^{3}} \text { ways. }
$$

thus the total number of ways is

$$
4\cdot \frac{39 !}{(13!)^{3}}
$$

**Note** If we take the ratio of the answers to 3 and 2, We get the probability that bridge hand will come up with one player getting all 3 cards in his hand from one suit

$$
\begin{aligned}
& \text { Probability }=4 \cdot \frac{39 !}{(13 !)^{3}} \times \frac{(13 !)^{4}}{52 !}=\frac{4 \times 39 ! \times 13 !}{52 !} \\
& =\frac{1}{158,753,389,900} \\

\end{aligned}
$$

$$
\begin{aligned}
\S &6.4 \quad P 443 \quad \# 1-9,12 \\
\S &6,5 \quad P 454 \quad \# 1-9,14-16,31-37
\end{aligned}
$$

## APPENDIX 1

Recall the general definition tor the binomial coefficients that was valid for any real number in the top spot

Let $\alpha \in \mathbb{R}$, then

$$
\left(\begin{array}{l}
\alpha \\
k
\end{array}\right)=\frac{\alpha(\alpha-1) \cdots(\alpha-k+1)}{k !} \text {. }
$$

### Generalized Binomial Theorem

Let $x \in \mathbb{R},|x|<1$. Let $\alpha \in \mathbb{R}$. Then

$$
(1+x)^{\alpha}=\sum_{k=0}^{+\infty}\left(\begin{array}{l}
\alpha \\
k
\end{array}\right) x^{k}
$$

The proof of this result is beyond the scope of this course

We give a few examples of the first few terms of some standard expansions

$\displaystyle(1+x)^{\frac{1}{2}}=\sum^{+\infty}_{k=0}\left(\begin{array}{c}
  1/2 \\ k
\end{array}\right)x^k = 1 + \frac{1/2}{1!}x + \frac{(1/2)(-1/2)(-3/2)}{3!}x^3+\cdots$

ie $\displaystyle \sqrt{1+x}=1+\frac{x}{2}-\frac{x^2}{8}+\frac{x^3}{16}-\cdots$

$\displaystyle(1+x)^{-\frac{1}{2}}=\sum^{+\infty}_{k=0}\left(\begin{array}{c}
  -1/2 \\ k
\end{array}\right)x^k = 1 + \frac{x}{2} - \frac{x^2}{8} - \frac{x^3}{16} -\cdots \quad ,\left| x \right|\lt 1 $

# Course Recap

## Counting
- Sum Rule and Product Rale

## Special cases and Results

1) number of functions from $A$ to $B, A, B$ finite sets
2) Applications of inc. Excl. Rule
3) Tree Diagrams
4) Pigeon Hole Principle a Generalized P. H.P.
5) Permutations (oder counts) $P(n, r)$
6) Combinations (oder doesn't count) $C(n, r)=\left(\begin{array}{l}n \\ r\end{array}\right)$
7) Binomial Theorem, Binomial Coefficients, $\left(\begin{array}{l}n \\ r\end{array}\right)$ and Applications
8) Pascal' Triangle
9) Generalized Binomial theorem *extra*
10) Permutations with repetitions
11) Combinations with repetitions
12) Permutations with indistinguishable Objects
13) Distinguishable items in boxes
