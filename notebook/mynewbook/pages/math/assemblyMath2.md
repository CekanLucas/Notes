# Math for Assembly 
<big><b><i>Submit this sheet with all calculations and all supporting work.</i></b></big>

1. Using Number set **39, 78, 321, 145** convert into ...

  <ol type="a">
    <li>Hexadecimal Representation</li>
  </ol>

$$
\begin{aligned}
\mathbf{\textcolor{skyblue}{39}} \qquad
16&\sqrt{39} & \div 16\ remainder\ 7\\
&2 & \div 16\ remainder\ 2\\
Note: &\quad 16^1\times 2 + 16^0 \times 7 \\
&\quad 32 + 7 = 39\\
\therefore &\quad\text{\textcolor{khaki}{39 in hexadecimal form is 27}}\\[2em]

\mathbf{\textcolor{skyblue}{78}}\qquad
16&\sqrt{78} & \div16\ remainder\ 14\ or\ E\\
&4 & \div16\ remainder\ 4\\
Note: &\quad  16^1 \times 4 + 16^0 \times 14  \\
&\quad 64 + 14 = 78\\
\therefore &\quad\text{\textcolor{khaki}{78 in hexadecimal form is 4E}}\\[2em]

\mathbf{\textcolor{skyblue}{321}}\qquad
16&\sqrt{321} & \div16\ remainder\ 1\\
&20 & \div16\ remainder\ 4\\
&1 & \div16\ remainder\ 1\\
Note: &\quad 16^2 \times 1 + 16^1 \times 4 + 16^0 \times 1  \\
&\quad 256 + 64 + 1 = 321\\
\therefore &\quad\text{\textcolor{khaki}{321 in hexadecimal form is 141}}\\[2em]

\mathbf{\textcolor{skyblue}{145}}\qquad
16&\sqrt{145} & \div 16\ remainder\ 1\\
&9 & \div 16\ remainder\ 9\\
Note: &\quad 16^1\times 9 + 16^0 \times 1 \\
&\quad 144 + 1 = 145\\
\therefore &\quad\text{\textcolor{khaki}{145 in hexadecimal form is 91}}
\end{aligned}
$$

  <ol type="a">
    <li style="visibility:hidden;"></li>
    <li>Binary Representation</li>
  </ol>

$$
\begin{aligned}
\mathbf{\textcolor{skyblue}{39}} \qquad
2&\sqrt{39} & \div2\ remainder\ 1\\
&19 & \div2\ remainder\ 1\\
&9 & \div2\ remainder\ 1\\
&4 & \div2\ remainder\ 0\\
&2 & \div2\ remainder\ 0\\
&1 & \div2\ remainder\ 1\\

Note: &\quad 2^5 + 2^2 + 2^1 + 2^0  \\
&\quad 32 + 4 + 2 + 1 = 39\\

\therefore &\quad\text{\textcolor{khaki}{39 in binary form is 10 0111}}\\[2em]

\mathbf{\textcolor{skyblue}{78}}\qquad
2&\sqrt{78} & \div2\ remainder\ 0\\
&\textcolor{orange}{\textbf{Same as before question}}\\
&39 & \div2\ remainder\ 1\\
&19 & \div2\ remainder\ 1\\
&9 & \div2\ remainder\ 1\\
&4 & \div2\ remainder\ 0\\
&2 & \div2\ remainder\ 0\\
&1 & \div2\ remainder\ 1\\

Note: &\quad 2^5 + 2^2 + 2^1 + 2^0  \\
&\quad 32 + 4 + 2 + 1 = 78\\

\therefore &\quad\text{\textcolor{khaki}{78 in binary form is 100 1110}}\\[2em]


\mathbf{\textcolor{skyblue}{321}}\qquad
2&\sqrt{321} & \div2\ remainder\ 1\\
&160 & \div2\ remainder\ 0\\
&80 & \div2\ remainder\ 0\\
&40 & \div2\ remainder\ 0\\
&20 & \div2\ remainder\ 0\\
&10 & \div2\ remainder\ 0\\
&5 & \div2\ remainder\ 1\\
&2 & \div2\ remainder\ 0\\
&1 & \div2\ remainder\ 1\\

Note: &\quad 2^8 + 2^6 + 2^0  \\
&\quad 256 + 64 + 1 = 321\\

