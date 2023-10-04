# Sass 

Use `sphinxcontrib-sass` extension and add it to **conf.py**

## Options


`sass_src_dir`
: Root directory of SASS source files

`sass_out_dir`
: Root directory to output compiled css files

`sass_targets`
: File map of sources and outputs

`sass_output_style`
: Output style to generate css by libsass

`sass_include_paths`
: Include path configuration for libsass

## Use Example

```python
extensions = [
    "sphinxcontrib.sass",
]
html_css_files = ["css/custom.css"]


Add Sass compilations to your `Makefile`

```
build_command: 
  # normal build commands here && \
  npx sass src/styles/main.scss output/styles/main.css --watch

```
