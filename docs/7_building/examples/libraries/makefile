# build the libraries

.PHONY: all

all: staticlib dynamic build


staticlib:
	# call make in the static folder, it does the work
	echo "Making static"
	make -C static build

dynamiclib:
	# also call make in both dynamic subfolders
	echo "Making dynamic"
	make -C dynamic build

clean:
	-rm run_it
	make -C static clean
	make -C dynamic clean

build: staticlib dynamiclib
	# -I to make gcc search the static folder for header files
	# -L adds library path for searching for the .a file
	gcc run_library_stuff.c -o run_it -I ./static -L ./static -ladd -I dynamic -L dynamic -lmulti

# relink the dynamic libraries
link1:
	make -C dynamic link1

link2:
	make -C dynamic link2

run:
	# usually the dynamic library would be in /usr/lib, or other library
	# folder. We don't, so we have to add to the linker's library path
	env LD_LIBRARY_PATH=`pwd`/dynamic:$LD_LIBRARY_PATH ./run_it
