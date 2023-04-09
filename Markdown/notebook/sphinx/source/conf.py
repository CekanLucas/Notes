# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = 'Learn Sphinx'
copyright = '2023, Lucas Cekan'
author = 'Lucas Cekan'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'myst_parser',  # use myST instead of reST
    # 'myst_nb',
    'jupyter_book',
    'sphinx_thebe',
    'sphinx_comments',
    # 'sphinx_external_toc',
    # 'sphinx.ext.intersphinx',
    'sphinx_design',
    # 'sphinx_book_theme',
    # 'sphinx_jupyterbook_latex'
    # 'sphinx_rtd_dark_mode'  # toggle-able dark mode
    # other extensions...
    'sphinx.ext.intersphinx',
    'sphinx.ext.ifconfig',
    'sphinx.ext.viewcode',
    'sphinx.ext.githubpages',
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx.ext.todo',
    'sphinx.ext.autosectionlabel',
    'sphinx.ext.graphviz',
    'sphinx.ext.inheritance_diagram',
    'sphinx.ext.imgconverter',
    'sphinx.ext.mathjax',
    'sphinx.ext.extlinks',
    'sphinx.ext.doctest',
    'sphinx_togglebutton',
    'sphinx_copybutton',
]
myst_enable_extensions = ['deflist', 'colon_fence',
                          'dollarmath', 'linkify', 'substitution', 'tasklist']
# user starts in dark mode
default_dark_mode = True

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'sphinx_book_theme'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

# paths relative to _static
html_js_files = ['scripts/custom_script.js']
html_css_files = ['css/style.css']
