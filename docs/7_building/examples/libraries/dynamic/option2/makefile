# build the dynamic library

build:
	# compile it first
	# PIC is "position independent code"
	# -g is debugging info (optional)
	# -Wall is warning, all.
	# -c is compile
	# -Wl passed arguments to the linker. oddly, the arguments are comma-separated.
	# Note the versioning!
	# -lc includes libc
	gcc -fPIC -g -c -Wall libmulti2.c -o libmulti2.o
	# this does not work on a mac!
	gcc -shared -Wl,-soname,libmulti.so.1 -o libmulti.so.1.0.2 libmulti2.o -lc


clean:
	-rm libmulti.so.1.0.2
	-rm libmulti2.o
