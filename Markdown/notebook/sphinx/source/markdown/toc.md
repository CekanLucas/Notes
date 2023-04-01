# Table of Contents
The Table of Contents (TOC) Tree Directive is a Jupyter-Book feature that allows you to create a table of contents tree for your markdown files. This table of contents tree can be used to navigate through the different sections of your document, making it easier for readers to find the information they are looking for.

## `toctree` directive

### Syntax
The TOC Tree Directive is created using the following syntax:

    ```{toctree}
    :maxdepth: <max_depth>
    :caption: <toc title>
    path/to/source/file
    path/to/source/file2
    path/to/source/files ...
    ```
- `toctree` is the directive name.


- `maxdepth` is the maximum depth of the TOC tree. This parameter limits the number of sub-sections that are shown in the tree
- `caption` the title of the table of content displayed as the toc header

#### Entries

```{note}
The pathing of the toc is *relative* to the file the toc directive is used in also no need for the beginning `/` 
```

### Example

Here is an example of a TOC tree for a markdown file called `example.md`:

        ``` {toctree}
        :maxdepth: 2
        :numbered:
        :caption: Contents
        Table of Contents (TOC)<toc>
        ```
    
````{tip}
`Over-Ride-Displayed-Title<path/to/file>` is how you mannually set toc titles 
```{tip}
You can also link to a http-url instead of a file
```
````


This will create a table of contents tree that includes the sections and subsections in the `example.md` file, up to a maximum depth of 2. The caption is also defined.

#### Numbering {bdg.warning}`Not Working as Intended`

Use `:numbered:` option to number top level entries you can number subsections as well by specifying the depth

#### Naming

Set `:name:` option so that you can reference with the `ref` role

#### Glob Pattern Matching

Set `:glob:` option so that you can select multiple files and display them alphabetically which you can sort reversely with the `:reversed:`

        ```{toctree}
        :glob:
        :reversed:
        :caption: Reversed Alphabetical List
        markdown/*
        ```

### Hide Links

With `:hidden:` Sphinx will take hierachy but not insert links into the document at the location of the directive – this makes sense if you intend to insert these links yourself, in a different style, or in the HTML sidebar.

#### Hide Subsections

`:includehidden:` if you want to only show the top level toc tree


## Conclusion

The TOC Tree Directive is a useful feature of Jupyter-Book that allows you to create a table of contents tree for your markdown files. By including this directive in your markdown files, you can create a more user-friendly document that is easier to navigate.


        ```{toctree}
        :maxdepth: 3
        :numbered:
        :caption: Contents
        Table of Contents (TOC)<toc>
        ```