\therefore &\quad\text{\textcolor{khaki}{321 in binary form is 1 0100 0001}}\\[2em]


\mathbf{\textcolor{skyblue}{145}}\qquad
2&\sqrt{145} & \div2\ remainder\ 1\\
&72 & \div2\ remainder\ 0\\
&36 & \div2\ remainder\ 0\\
&18 & \div2\ remainder\ 0\\
&9 & \div2\ remainder\ 1\\
&4 & \div2\ remainder\ 0\\
&2 & \div2\ remainder\ 0\\
&1 & \div2\ remainder\ 1\\

Note: &\quad 2^7 + 2^4 + 2^0  \\
&\quad 128 + 16 + 1 = 145\\

\therefore &\quad\text{\textcolor{khaki}{145 in binary form is 1001 0001}}
\end{aligned}
$$

2. Using Number Set #2 (four binary numbers) 11101101b, 00011011b, 11110101b, 01100100b, show the value of each number as:

    <ol type="a">
      <li>
        An unsigned decimal value
      
      </li>
      <li>
        A signed decimal value
      </li>
    </ol>

$$
\begin{matrix*}[c]
2^7 & 2^6 & 2^5 & 2^4 & 2^3 & 2^2 & 2^1 & 2^0 &\\
128 & 64 & 32 & 16 & 8 & 4 & 2 & 1 &\\\\
\end{matrix*}\\[1em]

\textbf{\textcolor{skyblue}{1110 1101 b}}\\[2em]

\begin{matrix*}[c]
1&1&1&0& 1&1&0&1&\\
2^7 & 2^6 & 2^5  & \phantom{ 2^4 } & 2^3 & 2^2  & \phantom{ 2^1 } & 2^0  &\\
\end{matrix*}\\[1em]

\textsf{128 + 64 + 32 + 8 + 4 + 1 = 237} \\
\therefore \quad\text{\textcolor{khaki}{1110 1101 in unsigned decimal form is 237}}\\[1em]

\begin{matrix*}[c]
0&0&0&1& 0&0&1&1&\\
\phantom{ 2^7 } & \phantom{ 2^6 } & \phantom{ 2^5 } & 2^4 & \phantom{ 2^3 } & \phantom{ 2^2 } & 2^1 & 2^0 &\\
\end{matrix*}\\[1em]

\textsf{16 + 2 + 1 = 19} \\
\therefore \quad\text{\textcolor{khaki}{1110 1101 in signed decimal form is -19}}\\[2em]

\textbf{\textcolor{skyblue}{0001 1011 b}}\\[2em]
\begin{matrix*}[c]
0&0&0&1& 1&0&1&1&\\
\phantom{ 2^7 } & \phantom{ 2^6 } & \phantom{ 2^5 }  & 2^4 & 2^3 & \phantom{ 2^2 }  & 2^1 & 2^0  &\\
\end{matrix*}\\[1em]

\textsf{16 + 8 + 2 + 1 = 27} \\
\therefore \quad\text{\textcolor{khaki}{0001 1011 in unsigned decimal form is 27}}\\[2em]

\begin{matrix*}[c]
1&1&1&0& 1&1&0&1&\\
2^7 & 2^6 & 2^5 & \phantom{ 2^4 } & 2^3 & 2^2 & \phantom{ 2^1 } & 2^0 &\\
\end{matrix*}\\[1em]

\textsf{128 + 64 + 32 + 8 + 4 + 1 = 237} \\
\therefore \quad\text{\textcolor{khaki}{1110 1101 in signed decimal form is -237}}\\[2em]


\textbf{\textcolor{skyblue}{1111 0101 b}}\\[2em]

\begin{matrix*}[c]
1&1&1&1& 0&1&0&1&\\
2^7 & 2^6 & 2^5  & 2^4 & \phantom{ 2^3 } & 2^2  & \phantom{ 2^1 } & 2^0  &\\
\end{matrix*}\\[1em]

\textsf{128 + 64 + 32 + 16 + 4 + 1 = 245} \\
\therefore \quad\text{\textcolor{khaki}{1111 0101 in unsigned decimal form is 245}}\\[2em]

