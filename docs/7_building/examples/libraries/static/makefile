# makes the static library
# Use ar to make the archive
# this file could be installed in /usr/lib
# but can be anywhere if we use -L in our compilation

# lots of inspiration from 
# https://www.cs.dartmouth.edu/~campbell/cs50/buildlib.html

.PHONY: build

build: compile
	ar -cvq libadd.a libadd.o

compile:
	gcc -Wall -c libadd.c -o libadd.o

clean:
	-rm libadd.o libadd.a
