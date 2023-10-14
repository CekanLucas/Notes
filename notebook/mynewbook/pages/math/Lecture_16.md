Recall: *Principle of Mathematical Induction* (PMI)

If $P\left(n_{0}\right)$ is True (*Basis Step*)\
and $P(k) \rightarrow P(k+1)$ is True, $\forall k \geqslant n_{0}$ (*Inductive Step*) then $\forall n \geqslant n_{0}\quad P(n)$ is a true proposition.

**Example Prove** $5\mid 8^{n}-3^{n}, \forall n \geqslant 1$

Let $P(n): 5\mid 8^{n}-3^{n}$

For $n=1,\quad P(1): 5\mid 8^{1}-3^{1} \checkmark$ this is true

assume that $P(k)$ is true ie., $5\mid 8^{k}-3^{k}$\
Thus $8^{k}-3^{k}=5 t \quad$ for some $t \in \mathbb{Z}^{+}$

ie $8^{k}=3^{k}+5 t$

Now

$$
\begin{aligned}
8^{k+1}-3^{k+1} & =8\left(8^{k}\right)-3^{k+1} \\
& =8\left(3^{k}+5 t\right)-3^{k+1} \\
& =8 \cdot 3^{k}-3^{k+1}+5(8 t) \\
& =8 \cdot 3^{k}-3\cdot 3^{k}+5(8 t) \\
& =(8-3)  3^{k}+5(8 t) \\
& =5 \cdot 3^{k}+5\left( 8 t\right) \\
& =5(\underbrace{3^{k}+8 t}_{\in\Bbb{Z}^+})
\end{aligned}
$$

$\text{This divides 5} \therefore P(k+1)$ is true

Thus $5\mid 8^{n}-3^{n} \quad \forall n\geqslant 1,\quad n \in \mathbb{Z}^{+}$

**Note** It is not surprizing that 5 divides $8^{n}-3^{n}$ since $8-3=5$ and we have the general result

Thu Let $x, y \in \mathbb{R}, n \in \mathbb{Z}^{+}$. Then

$$
\begin{aligned}
x^{n}-y^{n} & =(x-y) \sum_{k=0}^{n-1} x^{n-1-k} y^{k} \\
& =(x-y)\left\{x^{n-1}+x^{n-2} y+\cdots+x y^{n-2}+y^{n-1}\right\}
\end{aligned}
$$

**Proof** Let $\displaystyle f(n)=\sum_{k=0}^{n-1} x^{n-1-k} y^{k}$

Our result then takes the form

$$
\forall n \in \mathbb{Z}^{+}\left\{x^{n}-y^{n}=(x-y) f(x)\right\} \text { as }
$$

a **universally quantified proposition**

We prove this result by the *principle of mathematical induction*:

$\displaystyle P(1): x-y=(x-y) \sum_{k=0}^{0} x^{0-k} y^{k}=(x-y)\left\{x^{0} y^{0}\right\}=x-y$

This is a trivial case. There is nothing proven\
As a safety precaution, we check $P P(2)$, which is not a trivial case.

$P(2): \quad x^{2}-y^{2}=(x-y)(x+y)$ and

$$
x+y=\sum_{k=0}^{1} x^{1-k} y^{k}=x^1 y^{k}+x^{0} y^1=x+y
$$

and $P(2)$ is true

Assume now that $P(k)$ is true, where $k \geqslant 1$.

Then

$$
\begin{align}
x^{k+1}-y^{k+1}&=x\left(x^{k}-y^{k}\right)+x y^{k}-y^{k+1} \\
&=x\left(x^{k}-y^{k}\right)+(x-y) y^{k} \\
&=x(x-y) f(k)+(x-y) y^{k},\text{by hypothesis} \\
&=(x-y)\left[x f(k)+y^{k}\right] \\
&=(x-y)\left[x \sum_{l=0}^{k-1} x^{k-1-l} y^{l}+y^{k}\right] \\
&=(x-y)\left[\sum_{l=0}^{k-1} x^{k-l} y^{l}+y^{k}\right] \\
&=(x-y)\left[\sum_{l=0}^{k-1} x^{k-l} y^{l}+x^{0} y^{k}\right] \\
&=(x-y)\left[\sum_{l=0}^{k-1} x^{k-l} y^{l}+x^{k-k} y^{k}\right] \\
&=(x-y) \sum_{l=0}^{k} x^{k-l} y^{l}=(x-y) f(k+1)
\end{align}
$$

