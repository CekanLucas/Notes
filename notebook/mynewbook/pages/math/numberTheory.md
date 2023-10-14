---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.11.5
kernelspec:
  display_name: python3 # fixed problem make sure name is correct jupyter kernelspec list
  language: python
  name: python3 
---

# Number Theory

We begin our systematic study of the set of integers $\Bbb{Z}$, and its properties. This is the part of mathematics called <strong><u>number theory</u></strong> and we will give an introduction to this field of mathematics

One important property of integers is that they are *ordered*. We can talk about one integer being greater than another integer

{bdg-warning}`Recall` $\Bbb{Z}^+=\Set{1,2,3,\cdots}$, *the set of positive integers*

$$
Let\ k,m\in\Bbb{Z}\text{, We say}\\
k\le m\ \iff\ m-k\in\mathbb{Z}^+\cup\Set{0}
$$

" $\le$ " has some important properties

1) If $k\le m$ and $\ m\le n$ then $k\le n$ is called the **Transitive Property**
2) If $k\le m$ and $\ m\le k$ then $m=k $ is called the **Anti-Symmetry Property**
3) $k\le k$ is called the **Reflexive Property**

Another way to look at "$\le$" is geometrically using a number line
```{code-cell} ipython3
:tags: ["remove-input"]
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.ticker as ticker

# Setup a plot such that only the bottom spine is shown
def setup(ax):
    ax.spines['right'].set_color('none')
    ax.spines['left'].set_color('none')
    ax.spines['top'].set_color('none')
    ax.yaxis.set_major_locator(ticker.NullLocator())
    ax.xaxis.set_ticks_position('bottom')
    ax.tick_params(which='major', width=1.00)
    ax.set_xlim(-5, 5)

plt.figure(figsize=(10, 5))
n = 8

ax = plt.subplot(n, 1, 2)
setup(ax)
ax.xaxis.set_major_locator(ticker.MultipleLocator(1))
ax.set_xlabel("Number Line, ℤ")
ax.text(-5, 1, "$\cdots\ -n\ \ \cdots$", fontsize=14, ha='center', va='center')
ax.text(5, 1, "$\cdots\ n\ \cdots$", fontsize=14, ha='center', va='center')

# Add arrow ends to the x-axis
arrowprops = dict(arrowstyle='<|-|>', linewidth=2.5, color='black')
ax.annotate('', xy=(-4, 1), xytext=(4, 1), arrowprops=arrowprops)

plt.show()
```


Then $k\le m$ iff $k$ is *not* to the *right* of $m$,\
for example for $(k,m)$ being $(-4,-3)$ then $(-4\le -3)$

" $\le$ " is an example of mathematical object called a **linear or total order**

If we change property **Anti-Symmetry** and keep the **Reflexive** and **Transitive** we get another type of mathematical object called an equivalence relation

```{note} Addition and Multiplication are **Commutative Binary Operations** on $\Bbb{Z}$\
That means that $a+b=b+a$ and $a\cdot b=b\cdot a$ for $\forall\ a,\ b\in\Bbb{Z}$
```
### Well Ordered Property

