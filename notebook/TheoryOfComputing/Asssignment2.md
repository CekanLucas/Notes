**Q1: Design a Context free grammar for the following language:**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**(a) $0^n 1^n\ $ where $n\ge 1$**

<font color="red"><b>Q1a</b> answer:</font>

```nbf
S => 0N1 | ε
N => 0N1 | 01 | ε
```


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**(b) $a^i b^j c^k\ $ where $i$, $j$ and $k$ are *not equal***

<font color="red"><b>Q1b</b> answer:</font>

```nbf
S => ABC | ε
A => A | a | ε
B => B | b | ε
C => C | c | ε
```

**Q2. The following Grammar generates the language for 0 * 1 (0 + 1)\***

```nbf
S =>  A1B | ε
A =>  0A  | ε
B =>  0B  | 1B |ε
```
**Give leftmost and rightmost derivation for the following string:** `00101`

<font color="red"><b>Q2</b> answer:</font>
```nbf
    S   => A1B
        => 0A1B
        => 00A1B
        => 001B
        => 0010B
        => 00101B
        => 00101
```
