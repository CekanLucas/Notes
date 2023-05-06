# Discrete Mathematics

## Numbering Math Equations
Use the math directive

```{math}
:label: my_label
w_{t+1} = (1 + r_{t+1}) s(w_t) + y_{t+1}
```
$$
  w_{t+1} = (1 + r_{t+1}) s(w_t) + y_{t+1}
$$ (my_other_label)

## Linking to equations
- A link to an equation directive: {eq}`my_label`
- A link to a dollar math block: {eq}`my_other_label`

## Prepositional Logic
```{admonition} George Boole **Father of Boolean Algebra**
:class: dropdown
![George Boole](https://upload.wikimedia.org/wikipedia/commons/c/ce/George_Boole_color.jpg) **GEORGE BOOLE (1815–1864)** George Boole, the son of a cobbler, was born in Lincoln, England, in November 1815. Because of his family’s difficult financial situation, Boole struggled to educate himself while supporting his family. Nevertheless, he became one of the most important mathematicians of the 1800s. Although he considered a career as a clergyman, he decided instead to go into teaching, and soon afterward opened a school of his own. In his preparation for teaching mathematics, Boole unsatisfied with textbooks of his day decided to read the works of the great mathematicians. While reading papers of the great French mathematician Lagrange, Boole made discoveries in the calculus of variations, the branch of analysis dealing with finding curves and surfaces by optimizing certain parameters.  In 1848 Boole published The *Mathematical Analysis of Logic*, the first of his contributions to symbolic logic. 
In 1849 he was appointed professor of mathematics at Queen’s College in Cork, Ireland. In 1854 he published The *Laws of Thought*, his most famous work. In this book, Boole introduced what is now called Boolean algebra in his honor. Boole wrote textbooks on differential equations and on difference equations that were used in Great Britain until the end of the nineteenth century. Boole married in 1855; his wife was the niece of the professor of Greek at Queen’s College. In 1864 Boole died from pneumonia, which he contracted as a result of keeping a lecture engagement even though he was soaking wet from a rainstorm.
```

```{admonition} John Wilder Tukey **Coiner of Bit and Software**
:class: dropdown
![John Wilder Tukey](https://upload.wikimedia.org/wikipedia/en/e/e9/John_Tukey.jpg) **John Wilder Tukey (1915–2000)** Tukey, born in New Bedford, Massachusetts, was an only child.  His parents, both teachers, decided home schooling would best develop his potential. His formal education began at Brown University, where he studied mathematics and chemistry. He received a master’s degree in chemistry from Brown and continued his studies at Princeton University, changing his field of study from chemistry to mathematics. He received his Ph.D. from Princeton in 1939 for work in topology, when he was appointed an instructor in mathematics at Princeton. With the start of World War II, he joined the Fire Control Research Office, where he began working in statistics. Tukey found statistical research to his liking and impressed several leading statisticians with his skills. In 1945, at the conclusion of the war, Tukey returned to the mathematics department at Princeton as a professor of statistics, and he also took a position c The LIFE Picture at AT&T Bell Laboratories. Tukey founded the Statistics Department at Princeton in 1966 and was its first Collection/Getty Images chairman. Tukey made significant contributions to many areas of statistics, including the analysis of variance, the estimation of spectra of time series, inferences about the values of a set of parameters from a single experiment, and the philosophy of statistics. However, he is best known for his invention, with J. W. Cooley, of the fast Fourier transform. In addition to his contributions to statistics, Tukey was noted as a skilled wordsmith; he is credited with coining the terms bit and software.  Tukey contributed his insight and expertise by serving on the President’s Science Advisory Committee. He chaired several important committees dealing with the environment, education, and chemicals and health. He also served on committees working on nuclear disarmament. Tukey received many awards, including the National Medal of Science
```

A **proposition** is a declarative sentence that is either *true* or *false* but not both

```{tip}
Let *p* be a proposition. The *negation of p*, denoted by *$\neg p$* is the statement:
    
    It is not the case that p

*$\neg p$* is the <u>opposite</u> of *p*
``` 