Well Ordered Property **W.O.P.**
: Every non-empty subset $\mathrm{S}\subseteq\Bbb{Z}$ that is *bounded* below has a *least member*
```{prf:definition} Bounded
- A set is called **bounded** below if $\exists k\in\Bbb{Z}$ such that $x\in\mathrm{S}\to k\le x$
```
```{prf:definition} Least Member
- A **least member** of $\mathrm{S}$ is $x\in\mathrm{S}$ such that $x\le s$, $\forall s\in\mathrm{S}$
```
```{code-cell} ipython3
:tags: ["remove-input"]

# Setup a plot such that only the bottom spine is shown
def setup(ax):
    ax.spines['right'].set_color('none')
    ax.spines['left'].set_color('none')
    ax.spines['top'].set_color('none')
    ax.yaxis.set_major_locator(ticker.NullLocator())
    ax.set_xlim(-5, 5)
    ax.xaxis.set_major_locator(ticker.NullLocator())
    ax.xaxis.set_minor_locator(ticker.NullLocator())

plt.figure(figsize=(10, 5))
n = 8

ax = plt.subplot(n, 1, 2)
setup(ax)
ax.set_xlabel("Number Line, ℤ")

# Add arrow ends to the x-axis
arrowprops = dict(arrowstyle='-|>', linewidth=1, color='black')
ax.annotate('k', xy=(-4, 0), xytext=(-4, 1), arrowprops=arrowprops)
ax.annotate('x - smallest element in $\mathrm{S}$', xy=(-3, 0), xytext=(-3, 2), arrowprops=arrowprops)
ax.text(-1, 0.5, "The Set $\mathrm{S}$", color="white", ha="center", va="center", weight="bold")
plt.fill("j", "k", "0.7",
         data={"j": [-3, -3, 1, 1],
               "k": [0, 1, 1, 0]})
plt.show()
```
This property is important because it allows us to prove the principle of mathematical induction among other important result

The rational number <u>do not</u> obey the W.O.P. and this in part motivates the construction of the real numbers as the following example shows
```{prf:example}
Let $\mathrm{S}\subset Q,\ \mathrm{S}=\Set{x\in \Bbb{Q},\ x>0\mid  x^2\ge 2}$

This set is bounded below since if $x\in\mathrm{s},\ x>1$ since $1^2<2$,

However $\mathrm{S}$ has no least member (in $\Bbb{Q}$) since $\sqrt{2}\notin\Bbb{Q}$
```

<!-- Label syntax: see https://jupyterbook.org/en/stable/tutorials/references.html?highlight=header#create-a-label -->
(Division-label)= 
## Division
[See related concept: Division Algorithm](Division-Algorithm-label) \
[good Youtube video](https://www.youtube.com/watch?v=Qzy6hHgyb1g&list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz&index=42)

The first concept we will deal with is division of integers we examine when $\displaystyle\frac{b}{a}\in\Bbb{Z},\ a,b\in\Bbb{Z}$

```{admonition} Definition **Divides Notation**
If $a,b\in\Bbb{Z},\ a\ne0$, we say *a divides b* iff $\exists c\in\Bbb{Z}$ such that $b=a\cdot c$ we write $a\mid b$

When $a\mid b$ we say $a$ is a **factor** of $b$ and $b$ is a **multiple** of $a$

$\color {silver} \huge \sf a\mid b \quad iff\quad \exists c: ac=b\qquad (a,b\in\Bbb Z,c\in\Bbb Z^+)$

If *a does not divide b* we write $a\nmid b$

so for $3\mid 15$ we are saying that there is a $c$ such that $3c=5$ in this case of course $c=5$ since $c\in \Bbb Z^+$
```

```{admonition} Examples
:class: attention dropdown
1) $1\mid a,\ \forall a\in \Bbb{Z}$ since $a=1\cdot a$
2) $4\mid -28$ since $-28=4(-7)$
3) $4\nmid -27$ since $\nexists c\in\Bbb{Z}$ such that $27=4\cdot c\ ie\ \frac{27}{4}=6+\frac{3}{4}\notin\Bbb{Z}$
4) $a\mid 0$, $\forall a\in\Bbb{Z},\ a\ne 0$  ($0=a\cdot 0$)
5) $a\mid a$, $\forall a\in\Bbb{Z},\ a\ne 0$  ($a=a\cdot 1$)
```

````{admonition} Theorem 1: **Properties of Divisibility**
:class: seealso
Let $a,a\ne 0,b,c\in\Bbb{Z}$ Then
1) $a\mid b$ and $a\mid c\to a\mid (b+c)$
```{admonition} Proof
:class: attention dropdown
$$
&a\mid b\to b=a\cdot t,\ some\ t\in\Bbb{Z}\\
&a\mid b\to c=a\cdot s,\ some\ s\in\Bbb{Z}\\
\therefore\ &b+c=a\cdot t+a\cdot s=a(t+s),\ t\in s\in\Bbb{Z}\\
\therefore\ &a\mid b+c
$$
```
2) $a\mid b\to a\mid bc,\ \forall c\in\Bbb{Z}$
```{admonition} Proof
:class: attention dropdown
$$
a\mid b&\to b=a\cdot t,\ some\ t\in\Bbb{Z}\\
&\to bc=(a\cdot t)\cdot c=a(tc),\ and\ tc\in\Bbb{Z}\\
\therefore\ &a\mid bc
$$
```
3) $a\mid b$ and $b\mid c\to a\mid c$
```{admonition} Proof
:class: attention dropdown
$$
&a\mid b\to b=a\cdot t,\ some\ t\in\Bbb{Z}\\
&b\mid c\to c=b\cdot s,\ some\ s\in\Bbb{Z}\\
\therefore\ &c=b\cdot s=a\cdot (t\cdot s),\ t\cdot s\in\Bbb{Z}\\
\therefore\ &a\mid c
$$
```
````
```{prf:corollary}
Let $a, a\ne 0, b, c\in\Bbb{Z}$\
If $a\mid b$ and $a\mid c$ then\
$a\mid (mb+nc)$  $\forall m,n\in\Bbb{Z}$

You can use first two statements of *Theorem 1*
> If a divides b and c then a divides a linear combination of those numbers
```
## Primes

