# Discrete Probability 
## An introduction

### Finite Probability

An **experiment** is a procedure that gives a set of outcomes. This set of all possible outcomes is called the **Sample Space**, $S$\
We will for now, assume that $0 \lt |S|\lt+\infty$

We also make the basic assumption that each outcome in the sample space, $S$, is *equally likely* to happen

An **event**, $E$, is a subset of $S$ - That is $E\subseteq S$

**Definition** The probability of an event $E \subseteq S$, where $S$ is a finite sample space with equally likely outcomes is

$$
P(E)=\frac{|E|}{|S|}
$$

A typical simple sample space $S$ would be the roll of a fair die, or the toss of a pair of dice, the cut of a deck of playing cards, the choice of 6 numbers ont of 49 etc

### Example 1
**Consider a 6 sided fair die**

The outcomes possible are

$$
\mathcal{S}_{1}=\{1,2,3,4,5,6\}
$$

Let $E$ be the event that the outcome is an even integer\
Then $E=\{3,4,6\}$ and $\displaystyle P(E)=\frac{3}{6}=\frac{1}{2}$.



### Example 2 
**Consider the toss of two fair distinguishable dice**\
Then the sample space is, using the same notation as *Exercise 1*,

$$
\begin{aligned}
S_{2} & =S_{1} \times S_{1}=\{(x, y) \mid x, y \in S,\} \\
& =\{(1,1),(1,2),(1,3), \cdots,(6,5),(6,6)\}
\end{aligned}
$$

Clearly $\left|S_{2}\right|=6\cdot 6=36$.

---
Let $E_{1}$ be the *event* that the *two dice add up to 7* .

Then $E_{1}=\{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}\quad thus\ \mid E_1 \mid =6 $

$$\therefore \quad P\left(E_{1}\right)=\frac{6}{36}=\frac{1}{6}$$

---
Let $E_{2}$ be the *event* that the *two dice come up the same*\
Clearly $\left|E_{2}\right|=6$ and hence $P\left(E_{2}\right)=\frac{1}{6}$

---
Let $E_{3}$ be the outcome die\#1 > die\#2

$$
\begin{aligned}
 \text { Then } E_{3}=\ \{\quad&(2,1),(3,1),(3,2),\\
 &(4,1),(4,2),(4,3),\\
 &(5,1),(5,2),(5,3),\\
 &(5,4),(6,1),(6,2),\\
 &(6,3),(6,4),(6,5)\quad\},\\ \mid E_{3} \mid\ =15
\end{aligned}
$$

and $P\left(E_{3}\right)=\frac{15}{36}=\frac{5}{12}$.


### Example 3
**Consider Lotto 649**\
**What is the probability that the 6 numbers you pick will win the grand prize?**

Here the sample space $S$ is all possible ways to pick 6 out of 49 .

Thus $|S|=\left(\begin{array}{c}49 \\ 6\end{array}\right)$

Here our event $E$ is the outcome where the exact 6 numbers you picked are the ones that fall out of the drum. Thus $|E|=1$ and

$$
\begin{aligned}
P(E) & =\frac{1}{|S|}=\left(\frac{49}{6}\right)^{-1}=\frac{\cancel{6}\cdot\cancel{5} \cdot\cancel{4} \cdot\cancel{3}\cdot\cancel{2}\cdot1}{49\cdot\cancel{48} \cdot47 \cdot 46\cdot _3^{\cancel{45}} \cdot44} \\
& =\frac{1}{49\cdot47\cdot46\cdot3\cdot44}=\frac{1}{13,983,816}
\end{aligned}
$$

### Example 4 
**What in the probability that the 5 card hand you get dealt from a standard playing deck is all one suit?**

Here $S=$ all 5 card hands and

$$
\mid S\mid =\left(\begin{array}{c}
52 \\ 5
\end{array}\right)
$$

$$
\begin{aligned}
& \textbf { Spades }&=13 \\
& \textbf { Hearts }&=13 \\
& \textbf { Diamonds }&=13 \\
& \textbf { Clubs }&=13
\end{aligned}
$$

