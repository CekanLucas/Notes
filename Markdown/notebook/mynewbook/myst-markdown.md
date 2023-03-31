<head>
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
  <link rel="stylesheet" href="../CSS.css">
  <script src="../CSS.js"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

<style> 
body ::selection {
  /*highlighting*/
  background: transparent;
  text-shadow: 
    1px  0px 1px ,
    0px  1px 1px ,
    -1px  0px 1px ,
    0px -1px 1px ,
    0px  1px black ,
    1px  0px black ,
    -1px  0px black ,
    0px -1px black ;
  text-outline: black;  
}
/* Themes */
h1, h2, h3, h4, h5, h6 {
  color: goldenrod;
}

</style>
</head>    
<div id="stack-container">
  <a href=""><img src="" alt="Logo"></a>
</div>

# Markedly Structured Text

**Markedly Structured Text** is a flavour of markdown that is used in <span class="text-yellow-500">Jupyter Notebooks</span>

## Syntax 

**Markedly Structured Text** is a superset of **CommonMark Markdown**

## Unique Syntax

Most will need extensions check out documentation

MyST
: Markedly Structured Text

Term 2
: Longer definition

  With multiple paragraphs

  - And bullet points

### Glossary List

```{glossary}
Term one
  An indented explanation of term 1

A second term
  An indented explanation of term2
```

### Comments
You can make comments that are not parsed
% you can't see this comment

    % my comment

### Foot Notes 
    - This is a manually-numbered footnote reference.[^3]
    - This is an auto-numbered footnote reference.[^myref]

    [^myref]: This is an auto-numbered footnote definition.
    [^3]: This is a manually-numbered footnote definition.

- This is a manually-numbered footnote reference.[^3]
- This is an auto-numbered footnote reference.[^myref]

[^myref]: This is an auto-numbered footnote definition.
[^3]: This is a manually-numbered footnote definition.

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

    {doc}`../intro`

{doc}`../intro`

#### Terms defined in `glossary`

- {term}`Term one`
- {term}`A second term`

```{tip}
When you nest directive within directives you need to add another <code>`</code>

    ````{outer-directive}
      outer content
    ```{inner-directive}
      inner content
    ```
    ````
```