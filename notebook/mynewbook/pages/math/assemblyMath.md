# Math for Assembly 
<big><b><i>Submit this sheet with all calculations and all supporting work.</i></b></big>

1. Convert the following decimal numbers to binary:

$$
\begin{aligned}
\textrm{\textcolor{skyblue}{(a) 125}}\qquad &\\
2&\sqrt{125} & \div2\ remainder\ 1\\
&62 & \div2\ remainder\ 0\\
&31 & \div2\ remainder\ 1\\
&15 & \div2\ remainder\ 1\\
&7 & \div2\ remainder\ 1\\
&3 & \div2\ remainder\ 1\\
&1 & \div2\ remainder\ 1\\

Note: &\quad 2^6 + 2^5 + 2^4 + 2^3 + 2^2 + 2^0  \\
&\quad 64 + 32 + 16 + 8 + 4 + 1 = 125\\

\therefore &\quad\text{\textcolor{khaki}{125 in binary form is 111 1101}}\\[2em]
\textrm{\textcolor{skyblue}{(b) 42}}\qquad &\\

2&\sqrt{42} & \div2\ remainder\ 0\\
&21 & \div2\ remainder\ 1\\
&10 & \div2\ remainder\ 0\\
&5 & \div2\ remainder\ 1\\
&2 & \div2\ remainder\ 0\\
&1 & \div2\ remainder\ 1\\

Note: &\quad  2^5 + 2^3 + 2^1  \\
&\quad 32 + 8 + 2 = 125\\

\therefore &\quad\text{\textcolor{khaki}{42 in binary form is 10 1010}}
  
\end{aligned}
$$

2. Convert the following binary numbers to decimal:
(a) 1001 0010 1101 1000
(b) 1011 1010 1010 1111

$$
\begin{matrix*}[c]
2^{15} & 2^{14} & 2^{13} & 2^{12} & 2^{11} & 2^{10} & 2^9 & 2^8 & 2^7 & 2^6 & 2^5 & 2^4 & 2^3 & 2^2 & 2^1 & 2^0 &\\

32768 & 16384 & 8192 & 4096 & 2048 & 1024 & 512 & 256 & 128 & 64 & 32 & 16 & 8 & 4 & 2 & 1 &\\\\
1&0&0&1& 0&0&1&0& 1&1&0&1& 1&0&0&0&\\
2^{15} & \phantom{ 2^{14} } & \phantom{ 2^{13} } & 2^{12} & \phantom{ 2^{11} } & \phantom{ 2^{10} } & 2^9 & \phantom{ 2^8 } & 2^7 & 2^6 & \phantom{ 2^5 } & 2^4 & 2^3 & \phantom{ 2^2 } & \phantom{ 2^1 } & \phantom{ 2^0 } &\\
\end{matrix*}\\[2em]

\textsf{32,768 + 4,096 + 512 + 128 + 64 + 16 + 8 = 37, 592} \\
\therefore \quad\text{\textcolor{khaki}{1001 0010 1101 1000 in decimal form is 37, 592}}\\[2em]

\begin{matrix*}[c]
1&0&1&1 &1&0&1&0 &1&0&1&0 &1&1&1&1&\\
2^{15} & \phantom{ 2^{14} } & 2^{13} & 2^{12} & 2^{11} & \phantom{ 2^{10} } & 2^9 & \phantom{ 2^8 } & 2^7 & \phantom{ 2^6 } & 2^5 & \phantom{ 2^4 } & 2^3 & 2^2 & 2^1 & 2^0 &\\

32768 & \phantom{ 16384 } & 8192 & 4096 & 2048 & \phantom{ 1024 } & 512 & \phantom{ 256 } & 128 & \phantom{ 64 } & 32 & \phantom{ 16 } & 8 & 4 & 2 & 1 &\\
\end{matrix*}\\[2em]
\textsf{32,768 + 8,192 + 4096 + 2048 + 512 + 128 + 32 + 8 + 4 + 2 + 1 = 47, 791} \\
\therefore \quad\text{\textcolor{khaki}{1011 1010 1010 1111 in decimal form is 47, 791}}\\[2em]
$$

3. Convert the following decimal numbers to hexadecimal:
(a) 925 ans is D93
(b) 104

$$
\begin{aligned}
\textrm{\textcolor{skyblue}{(a) 925}}\qquad &\\
16&\sqrt{925} & \div 16\ remainder\ 13\ or\ D\\
&57 & \div 16\ remainder\ 9\\
&3 & \div 16\ remainder\ 3\\

Note: &\quad 16^2\times 3 + 16^2 \times 9 + 16^0 \times 3  \\
&\quad 768 + 144 + 3 = 125\\
\therefore &\quad\text{\textcolor{khaki}{925 in hexadecimal form is 39D}}\\[2em]

