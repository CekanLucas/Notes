# Sets

````{admonition} A *formal* definition of a **set**
:class: primary
> A Collection of *discrete objects*

A **set**  is an <u>unordered</u> collection of distinct objects which we call **elements** or **members** of a set

A set is said to **contain** its **elements** 

$a\in A$ denotes that $a$ is an *element or member* of the *set* A  
$a\notin A$ denotes that $a$ is <u>not</u> a *element or member* of the *set* A 

```{tip}
By convention **sets** are denotes by <em><u>uppercase</u></em> letters whilst **elements** by <em><u>lowercase</u></em> letters 
```
```{admonition} **Roster Notation**
:class: tip
$\{a,b,c,d\}$ represents a set with the four elements $a,b,c$ and $d$
```
```{admonition} **Set Builder Notation**
:class: tip
$\{x\ |\ x\text{ has a property }P\}$ is read as *the set of $x$ such that $x$ has property $P$*
```
````
````{admonition} Examples
:class: warning dropdown

{bdg-secondary}`Example 1` The set $V$ of all the vowels in the English alphabet can be written as $V=\{a,e,i,o,u\}$

{bdg-secondary}`Example 2` The set $O$ of odd odd positive integers less than 10 can be expressed by $O=\{1,3,5,7,9\}$\
{bdg-primary}`Set Builder`\
$O=\{x|x\text{ is an odd positive integer less then 10}\}$\
$O=\{x\in\Bbb{Z}^+|x\text{ is an odd and } x<10\}$

{bdg-secondary}`Example 3` {bdg-danger}`elements in a set don't necessarily need to share common properties` \
 $\{a,2, Fred, New\ Jersey\}$ is valid set even though the elements have nothing to do with each other

{bdg-secondary}`Example 4` {bdg-danger}`ellipses ... are used when pattern is obvious` \
 The set of positive integers less than 100 can be denoted by $\{1,2,3,...,99\}$

{bdg-secondary}`Example 5` {bdg-danger}`sets can contain other sets` \
The set $\{\Bbb{N},\Bbb{Z},\Bbb{Q},\Bbb{R}\}$ contain 4 elements each of which is a set
````

## Number Sets

$\Bbb{N}=\{0,1,2,3...\}$ = set of all **natural numbers**

```{danger}
Sometimes people don't consider 0 to be a natural number\
$\Bbb{N}=\Bbb{Z}^+\cup\Set{0}=\{0,1,2,3...\}$
```
$\Bbb{Z}=\{...,-2,-1,0,1,2,3...\}$ = integers

$\Bbb{N}=\Bbb{Z}^+=\{1,2,3...\}$ = positive integers

$\Bbb{R}=\Set{x\mid x\ \text{can be represented by a decimal expansion}} = \Bbb{Q}\cup \Bbb{Q}^c$ = real numbers


$\Bbb{Q}=\{p/q\mid p, q\in\Bbb{Z},q\neq 0, p\space and\space q\space have\space no\space common\space factors \}$ = rational numbers

$\Bbb{Q}^c=\Bbb{\bar{Q}} =\{x\in \Bbb{R}\mid x\notin\Bbb{Q}\}$ = irrational numbers
```{note}
$\Bbb{\bar{Q}}$ is the more common notation
```


$\Bbb{C} =\set{x+ig\mid x,y\in \Bbb{R}\space and\space i^2=-1}$ = Complex numbers

## Intervals

$$
&[a,b]=\{\ x\ |\ a\le x\le b\}\textcolor{hotpink}{\text{ closed interval}}\\
&[a,b)=\{\ x\ |\ a\le x\lt b\}\\
&(a,b]=\{\ x\ |\ a\lt x\le b\}\\
&(a,b)=\{\ x\ |\ a\lt x\lt b\}\textcolor{violet}{\text{ open interval}}\\
$$

## Equality

````{admonition} Definition of **equality** between Sets
:class: seealso

> Two sets are equal if and only if they have the same elements

Let $A,B$ be sets $A\equiv B\ iff\ \forall x(x\in A\leftrightarrow x\in B)$ if $A$ and $B$ are equal sets then we write $A=B$

```{tip}
The sets must contain the same elements the {bdg-danger}`order does not matter`

$$\{1, 3, 5\}\equiv\{3,5,1\}$$
```
````

## Empty Set

> There is a special set that has no elements. 
> 
> We call this the **empty set** or **null set** denoted by $\emptyset$

