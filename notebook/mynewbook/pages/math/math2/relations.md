---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.11.5
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

## Discrete Mathematics 2

### Relations

````{admonition} Definition 1: **Binary Relation**
:class: important

Let $A$ and $B$ be sets,\
a binary relation, $R$ from $A$ to $B$ is just a subset of $A\times B$\
*ie* $\qquad R\subseteq A\times B = \Set{(a,b)\mid a\in A, b\in B}$

```{tip}
We often omit the word **binary**
```
````

If $R$ is such that whenever $(a_, b_1)$ and $(a_, b_2)\in R$ then $b_1=b_2$\
_ie_ if $(a,b)\in R$ and $b$ is unique for each possible $a$,

we call $R$ a function and write $b=f(a)$ whenever $(a,b)\in R$

A very important type of relation is where $B=A$

```{admonition} Definition 2: **Relation**
:class: important

A relation $R$ <u>on</u> a set $A$ is just a subset of $A\times A$
*ie* $\qquad R \subseteq A\times A=A^2=\Set{(a,b)\mid a,b\in A}$
```

````{admonition} Examples
:class: warning

$ \displaystyle \begin{aligned} Let\qquad A\ =\Set{0,1,2}\\B\ =\Set{a,b,c,d,e}\\[2em]
R_1=\Set{\texttt{(0,a), (0,b), (0,c), (1,d), (2,a), (2,b)}}\\ R_2=\Set{\texttt{(0,a), (1,b), (2,c), (0,e), (1,d), (2,a)}} \end{aligned} $

$R_1$ and $R_2$ are relations from $A$ to $B$

For $R_1$ we can write $0R_1a$ to represent the fact that $(0,a)\in R_1$

In particular, we have\
$0R_1a\quad ,\quad 1R_1d$ \
$0R_2a\quad ,\quad 1R_2b \quad ,\quad 1R_2d$

```{note}
$R_1$ and $R_2$ are <em><u>not</u></em> functions from $A$ to $B$

Look at $R_1$ we have both $(0,a)$ and $(0,b)$ so $a$ and $b$ are mapped to the same value $0$

Now let $\quad R_3=\Set{(0,a), (1,c), (2,c)}$\
$R_3$ **is a function** from $A$ to $B$
```


````

It can help to use a cartesian diagram to represent relations\
For $R_2$ and $R_3$ we represent them below:

```{code-cell}
:tags: ["remove-input"]
%%html
<!DOCTYPE html>
<div id="myplot"></div>
<div id="myplot2"></div>
<script type="module">

import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";

const relations = [
  {A: 0, B:"e"},
  {A: 1, B:"d"},
  {A: 2, B:"c"},
  {A: 1, B:"b"},
  {A: 0, B:"a"},
  {A: 2, B:"a"},
]

const plot = Plot.plot({
  style: {backgroundColor:"transparent", color: "azure"},
  width: 300, // default is 640
  aspectRatio: 4,
  inset: 20, // no corner data think padding
  marginTop: 10,
  marginRight: 20,
  marginBottom: 30,
  marginLeft: 40,
  grid: true,
  marks: [
    Plot.dot(relations, { x: "A", y: "B", stroke: "black", fill: "cyan", reverse: "A" }),
    Plot.frame(), // draw the box frame
    Plot.text(["R^2"], {lineWidth: 1, frameAnchor: "top"})
  ]
})

const relations2 = [
  {A: 2, B:"c"},
  {A: 1, B:"c"},
  {A: 0, B:"a"},
]

const plot2 = Plot.plot({
  style: {backgroundColor:"transparent", color: "azure"},
  width: 300, // default is 640
  aspectRatio: 4,
  inset: 20, // no corner data think padding
  marginTop: 10,
  marginRight: 20,
  marginBottom: 30,
  marginLeft: 40,
  grid: true,
  marks: [
    Plot.dot(relations2, { x: "A", y: "B", stroke: "black", fill: "cyan", reverse: "A" }),
    Plot.frame(), // draw the box frame
    Plot.text(["R^3"], {lineWidth: 1, frameAnchor: "top"})
  ]
})


const div = document.querySelector("#myplot");
div.append(plot);
const div2 = document.querySelector("#myplot2");
div.append(plot2);
</script>
```

