# Welcome to your Jupyter Book

This is a small sample book to give you a feel for how book content is
structured.
It shows off a few of the major file types, as well as some sample content.
It does not go in-depth into any particular topic - check out [the Jupyter Book documentation](https://jupyterbook.org) for more information.

Check out the content pages bundled with this sample book to see more.

```{tableofcontents}
```

## Building Project
`jb` is short for `jupiter-book`

    $ jb build [dir]

use `sphinx-autobuild` for convenience

    $ sphinx-autobuild . _build/html -b html

## Generating `_toc.yml`

    $ jupyter-book toc from-project path/to/book/project/root -f [jb-book/jb-article]

The `-f` option specifies whether you are generating a table of contents for a book or an article. If you are generating a table of contents for a book, use `jb-book`. If you are generating a table of contents for an article, use `jb-article`.