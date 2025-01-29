# Graphs asd

**These are discrete structures consisting of *vertices* and *edges* that connect these vertices**

A graph $G=(V, E)$ is a set of **vertices** $V$ and **edges** $E$

Simple-Graph
: does *not* have directed edges

Multi-graph
: multiple edges can connect the same two vertices

Loop
: an edge that connects a vertex to itself

Pseudo-graph
: a multi-graph that may also include loops

Di-graph
: directed graph where each edge begins at one point and ends in the other

Type | Directed Edges | Multiple Edges <br> Allowed | Loops <br> Allowed
-- | -- | -- | --
Simple Graphs | No | No | No
Multi Graphs | No | Yes | No
Pseudo Graphs | No | Yes | Yes
Di Graphs | Yes | No | No
Directed Multi Graphs | Yes | Yes | No
Mixed Graphs | Yes | Yes | Yes


```{prf:axiom} Axiom Example
:nonumber: true
:label: my-axiom
:class: dropdown

Every Cauchy sequence on the real line is convergent.
```

Adjacent Vertices or neighbors
: when two vertices are connected to each other with a edge

Incident 
: the edge between to adjacent vertices

Neighborhood
: The set of all neighbors of a particular vertex

Degree
: The *degree of a vertex* is the number of edges incident to it
- a loop however contributes **two to the degree** because the vertex is the end and beginning 
- **Notation** The degree of vertex $v$ denoted $deg(v)$  
- A vertex with a degree of zero is called **isolated**
- A vertex with a degree of one is called **pendant** asd

````{prf:theorem} The Hand Shaking Theorem
:nonumber: true
:class: seealso
:label: handshaking-theorem

Let $G = (V,E)$ be a undirected graph with $m$ edges

Then $\displaystyle 2m = \sum_{v\in V}\deg(v)$

```{note}

This applies even if *multiple edges* and *loops* are present
```

````


````{prf:theorem}
:nonumber: true
:class: seealso
An undirected graph has an even number of vertices of odd degree

```{prf:proof}
:nonumber: true
Let $V_1$ and $V_2$ be the set of vertices of even degree and the set of vertices of odd degree,
respectively in an undirected graph $G=(V,E)$ with $m$ edges then
$$
2m=\sum_{v\in V}\deg(v)= \sum_{v\in V_1}\deg(v) + \sum_{v\in V_2}\deg(v)
$$

```
````


asd