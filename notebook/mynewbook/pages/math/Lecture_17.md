# Combinatorics: An introduction

>**Combinatorics is the study of arrangements of objects**\
>*Another way to look at it is to think of combinatorics is as applied counting*

Consider the *"license plate"* problem ore equivalently the *"computer password"* problem or the equivalent *"postal code"* problem

let us look at the lost one as an example

A Canadian postal code has 6 symbols in it. they are arranged

$$
\text { (alpha) (numeric)(alpha) - (numeric)(alpha)(numeric) }
$$

where

$$\displaystyle alpha\ = \text{English letter}\\
\text { numeric }=\text { base } 10 \text { digit }$$

$$

$$

**How many different postal codes are there?**

Think of the solution to this question in a <u>constructive</u> way.

To produce a postal code, there are 6 tasks to do, task 

**#1** - pick first letter

**#2** - pick first number

**#3** - pick second letter

**#4** - pick second number

**#5** - pick 3rd letter

**#6** - pick 3rd number

These tasks are performed in sequence and since for each choice of 1<sup>st</sup> letter we have a different postal code, attached to each fist letter in the number of ways to pick the remaining 5 symbols

Next, we pick the first number and attached to this choice is the number of ways to pick the remaining 4 symbols, etc. (We have seen this before. Where?)

This is an illustration of the **Product Rule of Counting**

## The Product Rule of Counting

Suppose a procedure involves a sequence of $k$ stages. Let $n_{i}= \#$ of ways to do stage $i$, Suppose also that stage $i$ must be done before stage $i+1$
$1 \leq 2 \leq k-1$.

Then the total number of ways the procedure can be done is

$$
n=n, n_{2} \cdot \cdots \cdot n_{k-1} \cdot n_{k}
$$

Returning to the postal code problem,

the number of ways to pick a letter is 26 and the number of ways to pick a digit is 10 so the total number of possible postal codes is

$$
n=26 \cdot 10 \cdot 26 \cdot 10 \cdot 26 \cdot 10=17,576,000
$$

Of course this is not the number of useable postal codes. Eg $0\ \emptyset \ 0-\ \emptyset \ 0 \ \emptyset$ is possible but not practical

---


**Examples**

1) Let $A, B$ be finite sets. $|A|=n,|B|=m$\
How many functions are there from $A$ to $B$.

For each element $a \in A$ there are $m$ choices for the image $f(a) \in B$. There are $n$ different elements of $A$ so the total number of functions from $A$ to $B$ is

$$
N=\underbrace{m \cdot m \cdot \cdots \cdot m}_{n \text { times }}=m^{n}
$$

2) How many bit strings of length $n$ are there?

We can consider a bit string of length $n$ as a function $f:\{1,3, \cdots, n\} \rightarrow\{0,1\}$\
where $f(k)=\text{ kth bit in the string}$

By example 1

$$
\text{\# of bit strings of length }n=2^n
$$
3) The product rule can be phrased in terms of the cartesian product of sets

let $A_1,\cdots ,A_k$ be the *finite sets*
let $A= A_1\times A_2\times\cdots\times A_k =\set{(a_1, a_2,\cdots,a_k)\mid a_i\in A_i\qquad 1\le i \le k}$

Then $\left| A \right|=\left| A_1 \right|\cdot \left| A_2 \right|\cdots \left| A_k \right|$

---

So far we have looked at the procedure that are done sequentially, where the number of ways to do $i+1$ steps of the procedure depends on the number of ways to do $i$ steps

Some procedures are disjoint and for these types we use the **sum rule of counting**

## The Sum Rule of Counting

Suppose a procedure cen be broken down into $k$ different sub-procedures (or cases) that are disjoint from each other. Suppose sub-procedure $i$ can be done in $n_{i}$ ways, $1 \leq i \leq k$.

Then the procedure can be done in $n=n_{1}+n_{2}+\cdots+n_{k} \quad$ ways.

**Examples**

1. A library has 24 math books and 73 cookbooks. How many ways can a student pick a math book <u>or</u> a cookbook?

**Answer** $= 24 + 73 = 9$ ways to pick a matchbook or a cookbook.