\begin{matrix*}[c]
0&0&0&0& 1&0&1&1&\\
\phantom{}{ 2^7 } & \phantom{}{ 2^6 } & \phantom{}{ 2^5 } & \phantom{}{ 2^4 } & 2^3 & \phantom{}{ 2^2 } & 2^1 & 2^0 &\\
\end{matrix*}\\[1em]

\textsf{8 + 2 + 1 = 11} \\
\therefore \quad\text{\textcolor{khaki}{1111 0101  in signed decimal form is -11}}\\[2em]

\textbf{\textcolor{skyblue}{0110 0100 b}}\\[2em]

\begin{matrix*}[c]
0&1&1&0& 0&1&0&0&\\
\phantom{ 2^7 } & 2^6 & 2^5  & \phantom{ 2^4 } & \phantom{ 2^3 } & 2^2  & \phantom{ 2^1 } & \phantom{ 2^0 }  &\\
\end{matrix*}\\[1em]

\textsf{64 + 32 + 4 = 100} \\
\therefore \quad\text{\textcolor{khaki}{0110 0100 in unsigned decimal form is 100}}\\[2em]

\begin{matrix*}[c]
1&0&0&1& 1&0&1&1&\\
2^7 & \phantom{ 2^6 } & \phantom{ 2^5 } & 2^4 & 2^3 & \phantom{ 2^2 } & 2^1 & 2^0 &\\
\end{matrix*}\\[1em]

\textsf{128 + 16 + 8 + 2 + 1 = 155} \\
\therefore \quad\text{\textcolor{khaki}{0110 0100in signed decimal form is -155}}\\[2em]
$$

3. [10] Using Number Set #2 (four binary numbers) 01100100b, 10011010b, 01101101b, 11000110b, where the first number is considered to be A, the second number B, the third C, etc… calculate each of the following:


  <ol type="a">
    <li>
  A v B, A v C, A v D ( v is the symbol for the OR operation)

    </li>
    <li>
  A ^ B, A ^ C, A ⊕ D (^ is the symbol for the AND operation, ⊕ is the symbol for the XOR operation)
    
    </li>
  </ol>

  2. Using Number Set #2 (four binary numbers) 11101101b, 00011011b, 11110101b, 01100100b, show the value of each number as:

  <ol type="a">
    <li>
      An unsigned decimal value
    
    </li>
    <li>
      A signed decimal value
    </li>
  </ol>

$$
\begin{matrix*}[c]
2^7 & 2^6 & 2^5 & 2^4 & 2^3 & 2^2 & 2^1 & 2^0 &\\
128 & 64 & 32 & 16 & 8 & 4 & 2 & 1 &\\\\
\end{matrix*}\\[1em]

\textbf{\textcolor{skyblue}{1110 1101 b}}\\[2em]

\begin{matrix*}[c]
1&1&1&0& 1&1&0&1&\\
2^7 & 2^6 & 2^5  & \phantom{ 2^4 } & 2^3 & 2^2  & \phantom{ 2^1 } & 2^0  &\\
\end{matrix*}\\[1em]

\textsf{128 + 64 + 32 + 8 + 4 + 1 = 237} \\
\therefore \quad\text{\textcolor{khaki}{1110 1101 in unsigned decimal form is 237}}\\[1em]

\begin{matrix*}[c]
0&0&0&1& 0&0&1&1&\\
\phantom{ 2^7 } & \phantom{ 2^6 } & \phantom{ 2^5 } & 2^4 & \phantom{ 2^3 } & \phantom{ 2^2 } & 2^1 & 2^0 &\\
\end{matrix*}\\[1em]

\textsf{16 + 2 + 1 = 19} \\
\therefore \quad\text{\textcolor{khaki}{1110 1101 in signed decimal form is -19}}\\[2em]

\textbf{\textcolor{skyblue}{0001 1011 b}}\\[2em]
\begin{matrix*}[c]
0&0&0&1& 1&0&1&1&\\
\phantom{ 2^7 } & \phantom{ 2^6 } & \phantom{ 2^5 }  & 2^4 & 2^3 & \phantom{ 2^2 }  & 2^1 & 2^0  &\\
\end{matrix*}\\[1em]

\textsf{16 + 8 + 2 + 1 = 27} \\
\therefore \quad\text{\textcolor{khaki}{0001 1011 in unsigned decimal form is 27}}\\[2em]