Thus $P(k) \rightarrow P(k+1)$ and by *principle of mathematical induction*

$$
\boxed{\forall n \geqslant 1, P(n)}
$$

ie. $x^{n}-y^{n}=(x-y)\left(x^{n-1}+x^{n-2} y+\cdots+x y^{n-2}+y^{n-1}\right)$

$$
x^{3}-y^{3}=(x-y)\left(x^{2}+x y+y^{2}\right)
$$


The buy to *principle of mathematical induction* is being able to show that $P(k) \rightarrow P(k+1)$.

If we can only show $P(k+1)$ is two by using more than one previous case,

ie, $\underbrace{P(k-l+1) \wedge P(k-l+2) \wedge \cdots \wedge P(k-1) \wedge P(k)}_{\textit{l cases}} \rightarrow P(k+1)$

can we still prove $\forall n P(n)$ is true?

The answer is yes if we expand our basis step to include the first $l$ propositions

## Stronger Principle of Mathematical Induction (SPMI)

If (A) $P(1) \wedge P(2) \wedge \cdots \wedge P(l)$ is $True$ me

and (B) $P(k-l+1) \wedge \cdots \wedge P(k) \rightarrow P(k+1)$ true, $\forall k \geqslant l$

Then $\forall n \geqslant 1 P(n)$ is true

---

> This form of induction is useful in proving results about recursively defined quantities

**Example** Let $\left\{h_{n}\right\}_{n=1}^{+\infty}$ be a sequence defined by

$$
\begin{aligned}
& h_{1}=1, h_{2}=2, h_{3}=3 \\
& h_{n}=h_{n-1}+h_{n-2}+h_{n-3},\quad n=4,5, \cdots \\
& \text { prove } h_{n} \leq 3^{(n-1)}=f(n),\quad \forall n=1,2,3, \cdots
\end{aligned}
$$

**Solution** The recurrence relation says that $h_{n}$ depends on 3 previous terms in the sequence, so we use *SPMl* with $l=3$\ 
Let $P(x): h_{n} \leq 3^{n-1}=f(n)$

**The basis Step**

$$
\begin{aligned}
& n=1, \quad h_{1}=1,\quad f(1)=3^{0}=1,\quad P(1) \text { is } T \\
& n=2, \quad h_{2}=2,\quad f(2)=3^1=3,\quad P(2) \text { is } T \\
& n=3, \quad h_{3}=3,\quad f(3)=3^{2}=9,\quad P(3) \text { is } T
\end{aligned}
$$

**Inductive Step**

assume $P(k-2) \wedge P(k-1) \wedge P(k)$ is True.

Then

$$
\begin{aligned}
h_{k+1} & =h_{k}+h_{k-1}+h_{k-2} \\
& \leq 3^{k-1}+3^{k-2}+3^{k-3} \quad \text { by hypothesis } \\
& =3^{k-3}(1+3+9)\\
& =3^{k-3}\cdot 13\lt 3^{k-3} \cdot 27=3^{k}=f(k+1)
\end{aligned}
$$

$\therefore P(k+1)$ is True and $ \forall n \geqslant 1,\quad h_{n} \leq 3^{n-1} \text {. } $

**Exercise** $p 350 \rightarrow 55,1 \geqslant 4,5,7,18,19$

>**Why Does PMI WORK?**\
>**<u>Well Ordered Principle</u>**
> Every non-empty subset of $\mathbb{Z}$ that is bounded below has a lead element

A set is bounded below if $\exists k \in \mathbb{Z}$ such that $k<x,\quad \forall x$ in the set.

Suppose $P(1)$ is true\
and $P(k) \rightarrow P(k+1),\quad \forall k \geqslant 1$.

Let us suppose, if possible, that there is one integer greater than $0$ such that $P(n)$ is false.

Let $S=\left\{x \in \mathbb{Z}^{+} \mid P(x)\right.$ is False $\} \neq \emptyset$

By Well Ordered Principle $S^1$ has a least element $n_{0}$ and since $P(1)$ is true, $n_{0}>1$ and $P\left(n_{0}\right)$ is false

Thus $n_{0}-1 \in \mathbb{Z}^{+}$and $n_{0}-1<n_{0}$ so $n_{0}-1 \notin S$ and $P\left(n_{0}-1\right)$ is true.

