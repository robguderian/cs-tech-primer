build: link1
	make -C option1
	make -C option2

# re can re-link the library, and it will change the behaviour
# of the program
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
