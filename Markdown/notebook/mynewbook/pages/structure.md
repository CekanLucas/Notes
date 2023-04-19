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
: Defines the structure of this Table of Contents *e.g., how to interpret the key names* jb-book tells Jupyter Book to expect chapters and parts terminology



root {bdg-danger}`relative paths not working`
: The first page of your book *aka, the **root page*** It is the landing page for the HTML of your book. All paths for chapters/sections will be relative to this root document 

chapters
: A list of entries, each of which maps onto chapters of your book.

file {bdg-danger}`relative paths not working`
: A path to a file that contains the content for a chapter / section. These paths are _relative to the root: document.

## Chapter Sub-Sections

You may optionally split a chapter across multiple files *each making up a section of the chapter*

```yml
format: jb-book
root: index
chapters:
- file: path/to/chapter1
- file: path/to/chapter2
  sections:
  - file: path/to/chapter2/section1
```

## Parts 

You can organize the chapters into parts to group them up

```yml
format: jb-book
root: index
parts:
  - caption: Name of Part 1
    chapters:
    - file: path/to/part1/chapter1
    - file: path/to/part1/chapter2
      sections:
      - file: path/to/part1/chapter2/section1
  - caption: Name of Part 2
    chapters:
    - file: path/to/part2/chapter1
    - file: path/to/part2/chapter2
      sections:
      - file: path/to/part2/chapter2/section1
```

## Other Options

file {bdg-danger}`relative paths not working`
: A path that points to a local text file, which defines the content of this entry *the chapter, section, or sub-section*. These paths should be relative to your `_toc.yml` file

glob
: A glob-like pattern that can be used to match against multiple local files. Each of these files will be collected and inserted into your content, in the order that glob discovers them

url
: An external link to a website (starting with http or https). This will be inserted into your book’s Table of Contents, though it will not affect your book’s structure *like numbering*

```{note}
When a title: entry is provided its text is used instead of the full URL.
```

Showing all three types
```yml
format: jb-book
root: index
chapters:
- file: path/to/chapter1
- url: https://example.com
  title: Example website
- glob: subfolder/other*
```