2. Compare this to: How many way can a student pick a math book <u>and</u> a cookbook?

$$
\textbf { Answer }=24\cdot 73=1,752 \text { ways. }
$$

Some problems use a combination of the Sum and Product Rules to obtain an answer

**Examples**

1) A password for a certain system can be either 6,7 or 8 characters long\
the first character must be a letter and the last character must be a number The other characters can be letters on numbers (a number = decimal digit)\
**How many possible passwords are there?**

**Solution** We have 3 disjoint cases\
<u>Case 1</u> 6 symbols $\rightarrow $ do in $n_1$, ways\
<u>Case 2</u> 7 symbols $\rightarrow$ do in $n_{2}$ ways\
<u>Case 3</u> 8 symbols. $\rightarrow$ do in $n_{3}$ ways

and the total number of passwords is

$$
n=x_{1}+x_{2}+x_{3}
$$

Now case by case, by the product rule

$$
\begin{aligned}
& n_{1}=(26) \cdot(36)(36)(36)(36)(10)=436,700,160 \\
& n_{2}=(26)(36)(36)(36)(36)(36)(10)=36 \cdot n_{1} \\
& n_{3}=(26)(36)(36)(36)(36)(36)(36)(10)=36^{2} \cdot n_{1}
\end{aligned}
$$

so $n=n_{1}\left(1+36+36^{2}\right)=n_{1}(1333)$ $ =582,121,312,280 $

This example is an application of the **Inclusion-Exclusion Principle** to counting

How many bit strings of length 9 start witt 2 zeros or end with one?

Let $A=$ set of bit strings of length 9 that start with 2 zeros.

$|A|=2^{7}$ since we put 2 zeros at the start in one way and put the other 7 bits in $2^{7}$ ways.

$B=$ set of bit strings of length 9 that end with one $ |B|=2^{8} $

Now the set of bit strings that start with 2 zeros <u>or</u> end with 1 one is $A \cup B$ and

$$
|A \cup B|=|A|+|B|-|A \cap B|=2^{7}+2^{8}-|A \cap B|
$$

But $|A \cap B|=$ \# bit stings of length 9 with 2 zeros at start and one at the end $=2^{6}$

$$
\begin{aligned}
\therefore|A \cup B| & =2^{7}+2^{8}-2^{6}=2^{6}(2+4-1)=5 \cdot 2^{6} \\
& =10 \cdot 2^{5}=320 .
\end{aligned}
$$

3) Four different coins can be placed in 3 different cans in how many ways if
i) there are no restrictions
ii) can\#1 has at least 1 coin in it?

**Solution**

**i)** $4\ coins \rightarrow 3\ cans$ This can be thought of as the number of functions from a set of 4 objects (coins) to a set of 3 objects (cans)

$$
\therefore \text { \# of ways }=3^{4}=81
$$

**ii)** To calculate the \# of ways can \#1 gets at least one coin consider that of all the ways to place the coins, there are 2 disjoint cases

$\{$ can\#1 has no coins $\}$ or $\{$ can \#1 has some coins\} ie; at least one

$$
and\quad 81=|\operatorname{case} \#1|+| \operatorname{case} \# 2 \mid
$$

Now if can\#1 has no coins, then we are placing 4 coins in 2 cans in $2^{4}=16$ ways

$\therefore$ \# of ways can \#1 has at least 1 coin

$$
=81-16=65 \text { ways }
$$

**Further Examples**

1) A binary operation on a set $A$ is a mapping $*: A\times A\to A$\
   That is $*$ takes two elements $a, b \in A$ and combines them to get an element $c$ of $A$. If $(a, b) \in A \times A$ then

$$
*(a, b)=c \text { iff } a * b=c
$$

To determine the number of binary operations on a finite set we note that if $|A|=n$, then $|A \times A|=n^{2}$\
Thus the number of binary operations on $A$ is the number of functions from a set of size $n^{2}$ to a set of size $n$,

Thus the number of binary operations is $n^{\left(n^2\right)}$

**For example**, if $A=\{a, b, c, d\}$, then the number of distinct binary operations is

$$
2^{32}=4^{16}=4,294,967,296
$$


