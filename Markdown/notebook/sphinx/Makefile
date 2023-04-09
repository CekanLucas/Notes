# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
SPHINXBUILD   ?= sphinx-build
SOURCEDIR     = source
BUILDDIR      = build

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

# use autobuilder for development
#  with sass compilation
dev: 
	@echo "Starting SASS compilation and Sphinx autobuild..."
	$( \
		npx sass source/_static/sass/main.scss source/_static/css/style.css --watch & \
		sphinx-autobuild -v "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O) \
	)