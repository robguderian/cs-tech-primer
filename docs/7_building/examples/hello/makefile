# Everything is hard-coded in this example
# Wildcards /could/ be used, but this demonstrates
# how /easy/ this can be

# default target
.PHONY: my_target


# wrap this, otherwise .PHONY will run it every time
my_target: hello_world

hello_world: hello_world.c
	# now... build it
	clang -o -WALL hello_world hello_world.c

run:
	./my_target

clean:
	rm my_target