```{prf:definition}
Let $p\in\Bbb{Z},\ p\ge 2$\
We call $p$ a **prime integer** or just **p is prime** if the only *positive* factors of $p$ are $1$ and $p$

If $p\ge 2$ is not a prime it is called a **composite**
```
````{note}
1) $n$ is composite iff $\exists a\in\Bbb{Z}$ such that $a\mid n$ and $1\lt a\lt n$

2) $1$ is <u>not</u> a prime number by definition 
```{prf:example}
:class: dropdown
$17, 53$ are prime
$52, 99$ are composite\
{bdg-primary}`Note` $99=9\cdot 11=3\cdot 3\cdot 11=3^2\cdot 11$\
We call $3^2\cdot 11$ the **prime factorization** of $99$
```
````

That there is only one way to factor a composite number as a product of primes is the following result **There is only <u>one</u> prime factorization for a composite number**

````{admonition} Theorem 2 **The Fundamental Theorem Of Arithmetic**
:class: seealso
Let $p\in\Bbb{Z},\ p\ge2$. The $p$ is either prime or $p$ can be written uniquely as a product of at least 2 prime numbers (*where the order of product does not count*)

{bdg-primary}`Note` $2\cdot 5$ is the same prime factorization of $10$ as $5\cdot 2$
```{prf:example}
$205=5\cdot 41$ and $41$ is prime\
$206=2\cdot 103$ is 103 prime?

We can check to see if $103$ is prime by dividing $103$ by all the numbers from $2$ to $\lceil\frac{103}{2}\rceil =52$. {bdg-danger}`Problem` Thats a lot of checking
```
````
````{admonition} *Faster* way to check **Primality** Theorem 3
:class: seealso
> If $n\ge 2$ is a composite then $\exists$ prime numbers $q$ such that $q\mid n$ and $2\le q\le\sqrt{n}$

{bdg-secondary}`Proof` 

If $n$ is composite, $\exists a\in\Bbb{Z}$ such that $a\mid n,\ 1\lt a\lt n$, so $n=a\cdot b$ for some $b$ 

We claim $a\le\sqrt{n}$ or $b\le\sqrt{n}$

If, not then $a\cdot b\gt\sqrt{n}\cdot\sqrt{n}=n$\
Thus $n$ has a divisor $\le\sqrt{n}$, say "$a$"\
If this divisor $a$ is not prime, it will have a prime factor $q$, and $n=a\cdot b=q(tb)$ for some $t$, and $1\lt q\lt a\le\sqrt{n}$
````

