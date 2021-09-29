ALL: all

<<<<<<< HEAD
markdownFiles := $(shell find . -type f -name \*.md)
=======
markdownFiles := $(shell find . -type f -name \*.md ! -path "./docs/vendor/*" ! -path "./docs/_site/*")
>>>>>>> main

$(markdownFiles):
	echo $(realpath $@)
	markdownlint $(realpath $@)

all: style

style: markdownlint

markdownlint:
<<<<<<< HEAD
	markdownlint ${markdownFiles}
=======
	markdownlint ${markdownFiles} -c lint_config.json
>>>>>>> main
