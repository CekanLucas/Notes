# Relations

A relationship between elements of two sets
are represented using a structure called a **binary relation**
which is just a <i>subset of the Cartesian product of sets</i>

Relationships between elements of more than two sets
are represented by ***n-ary* relations** 
which are collections of *n-tuples*

## Relations and their Properties


```{admonition} **Definition 1**
Let $A$ and $B$ be sets
A *binary relation from $A$ to $B$* is a subset of $A \times B$
```

**Notation** 
We use the notation $a\ R\ b$ to denote that $(a, b)\in R$
and $a\ \cancel{R}\ b$ to denote that $(a, b)\notin R$ 

When $(a,b)$ belongs to $R$, $a$ is said to be *related to* $b$ by $R$ 

### Properties of Relations

#### Reflexive

```{admonition} **Definition 3** ***Reflexivity***
A relation $R$ on a set $A$ is called **reflexive** if $(a,a) \in R$ for <u>every</u> element $a \in A$

<i>using quantifiers</i> $\qquad\forall a((a,a)\in R)$ where the universe of discourse is the set of all elements in A

<span class="text-xl font-bold text-indigo-400">Conversely</span>

A relation $R$ on a set $A$ is **irreflexive** if $(a,a) \in R$ for <u>no</u> element $a \in A$

<i>using quantifiers</i> $\qquad\forall a((a,a)\notin R)$ where the universe of discourse is the set of all elements in A
```

```{admonition} EXAMPLE 7 *Which relation is **reflexive***
:class: info

Consider the following relations on $\Set{1,2,3,4}$

$$
\begin{align*}
R_1 =& \Set{(1, 1), (1, 2), (2, 1), (2, 2), (3, 4)}  
&\color{red}{\text{Not Reflexive }\Set{(3,3), (4,4)}\text{ missing}}\\
R_2 =& \Set{(1, 1), (1, 2), (2, 1), (2, 2)}
&\color{red}{\text{Not Reflexive }\Set{(3,3), (4,4)}\text{ missing}}\\
R_3 =& \Set{(1, 2), (2, 1), (3, 4)}
&\color{red}{\text{Not Reflexive }\Set{(1,1), (2,2), (3,3), (4,4)}\text{ missing}}\\
R_4 =& \Set{(1, 1), (2, 2), (3, 3), (4, 4)}
&\color{lime}{\text{ Reflexive }\Set{(1,1), (2,2), (3,3), (4,4)}\text{ present}}\\
R_5 =& \Set{(1, 2), (2, 1), (3, 3), (4, 4)}
&\color{red}{\text{Not Reflexive }\Set{(1,1), (2,2)}\text{ missing}}\\
R_6 =& \Set{(1, 1), (2, 2), (3, 3), (4, 4), (2, 3), (3, 2)}
&\color{lime}{\text{ Reflexive }\Set{(1,1), (2,2), (3,3), (4,4)}\text{ present}}\\
\end{align*}
$$
```
#### Symmetry
```{admonition} **Definition 4** ***Symmetry***
A relation $R$ on a set $A$ is called **symmetric** 
if $(b,a) \in R$ for <u>whenever</u> $(a,b) \in R$ for all $a,b \in R$

<i>using quantifiers</i> $\qquad \forall a\forall b(\quad(a,b)\in R \rightarrow (b,a) \in R \ )$

if relation is not symmetric it is **asymmetric**

<span class="font-bold text-red-400">Symmetry and AntiSymmetry are <u>not</u> opposites</span>

A relation $R$ on a set $A$ is called **antisymmetric**
if for all $a, b \in A$,
if $(a, b) \in R$ and $(b, a) \in R$,
then $a = b$

<i>using quantifiers</i> $\qquad \forall a\forall b(\quad(a,b)\in R\ \cdot (b,a)\in R\ \rightarrow a = b \ )$
```

```{admonition} EXAMPLE *Which relation is **symmetric** and or **antisymmetric***
:class: info

Consider the following relations on $\Set{1,2,3,4}$

$$
\begin{align*}
S_1 =& \Set{(1, 1), (1, 2), (2, 1), (2, 2), (3, 4)}
&\color{red}{\text{Asymmetric } (4,3)\text{ missing}}\\
S_2 =& \Set{(1, 1), (1, 2), (2, 1), (2, 2), (2, 3), (3, 2)}
&\color{lime}{\text{ Symmetry for all elements present}}\\
S_3 =& \Set{(1, 2), (2, 1), (3, 4), (4, 3)}
&\color{lime}{\text{ Symmetry for all elements present}}\\
S_4 =& \Set{(1, 2), (2, 1), (3, 3), (4, 4)}
&\color{lime}{\text{ Symmetry for all elements present}}\\
S_5 =& \Set{(1, 1), (2, 2), (2, 1), (3, 3), (3, 4), (4, 4)}
&\color{red}{\text{Asymmetric } (1,2)\text{ missing, \textbf{Antisymmetric} because no symmetric pair}}\\
S_6 =& \Set{(1, 1), (1, 2), (2, 2), (2, 1), (3, 3), (4, 4)}
&\color{lime}{\text{ Symmetry for all elements present}}\\
\end{align*}
$$
```

