# Data Structures

## 1. Java Review

- To go through course objectives/course syllabus/ course schedule and evaluation criteria
- To revise basic java concepts
- To go over the concepts of variables, identifiers, tokens, constants, data types, selection statements in java
- To review arrays, classes, objects, encapsulation, abstraction, strings and file handling in java

### Summary

- Java packages
  – Provide a mechanism for grouping related classes
- import statement
  – Required to use classes contained in other packages
- Object in Java is an instance of a class
- Class
  – Data type that specifies data and methods available
  – Data fields are either variables or constants
  – Methods implement object behavior
  - Method parameters are passed by value
- Comments in Java
  – Comment lines
  – Multiple-line comments
- Java identifier
  – Sequence of letters, digits, underscores, and dollar signs
- Primitive data types categories
  – Integer, character, floating point, and boolean
- Java reference
  - Used to locate an object
- Define named constant with final keyword
- Java uses short-circuit evaluation for logical and relational expressions
- Array
  – Collection of references that have the same data type
- Selection statements
  – if and switch
- Iteration statements
  – while, for, and do
- String
  – Sequence of characters
  – String classes: String, StringBuffer, StringTokenizer
- Exceptions
  – Used to handle errors during execution
- Files are accessed using Scanner class or streams

## 2. Principles of Software Engineering

•Software engineering studies ways to facilitate the development of computer programs
•Software life cycle consists of:
–Specifying the problem
–Designing the algorithm
–Analyzing the risks
–Verifying the algorithm
–Coding the programs
–Testing the programs
–Refining the solution
–Using the solution
–Maintaining the software
•A loop invariant is a property of an algorithm that is true before and after each iteration of a loop
•An evaluation of the quality of a solution must take into consideration
–The solution’s correctness
–The solution’s efficiency
–The time that went into the development of the solution
–The solution’s ease of use
–The cost of modifying and expanding the solution
•A combination of object-oriented and functional decomposition techniques will lead to a modular solution
•The final solution should be as easy to modify as possible
•A method should be as independent as possible and perform one well-defined task
•A method should always include an initial comment that states its purpose, its precondition, and its postcondition
•A program should be as fail-safe as possible
•Effective use of available diagnostic aids is one of the keys to debugging
•To make it easier to examine the contents of complex data structures while debugging, dump methods that display the contents of the data structures should be used

### Summary

Students are required to accomplish the following tasks:

    To go through the Software Development Life Cycle phases
    To review the principles of Software engineering
    To learn about Object Oriented Design concepts- Encapsulation, Abstraction etc.
    To go through the concept of safe programming

## 3. Recursion

Students are required to accomplish the following tasks:

    To get an idea of recursion
    To know base case and iterative cases
    To go through the recursive solutions for finding factorial, searching in an array, making arrangements etc.
    To study Towers of Hanoi problem and its solution

### Summary

•Recursion solves a problem by solving a smaller problem of the same type
•Four questions to keep in mind when constructing a recursive solution
–How can you define the problem in terms of a smaller problem of the same type?
–How does each recursive call diminish the size of the problem?
–What instance of the problem can serve as the base case?
–As the problem size diminishes, will you reach this base case?
•A recursive call’s postcondition can be assumed to be true if its precondition is true
•The box trace can be used to trace the actions of a recursive method
•Recursion can be used to solve problems whose iterative solutions are difficult to conceptualize
•Some recursive solutions are much less efficient than a corresponding iterative solution due to their inherently inefficient algorithms and the overhead of method calls
•If you can easily, clearly, and efficiently solve a problem by using iteration, you should do so

## 4. Data Abstractions

Students are required to accomplish the following tasks:

    To get an idea of abstraction/information hiding
    To go through the concept of Abstract data types
    To make a relationship between java classes, interfaces with operations of abstract data types
    To implement abstract data types in java

### Summary

Data abstraction: a technique for controlling the interaction between a program and its data structures

An ADT: the specifications of a set of data management operations and the data values upon which they operate

The formal mathematical study of ADTs uses systems of axioms to specify the behavior of ADT operations

Only after you have fully defined an ADT should you think about how to implement it

A client should only be able to access the data structure by using the ADT operations

An object encapsulates both data and operations on that data

        –In Java, objects are instances of a class, which is a programmer-defined data type

A Java class contains at least one constructor, which is an initialization method

Typically, you should make the data fields of a class private and provide public methods to access some or all of the data fields

## 5. Linked List

In this lesson, students will

- go through the concept of link list in data structures
- learn reference based ADT list
- differentiate between value types and reference types
- cover insertion in a linked list
- cover deletion in a linked list
- cover displaying contents in linked list

### Summary

- Reference variables can be used to implement the data structure known as a linked list
- Each reference in a linked list is a reference to the next node in the list
- Algorithms for insertions and deletions in a linked list involve
  - Traversing the list from the beginning until you reach the appropriate position
  - Performing reference changes to alter the structure of the list
