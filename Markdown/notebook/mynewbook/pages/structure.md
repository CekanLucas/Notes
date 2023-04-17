# Structure of a Book

The Structure of is set in the Table of Contents `_toc.yml`

## Basic Outline

```yml
format: jb-book
root: index
chapters:
- file: path/to/chapter1
- file: path/to/chapter2
```

format
: Defines the structure of this Table of Contents (e.g., how to interpret the key names). jb-book tells Jupyter Book to expect chapters and parts terminology (see below for details).

root
: The first page of your book (aka, the “root page”). It is the landing page for the HTML of your book. All paths for chapters/sections will be relative to this root document.

chapters
: A list of entries, each of which maps onto chapters of your book.

file
: A path to a file that contains the content for a chapter / section. These paths are _relative to the root: document.