```{admonition} Further Examples
:class: warning

$\tt R_4 = \Set{ (x,y)\in \Bbb{R}^2 \mid x \leq y }$ \
$\tt S_1 = \Set{ (x,y)\in \Bbb{R}^2 \mid x^2 + y^2 = 1 }$ ( 1 - sphere ) **unit circle** \
$\tt R_5 = \Set{ (x,y)\in \Bbb{R}^2 \mid y + x^3 = 0 }$ This one is the only **function**

These are <u>all</u> relations on $\Bbb{R^2}$
```

<div style="display:flex">
  
```{code-cell}
:tags: ["remove-input"]
%%html
<div id="r4plot"></div>
<script type="module">
  import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";

  let xStart = -5;
  let yStart = -5;

  const points = new Array(11).fill(null).map(point => {
    return { x: xStart++, y: yStart++ }
  })

  const r4Plot = Plot.plot({
    style: { backgroundColor: "transparent", color: "azure" },
    width: 300, // default is 640
    aspectRatio: 1,
    grid: true,
    marginRight: 30,
    marks: [
      // Plot.lineY(points, { x: "x", y: "y", stroke: "cyan", fill: "cyan"}),
      Plot.areaY(points, { x: "x", y: "y", y1: "y", y2: 5, stroke: "cyan", fill: "cyan", fillOpacity: 0.2}),
      Plot.frame(), // draw the box frame
      Plot.text(["R_4"], { lineWidth: 1, x: -3, y: 3, fontSize: 16, fill: "cyan" }),
      Plot.text([" x=y"], { lineWidth: 1, x: 5, y: 5, fontSize: 16, fill: "cyan", textAnchor: "start" }),
      Plot.ruleY([0]),
      Plot.ruleX([0])
    ]
  })

  const div = document.querySelector("#r4plot");
  div.append(r4Plot);

  </script>
```
  
```{code-cell}
:tags: ["remove-input"]
%%html
<div id="s1plot"></div>
<script type="module">

  import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";

  let x = -1;
  let y = 0;

  const pointsPositive = new Array(21).fill(null).map( point => {
    const circleY = Math.sqrt(1 - Math.pow(x, 2));
    x += 0.1;
    return { x: x - 0.1, y: circleY }
  })

  x = -1;

  const pointsNegative = new Array(21).fill(null).map( point => {
    const circleY = Math.sqrt(1 - Math.pow(x, 2));
    x += 0.1;
    return { x: x - 0.1, y: -circleY }
  })

  const s1Plot = Plot.plot({
    style: { backgroundColor: "transparent", color: "azure" },
    width: 300, // default is 640
    aspectRatio: 1,
    // grid: true,
    marginRight: 30,
    marks: [
      // Plot.lineY(points, { x: "x", y: "y", stroke: "cyan", fill: "cyan"}),
      Plot.lineY(pointsPositive, { x: "x", y: "y", stroke: "cyan"  }),
      Plot.lineX(pointsNegative, { x: "x", y: "y", stroke: "cyan"  }),
      // Plot.frame(), // draw the box frame
      Plot.text(["S_1"], { lineWidth: 1, x: -0.8, y: 1, fontSize: 16, fill: "cyan" }),
      Plot.text(["  x^2 + y^2 = 1"], { x: 1/Math.sqrt(2), y: 1/Math.sqrt(2), fontSize: 10, fill: "cyan", textAnchor: "start", lineAnchor: "bottom" }),
      Plot.text(["   ( -1/sqrt(2) , -1/sqrt(2) )"], { x: -1/Math.sqrt(2), y: -1/Math.sqrt(2), fontSize: 10, fill: "cyan", textAnchor: "start", lineAnchor: "bottom" }),
      Plot.text(["   ( -1/sqrt(2) , 1/sqrt(2) )"], { x: -1/Math.sqrt(2), y: 1/Math.sqrt(2), fontSize: 10, fill: "cyan", textAnchor: "start", lineAnchor: "top" }),
      Plot.ruleY([0]),
      Plot.ruleX([0])
    ]
  })

  const div = document.querySelector("#s1plot");
  div.append(s1Plot);
</script>
```
  
