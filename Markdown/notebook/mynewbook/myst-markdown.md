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

**Markedly Structured Text** is a flavour of markdown that is used in <span class="text-yellow-500">Jupyter Books</span>

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

### Math
$\pi = 3.14159$
$$\pi = 3.14159$$

## Figures

```{figure} https://via.placeholder.com/150
:width: 100px
:align: center

Figure caption
```
## Typography

### `attr_block` {bdg-danger}`not working`
{.bg-primary}
### Paragraph heading

{#mypara .bg-warning}
Here is a paragraph with attributes.

{ref}`A reference to my paragraph <mypara>`
### Foot Notes 
    - This is a manually-numbered footnote reference.[^3]
    - This is an auto-numbered footnote reference.[^myref]

    [^myref]: This is an auto-numbered footnote definition.
    [^3]: This is a manually-numbered footnote definition.

- This is a manually-numbered footnote reference.[^3]
- This is an auto-numbered footnote reference.[^myref]

[^myref]: This is an auto-numbered footnote definition.
[^3]: This is a manually-numbered footnote definition.

### Thematic breaks

You can create a thematic break, to break content between themes, using three or more `*`, `-`, or `_` characters on a line by themselves.

***
---
___

### Text Formatting
**strong**, _emphasis_, `literal text`, \*escaped symbols\*

## Directives & Roles

These are like functions ***Directives* are multiline** and ***Roles* are single line** 

~~strikethrough with *emphasis*~~ {bdg-danger}`not working` {bdg-warning}`working only for html`

Smart-quotes 'single quotes' and "double quotes".

+-, --, ---, ... and other replacements {bdg-warning}`working only for html`

A paragraph with a span of [text with attributes]{.bg-warning} {bdg-danger}`not working`


### Line Breaks

> `\` is equivalent to `<br>` from html

Fleas \
Adam \
Had `em

### Alternative list {bdg-danger}`not working`

- [ ] An item that needs doing
- [x] An item that is complete


### Super and Sub scripts 
    H{sub}`2`O, and 4{sup}`th` of July
H{sub}`2`O, and 4{sup}`th` of July

### Attribution {bdg-danger}`not working` {bdg-danger}`needs attr_block extension`
{attribution="Hamlet act 4, Scene 5"}
> We know what we are, but know not what we may be.
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

## Admonitions

These are special text callouts

```{attention}
%:class: bg-info
attention
```
```{important}
important
```
```{caution}
:name: a
caution
```
```{warning}
warning
```
```{danger}
danger
```
```{error}
error
```
```{hint}
hint
```
```{tip}
tip
```
```{note}
note
```
```{seealso}
seealso
```
[link to](#a) {bdg-danger}`link not working`

#### Custom Admonitions
```{admonition} My custom title with *Markdown*!
:class: tip

This is a custom title for a tip admonition.
```

#### Dropdown Admonitions
```{note}
:class: dropdown

This admonition has been collapsed,
meaning you can add longer form content here,
without it taking up too much space on the page.
```

### Version Change

```{versionadded} 1.2.3
Explanation of the new feature.
```
```{versionchanged} 1.2.3
Explanation of the change.
```
```{deprecated} 1.2.3
Explanation of the deprecation.
```

## Other

{bdg-danger}`not working`
```bg-primary
This is a container with a custom CSS class.

- It can contain multiple blocks
```

### tab-set

````{tab-set}

```{tab-item} Label1
Content 1
```

```{tab-item} Label2
Content 2
```

````

## Tables

This is the same as Github flavoured markdown however did you know you can do text alignment with the `:`

    | left | center | right |
    | :--- | :----: | ----: |
    | a    | b      | c     |

| left | center | right |
| :--- | :----: | ----: |
| a    | b      | c     |

You can use html syntax and sphinx classes: `text-left` `text-right` `text-center`

<table class="colwidths-auto table">
  <thead>
    <tr><th class="text-left head"><p>left</p></th></tr>
  </thead>
  <tbody>
    <tr><td class="text-center"><p>center</p></td></tr>
  </tbody>
</table>

```{table} Table caption
:width: 70%
:widths: grid
:align: right

| foo | bar |
| --- | --- |
| baz | bim |
```

```{table} Table caption
:width: 30%
:widths: grid
:align: left

| foo | bar |
| --- | --- |
| baz | bim |
```
```{admonition} table directive options
:class: note

`align`: [center, right, left]
: Aligns *entire* table

`width`: [percentage || width]
: Sets the width of the table to the specified length or percentage of the line width \
If omitted, the renderer determines the width of the table based on its contents or the column widths

`widths`: [auto, grid or list of integers]
: Specifies relative widths if used with the width option:\
`auto` delegates the determination of column widths to the backend renderer\
`grid` determines column widths from the widths of the input columns (in characters)

```