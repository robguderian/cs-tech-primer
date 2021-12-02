Building programs
=================

Building programs locally, and remotely.

By the end of this module, students will be able to:

* use a makefile to execute some simple task
* know why a makefile is better than using a shell script (and much better than pressing
  up 100 times)
* use a makefile as build documentation
* where libraries exist on systems
* understand the dependency resolution/rules of simple makefiles
* how to include libraries that are not system libraries
* understand static vs dynamic linking

Why use a tool to build?
------------------------

"But Rob, I can use a shell script"

"But Rob, I can just press the up button"

"But Rob, my IDE does this for me".

![No](images/no.gif)

Why not a shell script?
----------------------

You're actually on the right path - it's code, it's reproducible,
but, it's not the right tool! It's hard to see this in a small project, but
building can take a lot of time. Makefiles (and its ilk) *inspect* the files,
and only rebuild what needs to be rebuilt.

Why not just press the up button?
---------------------------------

Don't do it! Use a tool! Script it away!

But my IDE does it for me
-------------------------

... it's using a tool. It's just hiding it from you, and has written it for
you.

This is great! Really! Until it breaks. Then you have to find out what it has
done for you... but it's already broken. Figuring out how something works
through the lens of something that is broken is *really hard*.

So what are they, what's out there?
-----------------------------------

There's lots. Some are designed with a language in mind, some are more general.
Java has a bunch, for some reason.
Some do package management (3rd party library stuff). Some just handle the
building order.

* Ant - By Open Source giant Apache, usually for Java
* Gradle - Again, for Java... used by IntelliJ for building Android
  Apps, among other things. Does package management.
* Maven - Also for Java, handles packages, building, and documentation!
* `make` - Just build the program based on a set of rules

`make`ing a program
-------------------

We're going to focus on `make` because it:

* is platform independent
* is language independent
* is installed on all the things
* is simple (though you may not believe me on this one)
* illustrates the rule framework that is common to all build suites.

Rules
-----

Everything it does is based on rules, with a focus on
*dependencies*

```make
thingIWant.o: thingItNeeds.c
	# tab to indent (this is picky)
	# oh, this is a comment
	path -to build thingIWant.o
```

... that's it. You declare a rule set based on what you're
building. If something needs to be built first, you can make it a dependency.
Then, that rule will run *before* the one it is needed for.

How make decides if something needs a recompilation
---------------------------------------------------

It's not as smart as you'd think. It just looks at the last modified
time of the files.

The documentation uses the term "out of date" to describe files items
(really rules) that need to be re-run (aka recompiled).
[The manual](https://www.gnu.org/software/make/manual/make.html#Rule-Syntax)
explains that if the *dependent* file has a *more recent* modification than
the target... run the rule.

Ick, that's a lot of words. Example time. In the
[makefile for the hello example](./examples/hello/readme.md). This is not an
optimized makefile, but demonstrates rules, and re-running compilations.

The `hello_world: hello_world.c` rule shows something simple. `hello_world`
is the name of the executable, and requires `hello_world.c`. If the edited time
of `hello_world.c` is more recent (newer...) than the `hello_world` executable,
then it will run the rule. Try it!

Libraries
---------

Of course, we want to use libraries, and maybe want to create libraries.

* Static libraries are compiled into your, and make your program larger.
  This is all done **at compile time**.
* Dynamic libraries are "linked" into your program. Your program keeps
  a library name, and searches library folders for the required code
  **at run time**.

If a single library is going to be used by a few different applications,
having a shared library makes a lot of sense. You would only need to
maintain 1 version of that code, and both would use it.

Static libraries
----------------

This is used to make code nice and modular, and allows us to have a
program that will *run the same everywhere* because your libraries will
ship with your executable.

![The Dartmouth College](https://www.cs.dartmouth.edu/~campbell/cs50/buildlib.html)
has a nice example of building shared libraries.

The process is:

* Compile your application into .o files (machine language)
* Roll your `.o` files into a library with `ar` (archiver), which bundles all
  the `.o` files into 1 useable library
* When compiling your program you must:
  * -I include the header files for the library
  * -L include the path to the library
  * include the library -l, removing the `lib` from the name

Easy? It's not too bad, check out the
[example building the library](./examples/libraries/static/makefile),
then [example building the application](./examples/libraries/makefile).

Dynamic libraries
-----------------

These function in largely the same way. There is an excellent example
by tdlp.org
[demonstrating how to build them](https://tldp.org/HOWTO/Program-Library-HOWTO/shared-libraries.html).

The keys are versioned! The file names are of the form
`libgreat.so.1`, where `1` is the version number. You will have to pay
attention to which versions you will use!

Shared/dynamic libraries exist outside of your program. This means that
it *could change*. Versioning protects us from this a little bit, but
is no guarantee that the libraries will work the way we expect.
Sounds risky? It's actually not - unix systems have a RICH and
RELIABLE set of libraries!

See
[the example](./examples/libraries/dynamic/makefile)
of building... and switching... the dynamic libraries. This demonstrates
building and linking to the libraries. We have to modify the library path
`LD_LIBRARY_PATH` to make sure our application can *find* the libraries.
Checkout how
[`make run`](./examples/libraries/makefile)
functions to ensure we can find the library.

Readings
--------

* [cs-fundamentals](https://cs-fundamentals.com/tech-interview/c/difference-between-static-and-dynamic-linking)
* [ibm](https://www.ibm.com/docs/en/aix/7.2?topic=techniques-when-use-dynamic-linking-static-linking)