```{prf:example} 
To show if $103$ is prime or composite we now only have to divide by all primes $\le\sqrt{103}$, ie by $2,3,5,7$ since $\lfloor\sqrt{103}\rfloor=10$ **But none of them work**

$\frac{103}{2}\notin\Bbb{Z},\frac{103}{3}\notin\Bbb{Z},\frac{103}{5}\notin\Bbb{Z},\frac{103}{7}\notin\Bbb{Z}$ 

Thus $103$ is prime
```

The method of determining primality or *primality test* is dependent on having a list of prime numbers up to the square root of the number to be tested

We can get this list using the **Sieve of Erathosthenes**

Suppose we want to find all the prime numbers less than a certain number say $100$

We write a list of the first one hundred numbers. We exclude $1$ since it is not a prime. We then circle the number 2, and cross off every second number after, ie cross cross all multiples of 2. We now circle the first uncrossed number  which is 3, it is prime. We now cross off every third number, the multiples of 3. We now circle the next uncrossed off number, 5, it is prime, and we cross off all multiples of 5. We now circle the next uncrossed off number, 7 it is a prime, and cross off all multiples of 7.

In view of Theorem 3, every uncrossed off number is prime.

In fact if we have a list up to 120, these 4 iterations of the algorithm will give all primes less then 120, by Theorem 3

````{admonition} Theorem 4 **Euclid**
:class: seealso
> There are an infinite number of primes

{bdg-secondary}`Proof`

Assume that there are a finite number of primes $p_1, p_2,\cdots , p_n$

{bdg-info}`Consider` $q=(p_1\cdot p_2\cdot\cdots\cdot p_n) + 1$

There are two possibilities for $q$; composite or prime

If $q$ is prime, then the list $p_1, p_2,\cdots , p_n$ is not complete

If $q$ is composite, by the *Fundamental Theorem of Arithmetic* we can write $q=p_1\cdot p_2\cdot\cdots\cdot p_k$, where $p_(i_1),\cdots ,p_(i_k)$ are on the list $p_1,\cdots ,p_n$

Then $p_(i_k)\mid q-p_1\cdot\cdots\cdot p_n$ by then 1 ie $p_(i_k)\mid 1$, not possible

Thus the list $p_1,\cdots,p_n$ is not complete for any $n\in\Bbb{Z}^+$

Hence there are an infinite number of prime numbers
````

While the list of prime numbers will never be complete, the search for the largest known primes number is very active. 

For about the last 300 years the largest known prime number has been a special type of number called **Mersenne Prime**

```{prf:definition} a prime number of the form $2^P-1, P\text{ is a prime number}$ is called a **Mersenne Prime**
```