\begin{matrix*}[c]
1&1&1&0& 1&1&0&1&\\
2^7 & 2^6 & 2^5 & \phantom{ 2^4 } & 2^3 & 2^2 & \phantom{ 2^1 } & 2^0 &\\
\end{matrix*}\\[1em]

\textsf{128 + 64 + 32 + 8 + 4 + 1 = 237} \\
\therefore \quad\text{\textcolor{khaki}{1110 1101 in signed decimal form is -237}}\\[2em]


\textbf{\textcolor{skyblue}{1111 0101 b}}\\[2em]

\begin{matrix*}[c]
1&1&1&1& 0&1&0&1&\\
2^7 & 2^6 & 2^5  & 2^4 & \phantom{ 2^3 } & 2^2  & \phantom{ 2^1 } & 2^0  &\\
\end{matrix*}\\[1em]

\textsf{128 + 64 + 32 + 16 + 4 + 1 = 245} \\
\therefore \quad\text{\textcolor{khaki}{1111 0101 in unsigned decimal form is 245}}\\[2em]

\begin{matrix*}[c]
0&0&0&0& 1&0&1&1&\\
\phantom{}{ 2^7 } & \phantom{}{ 2^6 } & \phantom{}{ 2^5 } & \phantom{}{ 2^4 } & 2^3 & \phantom{}{ 2^2 } & 2^1 & 2^0 &\\
\end{matrix*}\\[1em]

\textsf{8 + 2 + 1 = 11} \\
\therefore \quad\text{\textcolor{khaki}{1111 0101  in signed decimal form is -11}}\\[2em]

\textbf{\textcolor{skyblue}{0110 0100 b}}\\[2em]

\begin{matrix*}[c]
0&1&1&0& 0&1&0&0&\\
\phantom{ 2^7 } & 2^6 & 2^5  & \phantom{ 2^4 } & \phantom{ 2^3 } & 2^2  & \phantom{ 2^1 } & \phantom{ 2^0 }  &\\
\end{matrix*}\\[1em]

\textsf{64 + 32 + 4 = 100} \\
\therefore \quad\text{\textcolor{khaki}{0110 0100 in unsigned decimal form is 100}}\\[2em]

\begin{matrix*}[c]
1&0&0&1& 1&0&1&1&\\
2^7 & \phantom{ 2^6 } & \phantom{ 2^5 } & 2^4 & 2^3 & \phantom{ 2^2 } & 2^1 & 2^0 &\\
\end{matrix*}\\[1em]

\textsf{128 + 16 + 8 + 2 + 1 = 155} \\
\therefore \quad\text{\textcolor{khaki}{0110 0100in signed decimal form is -155}}\\[2em]
$$

1. Using Number Set #2 (four binary numbers) 01100100b, 10011010b, 01101101b, 11000110b, where the first number is considered to be A, the second number B, the third C, etc… calculate each of the following:


    <ol type="a">
      <li>
    A v B, A v C, A v D ( v is the symbol for the OR operation)

      </li>
      <li>
    A ^ B, A ^ C, A ⊕ D (^ is the symbol for the AND operation, ⊕ is the symbol for the XOR operation)
      
      </li>
    </ol>

$$
\begin{aligned}
&& 0110\ 0100 \\
A\lor B =\quad& \lor& 1001\ 1010\\
&&\overline{1111\ 1110} 
\end{aligned}
\\[1em]
\begin{aligned}
&& 0110\ 0100 \\
A\lor C =\quad& \lor& 0110\ 1101\\
&&\overline{0110\ 1101} 
\end{aligned}
\\[1em]
\begin{aligned}
&& 0110\ 0100 \\
A\lor D =\quad& \lor& 1100\ 0110\\
&&\overline{1110\ 0110} 
\end{aligned}
\\[1em]
\begin{aligned}
&& 0110\ 0100 \\
A\wedge B =\quad& \wedge& 1001\ 1010\\
&&\overline{0000\ 0000} 
\end{aligned}
\\[1em]
\begin{aligned}
&& 0110\ 0100 \\
A\wedge C =\quad& \wedge& 0110\ 1101\\
&&\overline{0110\ 0100} 
\end{aligned}
\\[1em]
\begin{aligned}
&& 0110\ 0100 \\
A\oplus D =\quad& \oplus& 1100\ 0110\\
&&\overline{1010\ 0010} 
\end{aligned}
$$