\textrm{\textcolor{skyblue}{(b) 104}}\qquad &\\

16&\sqrt{104} & \div16\ remainder\ 8\\
&6 & \div16\ remainder\ 6\\

Note: &\quad  16^1 \times 6 + 16^0 \times 8  \\
&\quad 96 + 8 = 104\\

\therefore &\quad\text{\textcolor{khaki}{104 in hexadecimal form is 68}}
  
\end{aligned}
$$

4. Convert the following hexadecimal numbers to decimal:
(a) 0x5F53DA
(b) 0x54ABC2

$$
\begin{aligned}
\textrm{\textcolor{skyblue}{(a) 0 x 5F53DA}}\qquad\qquad&\\
(5F53DA)_{16}=\qquad &5&\times 16^5& =& 5,242,880&\\
+\qquad &15&\times 16^4& =& 983,040&\\
+\qquad &5&\times 16^3& =& 20,480&\\
+\qquad &3&\times 16^2& =& 768&\\
+\qquad &13&\times 16^1& =& 208&\\
+\qquad &10&\times 16^0& =&+\qquad 10&\\

&&&\therefore& \quad\text{\textcolor{khaki}{0 x 5F53DA in decimal form is\qquad $\overline{6,247,386}$}}& \\[2em]

\textrm{\textcolor{skyblue}{(a) 0 x 54ABC2}}\qquad\qquad&\\
(54ABC2)_{16}=\qquad &5&\times 16^5& =& 5,242,880&\\
+\qquad &4&\times 16^4& =& 262,144&\\
+\qquad &10&\times 16^3& =& 40,960&\\
+\qquad &11&\times 16^2& =& 2,816&\\
+\qquad &12&\times 16^1& =& 192&\\
+\qquad &2&\times 16^0& =&+\qquad 2&\\

&&&\therefore& \quad\text{\textcolor{khaki}{0 x 54ABC2 in decimal form is\qquad $\overline{5,548,994}$}}& \\[2em]
  
\end{aligned}
$$

5. Convert the following binary numbers to hexadecimal:
<div class="columns">
  <div class="column">
  
$$
\begin{aligned}
\textrm{\textcolor{skyblue}{(a) 1011 1000 0001 0000}}\qquad\qquad&\\[1em]
\underbrace{\underbrace{1011}_{\text{11}}}_{\text{B}}\ 
\underbrace{1000}_{\text{8}}\ 
\underbrace{0001}_{\text{1}}\ 
\underbrace{0000}_{\text{0}}\ &\\\\
\therefore\text{\textcolor{khaki}{1011 1000 0001 0000 in hexadecimal is B810}}\\[2em]
\textrm{\textcolor{skyblue}{(b) 1010 0100 0011 1100}}\qquad\qquad&\\[1em]
\underbrace{ \underbrace{1010}_{\text{10}} }_{\text{A}}\ 
\underbrace{0100}_{\text{4}}\ 
\underbrace{0011}_{\text{3}}\ 
\underbrace{ \underbrace{1100}_{\text{12}} }_{\text{C}}\ &\\\\
\therefore\text{\textcolor{khaki}{1010 0100 0011 1100 in hexadecimal is A43C}}
\end{aligned}
$$  
  
  </div>
  <div class="column">
    
  Decimal | Hexadecimal | Binary
  ------: | :---------: | ------
  0       | 0           | 0000
  1       | 1           | 0001
  2       | 2           | 0010
  3       | 3           | 0011
  4       | 4           | 0100
  5       | 5           | 0101
  6       | 6           | 0110
  7       | 7           | 0111
  8       | 8           | 1000
  9       | 9           | 1001
  10      | A           | 1010
  11      | B           | 1011
  12      | C           | 1100
  13      | D           | 1101
  14      | E           | 1110
  15      | F           | 1111
    
  </div>
</div>

6. Convert the following hexadecimal numbers to binary:
(a) 0x5CD6
(b) 0x2BCD

$$
\begin{aligned}
\textrm{\textcolor{skyblue}{(a) 0 $\times$ 5CD6}}\qquad\qquad&\\[1em]
\underbrace{5}_{\text{0101}}\ 
\underbrace{\underbrace{C}_{\text{12}}}_{\text{1100}}\ 
\underbrace{\underbrace{D}_{\text{13}}}_{\text{1101}}\ 
\underbrace{6}_{\text{0110}}\ &\\\\
\therefore\text{\textcolor{khaki}{0 $\times$ 5CD6 in hexadecimal to binary is 101 1100 1101 0110}}\\[2em]
\textrm{\textcolor{skyblue}{(b) 0 $\times$ 2BCD}}\qquad\qquad&\\[1em]
\underbrace{2}_{\text{0010}}\ 
\underbrace{ \underbrace{B}_{\text{11}} }_{\text{1011}}\ 
\underbrace{ \underbrace{C}_{\text{12}} }_{\text{1100}}\ 
\underbrace{ \underbrace{D}_{\text{13}} }_{\text{1101}}\\\\
\therefore\text{\textcolor{khaki}{0 $\times$ 2BCD in hexadecimal to binary is 10 1011 1100 1101}}\\[2em]
\end{aligned}
$$