## Remainders
(Division-Algorithm-label)=
### Division Algorithm
[See related concept: Division](Division-label) \
[good Youtube video](https://www.youtube.com/watch?v=Qzy6hHgyb1g&list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz&index=42)

````{admonition} Theorem 5 **The Division Algorithm** 
:class: seealso

Let $a,d\in\Bbb{Z},\space d\ge 2\quad$ then $\exists$ unique numbers $r,q\in\Bbb{Z},\qquad 0\le r\lt d$ such that

$$a=d\cdot q+ r$$ 

{bdg-info}`Notation`

Here we call\
$a$ the **dividend**
$d$ the **divisor**
$q$ the **quotient**
$r$ the **remainder**


as a short hand we can also write 

$\displaystyle\frac{a}{d}=q+\frac{r}{d}$

> **Another Way we can express these concepts is as below**
>
><big>$q=a$ **div** $d$, and $r=a$ **mod** $d$</big>

```{prf:example}
:nonumber: true

$37 = 4\cdot 9 + 1$\
$39 = 4\cdot 9 + 3$\
$-39 = 4(-10) + 1$\
{bdg-danger}`Remember` not $-39 = 4(-9) -3$ since the **remainder must be non-negative**
```
{bdg-secondary}`Proof`

Let $S=\Set{n=a-dq\mid q\in\Bbb{Z}, n\ge 0}$

The set $S$ is non empty since $a-dq\ge 0$ iff $a\ge dq$ and clearly we can take $q$ negative enough so, $a\ge dq$ 

Clearly $S$ is bounded below by $-1$ and hence it has a least element $r=a-dq_0\ge 0$ for some $q_0\in\Bbb{Z}$

We only need to show $r<d$ to complete the proof

Suppose not : ie suppose r $r\ge d$ and $r$ is the least element of $S$

Let $e=a-d(q_0 + 1) = a - dq_0 -d = r - d /ge 0$

Thus $e\in S$ and $e=r-d\lt d$ - since $d\ge 2\lt 0$ and hence $r$ is not the least element of $S$, a contradiction 

Thus $0\le r\lt d$ and $a=dq_0 + r$
````

### Greatest Common Divisor & Least Common Multiple

Let $a,b\in\Bbb{Z}^+$, ie, $a,b\ge 1$

#### Greatest Common Divisor

```{prf:definition} Greatest Common Divisor
The largest integer $d$ that divides both $a$ and $b$ is the **Greatest Common Divisor** and we write $d=gcd(a,b)$
```

The $gcd(a,b)$ will exist because there are only a finite  number of divisors of $a$ and $b$ and the lists for both $a$ and $b$ of divisors contain the number $1$

{badge-warning}`Example` **Find the $ged(14,21)$**

The prime factorization of $14 = 2\cdot 7$
The prime factorization of $21 = 3\cdot 7$
Clearly $ged(14,21)=7$

```{note} When $1$ is the only number on both lists of divisors of $a$ and $b$, we say that they are **relatively prime**
```

{bdg-success}`Definitions`

1) If $ged(a,b)=1$ we say $a$ and $b$ are **relatively prime**
2) The set of numbers $\Set{a_1,a_2,\cdots}$ are called **pairwise relatively prime** if $ged(a_i,b_j)=1,\ \forall i\ne j$ {bdg-secondary}`eg` $\Set{2,7,15}$ 

The prime factorizations of $a$ and $b$ gives us a means to find and write down the $gcd(a,b)$

$$
a &= p_{1}^{n_1}\cdot p_{2}^{n_2}\cdot p_{3}^{n_3}\cdot \cdots p_{t}^{n_t}\cdot\ ,\ n_i\ge 0\\
b &= p_{1}^{m_1}\cdot p_{2}^{m_2}\cdot p_{3}^{m_3}\cdot \cdots p_{t}^{m_t}\cdot\ ,\ m_i\ge 0
$$

Then $ged(a, b) = p_{1}^{k_1}\cdot p_{2}^{k_2}\cdot \cdots p_{t}^{k_t}\cdot$\
where $k_i=min(n_i,m_i)$

This of course assumes that we the prime factorizations of $a$ and $b$ 
This can be a difficulty when finding the $gcd(a,b)$

#### Least Common Multiple

```{prf:definition} Least Common Multiple
Let $a,b\in\Bbb{Z}^+$ The least Common multiple $a$, $b$ is the samllest number, $l$, divisible by both $a$ and $b$ and we write $l=lcm(a,b)$
```

The $lcm(a,b)$ exists because the set of the set of multiples $a$ and $b$ is a non-empty set of integers bounded below. By the **Well Ordered Property** it has a *least element*

With the notation above, we can calculate $lcm(a,b)$

$$ lcm(a,b) = P_{1}^{r_1} \cdots p_{t}^{r_t}\ where\ r_i=max(n_i, m_i)$$