But $P\left(n_{0}-1\right) \rightarrow P\left(n_{0}\right)$ so $P\left(n_{0}\right)$ is $T$, contradicting statement

Thus our assumption that $S \neq \emptyset$ leads to a contradiction. Thus $S=\emptyset$ and hence $P(n)$ is tue, $\underbar{}\forall x \geqslant 1$

---

The Well Ordered Principle has other applications. Consider the following example

**Example** a proof that $\sqrt{2}$ is irrational

Suppose $\sqrt{2}=\frac{a}{b},\qquad a, b \in \mathbb{Z}^{+}$

Let $S=\left\{x \in \mathbb{Z}^{+} \mid x=k \sqrt{2}\right.$, for some $\left.k \in \mathbb{Z}^{+}\right\}$.

$S \neq \emptyset$ since $a=b \sqrt{2} \in S$ by assumption

By *W.0.P.* $S$ has a **least element $t$** and $t \in \mathbb{Z}^{+}, \quad t=s \sqrt{2}$ for some particular $s \in \mathbb{Z}^{+}$

Consider now the number $x=t \sqrt{2}-t$. We have $x=t \sqrt{2}-t=t \sqrt{2}-\Delta \sqrt{2}=(t-\Delta) \sqrt{2}$\ 
Now $x \in \mathbb{Z}$ since $t \sqrt{2}=s \cdot 2 \in \mathbb{Z}^{+}$

Also $x=t \sqrt{2}-t=t(\sqrt{2}-1)>0$ since $\sqrt{2}>1$, so $x \in \mathbb{Z}^{+}$

Thus $x \in S$. Also $x=t \sqrt{2}-t=t(\sqrt{2}-1)<t$ since $\sqrt{2}<2$

Then $t$ is not the least element of $S$.

Thus $S=\emptyset$, and $\sqrt{2} \notin \mathbb{R}$

---

**Note** It can be shown that

> PMI is equivalent to the W.D.P. in the following sense.

We showed $WOP \Rightarrow P M I$ by assuming *WOP* as an **axiom** of the integers\
An axiom is something that *we assume to be true*, or a basic law from which we deduce properties of a structure

If we take P.M.I as an axiom, then it is possible to show

$$
\text { PMI } \Rightarrow \text { W.O.P. }
$$

# Cardinality of Sets

Recall that in lecture 7, we briefly considered the cardinality of set\
We defined the cardinality of a <u>finite set</u> to be $|S|=$ the number of elements in $S=n$ where $x \in \mathbb{Z}, x \geqslant 0$.

We include $0$ as a cardinality, the cardinality of the empty set $\mid \emptyset\mid =0$

We also asserted, that if $|S|=n<+\infty$ then the number of subsets of $S$ is $2^{x}$ ie, $|P(s)|=2^{n}=2^{\left| S \right| }$.

We constructed the outline of a proof of this fact using the principle of Mathematical induction

We will shortly give a direct proof of $|P(s)|=2^{n}$\ 
Fist we consider cardinality of seta in a formal way

**Recall**

a function $f: A \rightarrow B$ is called $1-1$ when $f(x)=f(y) \leftrightarrow x=y$

a function is called **onto** if $\forall b \in B, \exists a \in A$ such that $f(a)=b$.

a function that is $1-1$ and onto is called a **bijection** between $A$ and $B$

**Definition** the sets $A$ and $B$ have the same cardinality if and only if $\exists a$ bijection between $A$ and $B$.

From this most general definition we see that the cardinality of a finite set is the number of elements in the set. *arbitrarily label the elements, one, two,... up to* $n$ and we get a bijection from $\{1,2, \cdots, n\}$ to the set in question.

If a set <u>cannot</u> be put into a $1-1$ correspondence with $\{1, \ldots, n\}$ for any $x$, we say the set is infinite

Now there is more than one cardinality for an infinite set

If a set $A$ is <u>not</u> finite <u>and</u> there is a bijection between $A$ and $\mathbb{Z}^{+}=\{1,2, \cdots, n, \cdots\}$ we say $A$ is countably infinite

A countably infinite set is also called **denumerable**

If a set $A$ is finite oR countably infinite we say $A$ is **countable**


### **Theorem I** 
The following conditions are equivalent

1) A is countable
2) $\exists$ onto map from $\mathbb{Z}^{+}$to $A$.
3) $\exists\ 1-1$ map from $A$ to $\mathbb{Z}^{+}$