$E=$ all cards from one suit and $
\begin{aligned}
& |E|=4 \cdot\left(\begin{array}{c}
13 \\
5
\end{array}\right)
\end{aligned} $ and

$$
P(E) = \frac{4\cdot \left(\begin{array}{c}
13 \\ 5
\end{array}\right)}{\left(\begin{array}{c}
52 \\ 5
\end{array}\right)} = \frac{ _{\cancel{4}}^1\cdot _{\cancel{13}}^1\cdot _{\cancel{12}}^1\cdot 11 \cdot _{\cancel{10}}^1\cdot _{\cancel{9}}^3\cdot
}{_4^{\cancel{52}} \cdot _{17}^{\cancel{51}} \cdot _5^{\cancel{50}}  \cdot 49 \cdot _1^{\cancel{50}}} = \frac{11\cdot 3}{4 \cdot 17 \cdot 5 \cdot 49} =\frac{33}{6860}\\ \doteqdot 0.0048(=0.48 \%) 
$$

**Note** It is always true that $ 0 \leq P(E) \leq 1 $

### Further Facts

1) Let $E \subseteq S$ The event that $E$ does not occur\
   $\bar{E}$ is the **complement** of $E$ in $S$

$$
|\bar{E}|=|S|-|E|
$$

so $\displaystyle P(\bar{E})=\frac{|S|-|E|}{|S|}=1-\frac{|E|}{|S|}=1-P(E)$

2) Let $E_{1}+E_{2}$ be two events in $S$,

Then $ P\left(E_{1} \cup E_{2}\right)=P\left(E_{1}\right)+P\left(E_{2}\right)-P\left(E_{1} \cap E_{2}\right) $

by the rule of **inclusion-exclusion**

#### Examples

1) The Birthday Problem.

**A group of $n$ people has gathered. We want to find the probability that we can find a pair of people with the same birthday**

> We must make the assumption that all birthdays are equally likely (not true).

We also assume that $\text{Feb 29 = Feb 28}$ , so that there are 365 possible birthdays

We let $E=$ at least one pair of people have the same birthday

We will find $P(\bar{E})$ and then $P(E)=1-P(\bar{E})$

Now $|\bar{E}|=$ number ways $n$ people have different birthdays

$$
=365 \cdot 364 \cdot 363 \cdots(365-n+1)(=P(365, n))
$$

The total number of ways that $n$ people can

Have birthdays is $365^{n}=|S|$

Thus $P(\bar{E})=\frac{365 \cdot 364 \cdots(365-n+1)}{365^{n}} =\frac{364 \cdot 363 \cdot \ldots \cdot(366-n)}{365^{n-1}}$

$$

$$

and $P(E)=1-\frac{P(364, n-1)}{365^{n-1}}$

**Exercise** What is the minimum number, $n$, such that $P(E) \geqslant \frac{1}{2}$ ?\
*Hint :* this implies $P(\bar{E})<\frac{1}{2}$ 
*This is best done by trial and error?*

1) Let's Make a Deal

You are given the choice of picking one of 3 doors to win the grand prize

You pick a door. The host then opens one of the other 2 doors and shows you that it was a "losing door", You are then offered the choice of switching doors

**What should you do?**

Since the doors are equally likely that they hide the jackpot, the probability that your choice was correct is $\frac{1}{3}$, and wong is $\frac{2}{3}$.

Thu the probability that the other two dooms hid the jackpot is $\frac{2}{3}$, and since this is not affected by the opening of a losing dore, the probability that your door is wrong is still $\frac{2}{3}$ ?

Thus the other door is the night choice with a probability of $\frac{2}{3}$, so switch doors

---
1) What in the probability that a card selected from a deck is an ace?

