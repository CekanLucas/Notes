# Math for Assembly 
<big><b><i>Submit this sheet with all calculations and all supporting work.</i></b></big>

1. Given the following segment:offset addresses, find the physical address.

$$
Formula:\quad physical\ address = (segment\times 16)  + offset
$$

(a) 02C1:074F
$$
\begin{aligned}
02C10& \\
+\quad 074F& \\
\overline{0335F}&
\end{aligned}
$$

(b) 15C5:4CCF
$$
\begin{aligned}
\tt 15C50& \\
+\quad \tt 4CCF& \\
\overline{\tt 1A91F}&
\end{aligned}
$$

2. Given the following physical addresses and offset values, calculate the segment value.

$$
Rearrange \\
Formula:\quad (physical\ address -\ offset) /16 = segment 
$$

(a) Physical Address C4AD6, Offset 8AB6
$$
\begin{aligned}
\tt C4AD6& \\
-\quad \tt 8AB6& \\
\overline{\tt BC020}&
\\  \text{ Divided by E means physical address is BC02}  
\end{aligned}
$$
(b) Physical Address 1B0DC, Offset 007C

$$
\begin{aligned}
\tt 1B0DC& \\
-\quad \tt 007C& \\
\overline{\tt 1B060}&
\\  \text{ Divided by E means physical address is 1B06}  
\end{aligned}
$$

3. Convert the following decimal reals to IEEE Single Precision binary.

(a) **-9.8**
The number is **negative number** therefore signed with $1$
$9$ in binary is $1001$

$$
\begin{aligned}
&0.8 \times 2 = 1.6 = 1\\
&0.6 \times 2 = 1.2 = 1\\
&0.2 \times 2 = 0.4 = 0\\
&0.4 \times 2 = 0.8 = 0\\
&0.8 \times 2 = 1.6 = 1\\
&\\
&0.8 = 0.1100110011001100... 
\end{aligned}
$$

In normalized form $1.00101 \times 2^3$
Exponent of 3 needs to add 127 to get 130 which in binary is $1000 0010$
Thusly $\textcolor{khaki}{\text{-9.8 in floating point binary is \boxed{\text{1 10000010 0010 1000 0000 0000 0000 000 }}}}$

(b) **12.32**
The number is **positive number** therefore signed with $0$
$12$ In binary the number is $1100$

$$
\begin{align}
&0.32 \times 2 = 0.64 = 0\\
&0.64 \times 2 = 1.28 = 1\\
&0.28 \times 2 = 0.56 = 0\\
&0.56 \times 2 = 1.12 = 1\\
&0.12 \times 2 = 0.24 = 0\\
&0.24 \times 2 = 0.48 = 0\\
&0.48 \times 2 = 0.96 = 0\\
&0.96 \times 2 = 1.92 = 1\\
&0.92 \times 2 = 1.84 = 1\\
&0.84 \times 2 = 1.68 = 1\\
&0.68 \times 2 = 1.36 = 1\\
&0.36 \times 2 = 0.72 = 0\\
&0.72 \times 2 = 1.44 = 1\\
&0.44 \times 2 = 0.88 = 0\\
&0.88 \times 2 = 1.76 = 1\\
&0.76 \times 2 = 1.52 = 1\\
&0.52 \times 2 = 1.04 = 1\\
&0.04 \times 2 = 0.08 = 0\\
&0.08 \times 2 = 0.16 = 0\\
&0.16 \times 2 = 0.32 = 0\\
&0.32 \times 2 = 0.64 = 0\\
&\\
&0.32 = 0.010100011110101110000... 
\end{align}
$$

Exponent of 3 needs to add 127 to get 130 which in binary is $1000 0010$
In normalized form $1. 1000 1010 0011 11010 1110 000 \times 2^3$
Thusly $\textcolor{khaki}{\text{12.32 in floating point binary is \boxed{\text{0 10000010 1000 1010 0011 11010 1110 000 }}}}$

4. Convert the following IEEE Single Precision binary numbers to decimal real values.
(a) 1 01111100 1000 0001 1000 1011 1011 100

The number is signed with $1$ therefore it is a **negative number**

Exponent is $01111100$ which is 

$\displaystyle
\begin{aligned}
&\quad 2^6 &+\quad 2^5 &+\quad 2^4 &+\quad 2^3  &+\quad 2^2 \\
&\quad 64  &+\quad 32  &+\quad 16  &+\quad 8    &+\quad 4  \quad= 124
\end{aligned}
$

$\displaystyle $

this is biased unbiased is $124 - 127 = -3$

so $ \text{1.1000 0001 1000 1011 1011 100}\times 2^{-3}\\
\text{0.0011 0000 0011 0001 0111 0111 00}$ *Denormalized binary form*

$$
2^{-4} + 2^{-9} + 2^{-8} + 2^{-16} + 2^{-18} + 2^{-19} + 2^{-20} + 2^{-22} + 2^{-23} + 2^{-24}\\
\textcolor{khaki}{\text{1 01111100 1000 0001 1000 1011 1011 100}}\\
\textcolor{khaki}{\text{in Decimal Form is}}\\
\textcolor{khaki}{\boxed{-0.1882547736168}}
$$

(b) **0 10001100 0000 1011 1011 1011 1011 101**

The number is signed with $0$ therefore it is a **positive number**

Exponent is $10001100$ which is 