```{code-cell}
:tags: ["remove-input"]
%%html
<div id="r5plot"></div>
<script type="module">

  import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";

  let x = -2;
  let y = 0;

  const pointsPositive = new Array(21).fill(null).map( point => {
    const pointY = Math.pow(x, 3);
    x += 0.2;
    return { x: x - 0.2, y: pointY }
  })

  const s1Plot = Plot.plot({
    style: { backgroundColor: "transparent", color: "azure" },
    width: 300, // default is 640
    aspectRatio: 3,
    marginRight: 50,
    x: {domain: [-2, 2]},
    y: {domain: [-8, 8]},
    marks: [
      Plot.lineY(pointsPositive, { x: "x", y: "y", stroke: "cyan" }),
      Plot.text(["R_5"], { lineWidth: 1, x: -1.8, y: 7, fontSize: 16, fill: "cyan" }),
      Plot.text([" y - x^3 = 0"], { x: 2, y: 8, fontSize: 10, fill: "cyan", textAnchor: "start", lineAnchor: "bottom" }),
      Plot.ruleY([0]),
      Plot.ruleX([0])
    ]
  })

  const div = document.querySelector("#r5plot");
  div.append(s1Plot);
</script>
```
</div>

#### Reflexive


````{admonition} Definition 3: **Reflexive**
:class: important

Let us consider a set $A$ and a relation $R$

> $R$ is called **reflexive** *if and only if* $\quad(iff)\qquad\forall a\in A, (a,a)\in R$

```{admonition} Alternative Notation
:class: note

$\forall a\in A, aRa$
```

````

````{admonition} Example
:class: warning


Let $A= \Bbb{Z}^+=\Set{1,2,3,\cdots}$

Define $R_{div} \subseteq \Bbb{Z}^+\times \Bbb{Z}^+$ by\
$(a,b)\in R_{div}\quad \text{iff a divides}\ b\quad [\ a\ |\ b\ ]$

```{important}
Every element in $\Bbb{Z}^+$ can be a first element in a member of $R_{div}$

**example**  $\ 43\ |\ 86\qquad so\qquad (43,86)\in R_{div}$
```

Now if $a\in \Bbb{Z}^+\ ,\ a\mid a\quad so\quad (a,a)\in R_{div}\qquad \color{OrangeRed} \bf R_{div} \text{ is a }\underline{reflexive\ relation}\text{ on }\Bbb{Z}^+$

> $a$ divides itself $\therefore$ it is reflexive

```{note}
$R_{div} \text{ is not a reflexive relation on }\quad\Bbb{Z} =\ integers$ because $(0,0)\notin \Bbb{R_{div}}$ 

```

````

#### Symmetry

````{admonition} Definition 4: **Symmetry**
:class: important

1) $R$ is **symmetric** iff $(a,b)\in R \rightarrow (b,a)\in R$
  - if a and b are in the relation than that implies that b and a is also in the relation
2) $R$ is **anti-symmetric** iff $(a,b)\in R$ and $(b,a)\in R\quad \rightarrow a=b,\quad \forall a,b\in R$
````

