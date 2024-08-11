# Markdown Extended

Based on [this](https://marketplace.visualstudio.com/items?itemName=jebbs.markdown-extended) extension

## Admonitions

!!! note 

    This is the **note** admonition body

    !!! danger Danger Title
        This is the **danger** admonition body

  !!! Warning Don't Show Headers
    If a admonition does not have a title it will not show the header
    Also you can use `""` for the titel for the same effect

### Supported Qualifiers
Here are the keywords and there associated admonition styles
Keywords are *case-insensitive*

  !!! Note Note
    This is also the **default**
  !!! Summary Summary or Abstract or TLDR
  !!! info Info or TODO
  !!! tip Tip or Hint
  !!! Success Success or Check or Done
  !!! Question Question or Help or FAQ
  !!! Warning Warning or Caution
  !!! Attention Attention
  !!! Failure Failure or Fail or Missing
  !!! Error Error
  !!! Danger Danger
  !!! Bug Bug
  !!! Example Example or Snippet
  !!! Quote Quote or Cite


## Snippets

| Rendered                     | Code                           | Note                                        |
| ---------------------------- | ------------------------------ |
| ~sub~script                  | `~sub~script`                  | Subscript                                   |
| ^super^script                | `^super^script`                | Superscript                                 |
| [ ] checkbox                 | `[] checkbox`                  | <small>put a space between brackets</small> |
| - [ ] tasklist               | `- [] tasklist`                | <small>put a space between brackets</small> |
| <kbd>Keyboard</kbd>          | `<kbd>Keyboard</kbd>`          | `kbd` html element                          |
| **attr**{style="color:red"}  | `**attr**{style="color:red"}`  | Add attributes to elements                  |
| <font color="red">red</font> | `<font color="red">red</font>` | Color with `font` element                   |
&nbsp; | `[[TOC]]` | Table of Contents

*[ABBR]: Abbreviations <!-- not Working -->

### Table of Content

from *markdown-it-table-of-contents* using `[[TOC]]`

[[TOC]]

### Footnotes

from *markdown-it-footnotes* using `[[TOC]]`

Here is a footnote reference,[^1] and another.[^LongNote]

[^1]: Here is the footnote.
[^LongNote]: Here's one with multiple blocks

```
    Here is a footnote reference,[^1] and another.[^LongNote]

    [^1]: Here is the footnote.
    [^LongNote]: Here's one with multiple blocks
```

### Abbreviations

from *markdown-it-abbr*

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C

```
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C
```

### Container

This is basically the markdown way of making div soup 

  !!! Note Note
    you need bootstrap css for it to work
    see `markdown.styles` in workspace settings
    but bootstrap ruins my style

::::: container
:::: row
::: col-xs-6 alert alert-success
success text
:::
::: col-xs-6 alert alert-warning
warning text
:::
::::
:::::

```
::::: container
:::: row
::: col-xs-6 alert alert-success
success text
:::
::: col-xs-6 alert alert-warning
warning text
:::
::::
:::::
```

Instead lets use <b class="text-green-300">Bulma's</b> button layout

::::: container
:::: buttons
::: button is-success
  success text
:::
::: button is-warning
  warning text
:::
::::
:::::

```
::::: container
:::: buttons
::: button is-success
  success text
:::
::: button is-warning
  warning text
:::
::::
:::::
```

### Emoji support
from *markdown-it-emoji*

Hello from mars :satellite:

### HTML5 Embeded

from *markdown-it-html5-embed*

![](https://example.com/file.webm)

### [\<ins>](https://github.com/markdown-it/markdown-it-ins) `Not Included with Extension`

++Inserted text++

### Mark

Marked Text from *markdown-it-mark*

This is the ==mark== element in action

    This is the ==mark== element in action