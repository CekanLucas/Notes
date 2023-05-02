---
jupytext:
  formats: ipynb,md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.14.5
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

# Programming with Linux
*BY WROX*

Normally when we are not working in notebook setting we need to compile the program

```bash
$ gcc -o hello hello.c
$ ./hello
```
    Hello World

```{code-cell} ipython3
%%bash
gcc --version

# compile hello.c into hello binary then run it
gcc -o hello hello.c 
./hello
```

> If you forget the `-o` flag then compiled program would go to `a.out` meaning assembler output *this comes from early days of UNIX when people would play games as `a.out` to avoid being caught by system administrators*

+++

## Directory Structure

### Applications

`/usr/bin` supplied by system for general use including program development

`/usr/local/bin` or `/opt` applications added by sys admins for a specific host computer or local network



```{code-cell} ipython3
%%bash
echo "--- /usr/bin ---"
ls /usr/bin | tail
echo "--- /usr/local/bin ---"
ls /usr/local/bin | tail
```

### Header Files 
Usually located within `/usr/include` for C 
`usr/include/sys` adn `usr/include/linux`

```{code-cell} ipython3
%%bash
echo "--- /usr/include ---"
ls /usr/include | tail
echo "--- /usr/include/sys ---"
ls /usr/include/sys | tail
echo "--- /usr/include/linux ---"
ls /usr/include/linux | head
```

```{code-cell} ipython3
%%bash
cd /usr/include
grep EXIT_ *.h | head
```

### Libraries
**Libraries** are collections of precompiled functions that have been written to be reusable
#### Stored In
`/lib` and `/usr/lib`

- `.a` for traditional static libraries
- `.so` for shared libraries

```{code-cell} ipython3
%%bash
echo "--- /lib ---"
ls /lib | head
echo "--- /usr/lib ---"
ls /usr/lib | head
```

## Static Libraries

`fred.c`
```c
#include <stdio.h>
void fred(int arg) {
  printf("fred: you passed %d\n", arg);
}
```
`bill.c`
```c
#include <stdio.h>
void bill(char *arg) {
  printf("bill: you passed %s\n", arg);
}
```

```{code-cell} ipython3
%%bash
gcc -c bill.c fred.c
ls *.o
```

> `c` flag prevents compiler from created a complete program which is needed because `main` function has not been defined 

We should create a header file

    lib.h

```c
/*
This is lib.h. It declares the functions fred and bill for users
*/
void bill(char *);
void fred(int);
```

We can include this header file in the calling program

    program.c

```c
#include "lib.h"
int main() {
    bill("Hello World");
    exit(0);
}
```

```{code-cell} ipython3
%%bash
gcc -c program.c
gcc -o program program.o bill.o
./program
```