- Inserting a new node at the beginning of a linked list and deleting the first node of a linked list are special cases
- An array-based implementation uses an implicit ordering scheme; a reference-based implementation uses an explicit ordering scheme
- Any element in an array can be accessed directly; you must traverse a linked list to access a particular node
- Items can be inserted into and deleted from a reference-based linked list without shifting data

## 6. Linked List - Advanced

In this chapter, students will go through the concept of

- sorted link list
- doubly link list
- circular link list
- dummy head nodes
- java collections framework

### Summary

- The new operator can be used to allocate memory dynamically for both an array and a linked list
  - The size of a linked list can be increased one node at a time more efficiently than that of an array
- A binary search of a linked list is impractical
- Recursion can be used to perform operations on a linked list
- The recursive insertion algorithm for a sorted linked list works because each smaller linked list is also sorted
- A tail reference can be used to facilitate locating the end of a list
- In a circular linked list, the last node references the first node
- Dummy head nodes eliminate the special cases for insertion into and deletion from the beginning of a linked list
- A head record contains global information about a linked list
- A doubly linked list allows you to traverse the list in either direction
- Generic class or interface
  - Enables you to defer the choice of certain data-type information until its use
- Java Collections Framework
  - Contains interfaces, implementations, and algorithms for many common ADTs
- Collection
  - Object that holds other objects
  - Iterator cycles through its contents

## 7. Stacks

In this lesson, students will go through

- the concepts of stacks as a data structure
- uses of stacks
- ADT stack
- array based and reference based implementation of ADT stack
- List based implementation
- Balancing the braces using stacks

### Summary

- ADT stack operations have a last-in, first-out (LIFO) behavior
- Algorithms that operate on algebraic expressions are an important application of stacks

## 8. Stacks - Advanced

In this lesson, students will learn

- evaluation of algebraic expressions using stacks
- conversion of infix to post fix expressions using stacks
- Recursion and stacks

### Summary

- Typically, stacks are used by compilers to implement recursive methods
  - During execution, each recursive call generates an activation record that is pushed onto a stack
- Stacks can be used to implement a nonrecursive version of a recursive algorithm
- A stack can be used to determine whether a sequence of flights exists between two cities
- A strong relationship exists between recursion and stacks

## Instruction Execution Cycle

1. **Fetch the instruction** from the area of memory known as the _instruction queue_ afterwards it increments the _instruction pointer_
1. **Decode** looks at binary patters here it might be revealed that the instruction has operands (_input values_)
1. **Fetch operands** if operands are required cpu may fetch operands from registers and memory sometimes involving address calculations
1. **Execute** the instructions using any operands values it fetched during earlier step it also updates a few status flags such as zero, carry and overflow
1. **Store output** if output operand was part of instruction, the CPU stores the result of its execution in the operand

### Basic Steps

> These three have to be present whilst the extra two don't have to be present

- Fetch the instruction
- Decode
- Execute

#### Operands

A value that is either an input or output of an operation eg in **Z = X + Y** we have two input operands **X,Y** and output operands

### Reading from Memory

Multiple machine cycles are required\
Responds slowly than the CPU

Four Steps

1. Place the address of the value you want to read on the address bus
1. Assert the processor’s RD (read) pin.
1. Wait one clock cycle for the memory chips to respond.
1. Copy the data from the data bus into the destination operand

## 9. Queues

- Queues data structure and its applications
- Queues in java
- Array based implementation
- List based implementation
- Being a _interface_ you need to instantiate it in this way

```java
Queue<Integer> queue = new LinkedList<>();
```

### Summary

- The definition of the queue operations gives the ADT queue first-in, first-out (FIFO) behavior
- A reference-based implementation of a queue uses either
  – A circular linked list
  – A linear linked list with a head reference and a tail reference
- An array-based implementation of a queue is prone to rightward drift
  – A circular array eliminates the problem of rightward drift

## 10. Queues - Advanced

In this lesson, students will go through

    🔸 Circular array based implementation of the queue
    🔹 simulations

### Summary

- To distinguish between the **queue-full** and **queue-empty** conditions in a queue implementation that uses a circular array, you can

  - Count the number of items in the queue
  - Use a full flag
  - Leave one array location empty

- Models of real-world systems often use queues
  –The event-driven simulation in this chapter uses a queue to model a line of customers in a bank
- Simulations
  –Central to a simulation is the notion of simulated time
- In a time-driven simulation
  –Simulated time is advanced by a single time unit
- In an event-driven simulation
  –Simulated time is advanced to the time of the next event
  –To implement an event-driven simulation, you maintain an event list that contains events that have not yet occurred

## 11. Algorithm Efficiency & Sorting

In these lessons, you are going to learn