**Solution** 
Let $S=\{$ deck of cards, $|S|=52$

Let $E=\{$ an ace is picked $\},|E|=4$

$$
\therefore\quad P(E)=\frac{|E|}{|S|}=\frac{4}{52}=\frac{1}{13}
$$


### Example 4 
**What is the probability that a 5 card poker hand contains the ace of hearts**

**Solution** Let $S=\{5$ card poker hands $\}$

$$
|S|=\left(\begin{array}{c}
52 \\
5
\end{array}\right)
$$

Let $E=\{5$ card hand with $A \hearts\}$

$$
\begin{aligned}
&|E|=\left(\begin{array}{c}
51 \\
4
\end{array}\right) \quad\text { why? } \\
& \therefore P(E)=\left(\begin{array}{c}
51 \\
4
\end{array}\right) \Bigg/\left(\begin{array}{c}
52 \\
5
\end{array}\right) \\
&=\frac{\cancel{51}\ \cancel{50}\ \cancel{49}\ \cancel{48}}{\cancel{4}\ 3\ 2\ 1}\cdot\frac{5\ \cancel{4}\ \cancel{3}\ \cancel{2}\ \cancel{1}}{52\ \cancel{51}\ \cancel{50}\ \cancel{49}\ \cancel{48}}=\frac{5}{52}
\end{aligned}
$$

### Example 5
**What is the probability that a 5 card poker hand has two pairs?**

**Solution** Let $E=\{5$ card hands with two pairs $\}$

$$
\text { Then }|E|=\\[1em]
\text{pick the value of the pairs}\rightarrow\left(\begin{array}{c}
13 \\ 2
\end{array}\right) \cdot\left(\begin{array}{c}
4 \\ 2
\end{array}\right) \cdot\left(\begin{array}{c}
4 \\ 2
\end{array}\right) \cdot\left(\begin{array}{c}
44 \\ 1
\end{array}\right) \rightarrow \text{pick the fifth card}\\
\quad\quad\uparrow\\
\text{pick the two cards with one of the given values}
$$

$$
\begin{aligned}
& =\frac{13 \cdot 12}{2 \cdot 1} \cdot \frac{4\cdot3}{2 \cdot 1} \cdot \frac{4\cdot3}{2\cdot1} \cdot 44 \\
& =13 \cdot 6^{3} \cdot 44
\end{aligned}
$$

Thus

$$
\begin{aligned}
P(E) & =\frac{13\cdot6^{3} \cdot 44}{\left(\begin{array}{c}
52 \\ 5
\end{array}\right)} \\
& =\frac{123,552}{2,598,960}=\frac{198}{4,165} \\
& \doteqdot 0.0475=4.75\%
\end{aligned}
$$

**Exercises** $\text{\S 7.1 p 475 \# 1 - 18, 24, 25}$

## Discrete Probability

So far we have dealt only with the <u>very</u> restricted case where our sample space $S$ is <u>finite</u> and each outcome in (ie., element of) $S$ and is *equally likely*

This is insufficient on two counts

1. We often deal with experiment where the sample space is <u>not finite</u>. when $S$ is infinite it can be countable or uncountable

When $S$ is countable $|S| \leq\ \alef_0$ we talk about *Discrete sample spaces* and when $S$ is uncountable we talk about *Continuous sample spaces* The analysis of Continuous Probability requires calculus methods (see M2236)

2. All outcomes need not he *equally, likely*\
   For example an "unfair" die 1 may come up more often than 6 does

**To deal with these situations we will develop a theory of Probability for Discrete Sample Spaces**

Let $S$ be a countable sample space (finite or infinite) and $s \in S$ be an outcome. We assign a probability $p(s)$ to each outcome. so that $P: S \rightarrow \mathbb{R}$ satisfies the following

i) $0 \leqslant p(s) \leq 1$

ii) $\displaystyle\sum_{s\in S} p(s)=1$

**Note** i) $\Rightarrow\Bigg\{\begin{array}{l}n o \text { negative probabilities, } \\ \text { no probabilities }>1 \end{array}$

ii) If $|S|=n<+\infty$, then with $S=\left\{s_{1}, \cdots, s_{n}\right\}$,

$$
\sum_{k=1}^{n} p\left(s_{k}\right)=1
$$

If $|S|=\alef_{0}$, then with $S=\left\{s_{1}, s_{2}, \ldots\right\}$

$$
\sum_{k=1}^{\infty} p\left(s_{k}\right)=1\qquad \text{convergent infinite series}
$$

*This imposes "severe" restrictions on $p$*

If $p: S \rightarrow \mathbb{R}$ satisfies i) and ii) we call $p(s)$ a probability distribution on $S$