**Proof** A is countable means $A$ is finite or $A$ is in a $1-1$ correspondence with $\mathbb{Z}^{+}$

If there exists an onto map from $\mathbb{Z}^{+}$ then $A$ is either finite or countably infinite\
If there exists a $1-1$ map from $A$ into $\mathbb{Z}^{+}$ then $A$ is either finite on countably infinite

This theorem is really a restatement of the definitions of the terms involved

![](https://cdn.mathpix.com/cropped/2023_06_13_643d96159cae5c56563eg-11.jpg?height=393&width=748&top_left_y=2130&top_left_x=435)

If $A$ is an infinite set, it need not be countable. If $A$ is infinite and not countable, ie $\exists$ <u>no</u> $1-1$ bijection of $A$ with $\mathbb{Z}^{+}$, we say **$A$ is uncountable**

**Examples**

1) $\mathbb{Z}^{+} \cup\{0\}$ is countable.

For $n \in \mathbb{X}^{+}$, define $f(n)=n-1$.

Then $f: \mathbb{Z}^{+} \rightarrow \mathbb{Z}^{+} \cup\{0\}$ is $1-1$ and onto

2) $\mathbb{Z}^{-}=\left\{-k \mid k \in \mathbb{Z}^{+}\right\}$is countable. Let $f: \mathbb{Y}^{+} \rightarrow \mathbb{Z}^{-}$be defined by $f(x)=-x$. $f$ is bijection.
3) $\mathbb{Z}$ is countable.

To prove this last assertion we first prove the following

### Theorem 2
**Theorem 2** The union of two countable sets is countable.

Proof Let $A$ and $B$ be countable sets

There are 3 cases to consider
1) A, B both finite
2) one of $A$ and $B$ is infinite
3) $A, B$ both infinite

**Case (1)**. We have already seen that of

$$
\begin{aligned}
&|A|=n,|B|=m \text { then } \\
&|A \cup B|=|A|+|B|-|A \cap B|<+\infty
\end{aligned}
$$

So $A\cup B$ is finite and thus countable.

**Case 2**) Suppose, without loss of generality that $|A|=n<+\infty$ and $B$ is countably infinite

Let $f: \mathbb{Z}^{+} \rightarrow B$ be a bijection

Suppose we have listed the elements of $A$ as a finite sequence.

$$
A=\left\{a_{1}, \cdots, a_{n}\right\} = \{g(1), \ldots, g(n)\}
$$

where $g$ is a bijection from $\{1, ., x\}$ to $A$.

Define $h: \mathbb{Z}^{+} \rightarrow A \cup B \quad$ by

$$
h(k)= \begin{cases}g(k), & 1 \leq k \leq n \\ f(k-n), & n+1 \leq k\end{cases}
$$

Then $h: \mathbb{Z}^{+} \rightarrow A \cup B$ is an onto map

We cant guarantee that it is $1-1$, since $A \cap B$ may be non-empty, but onto suffices to show $A\cup B$ is countably infinite and hence countable by Theorem 1

**Case 3** $A+B$ infinite.

$$
\begin{align}
Let\quad A&=\{f(t), \ldots, f(n)\}\\
B&=\{g(1), \cdots, g(n), \ldots\}
\end{align}
$$

where $f, g$ are bijections of $\mathbb{Z}^{+}$to $A$ and $B$, respectively

Define $h(k)= \begin{cases}&f(l), &k=2 l-, l=1,2, \ldots \\ &g(l), &k=2 l-1, l=1,2, \ldots\end{cases}$

$h$ is an onto map of $\mathbb{Z}^{+}$with $A \cup B$\
Hence $A \cup B$ is countable

$\mathbb{Z}$ is countable, since $\mathbb{Z}=\left(\mathbb{Z}^{+} \cup\{0\}\right) \cup \mathbb{Z}^{-}$

When a set is countably infinite we define ito cardinality to be $\alef_0$ (aleph zeno, aleph naught) and we write

$$
|\mathbb{Z}|=| \mathbb{Z}^{+} \mid=\alef_{0}
$$

**Lemma** Any subset of a countable set is countable

**Proof:** If $f: \Bbb{Z}^{+} \rightarrow A$ is onto, then  $B \subseteq A$ adopt $f$ by sending $f^{-1}(A-B)$ to any element of $B$, then the new $f$ is an onto map of $\mathbb{Z}^{+}$onto $B$, use **Theorem 1**

