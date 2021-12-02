build: link1
	make -C option1
	make -C option2

# re can re-link the library, and it will change the behaviour
# of the program
# The naming is very important! 
# From
# http://www.yolinux.com/TUTORIALS/LibraryArchives-StaticAndDynamic.html
# (not super academic, but said it well)
# Quote:
# The link to /opt/lib/libctest.so allows the naming convention for the compile flag -lctest to work.
# The link to /opt/lib/libctest.so.1 allows the run time binding to work. See dependency below.
# So, one is for compile-time, one is for run-time. And, allows us to
# begin versioning our libraries!

link1:
	ln -sf option1/libmulti.so.1.0.1 libmulti.so.1.0
	ln -sf libmulti.so.1.0 libmulti.so.1
	ln -sf libmulti.so.1 libmulti.so

link2:
	ln -sf option2/libmulti.so.1.0.2 libmulti.so.1.0
	ln -sf libmulti.so.1.0 libmulti.so.1
	ln -sf libmulti.so.1 libmulti.so

clean:
	make -C option1 clean
	make -C option2 clean
	-rm libmulti.so libmulti.so.1 libmulti.so.1.0
