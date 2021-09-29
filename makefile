ALL: all
markdownFiles := $(shell find . -type f -name \*.md ! -path "./docs/vendor/*" ! -path "./docs/_site/*")

$(markdownFiles):
	echo $(realpath $@)
	markdownlint $(realpath $@)

all: style

style: markdownlint

markdownlint:
	markdownlint ${markdownFiles} -c lint_config.json
