# build the libraries

.PHONY: all

all: staticlib dynamic build


staticlib:
	# call make in the static folder, it does the work
	echo "Making static"
	make -C static build

dynamic:
	# also call make in both dynamic subfolders
	echo "todo dynamic"

clean:
	rm run_it
	make -C static clean
	echo "todo clean dynamic"

build: staticlib
	# -I to make gcc search the static folder for header files
	# -L adds library path for searching for the .a file
	gcc run_library_stuff.c -o run_it -I ./static -L ./static -ladd