$\displaystyle
\begin{aligned}
&\quad 2^7 &+\quad 2^3&+\quad 2^2 \\
&\quad 128 &+\quad 8\ \  &+\quad 4 \quad= 140
\end{aligned}
$

$\displaystyle $

this is biased unbiased is $140 - 127 = 13$

so $ \text{1.0000 1011 1011 1011 1011 101}\times 2^{13}\\
\text{10 0001 0111 0111 . 0111 0111 01}$ *Denormalized binary form*

$$
2^{13} + 2^8 + 2^6 + 2^5 + 2^4 + 2^2 + 2^1 + 2^0 + 2^{-2} + 2^{-3} + 2^{-4} + 2^{-6} + 2^{-7} + 2^{-8} + 2^{-10}\\
\textcolor{khaki}{\text{0 10001100 0000 1011 1011 1011 1011 101}}\\
\textcolor{khaki}{\text{in Decimal Form is}}\\
\textcolor{khaki}{\boxed{8567.2783203125}}
$$

---

4. Convert the following IEEE Single Precision binary numbers to decimal real values.
(a) 1 10000001 1001 0100 0000 0000 0000 000b


The number is signed with $1$ therefore it is a **negative number**

Exponent is $1000 0001$ which is $2^7 + 2^0 = 128 + 1 = 129$  in decimal 

this is biased, unbiased is $129 - 127 = 2$

so $ \text{1.100101}\times 2^{2}\\
\text{110.0101}$ *Denormalized binary form*

$\displaystyle
\begin{aligned}
&\quad 2^2 &+\quad 2^1 &+\quad 2^{-2} &+\quad 2^{-4}& \\
&\quad 4   &+\quad 2   &+\quad \frac{1}{4} &+\quad \frac{1}{8} &\quad= \frac{51}{8}\quad= 6.3125\\
\end{aligned}
$

$$
\textcolor{khaki}{\text{1 1000 0001 \quad 1001 0100 0000 0000 0000 000b}}\\
\textcolor{khaki}{\text{in Decimal Form is}}\\
\textcolor{khaki}{\boxed{-6.3125}}
$$

- b) The IEEE-Double Precision format is similar to the IEEE-Single Precision format except that
the biased exponent is 11 bits instead of 8, the bias value is 1023 instead of 127, and the fractional
component is 52 bits instead of 23. Using this information, store the number **422.32** into IEEE Double Precision format.

The number is not signed therefore starts with $0$ a **positive number**

$\displaystyle
\begin{aligned}
&\quad 2^2 &+\quad 2^1 &+\quad 2^{-2} &+\quad 2^{-4}& \\
&\quad 4   &+\quad 2   &+\quad \frac{1}{4} &+\quad \frac{1}{8} &\quad= \frac{51}{8}\quad= 6.3125\\
\end{aligned}
$

$$
\begin{aligned}
&422 / 2  =\ remainder\ 0\quad\\
&211 / 2  =\ remainder\ 1\quad\\
&105 / 2  =\ remainder\ 1\quad\\
&52  / 2  =\ remainder\ 0\quad\\
&26  / 2  =\ remainder\ 0\quad\\
&13  / 2  =\ remainder\ 1\quad\\
&6  / 2  =\ remainder\ 0\quad\\
&3  / 2  =\ remainder\ 1\quad\\
&1  / 2  =\ remainder\ 1\quad\\
\\
&422 = \texttt{1 1010 0110}

\end{aligned}
\begin{aligned}

&0.32 \times 2 = 0.64 = 0\\
&0.64 \times 2 = 1.28 = 1\\
&0.28 \times 2 = 0.56 = 0\\
&0.56 \times 2 = 1.12 = 1\\
&0.12 \times 2 = 0.24 = 0\\
&0.24 \times 2 = 0.48 = 0\\
&0.48 \times 2 = 0.96 = 0\\
&0.96 \times 2 = 1.92 = 1\\
&0.92 \times 2 = 1.84 = 1\\
&0.84 \times 2 = 1.68 = 1\\
&0.68 \times 2 = 1.36 = 1\\
&0.36 \times 2 = 0.72 = 0\\
&0.72 \times 2 = 1.44 = 1\\
&0.44 \times 2 = 0.88 = 0\\
&0.88 \times 2 = 1.76 = 1\\
&0.76 \times 2 = 1.52 = 1\\
&0.52 \times 2 = 1.04 = 1\\
&0.04 \times 2 = 0.08 = 0\\
&0.08 \times 2 = 0.16 = 0\\
&0.16 \times 2 = 0.32 = 0\\
&0.32 \times 2 = 0.64 = 0\\
&\\
&0.32 = 0.010100011110101110000... 
\end{aligned}
$$

so remembering that mantisa in double form is **52 bits** 
$\text{1 1010 0110 .  010100011110101110000...}$ *Denormalized binary form*
$ \text{1.100101...}\times 2^{8}$ *Normalized binary form*

Calculating exponent remember biased values is **1023** with **11** bits:
Since $1031 -1023 = 8$ $1031$ is exponent decimal value


$$
\textcolor{khaki}{\text{422.32}}\\
\textcolor{khaki}{\text{in Binary Form is}}\\
\textcolor{khaki}{\boxed{0\quad 100\ 0000\ 0111 \quad 1010\ 0110\ 0101\ 0001\ 1110\ 1011\ 1000\ 0101\ 0001\ 1110\ 1011\ 1000\ 0101}}
$$