The relation $R_{div}$ on $\Bbb{Z}^+$ is anti-symmetric on $\Bbb{Z}^+$ because \
$\forall a,b \in \Bbb{Z}^+ \qquad if\qquad a\mid b\quad and\quad b\mid a\quad then\quad a=b$ \
*this is also reflexive as we have shown before*

##### modulus example

Let $m \geq 2$ and $A=\Bbb{Z}$, $\qquad m\in \Bbb{Z}$,\
**Define** $R_{\mod m}$ by\
$\qquad (a,b)\in R_{\mod m}$ iff $a\equiv b(\mod m)$

> **Recall $a\equiv b(\mod m)$ iff $m\mid a-b$**\
> equivalently $a=b+km$ for some $R\in \Bbb{Z}$
>> $R\mod m$ is <u>symmetric</u> and <u>reflexive</u>\
>> i)  $a \equiv a\mod m\qquad \forall a \in \Bbb{Z}\qquad\qquad\quad$ ***reflexive***\
>> ii) $a \equiv b \mod m \leftrightarrow b\equiv a \mod m \qquad$ ***symmetric***

#### Transitivity

````{admonition} Definition 5: **Transitivity**
:class: important


Let $R$ be a relation on $A$\
$R$ is **transitive** iff $(a,b)\in R$ and $(b,c)\impliedby R \implies (a, c)\in R$ 
````

$R_{div}$ is transitive since if $a\mid b$ and $b\mid c$ then $a\mid c$

$R_{\mod m}$ is transitive since if $a\equiv b\mod m$ and $b\equiv c\mod m$ then $a\equiv c\mod m$

````{admonition} Proof
:class: danger

Let $a\equiv b\mod m,\quad then\quad \exists k\in \Bbb{Z}$ such that \
$a = b + km, \qquad b\equiv c\mod m \implies b = c + lm,\qquad l\impliedby \Bbb{Z}$

$a = b + km = c + ln + km$ \
$\phantom{a = b + km }= c + (l + k)m$\
*ie* $a\equiv c\mod m$

$\displaystyle\color{indianred}{\therefore R_{\mod m}\sf\ is\ \underline{transitive}}$ 
````

> Reflexivity and symmetry or anti-symmetry and transitivity are easily determined in the above relations. We will need ways to represent relation on a set that allow easy determination of these properties for more general relations

#### Overall Example

Let $A$ be a set and let $\mathcal{P}(A)$ be its power set\
*ie* $\mathcal{P}(A) = \Set{B\ \mid\ B\subseteq A}$ The power set is the set of all subsets of A

define $R_{inc}$ on $\mathcal{P}(A)$ by $BR_{inc}C\quad iff \quad B\subseteq C$


##### Proofs of reflexivity anti-symmetry and transitivity
1) **Reflexive** $\qquad B\subseteq B,\qquad \forall B\subseteq A\qquad \therefore BR_{inc}B$
2) **Anti-symmetry** Suppose $BR_{inc}C$ and $CR_{inc}B$ \
Then by definition of $R_{inc}\qquad B\subseteq C$ and $C\subseteq B$\
This means that $B=C$

3) **Transitivity** Suppose $BR_{inc}C$ and $CR_{inc}D$\
Then $B\subseteq C\subseteq D \qquad\therefore B\subseteq D$ and $BR_{inc} D$

### Counting Relations on finite sets
Let $A$ be a <em><u>finite set</u></em>, $\mid A\mid = n\quad (\in \Bbb Z^+\cup 0)$
 $\colorbox{steelblue}{Remember cardinality}$

 A **relation** on $A$ is a subset of $A\times A$

 $\mid A\times A\mid =n^2$ and the size of the power set of $A\times A$
 
 $$
 \mid\mathcal{P}(A\times A)\mid =2^{n^2}
 $$

 Now suppose $R$ is **reflexive**, then all of the elements are of the form $(a,a)\in R$\
 Put these $n\ elements$ in $R$ so we have $n^2-n = n(n-1)$ elements that may or may not be in $R$

 Thus, there are $\displaystyle 2^{n(n-1)}$ subsets of $A\times A$ that contain $\displaystyle \large diag(A\times A)= \Set{(a,a) \mid A\in A}$