- algorithm efficiency
- Complexity
- Sorting
  - Bubble sort ✅
  - Merge sort ✅
  - Quick sort ✅
  - Bucket sort
  - Insertion sort
  - Selection sort ✅
- Analysis of these algorithms

### Summary

•Order-of-magnitude analysis and **Big O notation** measure an algorithm’s time requirement as a function of the problem size by using a growth-rate function

•To compare the inherit efficiency of algorithms

- Examine their growth-rate functions when the problems are large
- Consider only significant differences in growth-rate functions

•Worst-case and average-case analyses

- _Worst-case analysis_ considers the maximum amount of work an algorithm requires on a problem of a given size
- _Average-case analysis_ considers the expected amount of work an algorithm requires on a problem of a given size

•Order-of-magnitude analysis can be used to choose an implementation for an abstract data type
_•Selection_ sort, _bubble_ sort, and _insertion_ sort are all `O(n2)` algorithms
•_Quicksort_ and _mergesort_ are two very **efficient** sorting algorithms

## PostFix

### Example

p_stack : $\LARGE{5 , 6 , 2 , + , \times , 12 , 4 , \div,  -}$

(6 + 2) _ 5 - (12 / 4) = 8 _ 5 - 3 = 37

5 \* (6 + 2) its not in order for postfix conversion

5 6 2 + \* 12 4 / -

### Steps

when you scan a **operator** pop the first 2 elements from stack and push result back onto stack

| Step | Symbol Scanned | Stack      |
| ---: | :------------: | ---------- |
|    1 |       5        | 5          |
|    2 |       6        | 5, 6       |
|    3 |       2        | 5, 6, 2    |
|    4 |       +        | 5, 8       |
|    5 |       \*       | 40         |
|    6 |       12       | 40, 12     |
|    7 |       4        | 40, 12 , 4 |
|    8 |       /        | 40, 3      |
|    8 |       -        | 37         |

### Conversion from Infix to PostFix

> **Infix:** Normal way _eg_ $\quad2+2, 4\div2, (2-1)\times2-1$

#### Example

$(A+B\div C \times (D +C) -F) $

#### Steps

