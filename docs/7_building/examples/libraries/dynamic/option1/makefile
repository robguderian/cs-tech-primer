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
	gcc -fPIC -g -c -Wall libmulti1.c -o libmulti1.o
	# this does not work on a mac!
	gcc -shared -Wl,-soname,libmulti.so.1 -o libmulti.so.1.0.1 libmulti1.o -lc


clean:
	-rm libmulti.so.1.0.1
	-rm libmulti1.o