7. Calculate the 2’s complement of each of the following numbers:
(a) 1000 0101
(b) 1001 1101

$$
\begin{aligned}
\textrm{\textcolor{skyblue}{(a) 1000 0101}}\qquad\qquad&\\[1em]
\text{( 1's complement ) }\qquad 0111\ 1010&\\
+0000\ 0001&\\
\text{\textcolor{khaki}{( 2's complement )\qquad $\overline{0111\ 1011}$}}& \\[2em]

\textrm{\textcolor{skyblue}{(a) 1001 1101}}\qquad\qquad&\\[1em]
\text{( 1's complement ) }\qquad 0110\ 0010&\\
+0000\ 0001&\\
\text{\textcolor{khaki}{( 2's complement )\qquad $\overline{0110\ 0011}$}}& \\[2em]
\end{aligned}
$$

8. Perform the following signed operations in binary. Do not convert the numbers.

$$
\begin{aligned}
\textrm{\textcolor{skyblue}{(a) 1101 1000 + 1000 1100}}\qquad\qquad&\\[1em]
11\overset{1}{0}\overset{1}{1} \ 1000\\
+\quad1000\ 1100\\
\text{\textcolor{khaki}{ $\overline{1\ 0110\ 0100}$}}& \\[2em]

\textrm{\textcolor{skyblue}{(b) 1110 1010 – 0010 0100}}\qquad\qquad&\\[1em]
1110\ \overset{0}{\cancel{1}}\overset{10}{0}10\\
-\quad0010\ 0100\\
\text{\textcolor{khaki}{ $\overline{1100\ 0110}$}}& \\[2em]
\end{aligned}
$$

9. Perform the following signed operations in hexadecimal. Do not convert the numbers.
$$
\begin{aligned}
\textrm{\textcolor{skyblue}{(a) 0x1F + 0xA9}}\qquad\qquad&\\[1em]
\overset{1}{1}F&\\
+A9&\\
\text{\textcolor{khaki}{ $\overline{C8}$}}& \\[2em]

\textrm{\textcolor{skyblue}{(b) 0x3B – 0x12}}\qquad\qquad&\\[1em]
3B&\\

\text{\textcolor{khaki}{ $\overline{29}$}}&\\[1em]
\end{aligned}
$$

10.  Fill in a truth table for the following functions. Show all steps.
(a) x + (y & ~z) xor y\
**Mathematical Notation**: $x \lor (y \wedge ~z) \oplus y$

x | y | z | $\neg z$ | $y \wedge \neg z$ | $x \lor (y \wedge \neg z)$| $... \oplus y$
--| --| --| :---:    |  :---------:      |    :----------:           |:--:      
1 | 1 | 1 | 0        | 0                 | 1                         |0       
1 | 1 | 0 | 1        | 1                 | 1                         |0               
1 | 0 | 1 | 0        | 0                 | 1                         |1               
1 | 0 | 0 | 1        | 0                 | 1                         |1               
0 | 1 | 1 | 0        | 0                 | 0                         |1               
0 | 1 | 0 | 1        | 1                 | 1                         |0               
0 | 0 | 1 | 0        | 0                 | 0                         |0               
0 | 0 | 0 | 1        | 0                 | 0                         |0               
       
(b) (x + y) & ~z xor y\
**Mathematical Notation**: $(x \lor y) \wedge \neg z \oplus y$
                                                                                
x | y | z | $\neg z$ | $x \lor y$ | $(x\lor y)\wedge \neg z$  | $... \oplus y$
--| --| --| :---:    |  :--------:|    :----------:           |:--:      
1 | 1 | 1 | 0        | 1          | 0                         |1       
1 | 1 | 0 | 1        | 1          | 1                         |0               
1 | 0 | 1 | 0        | 1          | 0                         |0               
1 | 0 | 0 | 1        | 1          | 1                         |1               
0 | 1 | 1 | 0        | 1          | 0                         |1               
0 | 1 | 0 | 1        | 1          | 1                         |0               
0 | 0 | 1 | 0        | 0          | 0                         |0               
0 | 0 | 0 | 1        | 0          | 0                         |0               