1) Let $A$ be a set of $n\ distinct$ elements, $A=\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}$\ 
Let $f: A \rightarrow A$ be $1-1$ and onto. How many such $f$ are there?

Since $f\left(1-1, \quad f\left(a_{i}\right) \neq f\left(a_{j}\right) \quad\right.$ if $i \neq j$

Now for $f\left(a_{1}\right)$ we have $x$ choices of the image\
Once this image is used, it cant be used again since $f$ is $1-1$\
Thus for $f\left(a_{2}\right)$ we have $n-1$ choices, $f\left(a_{3}\right)$ has $x-2$ choices, etc, until for $f\left(a_{n}\right)$ we have only one choice.

Thus $\#$ of $1-1$ onto maps of $A=\left\{a_{1}, a_{2}, \ldots, a_{n}\right\}$ is

$$
N=n(x-1)(x-2) \cdots 2 \cdot 1=x !
$$

Such a function $f: A \rightarrow A,\quad 1-1$ onto is called a **permutation**

We study permutations of a more general kind later

## Tree Diagrams

For some complicated counting problems, it can be useful to use a **tree diagram**

A tree consists of a root, a number of branches leaving the root, and perhaps, additional branches leaving the ends of each branch, and so on.

For a counting problem we use a branch to represent each possible choice in a stage of a process

**Example** How many bit strings of length 5 do not have 2 consecutive ones?
Each branch represents a bit so there is 5 bits

![](https://cdn.mathpix.com/cropped/2023_06_13_e31197ebaebba7fa7fd3g-11.jpg?height=552&width=784&top_left_y=1487&top_left_x=742)

**Answer**: 13 They are

$$
\begin{aligned}
& 10101,10100,10010,10001,10000,01010,01001,01000 . \\
& 00101,00100,00010,00001,00000
\end{aligned}
$$

also note, therefore $2^{5}-13=32-13=19$ bit strings have at least two consecutive 1's.

## The Pigeon Hole Principle (Dirichlet Drawer Principle)

If $k+1$ or more objects are placed into $k$ boxes, then there is at least one box containing 2 or more objects

**Proof** Suppose none of the boxed contains more than one object. Then the total number of objects is at most $k$. This contradicts the hypothesis that we have at least $k+1(>k)$ objects

**Trivial Example** a collection of 367 people must have at least 2 people with the same birthday.

**Non-Trivial Example** For every integer $n$, $\exists d \in \mathbb{Z}$ such that $d \cdot n$ has only zeros and ones in its decimal representation

**Proof** Without loss of generality, we may assume that $n>0$. If not apply what follows to $-x>0$, to get $-d n$ with only zeros and ones in ito expansion

For $n>0$, consider the set $S$ of $x+1$ different

numbers: $1,11,111,1111, \cdots, \underbrace{11 \cdots 1}_{n+1\ digits}$ 

Since there are only $n$ possible remainders when an integer is divided by $n$, two of these numbers have the same remainder when divided by $n$. Let these numbers be $a, b$ where $a>b$.

Then $a \equiv b(\bmod\ n)$

and hence $a-b \equiv 0(\bmod\ n)$

Thus $a-b$ is $a$ multiple of $n, a-b=d \cdot x$ and $a-b$ has only zeros and ones in its decimal representation

$$
\begin{aligned}
a & =&1111111 \\
-b & =&1111 \\
\hline
a-b &=& 1110000
\end{aligned}
$$

## Generalized Pigeon Hole Principle

If $N$ objects are placed into $k$ boxes, then there is at least one box containing $\left\lceil\frac{N}{R}\right\rceil$ objects.

**Proof** Suppose the conclusion is false\
Then none of the $k$ boxes contains more than $\left\lceil\frac{N}{k}\right\rceil-1$ objects

Then the total number of objects is at most

$$
k\left\{\left\lceil\frac{N}{k}\right\rceil-1\right\}<k\left\{\left(\frac{N}{k}+1\right)-1\right\}=N
$$

**Example** Assume that in a group of 6 people, each pair of individuals consists of either 2 friends or 2 enemies. Show that there are either three mutual friends on three mutual enemies in the group

**Solution** Let the people be called
$A, B, C, D, E, F$. Consider the person called $A$. The other five people are either friends of $A$ or enemies of $A$. One of these two sets will have at least $3=\left\lceil\frac{5}{2} 7\right\rceil$ people in it

Suppose there are at least 3 friends of A in the other 5 Take any 3 other people. If 2 these are friends, then these two and A make three mutual friends. If none of these 3 people are friends, then they are 3 mutual enemies

This argument can be mirrored if $A$ has at least 3 mutual enemies, to complete the proof

## Permutations

A permutation on a set of $n$ objects is a re-ordering of the elements. Here we are assuming that the objects are distinct, ie, we can tell them apart, and certainly that their order matters

The number of ways to permute $n$ distinct objects is $n! = n(n-1)\cdots 2\cdot 1$ where by convention, $0! =1$

Suppose now we have $n$ distinct objects and we went to select $r$ of these objects, in order, How many different ways can we do this?

This is called an **r-permutation**:

Picking $r$ distinct objects from $n$ distinct objects where the order of choice matters.

The number of ways to do this in denoted $P(n, r)$ and

$$
\boxed{
  \begin{aligned}
  & P(n, r)=n(n-1) \cdots(n-r+1) \\
  & (n P r) &\uparrow \text{r terms here}
  \end{aligned}
}
$$

**Proof** We use the product rule of counting to show this fact

For the first selection we have $n$ choices, Fo the second selection we bare $n-1$ choices,

$\vdots$

For the $r^{\text {th }}$ selection we have $x-r+1$ choices $Q \in D$.

**Note** we can also write $P(n, r)=\frac{n !}{(n-r) !}$ since

$$
\begin{aligned}
\frac{n !}{(n-r) !} & =\frac{n(n-1) \cdots(n-r+1)(n-r) \cdots 2-1}{(n-r) \cdots 2 \cdot 1} \\
& =n(n-1) \cdots(n-r+1)
\end{aligned}
$$

**Examples**

1) How many different way can gold, silver and bronze medals be awarded for a race with 8 contestants, no ties allowed.

**Solution** $P(8,3)=8 \cdot 7 \cdot 6=336$ ways

2) How many ways can the letters $ABCDEFGHIJ$ be rearranged so that the letters $D E F$ are together in that order?

