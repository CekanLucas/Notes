---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: tslab
  language: typescript
  name: tslab
---

# TSLAB Notebook in Myst Format

```{code-cell}
console.log('hello world')
```

```{code-cell}
// A simple generic type that takes in a type parameter T

type MyGeneric<T> = {
  value: T;
  getDescription: () => string;
};

// An example usage of the generic type with string type parameter

const myStringGeneric: MyGeneric<string> = {
  value: 'Hello, world!',
  getDescription: () => 'This is a string generic'
};

console.log(myStringGeneric.getDescription()); // Output: This is a string generic

// An example usage of the generic type with number type parameter
const myNumberGeneric: MyGeneric<number> = {
  value: 42,
  getDescription: () => 'This is a number generic'
};

console.log(myNumberGeneric.getDescription()); // Output: This is a number generic
```
