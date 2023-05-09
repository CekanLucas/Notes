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
>>> "*if* it is raining, *then* the ground is wet."

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
: **"*if* it is raining, *then* the ground is wet"**

Converse {bdg-danger}`not necessarily equivalent to the original proposition`
: $q\rightarrow p$ is the *converse* of $p\rightarrow q$
: > **"*if* the ground is wet, *then*  it is raining"**
: **"it could be wet for other reasons other than rain"**

Inverse {bdg-danger}`not necessarily equivalent to the original proposition`
: $\neg p\rightarrow\neg q$ is the *inverse* of $p\rightarrow q$
: > **"*if* it is not raining, *then* the ground is not wet"**
: **"ground could be either wet or dry without rain"**

Contrapositive {bdg-info}`equivalent to the original proposition`
: $\neg q\rightarrow\neg p$ is the *contrapositive* of $p\rightarrow q$
: > **" *if* the ground is not wet, *then*  it is not raining "**
: **"because if it were raining then the ground will be wet"**

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

## Propositional Equivalence

```{admonition} Definitions
> A *compound proposition* that is ...

**tautology**
: always true no matter what the truth values of the propositional variables that occur in it

**contradiction**.
: always false

**contingency**
: neither that is neither a tautology nor a contradiction 
```

$p \lor \neg p$ is always true hence *tautology* and $p \wedge \neg p$ is always false hence *contradiction*

````{admonition} Logical Equivalences
The compound proposition $p$ and $q$ are called **logically equivalent** if $p \leftrightarrow q$ is a tautology the notation $p \equiv q$ denotes that $p$ and $q$ are logically equivalent
  ```{note}
  $\equiv$ is *not* a conditional statement nor does it denote a compound proposition but rather that $p \leftrightarrow q$ is a tautology and alternative symbol is thus $\Leftrightarrow$
  ```
````

````{admonition} De Morgan's Laws
$$\neg(p\wedge q) \equiv \neg p \lor \neg q$$
$$\neg(p\lor q) \equiv \neg p \wedge \neg q$$
```{admonition} Augustus De Morgan **Coiner of Mathematical Induction**
:class: dropdown
![AUGUSTUS DE MORGAN](https://cdn.britannica.com/46/181346-050-4E025466/Augustus-De-Morgan.jpg) **AUGUSTUS DE MORGAN (1806–1871)** Augustus De Morgan was born in India, where his father was a colonel in the Indian army. De Morgan’s family moved to England when he was 7 months old. He attended private schools, where in his early teens he developed a strong interest in mathematics. De Morgan studied at Trinity College, Cambridge, graduating in 1827. Although he considered medicine or law, he decided on mathematics for his career. He won a position at University College, London, in 1828, but resigned after the college dismissed a fellow professor without giving reasons. However, he resumed this position in 1836 when his successor died, remaining until 1866.  De Morgan was a noted teacher who stressed principles over techniques. His students included many famous mathematicians, including Augusta Ada, Countess of Lovelace, who was Charles Babbage’s collaborator in his work on computing machines. (De Morgan cautioned the countess against studying too much mathematics, because it might interfere with her childbearing abilities!) De Morgan was an extremely prolific writer, publishing more than 1000 articles in more than 15 periodicals. De Morgan also wrote textbooks on many subjects, including logic, probability, calculus, and algebra. In 1838 he presented what was perhaps the first clear explanation of an important proof technique known as mathematical induction, a term he coined. In the 1840s De Morgan made fundamental contributions to the development of symbolic logic. He invented notations that helped him prove propositional equivalences, such as the laws that are named after him. In 1842 De Morgan presented what is considered to be the first precise definition of a limit and developed new tests for convergence of infinite series. De Morgan was also interested in the history of mathematics and wrote biographies of Newton and Halley.  In 1837 De Morgan married Sophia Frend, who wrote his biography in 1882. De Morgan’s research, writing, and teaching left little time for his family or social life. Nevertheless, he was noted for his kindness, humor, and wide range of knowledge.
```


```{admonition} Ada Countess of Lovelace **Woman of Computer Science**
:class: dropdown
![Ada of Lovelace](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/1280px-Ada_Lovelace_portrait.jpg)
Augusta Ada was the only child from the marriage of the flamboyant and notorious poet Lord Byron and Lady Byron, Annabella Millbanke, who separated when Ada was 1 month old, because of Lord Byron’s scandalous affair with his half sister. The Lord Byron had quite a reputation, being described by one of his lovers as “mad, bad, and dangerous to know.” Lady Byron was noted for her intellect and had a passion for mathematics; she was called by Lord Byron “The Princess of Parallelograms.” Augusta was raised by her mother, who encouraged her intellectual talents especially in music and mathematics, to counter what Lady Byron considered dangerous poetic tendencies. At this time, women were not allowed to attend universities and could not join learned societies. Nevertheless, Augusta pursued her mathematical studies independently and with mathematicians, including William Frend. She was also encouraged by another female mathematician, Mary Somerville, and in 1834 at a dinner party hosted by Mary Somerville, she learned about Charles Babbage’s ideas for a calculating machine, called the Analytic Engine.  In 1838 Augusta Ada married Lord King, later elevated to Earl of Lovelace. Together they had three children.  Augusta Ada continued her mathematical studies after her marriage. Charles Babbage had continued work on his Analytic Engine and lectured on this in Europe. In 1842 Babbage asked Augusta Ada to translate an article in French describing Babbage’s invention. When Babbage saw her translation, he suggested she add her own notes, and the resulting work was three times the length of the original. The most complete accounts of the Analytic Engine are found in Augusta Ada’s notes. In her notes, she compared the working of the Analytic Engine to that of the Jacquard loom, with Babbage’s punch cards analogous to the cards used to create patterns on the loom. Furthermore, she recognized the promise of the machine as a general purpose computer much better than Babbage did. She stated that the “engine is the material expression of any indefinite function of any degree of generality and complexity.” Her notes on the Analytic Engine anticipate many future developments, including computer-generated music. Augusta Ada published her writings under her initials A.A.L., concealing her identity as a woman as did many women at a time when women were not considered to be the intellectual equals of men. After 1845 she and Babbage worked toward the development of a system to predict horse races. Unfortunately, their system did not work well, leaving Augusta Ada heavily in debt at the time of her death at an unfortunately young age from uterine cancer.  In 1953 Augusta Ada’s notes on the Analytic Engine were republished more than 100 years after they were written, and after they had been long forgotten. In his work in the 1950s on the capacity of computers to think (and his influential Turing test for determining whether a machine is intelligent), Alan Turing responded to Augusta Ada’s statement that “The Analytic Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform.” This “dialogue” between Turing and Augusta Ada is still the subject of controversy. Because of her fundamental contributions to computing, the programming language Ada is named in honor of the Countess of Lovelace.
```
````