There are infinite sets that are not countable\
<b>The power set of $\mathbb{Z}^{\top}$ is uncountable</b>

Before we prove this assertion, lat us consider the power sets of finite sets and how to *"count"* the number of their elements

### Bit strings

a bit is a single digit, either $0$ or $1$\
A bit string of length $n$ is a string of $n$ fits, 0 owl, strung together

**Example:** $10110110110000$ is a bit string of length 14

Fact There are $2^{n}$ bit strings of length $n$

**Proof** There are 2 choices for the first bit, $0$ or $1$ . For each choice, there are 2 choices for the second bit, on $2^{2}$ in total. For the 3nd bit we have 2 chries fore each of the $2^{2}$ choices for the first two bit, ie $2^{3}$ choices fore the first 3 bits, and so on: (and so on is short hand for *"proof by induction"*)

Let $A=\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}$ be a finite set For $B \subseteq A$, let $x_{B}$ be the bit string of length a where

$$
\text { the } k^{\text {th }} \text { bit of } x_{B}=\left\{\begin{array}{lll}
1 & \text { if } & a_{k} \in B \\
0 & \text { if } & a_{k} \notin B
\end{array}\right.
$$

For example, $x_{B}=00 \cdots 0_{n}$ represents the empty set $\emptyset \subseteq A$ and\
$x_{B}=11 \cdots 1_{n}$ represents $A \subseteq A$.

Let $B \in P(A)$. Define $f(B)=x_{B}$.

Then $f: P(A) \rightarrow$ Bit $_{n}=\{$ bit-strings of length $n\}$

> $f$ is a bijection

It is $1-1$ because because if two bit-strings are different, they came from different subsets and it is onto since every bit sting corresponds to a subset of $A$.

Thus $|P(A)|=\mid Bit_n \mid=2^{n}$ when $|A|=n<+\infty$

Now turn our attention to countable infinite sets

Each subset of A now is represented by a bit string of infinite length.

$$
\begin{aligned}
& x_{A}=1111 \cdots \\
& x_{\emptyset}=0000 \cdots
\end{aligned}
$$

and the map $f: P(A) \rightarrow Bit_\infty$ defined by the same process as before is $1-1$ and onto

We show bit $\infty$ is not countable by contradiction

Suppose that $\mid Bit_\infty \mid=\alef_{0}$.

Then it is possible to list all the elements of Bit\
Suppose $Bit_\infty=\left\{x_{1}, x_{2}, \cdots,\right\}$ where we
write

$$
\begin{aligned}
& x_{1}=x_{11} x_{12} x_{13}\quad &\cdots\quad x_{1 n} \cdots \\
& x_{2}=x_{21}, x_{22} x_{23}\quad &\cdots\quad x_{2 n} \cdots \\
&\vdots \\
& x_{n}=x_{n 1} x_{n=} x_{n 3}\quad &\cdots\  x_{n-n} \cdots \\
&\vdots \\
\end{aligned}
$$

Where $x_{i j}=0$ or $1$

Define $x^{*} \in Bit_\infty$ by

$$
x^{*}=\quad x_{* 1}\quad x_{* 2}\quad x_{* 3}\quad \cdots\quad x_{* n}\quad \cdots
$$

where $x_{* n}= \begin{cases}0 & \text { if } x_{n n}=1 \\ 1 & \text { if } x_{n n}=0\end{cases}$

Then $x^{*} \neq x_{k}, \forall k=1,2, \ldots$

Thus $x^{*}$ is not on the list. Thus every list is incomplete. Thus there is $n$ list of all

the element of $Bit_\infty$, so $Bit_\infty\infty$ is *uncountable*

We define $\mid Bit_\infty|=| P\left(\mathbb{Z}^{+}\right) \mid=2^{\alef_{0}} \equiv \alef_{1}$

Is there a set of numbers that we can say has the same cardinality as $P\left(\Bbb{Z}^{+}\right)$?

The rational numbers $\Bbb{Q}$ won't work since they are countable. This is a consequence of the following result.

**Theorem** A countable union of countable sets is countable.

**Proof** Let the sets be listed

$$
A_{1}, A_{2}, \cdots, A_{n_{2}}, \cdots
$$

and their elements listed

$$
A_{k}=\left\{a_{k 1}, a_{k 2}, \cdots, a_{k n}, \cdots\right\}
$$

Now list the elements of $\displaystyle\bigcup_{k=1}^{\infty} A_{k}$ as shown below

$$
\begin{aligned}
& a_{11}^{\prime}, a_{i 2}^{\prime}, a_{13}^{\prime}, a_{14}^{\prime}, \cdots \\
& a_{21}^{\prime}, a_{22}^{\prime}, a_{23}^{\prime}, a_{24}, \cdots \\
& a_{31}^{\prime}, a_{32}^{\prime}, a_{33}, a_{34}, \cdots \\
& a_{41}, \cdots, a_{42}^{\prime}, a_{43}, a_{44}, 
\end{aligned}
$$


If we write $\displaystyle\bigcup_{k=1}^{\infty} A_{k}=\left\{a_{1}, a_{2}, a_{3}, \ldots\right\}$

then $a_{1}=a_{11}, a_{2}=a_{12}, a_{3}=a_{21}$, etc.

This scheme generates $f: \mathbb{Z}^{+}$onto $\displaystyle\bigcup_{k=1}^{\infty} A_{k}$. and $\displaystyle\bigcup_{k=1}^{\infty} A_{k}$ is countable.

## Hilbert Hotel

Now the rational numbers $\Bbb{Q}$ is the countable union of the sets $\Bbb{Q}[k, k+1]$ where

$$
\Bbb{Q}[k, k+1]=\{x \in \Bbb{Q} \mid k \leq x \leq k+1, k \in \mathbb{Z}\}
$$

We now prove $\Bbb{Q}[0,1]$ is countable.

Let $x \in \Bbb{Q}[0,1]$, then $\displaystyle x=\frac{p}{q},\quad q, p \in \mathbb{Z}^{+},\quad q \geqslant p$

Let $A_{n}=\left\{\frac{n}{k},\quad k \in\Bbb{Z}^{+},\quad k \geqslant n\right\} \quad$ for $n \in \mathbb{Z}^{+}$

$A_{n}$ is countably infinite.

$\displaystyle\Bbb{Q}[0,1]=\{0\} \cup\left(\bigcup_{n=1}^{\infty} A_{n}\right)$ is the countable union of countable seta.

Thus $\mathbb{Q}$ is countable

---

The real numbers, $\mathbb{R}$, are uncountable and $|\mathbb{R}|=\left|P\left(\mathbb{Z}^{+}\right)\right|=\alef_{1}$ *sometimes $C$ for continuum*

We show this by showing $|\mathbb{R}|=\mid Bit_\infty \mid$\
First we will show that $|[0,1]|=\mid Bit_\infty\mid$ and then we show $|[0,1]|=|\mathbb{R}|$.

---

When we considered changing bases in $L_{13}$ we mainly considered different bases for integers We have only used *"decimal expansions"* for real and rational numbers

The change of base theorem can be modified to show that every decimal expansion can be convected to a *"binary expansion"*

Every real number can be written in the form $k\cdot a=k+a,\quad k \in \mathbb{Z}$ and $a \in Bit_\infty$.

Thus, for $k=0,|[0,1]|=\mid$ Bit $_{\infty} \mid=\alef_{1}$\
also note $|(0,1)|=|[0,1]|$

To show that $|\mathbb{R}|=|[0,1]|$ we can use a number of techniques to find a $1-1$, onto map between $(0,1)$ and $\mathbb{R}$

There are a number of analytic methods using functions known to us ( or maybe not known )

Ex $f(x)=\cot (\pi x)$ is a $1-1$ onto map form $(0,1)$ to $\mathbb{R}$.

A geometric method in to wrap the interval $(0,1)$ into a circle and use stereographic projection.

![](https://cdn.mathpix.com/cropped/2023_06_13_643d96159cae5c56563eg-21.jpg?height=310&width=1308&top_left_y=1384&top_left_x=318)

This provides a $1-1$ onto map of $(0,1)$ with $\mathbb{R}$.

Cardinalities of infinite sets is a very rich topic (and hard) which we will leave for later courses

For further details read $\S 2.5$ of the text, to get an idea of the history of these results

**Theorem** Let $A$ be uncountable and $B$ be countable, $B \subseteq A$

then $A \backslash B$ is uncountable.

**Proof** Assume $A \backslash B$ is countable\
Then $A=(A \backslash B) \cup B$ is the union of two countable sets and hence countable\
Therefore $A$ is countable, a contradiction

$\therefore A \backslash B$ is uncountable.