**Solution** Consider $DEF$ as one letter. Then we must find the number of permutations of 8 letters. This can be done

$$
8 !=40,320 \text { ways }
$$

1) Travelling Salesman Problem. a salesman must visit 10 different addresses. If she can visit each address in any order, how many different routes are possible?

Ans $10 !=3,628,800$ ways.

> If we now want to find the minimum distance route, we must compute 3,628,800 different distances and compare. This type of problem, routing, is a factorial growth complexity problem and very important and hard to deal with

## Combinations

Suppose now we want to select $r$ distinct objects from a collection of $n$ distinct objects, where the order of selection does not matter

That is we want to *choose* $r$ objects form $n$ objects

The number of ways this cen be done is called $C(n, r)$ or more commonly

$$
\left(\begin{array}{l}
n \\
r
\end{array}\right)={ }^{n} \text { choose } r=n C r
$$

We have

![](https://cdn.mathpix.com/cropped/2023_06_13_e31197ebaebba7fa7fd3g-18.jpg?height=213&width=1770&top_left_y=262&top_left_x=293)

**Proof** The number of ways of selecting. $r$ object where the order matters is $P(x, r)=x(x-1) \cdots(x-r+1)$

Alternately, we could select the $r$ objects first, in $C(x, r)$ ways and for each such choice of $r$ elements we have $r!$ ways to list them as 1st choice, 2nd choice,..., $r^{\text {th }}$ choice.

**Thus**

$$
P(n, r)=r!\ C(n, r) \text { by the product rule }
$$

**Thus**

$$
\left(\begin{array}{l}
n \\
r
\end{array}\right)=\left(C(n, r)=\frac{P(n, r)}{r !}=\frac{n(n-1) \cdots(n-r+1)}{r !}\right.
$$

**Note** 

$\displaystyle\left(\begin{array}{l}n \\ r\end{array}\right)=\frac{n !}{r !(x-r) !}$ This is valid for $n,r$ positive integers

$\displaystyle\left(\begin{array}{l}n \\ r\end{array}\right)=\frac{n(n-1) \cdots(n-r+1)}{r !}$ is valid for $n \in \mathbb{R}$ $r$ positive integer 

By convention

$$
\left(\begin{array}{l}
n \\
0
\end{array}\right)=1,\quad \forall n,\quad\left(\begin{array}{l}
0 \\
r
\end{array}\right)=0, r=1,2, \cdots
$$

also we have

$$
\begin{array}{ll}
\left(\begin{array}{l}
n \\
1
\end{array}\right)=n & , \forall n \\
\left(\begin{array}{l}
n \\
n
\end{array}\right)=1 & , \forall n \in \mathbb{Z}^{+}
\end{array}
$$

The numbers $\left(\begin{array}{l}n \\ r\end{array}\right), r=0,1, \cdots, n$ are called the **binomial coefficients** and we will consider this aspect of them later

**Note also** 

$\left(\begin{array}{l}n \\ r\end{array}\right)$ is the number of subsets of size $r$ in a set with $n$ element. If $S$ a set, $|S|=n$, then

$$
|P(S)|=2^{n}
$$

And $P(S)$ is the union of all subsets with 0 element, all subsets with 1 element, ..., all subsets with $n$ elements, with $\left(\begin{array}{l}n \\ 0\end{array}\right)=1,\left(\begin{array}{l}n \\ n\end{array}\right)=1$, we have by the

$$
|P(S)|=\left(\begin{array}{l}
n \\
0
\end{array}\right)+\left(\begin{array}{l}
n \\
1
\end{array}\right)+\left(\begin{array}{l}
n \\
2
\end{array}\right)+\cdots+\left(\begin{array}{c}
n \\
n-1
\end{array}\right)+\left(\begin{array}{l}
n \\
n
\end{array}\right)=2^{n}
$$

We have just given a combinatorial

(20proof of the following algebraic result

**Theorem**

 $\sum_{r=0}^{n}\left(\begin{array}{l}n \\ r\end{array}\right)=2^{n}$

We can also give a combinatorial proof of the following fact or an algebraic proof

**Theorem**
$\left(\begin{array}{l}n \\ r\end{array}\right)=\left(\begin{array}{c}n \\ n-r\end{array}\right)$

**Proof**

 $\left(\begin{array}{c}n \\ n-r\end{array}\right)=\displaystyle\frac{n !}{(n-r) !(n-(n-r)) !}=\frac{n !}{(n-r) ! r !}=\left(\begin{array}{c}n \\ r\end{array}\right)$

**alternate** 

Let $S$ be a set of $x$ elements. Let $A \subseteq S$ have $r$ elements.

Then $\bar{A}=S-A$ has $n-r$ elements.

Thus for every subset of size $r$, there is exactly one of size $n-r$

$$
\therefore\left(\begin{array}{c}
n \\
n-r
\end{array}\right)=\left(\begin{array}{l}
n \\
r
\end{array}\right) \text {. }
$$

**Examples**

1) How many five and hands can be dealt from a standard playing deck of 52 cards?

ans $\left(\begin{array}{c}52 \\ 5\end{array}\right)=\frac{52 \cdot 51 \cdot 50 \cdot 49 \cdot 48}{5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}=52 \cdot 51 \cdot 4.9 \cdot 20 =2,598,960$

2) How many five card hands can be dealt from a standard playing deck that contain exactly 3 hearts?

**Solution** This is a 2 stage process.

Fist we pick 3 hearts out of 13 hearts in $\left(\begin{array}{c}13 \\ 3\end{array}\right)=\frac{13.12 .11}{3.2 .1}=286$ ways

Then we pick 2 cards out of the remaining 39 cards in $\left(\begin{array}{c}39 \\ 2\end{array}\right)=\frac{39.38}{2.1}=741$ ways

Thus total \# of ways is $286 \times 741=211,926$

3) How many five card hands can be dealt from a standard playing deck that contain at least 3 hearts