| Step | Stack      | PostFix |
| ---: | :--------- | ------- |
|    ( | (          |
|    A | (          | A       |
|   \+ | (+         | A       |
|    B | (+         | AB      |
|    / | (+/        | AB      |
|    C | (+/        | ABC     |
|   \* | (+/\*      | ABC     |
|    ( | (+/\*(     | ABC     |
|    D | (+/\*(     | ABCD    |
|   \+ | (+/\*(+    | ABCD    |
|    C | (+/\*(+    | ABCDC   |
|    ) | (+/\*(+)   | ABCDC   |
|    - | (+/\*(+)-  | ABCDC   |
|    F | (+/\*(+)-  | ABCDCF  |
|    ) | (+/\*(+)-) | ABCDCF  |

# Data Structures 2

The efficiency of a binary search tree is related to its _height_
60

```
                   10
                     \
Shortest tree height  20
     40                 \
    /   \                30
  20     60                \
  /\     /\                 40
10  30 50  70                 \
                               50
                                 \
                Longest Height    60
                of Tree             \
                                     70
```

## 2 - 3 Trees

A tree in which each internal or non-leaf node has either two or three children
and all leaves are at the same level

If node has only two children you can be safe by setting rightChild to `null`

The 2 in 2 - 3 is in regards that there is **2 data items instead of 1**

```
       small     big
       data      data
         60      90
     /        |        \
Left        Middle      Right
Child       Child       Child

entries     entries     entries
< 60       60 <  < 90     > 90
```

### Shorter Height

Compared to a binary search tree with tree nodes a 2-3 tree will usually be shorter in heigh

**But** because you have to make more comparisons on a 3 node there isn't any efficiency gains

### Main Advantage Balance

To keep a binary search tree balanced could be difficult however it is trivial for a 2-3 tree

## AVL

**Must be balanced**
The height of the left subtree differs from the right subtree by at most 1

so this _maintains close to minimum height_ so search is efficient

### Insertion and Deletion

<strong><big>After Each Operation Check and Restore Balance</big></strong>

$$
BalanceValue(tree)\\
= height(tree.left) - height(tree.right)
$$

> Balanced trees will have value of $-1$, $0$, or $1$ _else_ **not balanced**

### How to re-balance

We use a operation called a **rotation**

**2 types**

1. **Single rotation** - Occur at the lowest point of imbalance _or the first imbalanced node on the way back up to the root_
2. **Double rotation**
   - Occurs a the lowest and second lowest point of imbalance
   - Used when single rotation fails
   - _GUARANTEED TO SOLVE IMBALANCE_ if single rotation failed

##### Single Rotation

```
   20                40
  /↩️ \              /  \
10    40   >>      20   50
     /  \         /  \    \
   30    50     10   30    60
           \
           60
```

**There are 4 types different types of rotation**

1. **Rotate Left Single Rotation** - done when the right child is higher than the left by more than 1
1. **Rotate Right Single Rotation** - done when the right child is higher than the left by more than 1
1. **Rotate Right, _then_ Rotate Left Double Rotation** - done when single left rotation fails
1. **Rotate Left, _then_ Rotate Right Double Rotation** - done when single right rotation fails

##### Double Rotation

```
      40  Before             40  During                30  After  Double Rotation
     /  \                   /  \                      /  \
   20    50               30    50                  20    40
  / ↩️\     \             /  \     \                /  \   / \
 10   30    60         20    35    60            10   25 35  50
     /  \             /  \                            /        \
   25    35          10   25                        22          60
  /                      /
22                     22
```

`When single rotation fails` _undo rotation_ then
Rotate the child with the larger height in the opposite direction
_Then_ rotate the current node in the original direction again

###### Strength and Weaknesses

<big style="color:lime">Advantage</big>
Height is always very close to the theoretical minimum

<big style="color:red">Disadvantage</big>
Implementation more difficult

###### Cost of Finding Height

`treeHeight(node)` is costly

If you have to calculate at the root it is $O(n)$
the child of the root is $O(1/2 n) = O(n)$
then the child of that is $O(1/4 n) = O(n)$ and so on

number of height of the tree is roughly $O(log\ n)$

Cost to check the balance all the way back up is therefore
$height \times O(n) = \log\ n \times O(n) = O(n\ \log\ n)$

## Hashing

**Hashing** Enables access to table items in time that is relatively constant and independent of the items

- think determining the index of a table using only entry's search key
- search key is mapped or _hashed_ to the index

**Hash functions** Maps the search key of a table item into a location that will contain the item
**Hash Table** An array that contains the table items, as assigned by a hash function

### A perfect hash function

Maps each search key into a _unique_ location of the hash table

#### Collision

Occurs when the hash function maps more than one item into the same array location

##### Collision Resolution Scheme

Assign locations in the hash table to items with different search keys when the items are involved in a collision

##### Requirements of Hash Function

- Be easy and fast to compute
- Place items evenly throughout the hash table

## Complexities of Major ADT Types

|        ADT         | Operation | Average Case    | Worst Case |
| :----------------: | --------- | --------------- | ---------- |
|       Array        | Access    | O(1)            | O(1)       |
|       &nbsp;       | Search    | O(n)            | O(n)       |
|       &nbsp;       | Insertion | N/A             | N/A        |
|       &nbsp;       | Deletion  | N/A             | N/A        |
|       &nbsp;       | Resize    | O(n)            | O(n)       |
|    Linked List     | Access    | O(n)            | O(n)       |
|       &nbsp;       | Search    | O(n)            | O(n)       |
|       &nbsp;       | Insertion | (Start) O(1)    | O(1)       |
|       &nbsp;       | Insertion | (End) O(1)      | O(1)       |
|       &nbsp;       | Deletion  | (Start) O(1)    | O(1)       |
|       &nbsp;       | Deletion  | (End) O(n)      | O(n)       |
|       Stack        | Push      | O(1)            | O(1)       |
|       &nbsp;       | Pop       | O(1)            | O(1)       |
|       &nbsp;       | Peek      | O(1)            | O(1)       |
|       Queue        | Enqueue   | O(1)            | O(1)       |
|       &nbsp;       | Dequeue   | O(1)            | O(1)       |
|       &nbsp;       | Peek      | O(1)            | O(1)       |
|     Hash Table     | Insertion | O(1)            | O(n)       |
|       &nbsp;       | Deletion  | O(1)            | O(n)       |
|       &nbsp;       | Search    | O(1)            | O(n)       |
| Binary Search Tree | Insertion | O(log n)        | O(n)       |
|       &nbsp;       | Deletion  | O(log n)        | O(n)       |
|       &nbsp;       | Search    | O(log n)        | O(n)       |
|      AVL Tree      | Insertion | O(log n)        | O(log n)   |
|       &nbsp;       | Deletion  | O(log n)        | O(log n)   |
|       &nbsp;       | Search    | O(log n)        | O(log n)   |
|   Red-Black Tree   | Insertion | O(log n)        | O(log n)   |
|       &nbsp;       | Deletion  | O(log n)        | O(log n)   |
|       &nbsp;       | Search    | O(log n)        | O(log n)   |
|        Heap        | Insertion | O(log n)        | O(log n)   |
|       &nbsp;       | Deletion  | (Root) O(log n) | O(log n)   |
|       &nbsp;       | Find      | Minimum O(1)    | O(1)       |
|       &nbsp;       | Find      | Maximum O(1)    | O(1)       |