### Truth Table for the negation of a Proposition

*p* | *$\neg p$*
--- | ----------
T   | F
F   | T

### Truth Table for the Conjunction of Two Proposition

This is the **And** condition

*p* | *q* |*$p\wedge q$* |
--- | --- | ------------ |
T   |  T  |      T       |
F   |  T  |      F       |
T   |  F  |      F       |
F   |  F  |      F       |

### Truth Table for the Disjunction of Two Proposition

This is the inclusive **OR** condition

*p* | *q* |*$p  \lor q$* |
--- | --- | ------------ |
T   |  T  |      T       |
F   |  T  |      T       |
T   |  F  |      T       |
F   |  F  |      F       |

#### Exclusive OR

This is the exclusive **OR** condition

*p* | *q* |*$p\oplus q$* |
--- | --- | ------------ |
T   |  T  |      F       |
F   |  T  |      T       |
T   |  F  |      T       |
F   |  F  |      F       |

#### Conditional Statements

> Let *p* and *q* be propositions. The conditional statement *$p\rightarrow  q$* is the proposition *if p, then q.* The conditional statement *$p\rightarrow  q$* is false when *p* is true and *q* is false, and true otherwise.  In the conditional statement *$p\rightarrow  q$*, *p* is called the *hypothesis* (or *antecedent* or *premise*) and *q* is called the *conclusion* (or *consequence*).
>> *$p\rightarrow  q$* is a **conditional statement** or a **implication** *q* is true on the condition that *q* holds

*p* | *q* |*$p\rightarrow q$* |
--- |:---:|:-----------------:|
T   |  T  |           T       |
F   |  T  |           T       |
T   |  F  |           F       |
F   |  F  |           T       |

```{tip}
The concept of conditionals doesn't make much sense in terms of truth table. All that is important is that if $p \rightarrow q$, then it means that if *p* is true then it means that *q* can not be false otherwise, the statement is not just false but doesn't make sense

> think **if then**
```
##### Definitions

Proposition
: $p\rightarrow q$ A conditional statement

Converse
: $q\rightarrow p$ is the *converse* of $p\rightarrow q$

Inverse
: $\neg p\rightarrow\neg q$ is the *inverse* of $p\rightarrow q$

Contrapositive
: $\neg q\rightarrow\neg p$ is the *contrapositive* of $p\rightarrow q$

Equivalent 
: When two propositional statement have the same truth value

```{note} 
Only *contrapositive* is equivalent to the original proposition but *inverse and converse* statements are 
<u>not necessarily equivalent</u>  
```

#### Biconditionals 

> The **biconditional statement** $p\leftrightarrow q$ is the statement *p if and only if* also called **bi-implication**

```{note}
$$ p \leftrightarrow q \equiv (p \rightarrow q) \wedge (q \rightarrow p)$$
```

*p* | *q* |*$p\leftrightarrow q$* |
--- |:---:|:---------------------:|
T   |  T  |           T           |
F   |  T  |           F           |
T   |  F  |           F           |
F   |  F  |           T           |

### Precedence of Logical Operator

In **compound propositions** the order of precedence that we calculate is from left to right below

$$ \neg \wedge \lor \rightarrow \leftrightarrow$$

### Bitwise Operations

We can express true and false statements in terms of binary

*p* | *q* |*$p\wedge q$* |*$p\lor q$* |*$p\oplus q$* |*$p\rightarrow q$* |*$p\leftrightarrow q$* |
--- |:---:|:------------:|:----------:|:------------:|:-----------------:|:---------------------:|
1   |  1  |1             |1           |0             |1                  |1                      |
1   |  0  |0             |1           |1             |0                  |0                      |
0   |  1  |0             |1           |1             |1                  |0                      |
0   |  0  |0             |0           |0             |1                  |1                      |


#### Fuzzy Logic

> Used in artificial intelligence

It means `1` for truth and `0` for false but there could be <u>degrees</u> between these two values for example `0.7` for *Bill is happy means that it is usually true*