Singleton Set
: A set with one element
> $\emptyset\not\equiv\{\emptyset\}$ because thats a singleton set that contains the null set

````{seealso}
Naive Set Theory
: Using a intuitive definition of the term *object* as stated in 1895 by German mathematician George Cantor. Leads to **paradoxes** or logical inconsistencies


This was proven by Betrand Russel\
We will continue to use Native Set Theory for the purpose of better learning
````
## Venn Diagrams
<style>
.universal-set {
	height: 20vh;
	width: 50%;
	/* border: 3px aliceblue solid; */
	box-shadow: 1px 1px 1em inset;
  border-radius: 10px;
  padding: 2em;
  margin: 1em 2em 1em 0;
  float: left;
}
.universal-set-symbol {
  position: absolute;
  right: 2em;
  font-weight: bold;
}

.venn-circle {
    background-color: rgba(255, 255, 255, .1);
    backdrop-filter: blur(100px);
    height: 100%;
    border: 2px aliceblue solid;
    aspect-ratio: 1 / 1;
    margin: auto;
    border-radius: 50%;
    box-sizing: border-box;
	  box-shadow: 1px 1px 1em inset;
    text-align: center;
}
.venn-set {
  font-weight: bold;
  font-size: 3vh;
  position: relative;
  top: calc(50% - 1em);
  color: aliceblue;
}
.venn-element {
  font-weight: bold;
  position: absolute;
  color: khaki;
}
.venn-english-vowels-element{
  color: darkkhaki;
}
.frosted-glass {
  background-color: rgba(255, 255, 255, .001);
  backdrop-filter: blur(2px);
}

</style>
<div class="universal-set frosted-glass">
  <span class="universal-set-symbol"
    title="The universal set is denoted by ⋃ and is represented by the square of the venn diagram"
  >U</span>
  <div class="venn-circle" id="venn-english-vowels">
  <span class="venn-set" 
      title="This set represented by V represents all the vowels in the English alphabet"
  id="venn-english-vowels-set">V</span>
  <span class="venn-element venn-english-vowels-element"
      id="venn-english-vowels-element-a"
      style="top:20%"
      title="This is the vowel a which is a element of the set of all english vowels"
  >. a</span>
  <span class="venn-element venn-english-vowels-element"
      id="venn-english-vowels-element-e"
      style="top:30%;left:30%;"
      title="This is the vowel e which is a element of the set of all english vowels"
  >. e</span>
    <span class="venn-element venn-english-vowels-element"
      id="venn-english-vowels-element-i"
      style="top:40%;right:30%;"
      title="this is the vowel i which is a element of the set of all english vowels"
  >. i</span>
    <span class="venn-element venn-english-vowels-element"
      id="venn-english-vowels-element-o"
      style="top:50%;left:30%;"
      title="This is the vowel o which is a element of the set of all english vowels"
  >. o</span>
    <span class="venn-element venn-english-vowels-element"
      id="venn-english-vowels-element-u"
      style="top:60%;right:40%;"
      title="This is the vowel u which is a element of the set of all english vowels"
  >. u</span>
  </div>
</div>

The universal set is denoted by $⋃$ and is represented by the square of the venn diagram

**The universal set contains all possible elements**

The set $V$ of all the vowels in the English alphabet can be written as:

$$V=\{a,e,i,o,u\}$$

## Subsets

````{admonition} A *formal* definition of a **subset**
:class: primary

The set $A$ is a **subset** of $B$ and thus $B$ is a **superset** of $A$ if and only if every element of $A$ is also an element of $B$

{bdg-success}`Notation` $A\subseteq B$ : $A$ is a **subset** of $B$\
{bdg-success}`Notation` $B\supseteq A$ : $B$ is a **superset** of $A$\
{bdg-secondary}`Hence` $A\subseteq B\equiv B\supseteq A$ 

{bdg-info}`Note` $A\subseteq B\ \ iff\ \ \forall x(x\in A\rightarrow x\in B)$

```{note}
If we want to emphasis that $A$ is a subset of $B$ but that $A\ne B$ or that $A$ is a **proper subset** of $B$ 
```


````

````{admonition} Theorem
For Every set $S$ ,  $\emptyset\subseteq S$ and $S\subseteq S$