```{admonition} Theorem 6
:class: seealso

$$
a\cdot b = gcd(a,b) \cdot lcm(a,b)
$$(th6)

{bdg-secondary}`Proof`

Since $min(n_i, m_i) + max(n_i, m_i)$ = n_i + m_i$


When we multiply $a\cdot b$ and $gcd(a,b)\cdot lcm(a,b)$ using {eq}`th6`
```

To calculate $gcd(a,b)$ and hence $lcm(a,b)$ by {eq}`th6` we don't have to find the prime factorization of $a, b$ We can use the **Euclidean Algorithm**, essentially a repeated application of the **Division Algorithm** to find $gcd(a,b)$. This method is also used to find $s, t$ in the following theorem 

```{admonition} Theorem 7
:class: seealso

Let $a,b\in\Bbb{Z}^+$ then $\exists s,t\in\Bbb{Z}$ such that $gcd(a,b)=s\cdot a + t\cdot b$

{bdg-secondary}`Proof`

Let $\Set{sa+tb\gt 0\mid s,t\in\Bbb{Z}}$

$S$ is non-empty, take $s=a$, $t=b$, then $sa+tb=a^2+b^2\gt 0$

By the **Well Ordered Principle**, $S$ has a least element $0<c=s_0a + t_0b$, for some $s_0,t_0\in\Bbb{Z}$

We now show two things
1) $c$ is a common divisor of $a$ and $b$
2) if $d$ is a common divisor of $a$ and $b$ then $d$ divides $c$
  - Those two things together give us $c=gcd(a,b)$ 
3) To show $c\mid a$, we assume $c\nmid a$ then $a=qc+r$, $0\lt r\lt c$ and
$r=a-qc=a-q(s_0a+t_0b)=a(1-qs_0)-qt_0b\in S$ and $r\lt c$, thus $c$ is not least element of $S$ no good $\therefore c\mid a$ Similarly $c\mid b$

If $d\mid a$ and $d\mid b$ then $d\mid s_0a+t_0b$ (Theorem One) so, $d\mid c$

Thus $c=gcd(a,b)=s\cdot a+tb$ for some $s,t\in\Bbb{Z}$

```{note} 
$s$ and $t$ in the theorem are not unique since\
$sa+tb=(s+kb)a + (t-ka)b,\ \forall k\in\Bbb{Z}$
```

```{admonition} A use for the $lcm(a,b)$

Suppose we want to add two fractions $\frac{1}{4}+\frac{5}{6}$ to do this we find the lowest common denominator which is $12=lcm(4,6)$ 

Thus the easiest way to add

$$\frac{1}{4}+\frac{5}{6}=\frac{3}{12}+\frac{10}{12}=\frac{13}{12}$$

instead of blindly using $24=4\cdot 6$ as the common denominator, 

$$\frac{1}{4}+\frac{5}{6}=\frac{5}{24}+\frac{20}{24}=\frac{26}{24}=\frac{13}{12}$$

In algebra this is useful as in the following example

$$\frac{1}{(x-2)(x-1)}+\frac{3}{(x-1)(x+1)}=\\
\frac{(x+1)}{(x-2)(x-1)(x+1)}+\frac{3(x-2)}{(x-2)(x-1)(x+1)}=\\\frac{4x-5}{(x-2)(x-1)(x+1)}$$
```

## Modular Arithmetic
[youtube video](https://www.youtube.com/watch?v=tBmuDlpQ0a8&list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz&index=43)

Consider the question:\
*A computer program takes 117 hours to run. It is started at 4pm. What time if day will it be complete?*

Since we are only considering the time of day and not the actual day, we must convert $117$ hours into days and hours and add the number if hours to 4pm

{bdg-success}`Solution` $117 = 4 \cdot (24) + 21$ we then add 21 hours to 4pm to get 1pm

What we have done in the above calculation is $\textcolor{Orange}{\textit{addition modulo 24}}$ since we are only concerned with the 24 hours in a day and not the number of days involved

> If $a$ and $b$ are integers and $m$ is a positive integer, then $a$ is **congruent** to be $b$ **modulo** $m$ if $m$ divides $a-b$ 
>> {bdg-Info}`Notation` $a\equiv b\pmod m$ iff $m\mid a - b$\
>> That is $a$, $b$ have the same remainder when divided by $m$

$a,b,m\in\Bbb{Z},\ m\ge 2$ then $a\equiv b\pmod m$ iff $m\mid a - b$ or $a=b+km,\ k\in\Bbb{Z}$\
Or in words $a$ and $b$ have the same remainder when divided $m$ using the division algorithm

```{admonition} Examples
:class: warning dropdown

