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
*ie* if $(a,b)\in R$ and $b$ is unique for each possible $a$,

we call $R$ a function and write $b=f(a)$ whenever $(a,b)\in R$

A very important type of relation is where $B=A$

````{admonition} Definition 2: **Relation** 
:class: important

A relation $R$ <u>on</u> a set $A$ is just a subset of $A\times A$
*ie* $\qquad R \subseteq A\times A=A^2=\Set{(a,b)|a,b\in A}$
````
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
$R_1$ and $R_2$ are not functions from $A$ to $B$
```

Now let $\quad R_3=\Set{(0,a), (1,c), (2,c)}$
$R_3$ is a function from $A$ to $B$

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

````{admonition} Further Examples
:class: warning

$\tt R_4 = \Set{ (x,y)\in \Bbb{R}^2 \mid x \leq y }$ \
$\tt S_1 = \Set{ (x,y)\in \Bbb{R}^2 \mid x^2 + y^2 = 1 }$ ( 1 - sphere ) \
$\tt R_5 = \Set{ (x,y)\in \Bbb{R}^2 \mid y + x^3 = 0 }$

These are <u>all</u> relations on $\Bbb{R^2}$
````

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