Now let $E \subseteq S$ be an event, we define

$$
P(E)=\sum_{s \in E} P(s) .
$$

That is the probability of an event is the sum of the probabilities of all the outcomes that comprise the event

This definition of probability also exhibits the properties of Finite probability mentioned earlier

1) $P(\bar{E})=1-P(E)$

2) $P\left(E_{1} \cup E_{2}\right)=P\left(E_{1}\right)+P\left(E_{2}\right)-P\left(E_{1} \cap E_{2}\right)$

and one further property

3) $P\left(\cup_{i} E_{i}\right)=\sum_{i} P\left(E_{i}\right)$

for <u>all</u> pairwise disjoint events $E_{4}, E_{2}, \ldots$

### Examples

1. Let us have a die. that comes up 1 or 6 twice as often as all other numbers

Here $S=\{1,2,3,4,5,6\}$

and

$$
p(1)=p(6)=2 p(2)=2 p(3)=2 p(4)=2 p(5)
$$

and

$$
\begin{aligned}
1 & =\sum_{k=1}^{6} p(k)=p(1)+p(2)+p(3)+p(4)+p(5)+p(6) \\
& =2 p(2)+p(2)+p(2)+p(2)+p(2)+2 p(2) \\
& =8 p(2)
\end{aligned}
$$

$\therefore \quad p(2)=\frac{1}{8}=p(3)=p(4)=p(5)$

![](https://cdn.mathpix.com/cropped/2023_06_13_00981bec086c65a5cd13g-13.jpg?height=596&width=1131&top_left_y=1429&top_left_x=309)

**For this probability distribution, ie for this die, what is the probability that 2 rolls of this die add up to less than 6**

$$
\begin{aligned}
& S=\{(1,1),(1,2),\cdots ,(6,5),(6,6)\} \\
& E=\{(1,1),(1,2),(1,3),(1,4),(2,1),(2,2),(2,3),(3,1),(3,2),(4,1)\} \\
& P(1,1)=\frac{1}{4} \cdot \frac{1}{4}=\frac{1}{16}\qquad P(1,2)=\frac{1}{4} \cdot \frac{1}{8}=\frac{1}{32} \\
& P(1,3)=\frac{1}{32}=P(1,4)\qquad P(2,1)=\frac{1}{32},\qquad P(2,2)=\frac{1}{64} \\
& P(2,3)=\frac{1}{64}\qquad P(3,1)=\frac{1}{32}\qquad P(3,2)=\frac{1}{64}\qquad P(4,1)=\frac{1}{32} \\
& P(E)=\sum_{s \in E} P(s)=\frac{1}{16}+\frac{6}{32}+\frac{3}{64}+\frac{4}{64}+\frac{12}{64}+\frac{3}{64}=\boxed{\frac{19}{64}}
\end{aligned}
$$

---
1. Consider the following experiment A fair coin is tossed repeatedly until a Heads occurs
   $(P(H)=P(T) =\frac{1}{2})$ 

The sample space consists of the number of tosses until we get an $H$

Clearly $S=\{1,3,4, \cdots\}$

This type of situation is called **Repeated Bernoulli Trials**\
a **Bernoulli Trial** is an experiment with only 2 possible outcomes called success or failure\
 If $p($ success $)=\theta$, then $p($ fail $)=1-\theta$

Repeated Bernoulli Trails are when, we examine the outcome of *independent* trials *the result on this flip of the coin doesn't depend on previous flips outcomes* In this case the probability of a repeated trial is the product of the probability of each individual trial

For repeated flips of a fair coin\
The probability that the first $H$ occurs on the $n \frac{\text { th }}{}$ toss is $\displaystyle\frac{1}{2^{n}}$ since this is the outcome

$$
\begin{aligned}
\\
&\underbrace{T\ T\ T \cdots T}_{n-1 \text { tails }} \cdot H \leftarrow\text{ first head}\\
&\overbrace{\frac{1}{2}\cdot\frac{1}{2}\cdots\frac{1}{2}} \cdot \frac{1}{2}=\frac{1}{2^{n}}

\end{aligned}
$$

Define therefore the probability function

$$
p(n)=\frac{1}{2^{n}},\qquad n=1,2,3, \cdots
$$

Clearly $0 \leq p(n) \leq 1,\quad \forall n=1,2 \cdots\qquad$so property i) is satisfied

