.DEFAULT_GOAL := all


#FILES = $(shell find . -type f -name "*.md" -not -path ./reveal.js/)
FILES = $(shell find . -type f -name "*.md" | grep -v ./reveal.js/)
HTMLNAME=$(FILES:.md=.html)
PDFNAME=$(FILES:.md=.pdf)


all: html pdf

$(HTMLNAME): %.html: %.md
	@echo convert "$<" to "$@"
	cd $(dir $<); \
	pandoc -t revealjs  -s $(notdir $<) -i -o $(notdir $@) --slide-level=1  -V slideNumber=true -V history=true -f markdown+emoji+grid_tables+fancy_lists  --css ./style.css -V revealjs-url=./reveal.js/ -V theme=serif --mathjax

$(PDFNAME): %.pdf: %.html
	@echo PDF "$<" to "$@"
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome  --headless --disable-gpu --print-to-pdf=$@  "file://$(realpath $<)?print-pdf"

html: $(HTMLNAME)

pdf:  $(PDFNAME)

clean:
	rm $(HTMLNAME)
	rm $(PDFNAME)

