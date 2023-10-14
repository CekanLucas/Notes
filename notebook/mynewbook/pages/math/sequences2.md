
Let $\left\{a_{n}\right\}_{n=0}^{+\infty}$ be an infinite sequence of real numbers.

Let $\left\{S_{n}\right\}_{n=0}^{+\infty}$ be the sequence of partial sums of $\left\{a_{n}\right\}_{n=0}^{+\infty}$,

$$
s_{n}=\sum_{k=0}^{n} a_{k}=a_{0}+a_{1}+\cdots+a_{n}
$$

Before we go any further we must

(11) talk about the limit of a seq Ce.

Let $\left\{S_{n}\right\}_{n=0}^{+\infty}$ be a sequence of real numbers (infinite).

We say $\left\{S_{n}\right\}_{n=0}^{+\infty}$ converges to $L$

or

$$
\begin{aligned}
& \lim _{n \rightarrow+\infty} S_{n}=L \quad \text { if } \\
& \forall \varepsilon>0, \exists N(\varepsilon) \in \mathbb{Z}^{+} \text {seth } \\
& \left|S_{n}-L\right|<\varepsilon, \forall x \geqslant N
\end{aligned}
$$

What this means is that the larger that $n$ gets the chosen $s_{n}$ gets to L

and we say that $S_{n} \rightarrow L$ as $x \rightarrow+\infty$

If there is no number $L$ sth $S_{x} \rightarrow L$ as $x \rightarrow+\infty$ we say that the sequence $\left\{S_{n}\right\}_{n=0}^{+\infty}$ diverges