**Solution** There are 3 cases to consider 
3 hearts **case 1** 
4 hearts **case 2**
5 hearts **case 3**

we know, $\#(case\ 1)=211926$

Now 4 heart and 1 non heart can be done in

$$
\left(\begin{array}{l}
13 \\
4
\end{array}\right) \cdot\left(\begin{array}{l}
39 \\
1
\end{array}\right)=\frac{13 \cdot 12 \cdot 11 \cdot 10}{4 \cdot 3 \cdot 2 \cdot 1} \cdot 39=715 \cdot 39=27,885
$$

So $\#(case\ 2)=27,885$

Alow 5 hearts. can be picked in

$$
\left(\begin{array}{l}
13 \\
5
\end{array}\right)=\frac{13 \cdot 12 \cdot 11 \cdot 10 \cdot 9}{5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}=13 \cdot 99=1287
$$

Thus at least 3 hearts can be done in $211926+27885+1287=241,098$ ways.

4) How many bit strings of length 12 contain
a) exactly 3 i's?
b) at most 3 i's ?
c) at least 3 1's ?
d) equal number of zeros \\& ones?

Solution

a) Consider the problem this way. Imagine a bit string of length 12 to be 12 slots that must be filled with zeros or I's. We have exactly 3 ones to put in the 12 slots. Once we have dore this we put zeros in all the rest. Thus we have $\left(\begin{array}{c}12 \\ 3\end{array}\right)=\frac{12 \cdot 11 \cdot 10}{3,2,1}=220$ ways