1. Using Number Set#3 - HEX 71AF2523h, 2B988398h, 9E5E4AD8h, 6B7C3487h (four hexadecimal numbers) where the first number is Q, the second number R, the third S, etc… calculate each of the following:


    <ol type="a">
      <li>
    Q + R, Q + S, Q + T (show the carry value – 9th digit, if there is a carry value)
    
    $\tt \textcolor{khaki}{\text{There is a carry for the 9th digit for Q + S}}$
      </li>
      <li>
    Q – R, Q – S, Q – T (use the 16’s compliment method)
      </li>
    </ol>


$$
\begin{aligned}
   \tt \phantom{1} 1 1 \phantom{F\ 2523} &\\
   \tt 7 1 A F\ 2523 &\\
+\ \tt 2B98\ 8398 &\\

\tt \textcolor{khaki}{ \overline{9D47\ A8BB}}& \\[1em]

    \tt 71AF\ 2523 &\\
-\ \tt 2B98\ 8398 &\\
\\
\tiny\text{16's complement of R} \\
\ \tt FFFF\ FFFF &\\
-\ \tt 2B98\ 8398 &\\
+\ \tt \phantom{2B98\ 839}1 &\\
\tt { \overline{D467\ 7C68}}& \\[1em]

\tt 1 \phantom0 1 1 \phantom{1\ } 1\phantom{000} &\\
\ \tt D467\ 7C68 &\\
+\ \tt 71AF\ 2523 &\\
\tt \textcolor{khaki}{ \overline{1\ 4616\ A18B}}& \\[1em]

\end{aligned}

\begin{aligned}
   \tt 1 1 1 1 \phantom{F\ 2523} &\\
\qquad   \tt 71AF\ 2523 &\\
\qquad +\ \tt 9E5E\ 4AD8 &\\

\tt \textcolor{khaki}{ \overline{1\ 100D\ 6FFB}}& \\[1em]

\qquad   \tt 71AF\ 2523 &\\
\qquad -\ \tt 9E5E\ 4AD8 &\\
\\
\tiny\text{16's complement of S} \\
\ \tt FFFF\ FFFF &\\
-\ \tt 9E5E\ 4AD8 &\\
+\ \tt \phantom{2B98\ 839}1 &\\
\tt { \overline{61A1\ B528}}& \\[1em]

\tt  \phantom0 1 1 \phantom{1\ } \phantom{0000} &\\
\ \tt 61A1\ B528 &\\
+\ \tt 71AF\ 2523 &\\
\tt \textcolor{khaki}{ \overline{D\ 350D\ A4AB}}& \\[1em]

\end{aligned}

\begin{aligned}
   \tt \phantom{1} 1 1 \phantom{F\ 2523} &\\
\qquad   \tt 71AF\ 2523 &\\
\qquad +\ \tt 6B7C\ 3487 &\\

\tt \textcolor{khaki}{ \overline{DD2B\ 59AA}}& \\[1em]

\qquad   \tt 71AF\ 2523 &\\
\qquad -\ \tt 6B7C\ 3487 &\\
\\
\tiny\text{16's complement of T} \\
\ \tt FFFF\ FFFF &\\
-\ \tt 6B7C\ 3487 &\\
+\ \tt \phantom{2B98\ 839}1 &\\
\tt { \overline{9483\ CB79}}& \\[1em]

\tt 1 \phantom0 1 1 \phantom{1\ } 1\phantom{000} &\\
\ \tt 9483\ CB79 &\\
+\ \tt 71AF\ 2523 &\\
\tt \textcolor{khaki}{ \overline{1\ 0632\ F09C}}& \\[1em]

\end{aligned}
$$

$$
\mathtt{\textcolor{skyblue}{Q: 71AF\ 2523 \ h}}\\[1em]
\mathtt{\textcolor{skyblue}{R: 2B98\ 8398 \ h}}\\[1em]
\mathtt{\textcolor{skyblue}{S: 9E5E\ 4AD8 \ h}}\\[1em]
\mathtt{\textcolor{skyblue}{T: 6B7C\ 3487 \ h}}\\[1em]
$$

## For My Reference

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