![](https://cdn.mathpix.com/cropped/2023_06_12_dd68d0820297e02b030fg-11.jpg?height=457&width=1578&top_left_y=2156&top_left_x=280)

$(12)$

Two improtant limiter

(1) $\lim _{n \rightarrow+\infty} x^{n}=0$ if $|x|<1$

(2) $\lim _{n \rightarrow+\infty} \frac{1}{n}=0$

We have aheady discussed (2) before.

We prove (1) using Bernoulli's inequality

$$
\begin{gathered}
\text { "1+nh } \leqslant(1+h)^{n}, \forall n=0,1,2, \ldots \|, \\
h>-1
\end{gathered}
$$

We will see a proof of this inequality later by P. M. I.

case (i) $0<x<1$.

Wite $x=\frac{1}{1+h}, h>0$

then $x^{n}=\frac{1}{(1+h)^{n}} \leqslant \frac{1}{1+x h} \quad \begin{array}{ll} & \rightarrow \frac{1}{a}>\frac{1}{b}\end{array}$

$$
<\frac{1}{n h}
$$

Thus $\left|x^{n}-0\right|=\left|x^{n}\right|=\frac{1}{(1+h)^{n}}<\frac{1}{n h}<\varepsilon$ if $n h>\frac{1}{\varepsilon}$, ie $x>\frac{1}{h \varepsilon}$ oR $x \geqslant\left\lceil\frac{1}{h \varepsilon}\right\rceil$ (13)

for any $\varepsilon>0$.

Thus $\forall \varepsilon>0, \quad x^{x} \mid<\varepsilon \quad$ whenever

$$
n \geqslant\left\lceil\frac{1}{n \varepsilon}\right\rceil \quad, x=\frac{1}{1+h}
$$

case (ii) $x=0, x^{n}=0 \rightarrow 0$ as $x \rightarrow+\infty$

case (iii) $-1<x<0$

then $0<-x<1$

and $-x=\frac{1}{1+h}, h>0$

so

$\left|x^{n}-0\right|=\left|x^{x}\right|=\frac{1}{(1+h)^{n}}<\frac{1}{x h}$ as before

Exevise Show $(1)$ is really "if" by showing $|x| \geqslant 1 \Rightarrow \lim _{n \rightarrow+\infty} x^{n} \neq 0$

Returning to infinite series,

We say $\sum_{n=0}^{+\infty} a_{n}$ converges to $L$

and wite $\sum_{n=0}^{+\infty} a_{n}=L$ if

$$
\lim _{n \rightarrow+\infty} S_{n}=\lim _{n \rightarrow+\infty}\left(\sum_{k=0}^{n} a_{k}\right)=L
$$

(14)

Thus an infinite series converges the sequence of partial sums converges to a limit.

If $\sum_{n=0}^{+\infty} a_{n}$ is not convergent,

ie, $\lim _{n \rightarrow+\infty} S_{n}$ does not exist,

we say $\sum_{n=0}^{+\infty} a_{n}$ is divergent.

The Infinite Geometric Series

$$
\sum_{k=0}^{+\infty} a r^{k} \quad \text { is convergent } i_{i f f}|r|<1
$$

Since $G_{n}=\sum_{k=0}^{n} a r^{k}=\frac{a\left(r^{n+1}-1\right)}{r-1}$

If $|r|<1$, then $\lim _{n \rightarrow+\infty} G_{n}=\lim _{n \rightarrow+\infty} \frac{a\left(r^{n+1}-1\right)}{r-1}$

$$
\begin{aligned}
& =\frac{a(0-1)}{r-1} \\
& =\frac{a}{1-r}
\end{aligned}
$$

Thus for $|r|<1, \sum_{k=0}^{+\infty} a r^{k}=\frac{a}{1-r}$

Eli use this result to chow

$$
0.999 \cdots=1
$$

$14 a$

$$
\begin{aligned}
0.9999 \cdots & =\sum_{k=1}^{\infty} \frac{q}{10^{k}} \\
& \left.=9\left(\sum_{k=1}^{9}+\frac{1}{11}\right)^{k}\right) \\
& =9\left(\frac{1}{10}+\cdots+\frac{1}{10^{2}}+\cdots+\frac{1}{10^{n}}+\frac{1}{10^{n+1}}+\cdots\right) \\
& =\frac{9}{10}\left(1+\frac{1}{10}+\frac{1}{10^{2}}+\cdots\right) \\
& =\frac{9}{10} \sum_{k=0}^{\infty}\left(\frac{1}{10}\right)^{k}=\frac{9}{10} \frac{1}{1-\frac{1}{10}} \\
& =\frac{9}{10} \cdot \frac{1}{\left(\frac{9}{10}\right)}=1
\end{aligned}
$$

(15)

We have shown only the "If" part of own statement.

To prove the "only if" part, we note

for $r=1, G_{n}=a(x+1) \rightarrow+\infty$ as $x \rightarrow+\infty$

so $\left\{G_{n}\right\}_{n=0}^{+\infty}$ does not have a limit (it diverges to $+\infty$ ) and $\sum_{k=0}^{+\infty} a(1)^{k}$ is divergent,

If $|r|>1$, one can show that $\lim _{n \rightarrow+\infty}\left(r^{n+1}\right)$ does not exist sene if $r>1$, these terms get larger and largen positively, while if $r<-1, r^{n+1}$ gets larger and larger in absolute value and it switches from positive to negative and so cant have a limit EXERCISE: What happens when $r=-1$ ? $\|$ (16)

Principle of Mathematical Induction (P.M.I.)

Couscher a formal sequence of propositional functions $\{P(n)\}_{n=1}^{+\infty}$.

We want to be able to prove that the proposition $\forall x P(x)$ is True where the universe of discourse for the universal quantifier, $\forall$, is $\mathbb{Z}^{+}$.

As some examples of such a proposition we have the 3 summation formulae from before,

(1) $\sum_{k=1}^{n} k=\frac{n(n+1)}{2}, \forall n+\mathbb{Z}^{+}$

(2) $\sum_{k=1}^{n} k^{2}=\frac{n(n+1)(2 n+1)}{6}, \forall n \in \mathbb{Z}^{+}$

(3) $\sum_{k=1}^{n} k^{3}=\left[\frac{n(n+1)}{2}\right]^{2}, \forall n \in \mathbb{Z}^{+}$

We prove such universally quantified propositions using P.M.I. (7)

P.MI. has 2 steps.

Steel Basis step; prove $P(1)$ is true.

Step 2 Inductrie step; prove that the proposition

$$
\forall k(P(k) \rightarrow P(k+1)) \quad(k \geq 1)
$$

is tue.

We will prove the validity of PMI. later.

For now consider some examples. At the some time we will be proving useful and important results.

ExT Prove statement (1) above. $\left[\begin{array}{c}\text { Note, we already gave a direct proof } \\ \text { by showing } P(x) \text { is } T \text {, fox all } x,]\end{array}\right.$

Let $P(n)$ be the statement

$$
\sum_{k=1}^{n} k=\frac{n(n+1)}{2}=f(n)
$$

Basis Step $P(1): \sum_{k=1}^{1} k=1, f(1)=\frac{1(1+1)}{2}=1$

$\therefore P(1)$ is tue. (18)

Inductive step

assume $P_{k}(k)$ is tue, $k \in \mathbb{Z}^{+}(k \geqslant 1)$

That is $\sum_{l=1}^{k} l=\frac{k(k+1)}{2}=f(k)$.

We show now that $P(k+1)$ io tue, ie, $\sum_{k=1}^{k+1} l=f(k+1)$

But $\sum_{l=1}^{k+1} l=\sum_{\ell=1}^{k} l+(k+1)$

$$
\left(=\frac{(k+1)(k+2)}{2}\right)
$$

$$
\begin{aligned}
& =\frac{k \cdot k+1)}{2}+(k+1), \text { by hypothesis. } \\
& =(k+1)\left(\frac{k}{2}+1\right) \\
& =\frac{(k+1)(k+2)}{2}=f(k+1)
\end{aligned}
$$

