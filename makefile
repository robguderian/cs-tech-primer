ALL: all

markdownFiles := $(shell find . -type f -name \*.md)

$(markdownFiles):
	echo $(realpath $@)
	markdownlint $(realpath $@)

all: style

style: markdownlint

markdownlint:
	markdownlint ${markdownFiles}