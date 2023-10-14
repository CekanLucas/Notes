# Fermat's Little Theorem 

Fermat's Little Theorem is a fundamental result in number theory discovered by the *French mathematician Pierre de Fermat*. It provides a powerful tool for working with modular arithmetic and has numerous applications in cryptography and prime number testing.

The theorem states that if $p$ is a prime number and $a$ is any positive integer not divisible by $p$, then $a^{p−1}$ is congruent to $1\ modulo\ p$, which can be written as:

$$
a^{p−1}≡1\pmod p
$$

Here's a detailed explanation of Fermat's Little Theorem:

## Statement of the Theorem:
For a prime number $p$ and any positive integer $a$ not divisible by $p$, the congruence $a^{p−1}≡1\pmod p$ holds

## Proof Outline:
The proof of Fermat's Little Theorem relies on the concept of **congruence** and **modular arithmetic**. The idea is to consider the set of numbers $a,2a,3a,…,(p−1)a$ and multiply them together modulo $p$. By rearranging the terms and canceling common factors, we can show that the product is congruent to $a_{p−1}$ modulo $p$

## Application Example:
> Let's apply Fermat's Little Theorem to find the remainder when $2^{1000}$ is divided by $7$

According to Fermat's Little Theorem, since $7$ is a prime number, for any positive integer $a$ not divisible by $7$, we have $a^6≡1 \pmod 7$

Now, let's simplify $2^{1000}$  *modulo 7* using Fermat's Little Theorem:
We can write $2^{1000}$  as $(2^6)^{16}$ Since $2^6≡1 \pmod 7$, we have:
$(2^6)^{16}≡116≡1 \pmod 7$

Therefore, $2^{100}≡1⋅2^4≡16≡ 2 \pmod 7$

Thus, when $2^{1000}$  is divided by $7$, the remainder is $2$.

Fermat's Little Theorem provides a useful tool for simplifying calculations involving exponents in modular arithmetic. It is widely used in cryptographic algorithms, such as the RSA algorithm, for secure communication and encryption.

I hope this detailed explanation and application example help you understand Fermat's Little Theorem better. If you have any more questions, feel free to ask!