#### Transitivity

```{admonition} **Definition 5** ***Transitivity***
A relation $R$ on a set $A$ is called **transitive**
if <u>whenever</u> $(a, b)\in R$ and $(b,c)\in R$,
then $(a,c)\in R$, for all $a, b, c\in A$

<i>using quantifiers</i> $\qquad \forall a\forall b\forall c(\quad(a,b)\in R \cdot (b,c)\in R \rightarrow (a,c) \in R \ )$

```

```{admonition} EXAMPLE *Which relation is **transitive***
:class: info

Consider the following relations on $\Set{1,2,3,4}$

$$
\begin{align*}
T_1 =& \{(1,3), (3,2), (3,3)\}
&\color{red}{\text{Not Transitive } (1,3)\  (3,2) \text{ present but missing }} (1,2)\\
T_2 =& \{(1,4), (4,2), (2,2), (3,3)\}
&\color{red}{\text{Not Transitive } (1,4)\  (4,2) \text{ present but missing }} (1,2)\\
T_3 =& \{(1,1), (1,2), (2,1), (2,2), (3,3)\}
&\color{lime}{\text{ transitivity for all elements present}}\\
T_4 =& \{(2,1), (3,1), (3,2), (4,1), (4,2), (4,3)\}
&\color{lime}{\text{ transitivity for all elements present}}\\
T_5 =& \{(1,1), (1,2), (1,3), (1,4), (2,2), (2,3), (2,4), (3,3), (3,4), (4,4)\}
&\color{lime}{\text{ transitivity for all elements present}}\\
&&\color{limegreen}{(1,2)\  (2,3)\rightarrow (1,3)}\\
&&\color{limegreen}{(1,2)\  (2,4)\rightarrow (1,4)}\\
T_6 =& \{(3,4)\}
&\color{lime}{\text{ transitivity for all elements present}}\\
\end{align*}
$$

## n-ary Relations
## Representing Relations
## Closures of Relations
## Equivalence Relations
## Partial Orderings 


1. **Relations**:
   -  Understand the types of relations, such as reflexive, symmetric, transitive, etc.
   -  Practice identifying these properties in given relations.
   -  Work on equivalence relations and partitions.
   -  Solve problems involving closure properties and equivalence classes.

2. **Graphs**:
   -  Know the basic terminology like vertices, edges, paths, cycles, etc.
   -  Understand different types of graphs - directed, undirected, weighted, and bipartite.
   -  Practice graph representations (adjacency matrix, adjacency list).
   -  Work on algorithms like Depth-First Search (DFS) and Breadth-First Search (BFS).
   -  Solve problems involving connectivity, Eulerian and Hamiltonian paths.

3. **Trees**:
   -  Understand the properties of trees, such as no cycles and connected.
   -  Practice tree traversal algorithms (in-order, pre-order, post-order).
   -  Learn about binary trees, AVL trees, and B-trees.
   -  Solve problems involving tree height, balancing, and tree traversals.

4. **Boolean Algebra**:
   -  Familiarize yourself with basic Boolean operations (AND, OR, NOT).
   -  Learn about Boolean expressions, truth tables, and simplification techniques.
   -  Practice with Boolean algebra laws (commutative, associative, distributive).
   -  Solve problems involving minimization of Boolean expressions.
   -  Work on understanding logic gates and their implementations.


# Graphs

A graph $G$ consists of two sets:
**Vertex Set** $V$: A set of vertices or nodes representing elements
**Edge Set** $E$: A set of edges, where each edge connects two vertices

Types of Graphs:

**Undirected Graphs**:
   Edges have no direction.
   If there is an edge between vertex uu and vv, it can be traversed in both directions.

**Directed Graphs (Digraphs)**:
   Edges have a direction from one vertex to another.
   If there is a directed edge from vertex uu to vv, it can only be traversed from uu to vv.

**Weighted Graphs**:
   Edges have associated weights or costs.

**Connected Graphs**:
   Every pair of vertices is connected by a path.

**Disconnected Graphs**:
   There are at least two vertices with no path between them.

**Cyclic Graphs**:
   Contains at least one cycle (a closed path).

**Acyclic Graphs**:
   Contains no cycles.

Terminology:

    Adjacent:
        Two vertices are adjacent if there is an edge connecting them.

    Degree:
        The degree of a vertex is the number of edges incident to it.
        In directed graphs, there are in-degrees and out-degrees.

    Path:
        A path is a sequence of vertices where each adjacent pair is connected by an edge.

    Cycle:
        A cycle is a closed path, where the first and last vertices are the same.

    Connected Components:
        Subgraphs where every vertex is connected to every other vertex in the subgraph.

Representations:

    Adjacency Matrix:
        A two-dimensional array where M[i][j]=1M[i][j]=1 if there is an edge between vertex ii and jj.

    Adjacency List:
        A collection of lists or arrays where each list represents the neighbors of a vertex.

Graph Algorithms:

    Breadth-First Search (BFS):
        Traverses a graph level by level.
        Useful for finding the shortest path in unweighted graphs.

    Depth-First Search (DFS):
        Traverses a graph by exploring as far as possible along each branch before backtracking.

    Dijkstra's Algorithm:
        Finds the shortest path in weighted graphs.

    Topological Sorting:
        Arranges vertices in a linear order such that for every directed edge u→vu→v, uu comes before vv.

# Boolean Algebra Overview

Boolean algebra, also known as Boolean logic or Boolean algebraic structure, is a mathematical structure and set of operations used in computer science, digital electronics, and mathematical logic. It was introduced by George Boole in the mid-19th century and has since become a fundamental part of the design and analysis of digital circuits, computer algorithms, and logical reasoning. Let's explore the key concepts and operations of Boolean algebra:

## Basics of Boolean Algebra:

1. **Boolean Values:**
   - Boolean algebra deals with two basic values: true (1) and false (0).
   - These values are often denoted as $1$ and $0$, respectively.

2. **Boolean Variables:**
   - Variables in Boolean algebra represent logical propositions.
   - Denoted by letters such as $A$, $B$, $C$, etc.
   - Can take on the values of $0$ (false) or $1$ (true).

## Boolean Operations:

1. **NOT Operation (Complement):**
   - The NOT operation negates a Boolean variable.
   - Symbol: $\overline{A}$ or $A'$ or even $\neg A$
   - Truth Table:
$$
\begin{align*}
A & : 0 & 1 \\
\overline{A} & : 1 & 0 \\
\end{align*}
$$

2. **AND Operation:**
   - The AND operation returns true only if both operands are true.
   - Symbol: $A \cdot B$ or $AB$
   - Truth Table:

$$
\begin{align*}
A & : 0 & 0 &\quad 1 & 1 \\
B & : 0 & 1 &\quad 0 & 1 \\
A \cdot B & : 0 & 0 &\quad 0 & 1 \\
\end{align*}
$$

3. **OR Operation:**
   - The OR operation returns true if at least one operand is true
   - Symbol: $A + B$
   - Truth Table:
$$
\begin{align*}
A & :\qquad 0 & 0 &\quad 1 & 1 \\
B & :\qquad 0 & 1 &\quad 0 & 1 \\
A + B & :\qquad 0 & 1 &\quad 1 & 1 \\
\end{align*}
$$

4. **XOR Operation (Exclusive OR):**
   - The XOR operation returns true if exactly one operand is true.
   - Symbol: $A \oplus B$
   - Truth Table:
$$
\begin{align*}
A & :\qquad 0 & 0 &\quad 1 & 1 \\
B & :\qquad 0 & 1 &\quad 0 & 1 \\
A \oplus B & :\qquad 0 & 1 &\quad 1 & 0 \\
\end{align*}
$$

## Boolean Laws and Theorems:

1. **Identity Laws:**
   - $A + 0 = A$
   - $A \cdot 1 = A$

2. **Null Laws:**
   - $A + A' = 1$
   - $A \cdot A' = 0$

3. **Domination Laws:**
   - $A + 1 = 1$
   - $A \cdot 0 = 0$

4. **Complement Laws:**
   - $A + \overline{A} = 1$
   - $A \cdot \overline{A} = 0$

5. **Idempotent Laws:**
   - $A + A = A$
   - $A \cdot A = A$

6. **Distributive Laws:**
   - $A \cdot (B + C) = (A \cdot B) + (A \cdot C)$
   - $A + (B \cdot C) = (A + B) \cdot (A + C)$

7. De Morgan's Laws

- $\overline{AB} = \overline{A} + \overline{B}$
- $\overline{A+B} = \overline{AB}$

&uparrow;

      + - ^ 32 ^ 23 / 6 - 42
      4

      3 2 * 2 ^ 5 3 - 8 4 / * -
      6 2 ^ 5 3 - 8 4 / * -
      32 5 3 - 8 4 / * -
      32 2 8 4 / * -
      32 2 2 * -
      32 4 -
      28

## Boolean Expressions:

Boolean algebra is used to represent and simplify logical expressions. Expressions can be manipulated using algebraic techniques to achieve a more compact or efficient form.

## Boolean Functions:

Boolean algebra is often used to describe and analyze Boolean functions. A Boolean function takes Boolean inputs and produces a Boolean output. Truth tables are commonly used to represent Boolean functions.

## Applications:

1. **Digital Circuits:**
   - Boolean algebra is used in the design and analysis of digital circuits.

2. **Logic Gates:**
   - Basic logic gates (AND, OR, NOT) are implemented using Boolean algebra.

3. **Computer Algorithms:**
   - Boolean logic is fundamental in designing algorithms, especially in control structures and decision-making processes.

4. **Programming:**
   - Boolean expressions are widely used in programming for conditions and decision-making.

## Conclusion:

Boolean algebra provides a mathematical foundation for representing and manipulating logical propositions. Its applications are widespread in computer science, digital electronics, and algorithm design. Understanding Boolean algebra is essential for anyone working with digital systems, computer programming, or logical reasoning. If you have specific questions or if there's a particular aspect of Boolean algebra you'd like to explore further, feel free to ask!