**Is $17$ congruent to $5\pmod 6$**\
Yes because $17 - 5 = 12$ which is divisible by $6$

---
**Is $24$ and $14$ are congruent modulo $6$**\
No because $24 - 14 = 10$ which is not divisible by $6$
```
```{prf:Theorem}
Let $m$ be a positive integer. The integers $a$ and $b$ are congruent modulo $m$ if and only if there is an integer $k$ such that $a=b+km$
```

```{attention}
Some properties that may be obvious if you think about it

1) $a\equiv b\pmod m$ if and only if $b\equiv a\pmod m$
  - Since if $m\mid a - b$ then $m\mid b - a$
2) $a\equiv 0\pmod m$ if and only if $m\mid a$
3) When $a$ is divided by $m$, via the division algorithm then it turns out there are exactly $m$ different remainder possible $0,1,2,\cdots ,m-1$
```
The set of all integers congruent to an integer a modulo m is called the **congruence class** of a modulo m and treat the union of these equivalence classes is the set of integers 

```{prf:theorem}
:label: modtheory
Let $m\ge 2$, $m\in\Bbb{Z}$\
If $a\equiv b\pmod m$ and $c\equiv d\pmod m$\

then $a+b\equiv b + d\pmod m$ and $a\cdot b\equiv b\cdot d\pmod m$
```

$$
[k]_m &=\text{ congruence class of a modulo $m$}\\
&=\Set{a\in\Bbb{Z}\mid a\equiv k\pmod m}\\
&=\Set{a+km\mid k\in\Bbb{Z}}
$$

If we take **congruences modulo $m$ of $\Bbb{Z}$** it splits into $m$ distinct *congruent classes*

$$\Bbb{Z}_m=\Set{[0]_m,[1]_m,\cdots,[m-1]_m}$$

{bdg-secondary}`Example` Let $m=7$

$$
\Bbb{Z}_7=&\Set{[0]_7,[1]_7,[2]_7,\cdots,[6]_7}\\
[2]_7=&\Set{\cdots -19, -12, -5, 2, 9, 16, 23,\cdots}\\
$$

### Pseudo Random Numbers
**An application of modular arithmetic**

Randomly chosen numbers are often needed for computer simulations. Because the numbers used are generated by systematic methods they are not truly random and so are called pseudo-random numbers

A commonly used procedure is called the **linear congruential method**

Choose four integers: $m, a, c, x_0$

$$
m\ &=\ modulus       &2\le\   &a& \lt m\\ 
a\ &=\ multiplier    &0\le\   &c& \lt m\\
c\ &=\ increment\ \  &0\le\  &x_0& \lt m\\
x_0\ &=\ seed\\
$$

We use these numbers to generate a sequence of pseudo-random numbers $\set{x_n}$ with $0\le x_n\lt m, \ \forall n=0,1,2,\cdots$ , by using the **recursive definition**

$$x_{n+1} = ax_n+c\pmod m$$

Many computer experiments need pseudo-random numbers between 0 and 1\
To get these take $\frac{x_n}{m}$

Let us consider the following examples

1) Take $m=9,\ a=7, c=4, x_9 = 3$ 

Then $x_{n+1} = 7x_n + 4\pmod 9$ 

$$
x_0 &= 3\\
x_1 &= 7\cdot 3 + 4 &= 25& \equiv 7 \pmod 9\\
x_2 &= 7\cdot 7 + 4 &= 53& \equiv 8 \pmod 9\\
x_3 &= 7\cdot 8 + 4 &= 60& \equiv 6 \pmod 9\\
x_4 &= 7\cdot 6 + 4 &= 46& \equiv 1 \pmod 9\\
x_5 &= 7\cdot 1 + 4 &= 11& \equiv 2 \pmod 9\\
x_6 &= 7\cdot 2 + 4 &= 18& \equiv 0 \pmod 9\\
x_7 &= 7\cdot 0 + 4 &=\ 4& \equiv 4 \pmod 9\\
x_8 &= 7\cdot 4 + 4 &= 32& \equiv 5 \pmod 9\\
x_9 &= 7\cdot 5 + 4 &= 39& \equiv 3 \pmod 9\\
$$

Since $x_0=x_9$, and the next term depends on only the previous term, the sequence repeats after 9 different outputs this generator thus gives the sequence\
$\mathbf{3, 7,  8,  6,  1,  2,  0,  4,  5, 3, 7, 8, 6, 1, 2, 0, 4, 5,\ \cdots}$ 

The sequence generated need not be of length $m$ before repetition occurs

Consider $m = 10$, $a = 3$ $c = 1$, $x_0 = 1$

Then $x_{n+1}=3x_n+1\pmod 10$ and

$$
x_0 &= 1\\
x_1 &= 4\\
x_2 &= 3\cdot 4 + 1 &= 13& \equiv 3 \pmod {10}\\
x_3 &= 3\cdot 3 + 1 &= 10& \equiv 0 \pmod {10}\\
x_4 &= 3\cdot 0 + 1 &= 1\ & = 1\\
$$

Thus we get the sequence\
$\mathbf{1, 4,  3,  0,  1,  4,  3,  0,\ \cdots}$ 

However, conditions can be put on $m,\ a,\ c,\ x_0$ so that the resulting sequence has a very long period

For example, a widely used generator, has\
$m=2^{31}-1$, $a=7^5=16,807, c=0$

This pure-multiplicative generator (called so because $c=0$) generates a sequence $2^{31}-1$ numbers long before repetition for any seed, x0, $1\le x_0 <m$

```{note}
$2^{31}-1$ is a prime number as was shown by *Euler* in 1750 (not published until 1772) and $2^{31}-1 = 2,137,483,647$
```
#### Another Application
**Of Modular Arithmetic**

Let $n\in\Bbb{Z}^+$ Then $3\mid n$ iff $3$ *divides* the sum of the digits of its decimal representation as well, $9\mid n$ iff $9$ divides the sum of the digits of its decimal representation

This is so because $10\equiv 1\pmod 3$ and $10\equiv 1\pmod 9$

$$Let\ n=a_k10^k+a_{k-1}10^{k-1}+\cdots+ a_1\cdot 10 + a_0$$

Now $3\mid n$ if and only if $n\equiv 0\pmod 3$ repeated application of following {prf:ref}`modtheory` gives

$$
&n\pmod 3\\
&= (a_k10^k+a_{k-1}10^{k-1}+\cdots+ a_1\cdot 10 + a_0)\pmod 3\\
&= (a_k10^k)\pmod 3+(a_{k-1}10^{k-1})\pmod 3 + \cdots +  a_0\pmod 3\\
&= a_k\pmod 3 (10\pmod 3)^k+a_{k-1} (10\pmod 3)^{k-1}\pmod 3 + \cdots +  a_0\pmod 3\\
&= a_k\pmod 3 (1)^k+a_{k-1} (1)^{k-1}\pmod 3 + \cdots +  a_0\pmod 3\\
&= a_k\pmod 3 +a_{k-1} \pmod 3 + \cdots +  a_0\pmod 3\\
&= (a_k +a_{k-1} + \cdots +  a_0)\pmod 3\\
$$
