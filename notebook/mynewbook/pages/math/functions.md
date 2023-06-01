# Functions

## Definition

```{tip} 
$x^2 + y^2 = r^2$ seems like a function but it is actually not it is known as a **relation** 

$x$ and $y$ are related and work together to produce the output
```


Let $F\subseteq A\times B$ so its a *relation*

Suppose F has the property that if $a\in A$ appears as a a first entry in an element of $F$, then it is the only element of $F$ that it appears in

Then we call $F$ a **function**

> If $(a,b)\in F$, we write $f(a) = b$

```{note}
The definition of the function implies that for every first entry there is <u>exactly</u> one second entry that is paired with it
```

---

In a function, second entries can be matched with more than one first entry

If, $F\subseteq A\times B$ is a function with $f(a)=b\ iff\ (a,b) \leftarrow F$ we often omit $F$ and only refer to $f$ and say:

$f:A\rightarrow B$\
{bdg-info}`We say ` $f$ maps $A$ into $B$

````{admonition} Notation
Given $f:A\rightarrow B$ is a function

$A =\text{ domain of }f = D_f = dom(d)$\
$B =\text{ codomain of f } = codom(f)$

$$
f(A) &= \Set{b\in B\mid b = f(a) \text{ for some } a\in A}\\
&=\text{ range of f } = range(f)
$$

---

{bdg-white}`Image & Pre-Image`

$b=f(a)$ we say that *b is the image of a under f* and or *a is a pre-image of b under f*

The pre-image of an element $b\in B$ under $f$ can be
1. empty - $b\notin range(f)$
2. a single point - $f$ is 1 - 1 at $b$
3. more than one point
````

Consider the following example

$$ A &= \Set{0,1,2,3,4,5,6,7,8,9}\\
B &= \Set{r,s,t,u,v,w,x,y,z}\\
F &= \Set{(0,r), (1,s), (2,s), (3,t), (4,u), (5,w), (6,x), (7,x), (8,x), (9,x) }$$

Then the rule for $f$ may be stated explicitly or inferred from $F$

{bdg-warning}`Note` $range(f) = \Set{r,s,t,u,v,w,x,y,z} \subset B$ is a proper subset of $B$ 

Let us write $f^{-1}(b)=$ pre-image of $b$ under $f$ $=\Set{a\in A\mid b = f(a)}$

For our example 

$f^{-1}(z)=\emptyset$
$f^{-1}(t)=\Set{3},\ f^{-1}(x)=\Set{6,7,8,9}$ 

````{admonition} Definitions
1. $f: A \rightarrow B$ is called 1-1 (one-to-one) iff $f(a_1)=f(a_2)\rightarrow a_1=a_2$\
{bdg-info}`Alternatively` $f^{-1}(b) =\text{ singleton set }\forall b\in range(f)$
2. $f: A \rightarrow B$ is called **onto** iff $range(f)=B$
3. $f: A \rightarrow B$ is called a 1 - 1 correspondence (<u>bijection</u>) $f$ is 1-1 and onto
````
### Composition of function
Let $f: A \rightarrow B$ & $g: B \rightarrow C$ be two function

We define the **composition** of $g$ and $f$ to be the function $g\circ f:A\rightarrow C$ defined by $g\circ f(a)=g(f(a))$

```{note} 
By our definition of a function $f$ is defined for all $a\in A$ and $g$ is defined for all $b\in B$ Thus, $g\circ f$ is defined for all $a\in A$ 

There may be elements in $B$, the codomain of $f$, that are not in the $range(f)$, but that does not affect the existence of $g\circ f$ 
```
#### Composition of More Than 2 Function
We can define the composition of more than 2 functions if $f: A \rightarrow B$, $g: B \rightarrow G$, $h: G \rightarrow D$, then 

$h\circ g\circ f:A\rightarrow D$ and $h\circ g\circ f(a)=h(g(f(a)))$ etc


## Inverse Functions

Let $f:A\rightarrow B$ be a 1-1 onto map 

Then for $\forall b\in B, \exists\text{ exactly one }a\in A\ st\ f(a)=b$


We define the inverse function of $f$, called $f^{-1}(b)=a$ iff $f(a)=b$ and we say $f$ is **invertible**

### Identity Function

If we let $id_A:A\rightarrow A$ be the identity map on $A$, $id_A(a)=a,\forall a\leftarrow A$ and $id_B:B\rightarrow B$ be the identity map on $B,\ id_B(b)=b$, then for $f$, 1-1, onto, $f^{-1}\circ f =id_A$, $f\circ f^{-1}=id_B$

````{note}
If $f$ is not 1-1, then we can't define $f^{-1}$, since if $f(a_1)=b$, $f(a_2)=b$, then $a_1\ne a_2$ {bdg-danger}`nonsense` because how do we define $f^{-1}(b)$? Is it $a_1$ or $a_2$?

---

If $f:A\rightarrow B$ is 1-1 but not onto, ie $f(a)\subset B$, we can define $f^{-1}$ on $f(A) \subset B$ since $f:A\rightarrow f(A)$ is 1-1 and onto and since $f^(-1):f(A)\rightarrow A$ is a well defined function

--- 

Often we deal with $f: A \rightarrow A$, then it is possible to compose two functions from $A$ to $A$ in different order, ie $f\circ g$ or $g\circ f$

```{danger}
order matters in general if $f,g:A\rightarrow A$, then $f\circ g\ne g\circ f$
```

````


