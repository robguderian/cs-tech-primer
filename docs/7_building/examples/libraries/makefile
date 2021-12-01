# build the libraries

.PHONY: all

all: static dynamic build

build: static
	# -I to make gcc search the static folder for header files
	# -L adds library path for searching for the .a file
	gcc run_library_stuff.c -o run_it -I ./static -L ./static -ladd

static:
	# call make in the static folder, it does the work
	make -C static

dynamic:
	# also call make in both dynamic subfolders
	echo "doto"

clean:
	rm run_it
	make -C static clean
	echo "todo clean dynamic"