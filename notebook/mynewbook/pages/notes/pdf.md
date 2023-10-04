# PDF Syntax

The PDF format is a binary file format that's used to represent documents in a platform-independent manner. **The syntax of a PDF file is made up of a series of objects**, each of which is identified by an *object number* and a *generation number*

For comments use the `%` char and end at a newline

    % This is  a comment

## General Structure
A pdf has 4 basic parts
### Header
the header, with the PDF version (and an option line to specify if the PDF contains binary data) 

    %PDF-1.7

### Body
the body, containing a series of objects that are used in the document 

    1 0 obj
    ...
    endobj
    2 0 obj
    ...
    endobj
    ...

### Cross Reference Table

a cross-reference table, that specifies the position of the objects 

    xref
    0 6
    0000000000 65535 f 
    0000000010 00000 n 
    0000000079 00000 n 
    0000000173 00000 n 
    0000000301 00000 n 
    0000000380 00000 n 

This is a sequential list of objects *(#2, #3, #4...)*, more exactly the object offsets (the position in bytes from the beginning of the file). The cross-reference table allow to access any given object by its number easily, and fast. For example, this contrasts with HTML, which is purely sequential and doesn't handle large documents so well.

The first 2 numbers mean *I'll introduce 6 objects offsets, counting from 0*.

Each line contains the offset of the object definition, a revision number (not used here), and an on/off marker `f` (free) or `n` (in use).

For example, here:

    Object #1 is at offset 10
    Object #2 is at offset 79
    ...
    Object #5 is at offset 380 

If you modify this test document, remember to update all these offsets, as well as the startxref line, which describes the offset of the xref section.

The cross-reference table can also include more complex declarations, which we will cover later. 

### Trailer
a trailer, with information about where the document starts 

    trailer
    <<
      /Size 6
      /Root 1 0 R
    >>
    startxref
    492
    %%EOF

## Object Syntax
### Object Syntax
    ON GN obj
      <object contents>
    endobj
ON
: Object Number 

GN
: Generation Number


### Indirect Object
`1 0 obj ... endojb`
: Define a numbered top-level object
- The first number (1) is the object number
- second number (0) is the revision number

### Pdf Object Types

PDF objects can be of several types, including:

`Boolean`
: either `true` or `false`

`Numeric`
: a decimal number, such as `42.7`

`String`
: a sequence of characters enclosed in parentheses, such as (Hello, world!)

`Name`
: a sequence of characters that begins with a forward slash (/), such as `/MyName`

`Array`
: an ordered collection of objects enclosed in square brackets, such as `[1 2 3]`

`Dictionary`
: an unordered collection of key-value pairs enclosed in double angle brackets, such as `<< /Key1 (Value1) /Key2 (Value2) >>`

`Stream`
: a sequence of bytes that may be compressed, such as the contents of an image or a font

`Indirect reference (n r R)`
: references an object, e.g. 5 0 R. If the objects doesn't exist this is equivalent to the Null object 

`null`
: Rarely used