Thanes $P(k) \rightarrow P(k+1), \forall k \in \mathbb{Z}^{+}$

Hence by $P M I, \sum_{k=1}^{n} k=\frac{n(n+1)}{2}, \forall n \in \mathbb{Z}^{+}$

Ex2 Prove (2) above: $\sum_{k=1}^{n} k^{2}=\frac{n(n+1)(2 n+1)}{6}, \forall n \in \mathbb{Z}$ $=f(x)$, say.

Son Basis step,

$$
n=1 . \quad \sum_{k=1} k^{2}=1 ; f(1)=\frac{1(2)(3)}{6}=1
$$

Thus $P(1)$ is tue. (9)

Inductive step

Assume $P(k)$ is tue, $k \in \mathbb{Z}^{+}(k \geqslant 1)$

Then $\sum_{l=1}^{k+1} l^{2}=\sum_{l=1}^{k} l^{2}+(k+1)^{2}$

$$
\begin{aligned}
& =\frac{k(k+1)(2 k+1)}{6}+(k+1)^{2} \text {, by } \\
& =(k+1)\left[\frac{k(2 k+1)}{6}+k+1\right] \\
& =(k+1)\left[\frac{2 k^{2}+k+6(k+1)}{6}\right] \\
& =(k+1)\left[\frac{\left.2 k^{2}+7 k+6\right]}{6}\right] \\
& =\frac{(k+1)\left[2 k^{2}+4 k+3 k+6\right]}{6}+\frac{(k+1)}{6}[2 k(k+2)+3(k+2)] \\
& =\frac{(k+1)(k+2)(2 k+3)}{\text { hypoth }}=f(k+1)
\end{aligned}
$$

$\forall k \in \mathbb{Z}^{+}$

Thus $\uparrow P(k) \rightarrow P(k+1)$ is tue and by $P M I$

$P(n)$ is tue, $\forall n+\mathbb{Z}^{+}$ $(20)$

Notes 1) a common err in proofs using PMI that lead to an invalid conclusion occurs in the inductive step when we prove $P(k) \rightarrow P(k+1)$ is true for $k=2,3,4, \ldots$, and not for $k=1$. Then there is no connection between the basis step and the inductive step. This will occur when we have to assume $k>1$ in a der to prove $P(k) \rightarrow P(k+1)$ If $P(2)$ is false, then we cant conclude $\forall n P(n)$.

1) We may use $P M I$ to prove $\forall n \geqslant n_{0}, P(n)$ is tue where $n_{0}>1$ by changing the basis step to $P\left(n_{0}\right)$ is True, and the inductive step to $\forall k \geqslant n_{0}, P(k) \rightarrow P(k+1)$

Ex 3 Recall the Harmonic Progression $\left\{a_{n}\right\}_{n=1}^{\infty}$ where $a_{n}=\frac{1}{n}$.

Even though,

$$
\lim _{n \rightarrow+\infty} a_{n}=\lim _{n \rightarrow+\infty} \frac{1}{n}=0 \text {, }
$$

