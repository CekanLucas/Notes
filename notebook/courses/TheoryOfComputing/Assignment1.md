# Assignment 1

Q1. Answer the questions below for the sets of strings:

$\tt C = \Set{\epsilon, aab, baa}$, $\qquad\tt D=\Set{bb, aab}$

(a) What is $D\cup C$? 

$D \cup C = \Set{\epsilon, bb, aab, baa}$

(b) What is $D \cdot C$?

$D \sf\cdot C = \Set{bbaab, bbbaa, aabbb, aabbaa, baabb, baaaab}$

(c\) What is the power set of C?

$\sf C^* = \Set{\epsilon, aab, baa, aabaab, aabbaa, baabaa, aabaabbaa \cdots}$


Q2. Two languages $L1$ and $L2$ are defined by symbols $∑= {0,1}$, written as follows:

L1={w| w contains ‘00’ as a substring and length of w is even number}
L2={w| w contains N number of 1 followed by N number of zeros}

(a) Write two strings that are member of L1?

$00$ and $100010$

(b) Write two strings that are not member of L1?

$1010$ and $001$

(c\) Is the string 1010 member of L2?

No 

(d) Write two strings that are member of $L=∑^*- L2$.

$1010$ and $11000110$

Q3. Covert the following NFA to the equivalent DFA.

![Alt text](draw.drawio.svg)