```{admonition} Proof
:class: dropdown seealso
{bdg-primary}`Proof 1` For Every set $S$ ,  $\emptyset\subseteq S$

---

Let $S$ be a set, for $\emptyset\subseteq S$ to be true we must show that $\forall x(x\in \emptyset\rightarrow x\in S)$ since $\emptyset$ is defined as containing no elements it neccessarily implies that $x\in \emptyset$ is always false.\
Hence $\emptyset\rightarrow x\in S$ is always true prooving the statement this is known as a *vacuous proof*

---

{bdg-primary}`Proof 2` For Every set $S$ ,  $S\subseteq S$

---

Let $S$ be a set, for $S\subseteq S$ to be true we must show that $\forall x(x\in S\rightarrow x\in S)$ this means that $\forall x(x\in S\leftrightarrow x\in S)$ so the statement is always true a tautology

---
```
````
### Proper Subsets

**Remember**: $\iff$ means *iff* replacing the statement *if and only if*

$$ A\subset B\iff\forall x(x\in A\rightarrow x\in B)\wedge\exists x(x\in B\wedge x\notin A)$$

#### Venn Diagram of a Proper Subset

> Sets may have other sets as members

<style>
  #subset-A {
    height:50%;
  }
  #set-superset-B {
    top: 0;
  }
  #superset {
    width: 100%;
  }

</style>

<div class="universal-set frosted-glass" id="superset">
  <span class="universal-set-symbol"
    title="The universal set is denoted by ⋃ and is represented by the square of the venn diagram"
  >U</span>
  <div class="venn-circle">
    <span class="venn-set" id="set-superset-B"
      title="This set represented by A which is a proper subset of B">B</span>
      <div class="venn-circle" id="subset-A">
        <span class="venn-set" 
          title="This set represented by A which is a proper subset of A">A</span>
      </div>
  </div>
</div>

## Sizes of Set

> Let $S$ be a set. If there are exactly $n$ distinct elements in $S$ where $n$ is a nonnegative integer, we say that $S$ is a *finite set* and that $n$ is the *cardinality* of $S$. The *cardinality* of $S$ is denoted by $|S|$ where $|S| = n$, we can thus determine that $|\emptyset|=0$

```{note}
We will talk about **infinite cardinality** sets some other time
```
### Principle of Inclusion - Exclusion

Let $A$ and $B$ be finite sets\
Then $|A\cup B|=|A|+|B| - |A\cap B|$

think it terms of sets so we don't double count for the intersection elements

#### Extended for more than two sets

$$
| A\cup B \cup C| &= A\cup (B \cup C)|\\
& = |A| + |B\cup C| - |A\cap (B \cup C)|\\
& = |A| + |B| + |C| - |B\cap C| - |A\cap (B \cup C)|\color{yellow}{\text{ use distributive law}} \\
& = |A| + |B| + |C| - |B\cap C| - |(A\cap B)\cup (A\cap C)|\\
& = |A| + |B| + |C| - |B\cap C| - |(A\cap B)\cup (A\cap C)|\\
& = |A| + |B| + |C| - |B\cap C| - ||A\cap B| + |A\cap C| - |(A\cap B)\cap (A\cap C)||\\
& = |A| + |B| + |C| - |B\cap C| - |A\cap B| - |A\cap C| + |A\cap B\cap C|\\
$$

## Power Sets

> Given a set $S$, the **power set** of $S$ is the set of all subsets of the set $S$
>
> The Power set of $S$ is denoted by $\mathcal{P}(S)$
>
> $$\mathcal{P}(A)=\Set{B\mid B\subseteq A} $$

```{admonition} examples
:class: dropdown
What is the power set of the set $\Set{0,1,2}$?

{bdg-success}`solution` 

$$\mathcal{P}(\Set{0,1,2})=\Set{\emptyset,\Set{0},\Set{1},\Set{0,1},\Set{0,2},\Set{1,2},\Set{0,1,2}}$$

{bdg-primary}`Other statements`

$$
\mathcal{P}(\emptyset)&=\Set{\emptyset}\\
\mathcal{P}(\Set{\emptyset})&=\Set{\emptyset,\Set{\emptyset}}
$$
```
```{admonition} Theorem
If $A$ is a finite set, $|A|=n$ , then $|\mathcal{P}(A)|=2^{|A|}=2^n$
```


## Cartesian Products

> The **ordered n-tuple** $(a_1,a_2,...,a_n)$ is the <em><u>ordered</u></em> collection

