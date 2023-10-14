# Myst Vscode Markdown Extension
[Link Here](https://marketplace.visualstudio.com/items?itemName=ExecutableBookProject.myst-highlight)

% below looks to be heading 1
Title
====== 
## sub-title

% below looks to be heading 2
Title
------
### sub-title


Below is a block break
+++ this is a block break
% this is a comment (use `CTRL+/` to toggle)

[def]

[def]: https://www.abc.com "abc"


``````{note}
Here is a *admonition* directive
You can write **any** Markdown in here, and it will be `syntax highlighted`
`````{tip}
Even nested directives will work
`````

Try `CTRL+/` in code to see autocomplete for the code block

```{code-block} Java
System.out.println("hello world");
```

```{code-cell} Java
System.out.println("hello world");
```

- ```{seealso} Content
```

```{sidebar} Title
content
```

```{Test} Testing
conent **ad**
```

<center>This is centered</center>

```{raw-cell}
:raw_mimetype: text/plain

content
```



``````

```{admonition} Custom **Title**
:class: danger

asdad
```

```{code} x86asm
:class:
:number-lines: 2
:force:
:name: java

mov eax, ax
sub
div
```

```{error}
:name: error
asdsad
```

```{} 3
```