```{note}
If $n=5$, there are $2^{20}=1,048,576$ reflexive relations on a set with $5\ elements$
```

### Combining Relations

Since a relation is a subset of $A\times B$ we can take unions and intersections of relations

````{prf:example} Set Operations
:nonumber: true
:class: dropdown

$A = \Set{1,2,3}$ \
$R_1 = \Set{ (1,1),(1,2),(2,3),(3,1)}$ \
$R_2 = \Set{ (1,1),(2,2),(3,1),(3,2),(3,3)}$

$R_1\cup R_2 = \Set{ (1,1),(1,2),(2,2),(2,3),(3,1),(3,2),(3,3)}$ \
$R_1\cap R_2 = \Set{ (1,1),(3,1)}$ \
$R_1\oplus R_2 = \Set{ (1,2),(2,2),(2,3),(3,2),(3,3)}$

{bdg-info}`Note` $R_1\cup R_2$ is reflexive but $R_1$ and $R_2$ are not
````

```{admonition} Composition
There are other ways to combine relations

Let $R$ be a relation from $A$ to $B$\
Let $S$ be a relation from $B$ to $C$

The **composition** of $R$ & $S$ is the relation from $A$ to $C$ given by\
$S\circ R=\Set{(a,c)\mid a\in A,\quad c\in C \textsf{ for which } \exists\ b\in B\ s.t\ (a,b)\in R,\quad (b,c)\in S}$

```

<style>
.universal-set {
  height: 20vh;
  width: 100%;
  border-radius: 10px;
  margin: 4em 0;
  display:flex;
  justify-content: space-evenly;
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
  font-family: mono;
  padding: 0;
  margin:0;
  line-height: 1em;
  font-size: 1em;
  position: absolute;
  color: darkkhaki;
  top: 60%;
}
.frosted-glass {
  background-color: rgba(255, 255, 255, .001);
  backdrop-filter: blur(2px);
}
#composition-relations{
  position: absolute;
  top: 1em;
  left:0.5em;
  min-width: 100%;
  height: 100%;
}
.svg-text{
  position: absolute;
}
</style>

<div class="universal-set frosted-glass">
  <div class="venn-circle">
    <span class="venn-set">A</span>
    <span class="venn-element" style="margin-left:-1em">a</span>
  </div>
  <div class="venn-circle">
    <span class="venn-set">B</span>
    <span class="venn-element" style="margin-top:-0.5em">b</span>
  </div>
  <div class="venn-circle">
    <span class="venn-set">C</span>
    <span class="venn-element" style="margin-left:0.5em">c</span>
  </div>
<svg id="composition-relations" viewBox="0 0 100 100" preserveAspectRatio="none" vector-effect="non-scaling-stroke">
  <def>
    <marker
      id="arrow"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
  </def>
  <path d="M 16.66 60 C 30 30, 30 30, 50 60" stroke="red" fill="transparent"/>
  <path d="M 50 60 C 70 30, 70 30, 83.33 60" stroke="cyan" fill="transparent"/>
  <path d="M 16.66 60 C 50 90, 50 90, 83.33 60" stroke="orange" fill="transparent"/>
</svg>

<span class="svg-text" style="top:50%;right:63%">$\color{red}\mathbf{aRb}$</span> <span class="svg-text" style="top:50%;right:33%">$\color{cyan}\mathbf{bSc}$</span><span class="svg-text" style="top:80%;right:70%">$\color{orange}\mathbf{a(S\circ R)C}$</span>
</div>

#### Composing Relations

If $R$ is a relation on A,\
we can compose $R$ with itself and get $R^2=R\circ R$\
and recursively get $R^{n+1}=R^2\circ R$