> We say that $(a_1, ... , a_n) = (b_1,...b_n)\ iff\\$ $a_1 = b_1, a_2 = b_2, ..., a_n = b_n$ or
>
> $$\forall (i = 1, 2, ... n) (a_i = b_i) $$

> Let $A$ and $B$ be sets. The **Cartesian product** of $A$ and $B$, denoted $A\times B$, is the set of all ordered pairs $(a,b)$, where $a\in A$ and $b\in B$
>
> $$A\times B=\Set{(a,b)|a\in A\wedge b\in B}$$

> The **Cartesian product** of the sets $A_1,A_2, ... A_n$ denoted by $A_1\times A_2\times ... \times A_n$ is the set of ordered b-tuples $(a_1, a_2, ... , a_n)$ where $a_i$ belongs to $A_i$ for $i=1,2,...,n$
>
> In other words
>
> $$ A_1\times A_2\times ... \times A_n = \Set{(a_1, a_2, ... , a_n)\mid a_i\in A_i\ for\ i=1,2,...,n}$$

> {bdg-success}`Fact` If $|A_i|=m_i$ then 
>
> $$|A_1x ... xA_n| = m_1 \cdot m_2\cdots m_n = \prod^n_{i=1}m_i$$ 

```{admonition} example
<!-- :class: dropdown -->
What is the Cartesian product of $A={1,2}$ and $B=\Set{a,b,c}$?

{bdg-success}`solution`

$$A\times B=\Set{(1,a),(1,b),(1,c),(2,a),(2,b),(2,c)}$$
---

Famous example: $\Bbb{R}^2=\Bbb{R}\times\Bbb{R}=\Set{(x,y)\mid x,y\in\Bbb{R}}$ **The Cartesian Plane**
```

```{note}
$$ A\times B\neq B\times A$$
```


## Set Operations

<style>
  #union-sets, #intersection-sets, #difference-sets, #compliment-sets {
    width: fit-content;
  }
  #union-A, #intersection-A, #difference-A, #compliment-A {
    margin: 0 auto;
    display: inline-block;
    position: relative;
    left: 10%;
  }
  #union-B, #intersection-B, #difference-B, #compliment-B {
    margin: 0 auto;
    display: inline-block;
    position: relative;
    right: 10%;
  }
  #compliment-B {
    visibility: hidden;
  }

  #union-svg, #intersection-svg, #difference-svg, #compliment-svg {
    position: absolute;
    left:0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 0, 255, .1);
  }
  #union-svg-path {
    box-shadow: 2px 3px 5px solid white;
    fill: rgba(255, 255, 255, .1);
    stroke: violet;
    stroke-width: 2;
    d: path("M 70 100 A 50 50, 0, 0, 1, 70 0 A 50 50, 0, 0, 1, 100 10 A 50 50, 0, 0, 1, 130 0 A 50 50, 0, 0, 1, 130 100 A 50 50, 0, 0, 1, 100 90 A 50 50, 0, 0, 1, 70 100");
  }
  #intersection-svg {
    background-color: rgba(255, 255, 0, .1);
  }
  #intersection-svg-path {
    box-shadow: 2px 3px 5px solid white;
    fill: rgba(255, 255, 255, .1);
    stroke: orange;
    stroke-width: 2;
    d: path("M 100 90 A 50 50, 0, 0, 0, 100 10 A 50 50, 0, 0, 0, 100 90"); 
  }

  #difference-svg {
    background-color: rgba(255, 255, 0, .1);
  }
  #difference-svg-path {
    box-shadow: 2px 3px 5px solid white;
    fill: rgba(0, 255, 255, .1);
    stroke: green;
    stroke-width: 2;
    d: path("M 100 90 A 50 50, 0, 0, 1, 20 50 A 50 50, 0, 0, 1, 100 10 A 50 50, 0, 0, 0, 100 90 ");
  }

  #compliment-svg {
  background-color: rgba(255, 0, 0, .1);
  }
  #compliment-svg-path {
    box-shadow: 2px 3px 5px solid white;
    fill: rgba(255, 255, 255, .1);
    stroke: red;
    stroke-width: 2;
    d: path("M 100 90 A 50 50, 0, 0, 1, 20 50 A 50 50, 0, 0, 1, 100 10 A 50 50, 0, 0, 1, 100 90 ");
  }

  #intersection, #union, #difference, #compliment {
    padding: 1em;
    margin: 1em -1em;
    height: fit-content;
    min-height: 25vh;
  }
