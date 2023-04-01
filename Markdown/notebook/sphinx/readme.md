<head>
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
  <link rel="stylesheet" href="../../CSS.css">
  <script src="../../CSS.js"></script>
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
  <a href="https://www.sphinx-doc.org/en/master/index.html"><img src="https://www.sphinx-doc.org/en/master/_static/sphinxheader.png" alt="Logo"></a>
</div>

This project was generated with

    $ sphinx-quickstart

This project purpose is to give me a hands on experience with sphinx so I can be better using Jupyter-Book

## Converting from `rsMD` to `myST`



**reST** (**reStructuredText**) is a lightweight markup language that allows you to write structured documents with headings, paragraphs, lists, and other formatting elements. 

*It is the default markup language used by Sphinx*, a popular documentation generator for <u>Python projects</u>. reST is designed to be easy to read and write, and can be converted to a variety of output formats, including HTML, LaTeX, and PDF

**myST** (**Markedly Structured Text**) is a new markup language developed by the <u>Jupyter project</u>. It is based on <b><u>Markdown</u></b>, a popular lightweight markup language that is widely used in web development. 

>myST extends Markdown with additional features that are useful for documenting scientific content, such as equations, citations, and cross-references

### Steps

Remember to install `myst-parser`

    $ pip install myst-parser

```python 
# conf.py
extensions = [
    'myst_parser',
]
```