as for property ii)

$$
\begin{aligned}
\sum_{s \in S} p(s) & =\sum_{n=1}^{+\infty} \frac{1}{2^{n}}=\sum_{n=1}^{+\infty}\left(\frac{1}{2}\right)^{n}=\frac{1}{2}\left(\frac{1}{1-\frac{1}{2}}\right) \\[2em]
& =\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\cdots=1
\end{aligned}
$$

**Exercise**: What is the probability that the first H occurs on,\
an even numbered toss? , an odd numbered toss?

$E_{1}=\{$ first $H$ is on an even numbered toss $\}$

$E_{2}=\{$ first $H$ is on an odd numbered toss $\}$

Clearly $E_{1}=\bar{E}_{2}$ so $p\left(E_{1}\right)=1-p\left(E_{2}\right)$

$$
 \begin{aligned}
\text { Now }\qquad P\left(E_{1}\right) & =\sum_{n=1}^{\infty} P(2 n)=\sum_{n=1}^{\infty} \frac{1}{2^{2 n}} \\[2em]
& =\sum_{n=1}^{\infty}\left(\frac{1}{4}\right)^{n}=\frac{1}{4}+\frac{1}{4^{2}}+\frac{1}{4^{3}} \\[2em]
& =\frac{1}{4}\left[1+\frac{1}{4}+\frac{1}{4^{2}}+\frac{1}{4^{3}}+\cdots\right] \\[2em]
& =\frac{1}{4} \cdot \frac{1}{1-\frac{1}{4}}=\frac{1}{4} \cdot \frac{1}{\left(\frac{3}{4}\right)}=\frac{1}{3} \\[2em]
P\left(E_{1}\right) =\frac{1}{3},\qquad P\left(E_{2}\right)=\frac{2}{3}
\end{aligned}
$$

(17)

\\#2 on Exercise sheet for $L 19 \& 20$

What is the probability that a bit string of length 10 will

a) Start with 2 zeroes or end with 3 ones?

Here $S=\{$ bit strings of length 10$\}=B_{i} t_{10}$

$$
\begin{aligned}
& |S|=2^{10} \\
& E=\{\text { start with } 00 \text {, er end with } 111\} \\
& E=E_{1} \cup E_{2} \quad E_{1}=\{\text { start with } 00\} \\
& E_{2}=\{\text { end with } 111\} \\
& \left|E_{1}\right|=2^{8}\left|E_{2}\right|=2^{7}\left|E_{1} \cap E_{2}\right|=2^{5} \\
& |E|=2^{8}+2^{7}-2^{5}=352 \\
& P(E)=\frac{352}{2^{10}}=\frac{11}{32}
\end{aligned}
$$

(18)

b) Contain exactly 3 ones

$$
\begin{array}{ll}
E=\{\text { exactly } 3 \text { ones }\} \quad|E|=\left(\begin{array}{l}
10 \\
3
\end{array}\right)=\frac{10 \cdot 9 \cdot 8^{4}}{x \cdot 2 \cdot 1} \\
P(E)=\frac{120}{2^{10}}=\frac{15}{128} & =120
\end{array}
$$

c) $E_{c}=\{$ less them 4 ones $\}$

$$
\begin{aligned}
\left|E_{c}\right| & =\left(\begin{array}{c}
10 \\
0
\end{array}\right)+\left(\begin{array}{c}
10 \\
1
\end{array}\right)+\left(\begin{array}{c}
10 \\
2
\end{array}\right)+\left(\begin{array}{c}
10 \\
3
\end{array}\right) \\
& =1+10+45+120=176 \\
P(E & =\frac{176}{2^{10}}=\frac{11}{64}
\end{aligned}
$$

d)

$$
\begin{aligned}
& E_{d}=\{\text { contaexis at least } 4 \text { ones }\}=\bar{E}_{c} \\
& P\left(E_{d}\right)=1-P\left(E_{c}\right)=1-\frac{11}{64}=\frac{53}{64}
\end{aligned}
$$