</style>

### Union of Sets

<div style="background-color:rgba(255, 0, 255, .1)" id="union">

<div class="universal-set frosted-glass" id="intersection-sets">
  <span class="universal-set-symbol"
    title="The universal set is denoted by ⋃ and is represented by the square of the venn diagram"
  >U</span>
  <div class="venn-circle" id="intersection-A">
    <span class="venn-set" 
      title="This set is represented A">A</span>
  </div>
  <div class="venn-circle" id="intersection-B">
    <span class="venn-set"
      title="This set is represented A">B</span>
  </div>
  <svg id="union-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    width="2" height="100"
    <path id="union-svg-path"/>
  </svg>
</div>

Let $A$ and $B$ be sets. The **union** of these sets, denoted by $A\cup B$, is the set that contain those elements that are either in $A$ <u>or</u> $B$

$A\cup B=\Set{x|x\in A\lor x\in B}$
</div>

### Intersection of Sets

<div style="background-color:rgba(255, 255, 0, .1)" id="intersection">

<div class="universal-set frosted-glass" id="intersection-sets">
  <span class="universal-set-symbol"
    title="The universal set is denoted by ⋃ and is represented by the square of the venn diagram"
  >U</span>
  <div class="venn-circle" id="intersection-A">
    <span class="venn-set" 
      title="This set is represented A">A</span>
  </div>
  <div class="venn-circle" id="intersection-B">
    <span class="venn-set"
      title="This set is represented A">B</span>
  </div>
  <svg id="intersection-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  width="2" height="100"
  <path id="intersection-svg-path"/>
  </svg>
</div>

Let $A$ and $B$ be sets. The **intersection** of these sets, denoted by $A\cap B$, is the set that contains those elements that are in $A$ <u>and</u> $B$

$A\cap B=\Set{x|x\in A\wedge x\in B}$\
Two sets called **disjoint** if there intersection is the empty set\
In other words **there is no overlap in the Venn Diagram**
</div>

### Difference of Sets

<div style="background-color:rgba(0, 255, 255, .1)" id="intersection">

<div class="universal-set frosted-glass" id="difference-sets">
  <span class="universal-set-symbol"
    title="The universal set is denoted by ⋃ and is represented by the square of the venn diagram"
  >U</span>
  <div class="venn-circle" id="difference-A">
    <span class="venn-set" 
      title="This set is represented A">A</span>
  </div>
  <div class="venn-circle" id="difference-B">
    <span class="venn-set"
      title="This set is represented A">B</span>
  </div>
  <svg id="difference-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  width="2" height="100"
  <path id="difference-svg-path" d= />
  </svg>
</div>

Let $A$ and $B$ be sets. The **difference** of these sets, denoted by $A-B$, is the set that contains those elements that are in $A$ <u>but not</u> in $B$

$A-B=\Set{x|x\in A\wedge x\notin B}$
> Difference between sets $A$ and $B$ is sometimes denoted by $A\setminus B$
</div>

### Compliment of Sets

<div style="background-color:rgba(255, 0, 0, .1)" id="compliment">

<div class="universal-set frosted-glass" id="compliment-sets">
  <span class="universal-set-symbol"
    title="The universal set is denoted by ⋃ and is represented by the square of the venn diagram"
  >U</span>
  <div class="venn-circle" id="compliment-A">
    <span class="venn-set" 
      title="This set is represented A">A</span>
  </div>
  <div class="venn-circle" id="compliment-B">
    <span class="venn-set"
      title="This set is represented A">B</span>
  </div>
  <svg id="compliment-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  width="2" height="100"
  <path id="compliment-svg-path" d= />
  </svg>
</div>

Let $U$ be the universal set. The **compliment** of a set, denoted by $\bar{A}$, is the set that contains those elements that are <u>not</u> in $A$ thus $U-A$

$\bar{A}=\Set{x\in U\ |\ x\notin A}$
> The compliment depends on what we mean by the universal set $U$
</div>

### Set Identities

