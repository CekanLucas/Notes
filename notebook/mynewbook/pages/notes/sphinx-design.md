---
jupytext:
  cell_metadata_filter: -all
  formats: md:myst
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
h1, h2, h3, h4, h5, h6, .orange {
  color: orange;
}

</style>
</head>    
<div id="stack-container">
  <a href="https://sphinx-design.readthedocs.io/en/latest/index.html"><img src="https://sphinx-design.readthedocs.io/en/latest/_static/logo_wide.svg" alt="Sphinx-Design Logo"></a>
</div>

# Sphinx Design

`Sphinx-Design` is a markdown extension that is heavily inspired by `BootStrap 5`

+++

## Cards

Cards provide an easy way for you to content into a standard “header”, “body”, “footer” structure that has a similar alignment and visual style. It is useful for creating galleries or high-visibility collections of links and information. Cards use the sphinx-design extension and are based off of Bootstrap CSS.

Cards have four main sections, and uses special characters to separate certain sections:

  - A card title: The argument given to the directive.
  - A card header: Any content that precedes a line with ^^^.
  - A card footer: Any content that comes after a line with +++.
  - A card body: Any content that comes in between ^^^ and +++.

Here is an example card (note the use of ^^^ and +++ to separate the header, body, and footer):

    ````{card} Card 1 title
    Card header 1
    ^^^
    Card body 1
    +++
    Card footer 1
    ````
````{card} Card 1 title
Card header 1
^^^
Card body 1
+++
Card footer 1
````

#### Badges
````{card}
Badges syntax: `{bdg-[type]}`\
{bdg-plain}`plain`\
{bdg-primary}`primary` {bdg-primary-line}`primary-line`\
{bdg-secondary}`secondary` {bdg-secondary-line}`secondary-line`\
{bdg-warning}`warning` {bdg-warning-line}`warning-line`\
{bdg-info}`info` {bdg-info-line}`info-line`\
{bdg-danger}`danger` {bdg-danger-line}`danger-line`\
{bdg-black}`black` {bdg-black-line}`black-line`\
{bdg-white}`white` {bdg-white-line}`white-line`
````

## Grid
Grid uses fixed length of 12 so remember when defining columns

````{grid}
:gutter: 0 5 3 1 # for xs, md, lg, xl 
:margin: 1
:padding: 3
:outline:

```{grid-item}
:columns: 5 11 5 1
Grid Item 1 <!-- ignore this comment -->
```

```{grid-item}
:outline:
:columns: 7 1 7 11
Grid Item 2
```

```{grid-item}
:outline:
Grid Item 3
```

```{grid-item}
:outline:
:class: orange
Grid Item 4
```
````

````{grid}
:gutter: 5
:margin: 5 5 0 0

```{grid-item-card} One!
:columns: 6 
:class-item: sd-bg-danger
Here's the first card.
```

```{grid-item-card} Two!
:margin: 5 5 0 2
:padding: 3
Here's the second card.
```

```{grid-item-card} Three!
Here's the third card.
```
````

Other grid options
- `:reverse:` reverses order of grid items

```{note}
- `xs` (extra small)(phone)
- `sm` (small)(tablet)
- `md` (medium)(desktop)
- `lg` (large)

these are in reference to the viewport size due to device to create responsive flexible layout
```
### Grid Options

### Overall grid Options

`:gutter:` 1 2 3 4
: Spacing between items. One or four integers (for “xs sm md lg”) 0-5

`:margin:` auto
: Outer margin of grid. One (all) or four (top bottom left right) values from: 0-5, auto

`:padding:` 1
: Inner padding of grid. One (all) or four (top bottom left right) values from: 0-5

`:outline:`
: Create a border around the grid

`:reverse:`
: Reverse the order of the grid items

`:class-container:` class1 class2
: Additional CSS classes for the grid container element

`:class-row:` class-for-row 
: Additional CSS classes for the grid row element

+++

### grid-item Options

`:columns:`
: The number of columns (out of 12) a grid-item will take up. One or four integers (for “xs sm md lg”) between 1 and 12 (or auto to adapt to the content)

`:margin:` 5 4 1 2
: Outer margin of grid item. One (all) or four (top bottom left right) values from: 0, 1-5, auto

`:padding:` 1 2 4 5
: Inner padding of grid item. One (all) or four (top bottom left right) values from: 0-5

`:child-direction:` row
: Direction of children in the grid item: column (default) or row

`:child-align:` justify
: Alignment of children, along the child-direction: start (default), end, center, justify or spaced

`:outline:`
: Create a border around the grid item

`:class:`
: Additional CSS classes for the grid item element

### grid-item-card Options

`:columns:` 6
: The number of columns (out of 12) a grid-item will take up. One or four integers (for “xs sm md lg”) between 1 and 12 (or auto to adapt to the content)

`:margin:` 1
: Outer margin of grid item. One (all) or four (top bottom left right) values from: 0, 1-5, auto

`:padding:` 3
: Inner padding of grid item. One (all) or four (top bottom left right) values from: 0-5

`:class-item:` sd-bg-danger
: Additional CSS classes for the grid item element