the Harmonic series $\sum_{n=1}^{+\infty} \frac{1}{n}=1+\frac{1}{2}+\frac{1}{3}+\cdots+\frac{1}{n}+\cdots$ io divergent. (The smaller * smaller bit added infinitely often add up to $+\infty .1$ ) (2)

We will use PMI to help prove this fact Lemma Let $H_{n}=\sum_{k=1}^{n} \frac{1}{k}$.

Then $H_{2} \geqslant 1+\frac{x}{2}=f(x), \forall n \in \mathbb{Z}^{+}$

Proof

Basis step

$$
\begin{aligned}
& x=1 \\
& H_{2^{\prime}}=1+\frac{1}{2}=f(1) \quad \therefore H_{2} \geqslant f(1)
\end{aligned}
$$

Inductive Step

assume $H_{2^{k}} \geqslant 1+\frac{k}{2}, \forall k \in \mathbb{Z}^{+}$

Then

$$
\begin{aligned}
H_{2^{k+1}} & =\sum_{k=1}^{2^{k+1}} \frac{1}{k}=\sum_{r=1}^{2^{k}} \frac{1}{r}+\sum_{k=2^{k}+1}^{2^{k+1}} \frac{1}{r} \\
& \geqslant 1+\frac{k}{2}+\frac{1}{2^{k}+1}+\frac{1}{2^{k}+2}+\cdots+\frac{1}{2^{k+1}} \\
& =1+\frac{k}{2}+\frac{1}{2^{k}+1}+\frac{1}{2^{k}+2}+\cdots+\frac{1}{2^{k}+2^{k}}
\end{aligned}
$$

$$
\begin{aligned}
& \geqslant 1+\frac{k}{2}+\left\{\frac{1}{2^{k}+2^{k}}+\cdots+\frac{2^{k} \text { terms }}{2^{k}+2^{k}}\right\} \quad\left(\begin{array}{l}
\text { make the } \\
\text { portico bergen } \\
\text { hechion get } \\
\text { smaller }
\end{array}\right) \\
& =1+\frac{k}{2}+2^{k} \cdot \frac{1}{2^{k+1}}=1+\frac{k}{2}+\frac{1}{2}=1+\frac{k+1}{2}=f(k+1)
\end{aligned}
$$

(22)

Thus by P,M.1. $H_{2} n \geqslant 1+\frac{n}{2}, \forall n \in \mathbb{Z}^{+}$

Now the sequence

$\left\{H_{n}\right\}_{n=1}^{\infty}$ is an "increasing" sequence

because $H_{n+1}=H_{n}+\frac{1}{n+1}>H_{n}$.

Also the subsequence

$\left\{H_{2^{n}}\right\}_{x=1}^{\infty}$ clearly, in view of

the lemma, has

$$
\lim _{x \rightarrow+\infty} H_{2 x}=+\infty
$$

These two facts allow us to assent that

$$
\lim _{n \rightarrow+\infty} H_{n}=+\infty \text { and the }
$$

hamonic series is divergent

Exerciser) Use PMI to prove that $3 / 2^{2 n}-1, \forall x \in \mathbb{Z}^{+}$

2) Prove summation formula (3)

![](https://cdn.mathpix.com/cropped/2023_06_12_dd68d0820297e02b030fg-23.jpg?height=144&width=697&top_left_y=2056&top_left_x=396)

P351 \#32 $3 \mid n^{3}+2 n \quad \forall n \geqslant 1$

23

$P(n): 3 \mid n^{3}+2 n \quad$ R.T.P. $\quad \forall n \geqslant 1 P(n)$ is the

1) Basis step

Let $n=1, n^{3}+2 n=1+2=3+3 / 3$

$\therefore P(1)$ is true

2) Inductive Step

want to show

$\forall k \geqslant 1 \quad P(k) \rightarrow P(k+1) \quad$ is tue

Assume $31 k^{3}+2 k$ ie assume $P(k)$ is the

Then $\left(k^{0}+1\right)^{3}+2(k+1)=k^{3}+3 k^{2}+3 k+1$

$$
\begin{aligned}
= & k^{3}+2 k+3 k+2 \\
= & \frac{k^{3}+2 k}{\text { divisible }_{\text {by }}}+\frac{3\left(k^{2}+k+1\right)}{\text { divisible by } 3}
\end{aligned}
$$

by hypothein

$\therefore P(k+1)$ is tue

- <compat>PMI gris the result.