(23) to place the three ones in the bit string.

b) At most 3 means $0,1,2$, or 3 ones.

There are 4 cases and using the sum rule we see that there are

$\left(\begin{array}{c}12 \\ a\end{array}\right)+\left(\begin{array}{l}12 \\ 1\end{array}\right)+\left(\begin{array}{c}12 \\ 2\end{array}\right)+\left(\begin{array}{c}12 \\ 3\end{array}\right)$ ways to have at most 3 ones in the bit string of length 12 ii, $1+12+66+220=299$ bit stings with at most 3 ones

c) The number of bit strings with at least 3 ones is the total number of bit strings minus those with 0,1 or 2 ones

Thus we have $2^{12}-\left\{\left(\begin{array}{c}12 \\ 0\end{array}\right)+\left(\begin{array}{c}12 \\ 1\end{array}\right)+\left(\begin{array}{c}12 \\ 2\end{array}\right)\right\}=4096-(1+12+66)$

$$
=4017
$$

bit strings of length 12 with at least 3 ones. (24)

d) An equal number of ones and zeros means 6 ones 10 we candor this in

$$
\left(\begin{array}{l}
12 \\
6
\end{array}\right)=\frac{12 \cdot 11 \cdot 10 \cdot 9 \cdot 8 \cdot 7}{6.5 \cdot 4 \cdot 321}=11 \cdot 12 \cdot 7=924
$$

* Exercise Do example 4 a) -d) for bit strings of length 11 .

Recommended Exercises

th ROSEN:-

Ch $6.1 P 416 \rightarrow \# 1-26,34,35,50,51$

$$
\begin{aligned}
& 6,2 p 427 \# 15,16 \\
& 6.3 p 435 \rightarrow \pm 1-6,11,12,18-20,30 .
\end{aligned}
$$

(25)

$P 417 \# 7,8,9$

1. How many different 3 letter initials can people have?

$$
26 \cdot 26 \cdot 26=26^{3}=17,576
$$

8. 3 letter initials with norepeated letters?

$$
26 \cdot 25 \cdot 24=15,600
$$

9. 3 letter initials starting with $A$ ?

$$
A \cdot 26 \cdot 26=26^{2}=676 \text {. }
$$

p $427 \# 15$

(26)

a) Show that if 5 integers are chosen from the first 8 positive integers ie, from $\{1,2,3,4,5,6,7,8\}$ there must be a pair of these integers with a sum equal to 9.

b) Is the con clusion of a) true if 4 integers are chosen instead of 5?

a) Group the numbers in pairs

$$
\{1,8\},\{2,7\},\{3,6\},\{4,5\}
$$

Pick 5 numbers, By P.H.P. we must pick both numbers in one of these sets $Q \in D$

b) No, pick 1,2,3,4

No pair of these add up to 9 .

