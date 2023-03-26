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
  color: #cf590a;
}

</style>
</head>    
<div id="stack-container">
  <a href="https://jupyterbook.org/en/stable/start/overview.html"><img src="https://infosecjupyterbook.com/_static/logo.png" style="width: 10vw" alt="Jupyter-Book Logo"></a>
</div>

# Jupyter<span class="text-transparent font-mono shadow-none drop-shadow-none">-<span class="text-yellow-600">{</span>Book<span class="text-yellow-600">}</span></span>


## Jupiter Command Line

> **note:** `jb` is the shorthand for the `jupyter-book` command

    Usage: jupyter-book [OPTIONS] COMMAND [ARGS]...

      Build and manage books with Jupyter.

    Options:
      --version   Show the version and exit.
      -h, --help  Show this message and exit.

    Commands:
      build   Convert your book's or page's content to HTML or a PDF.
      clean   Empty the _build directory except jupyter_cache.
      config  Inspect your _config.yml file.
      create  Create a Jupyter Book template that you can customize.
      myst    Manipulate MyST markdown files.
      toc     Command-line for sphinx-external-toc.

### Create Jupyter Book
    $ jupyter-book create mynewbook/

### Directory Structure

<div class="columns">
  <div class="column">

    $ tree mynewbook/
      ├── _config.yml
      ├── intro.md
      ├── logo.png
      ├── markdown.md
      ├── markdown-notebooks.md
      ├── notebooks.ipynb
      ├── references.bib
      ├── requirements.txt
      └── _toc.yml

      0 directories, 9 files
  </div>
  <pre class="column font-mono text-red-600">
  Importance  


    !important
    
    
    
    
    
    
    
    !important (table of content)
  </pre>
</div>

### Build

    $ jb build mynewbook/

Creates a build directory `_build` folder where html and website assets are built using a *static site generator*