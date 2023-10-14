---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.11.5
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Notebooks with MyST Markdown

Jupyter Book also lets you write text-based notebooks using MyST Markdown.
See [the Notebooks with MyST Markdown documentation](https://jupyterbook.org/file-types/myst-notebooks.html) for more detailed instructions.
This page shows off a notebook written in MyST Markdown.

## An example cell

With MyST Markdown, you can define code cells with a directive like so:

```{code-cell}
print(2 + 2)
```

When your book is built, the contents of any `{code-cell}` blocks will be
executed with your default Jupyter kernel, and their outputs will be displayed
in-line with the rest of your content.

```{seealso}
Jupyter Book uses [Jupytext](https://jupytext.readthedocs.io/en/latest/) to convert text-based files to notebooks, and can support [many other text-based notebook files](https://jupyterbook.org/file-types/jupytext.html).
```

## Create a notebook with MyST Markdown

MyST Markdown notebooks are defined by two things:

1. YAML metadata that is needed to understand if / how it should convert text files to notebooks (including information about the kernel needed).
   See the YAML at the top of this page for example.
2. The presence of `{code-cell}` directives, which will be executed with your book.

That's all that is needed to get started!

## Quickly add YAML metadata for MyST Notebooks

If you have a markdown file and you'd like to quickly add YAML metadata to it, so that Jupyter Book will treat it as a MyST Markdown Notebook, run the following command:

```
jupyter-book myst init path/to/markdownfile.md
```

### ObservableHq

```{code-cell}

%%html

<!DOCTYPE html>
<h1>Titular title </h1>
<div id="myplot">my plot div</div>
<script type="module">

import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";

const relations = [
  {A: 0, B:"e"},
  {A: 1, B:"d"},
  {A: 2, B:"c"},
  {A: 1, B:"b"},
  {A: 0, B:"a"},
  {A: 2, B:"a"},
]

const plot = Plot.plot({
  title: "For charts, an informative title",
  subtitle: "Subtitle to follow with additional context",
  caption: "Figure 1. A chart with a title, subtitle, and caption.",
  width: 300, // default is 640
  aspectRatio: 4,
  inset: 20, // no corner data think padding
  marginTop: 10,
  marginRight: 20,
  marginBottom: 30,
  marginLeft: 40,
  grid: true,
  marks: [
    Plot.dot(relations, { x: "A", y: "B", stroke: "black", fill: "cyan", reverse: "A" }),
    Plot.frame(), // draw the box frame
    Plot.text(["R^2"], {lineWidth: 1, frameAnchor: "top"})
  ]
})


const div = document.querySelector("#myplot");
div.append(plot);

</script>
```