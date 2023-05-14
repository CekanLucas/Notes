# Directives and Roles

## Directives & Roles

These are like functions ***Directives* are multiline** and ***Roles* are single line** 


### Directives 

Directives can be used as so with optional arguments

    ```{mydirectivename} arg1 arg2
    My directive content
    ```

#### Example

    ```{note}
    Here is a note
    ```
```{note}
Here is a note
```

#### Directive Keywords

Here’s an example of directive keywords using the `:key: val` syntax:

    ```{directivename}
    :key1: metadata1
    :key2: metadata2
    My directive content.
    ```

and here’s an example of directive keywords using the enclosing --- syntax:

    ```{directivename}
    ---
    metadata1: metadata2
    metadata3: metadata4
    ---
    My directive content.
    ```

```{tip}

Remember, specifying directive keywords with `:key:` or `---` will make no difference. We recommend using `---` if you have many keywords you wish to specify, or if some values will span multiple lines. Use the :key: val syntax as a shorthand for just one or two keywords
```

### Roles 
Similar to **Directives** but done on one line

    Some content {rolename}`and here is my role's content!`

`doc` keyword is for making link to another page

    {doc}`../toc`

% {doc}`../intro`
{doc}`../toc`

## More Directives
[More Directives - Sphinx Documentation](https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html)

paragraph
1. one
2. two
3. three