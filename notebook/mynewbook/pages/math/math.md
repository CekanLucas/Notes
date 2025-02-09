# Math Directives and Roles
one `$` means inline double mean block

$\pi = 3.14159$

$$\pi = 3.14159$$

$$
  \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
$$

## Numbering Math Equations
Use the math directive

```{math}
:label: my_label
w_{t+1} = (1 + r_{t+1}) s(w_t) + y_{t+1}
```
$$
  w_{t+1} = (1 + r_{t+1}) s(w_t) + y_{t+1}
$$ (my_other_label)

## Macros
You can define macros that can be used later on
You can define up to 9 variables

$$
\def\foo#1{#1^2}
$$

$$
\foo{y} + \foo{y}\\
\foo{x} + \foo{x}
$$

## Linking to equations
- A link to an equation directive: {eq}`my_label`
- A link to a dollar math block: {eq}`my_other_label`