Equivalence                                                           | Name                |                  
-----------                                                           | ----                |                  
$A\cap U=A$ <br>$A\cup\emptyset =A$                                   | Identity laws       |                  
$A\cup U=U$ <br> $A\cap \emptyset =\emptyset$                         | Domination laws     |                  
$A\cup A=A$ <br> $A\cap A=A$                                          | Idempotent laws     |                  
$\bar{\bar{A}}=A$           *Kind of like **double negation** right?* | Complementation law |              
$A\cup B=B\cup A$ <br>$A\cap B=B\cap A$                               | Commutative laws    | 
$A\cup(B\cup C)=(A\cup B)\cup C$<br>$A\cap(B\cap C)=(A\cap B)\cap C$  | Associative laws    |
$A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$<br>$A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$|Distributive laws
$\overline{A\cap B}=\bar{A}\cup\overline{B}$<br>$\overline{A\cup B}=\bar{A}\cap\bar{B}$| De Morgan's Laws|
$A\cup(A\cap B)=A$<br>$A\cap(A\cup B)=A$                              | Absorption laws     |
$A\cup\bar{A}=U$<br>$A\cap\bar{A}=\emptyset$                          | Complement laws     |

#### Proof of Demorgan's law for sets
````{admonition} Proof of Demorgan's law for sets
:class: note dropdown
{bdg-secondary}`Statement` 

$$\overline{A\cap B} = \bar{A}\cup\bar{B}$$

{bdg-success}`Proof`

$$ 
\overline{A\cap B} &= \Set{x\in U\mid x\notin(A\cap B)}\\
&= \Set{x\in U\mid \neg(x\in(A\cap B))}\\
&= \Set{x\in U\mid \neg(x\in A \wedge x\in B)}\\
&= \Set{x\in U\mid \neg(x\in A)\lor \neg(x\in B)}\\
&= \Set{x\in U\mid x\notin A\lor x\notin B}\\
&= \Set{x\in U\mid x\in \bar{A}\lor x\in \bar{B}}\\
&= \bar{A}\cup\bar{B}\color{green}{\text{ success!}}\\
$$

---

{bdg-secondary}`Statement` 

$$\overline{A\cup B} = \bar{A}\cap\bar{B}$$

{bdg-success}`Proof`

$$ 
\overline{A\cap B} &= \Set{x\in U\mid x\notin(A\cup B)}\\
&= \Set{x\in U\mid \neg(x\in(A\cup B))}\\
&= \Set{x\in U\mid \neg(x\in A \lor x\in B)}\\
&= \Set{x\in U\mid \neg(x\in A)\wedge \neg(x\in B)}\\
&= \Set{x\in U\mid x\notin A\wedge x\notin B}\\
&= \Set{x\in U\mid x\in \bar{A}\wedge x\in \bar{B}}\\
&= \bar{A}\cap\bar{B}\color{green}{\text{ success!}}\\
$$
````

### Arbitrary Unions or Intersections

We can define arbitrary unions and intersections for a finite number of sets

$$
A_1\cap A_2\cap\cdots\cap A_n&=\Set{x\mid x\in A_i\text{ for all }i=1,\cdots ,n}\\
A_1\cup A_2\cup\cdots\cup A_n&=\Set{x\mid x\in A_i\text{ for some }i=1,\cdots ,n}\\
$$

Demorgan's Laws become

$$
\overline{A_1\cup A_2\cup\cdots\cup A_n}&=\bar{A_1}\cap \bar{A_2}\cap\cdots\cap \bar{A_n}\\
\overline{A_1\cap A_2\cap\cdots\cap A_n}&=\bar{A_1}\cup \bar{A_2}\cup\cdots\cup \bar{A_n}\\
$$

## Set Operations via *Bit Strings*

Consider $U=\Set{1,2,3,4,5,6,7,8,9,10}$

Each subset of $U$ can be represented as a bit string of length 10, where $A\subseteq U$ is associated to the bit string $Bit_{10}(A)=(b_1,b_2,b_3,b_5,b_4,b_5,b_6,b_7,b_8,b_9,b_{10})$

where $b_i = 1\ if\ i\in A$ and $0\ if\ i\notin A$

> For each bit string of length 10 there is a subset of $U$ and for each subset of $U$ there is a bit string of length 10
> 
> We say there is a *one-to-one* corresponded between bitstrings of length 10 and the subsets of a set with 10 elements
>
$(0,\cdots ,0)\leftrightarrow\emptyset$
$(1,\cdots ,1)\leftrightarrow U$

So if $A=\Set{2,3,7,8,10}$

$$Bit_{10}(A)=\Set{0,1,1,0,0,0,1,1,0,1}$$