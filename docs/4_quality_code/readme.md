Writing quality code
====================

Tools to write good code

By the end of this module, students should be able to...

* understand the difference between static and dynamic analysis
* use a linter to show poorly formatted/styled code
* use a coverage tool to check for untested lines of code
* be aware of profilers, and know why one is useful
* add style checks to a makefile

But I write good code
---------------------

Probably true! If you were taught Java first, you probably:

* Have UpperCamelCase classes
* Have lowerCamelCase variables
* Have ALL_CAPS constants

And, you probably believe in yourself that you did it right every time.
Or, you're sloppy and don't care.

Now what if a tidy coder and a sloppy coder are in a group project
together. The code will be wholly
unreadable. It will switch between good, proper code... and 💩.

Programming cruft
-----------------

As this builds, the standards of the project fall out of focus. Reading code
that switches styles all the time is *difficult*, and makes maintaining the
codebase more difficult than it needs to be.

So, how do we keep it consistent?

... If you're reading this, you're likely in CS... what do you think the answer
is?

*Use code*.

Programming languages, by their nature, have a format that is machine-readable.
Now, the next step is writing a program that ensures that *style* is followed.

Static analysis
---------------

This is actually all part of a Software Engineering sub-field called
['static analysis'](https://queue.acm.org/detail.cfm?id=3487021).
The 'static' part is about the code - it doesn't change. It's an
artifact that creates an executable. So, we can run code *over* the program
that verifies that **standards** were **actually followed**.

A compiler does this for us with errors and warnings. `Unused variable`
warnings are exactly that. And, if the standards were not followed to the
point the code can not compile, and error is thrown.

But, what about standards that **only matter to the programmer**. We can check
for those, too. This is called **linting**, and a **linter** is a program that
does this for us.

Try it
------

There is multiple linters in this repository.

* `markdownlint` checks all the markdown files for consistency. See the root
  directory of this repository. `make style` checks it all, if you have
  `markdownlint` installed. See the readme!
* `eslint` checks all the ecmascript (aka javascript). See
  [the help file for JavaScript linting](../language_bootcamp/javascript/linting_info.md).
* `pycodestyle` enforces pep8 style for Python. See
  [the help file for Python linting](../language_bootcamp/python/linting_info.md).

Beyond static analysis
----------------------

We've seen the code as it is written, but we need more than that to prove that
the code is any good. We need to *run* the code to see how it works! The two
main tools for doing this are coverage and profiling.

* **Coverage** tells us how much of the code has be tested (aka covered)
  by tests.
* **Profiling** tells us how often a piece of code has been called, and how
  long it takes that piece of code to run.

### Coverage

Coverage can be used for testing to see the usage of a program, and what
lines of code are run. This can be done interactively... or more importantly,
which lines of code have been *tested*.

Literally, coverage just shows you which lines have been run, and which lines
have not been. A percentage can be made by stating
`linesThatHaveBeenRun/allLines`. Example: If you tested 11 lines of a 100 line
file, you'd have 11% coverage.

Ideally, about 80% of the core logic
lines of code are tested. Some things are untestable,
like UI items, or code that has external dependencies (like resources from
the internet).

See the example in
[the python primer](../language_bootcamp/python/src/unit_test_demo/readme.md)
that shows how this works.

### Profiling

This is dynamic code analysis - when we run the code, which lines of code
are run, how many times, and what was the average amount of time it took
for that line to run.

Using this, we can identify what is slowing our program down.

In
[the python primer](../language_bootcamp/python/src/unit_test_demo/readme.md)
we can run `make profile`, which uses the built-in profiler, allowing us
to inspect which functions were called, and how long they took.

The example has both bubble sort, and insertion sort examples.
We can then see which took longer, and see some statistics about it:

```txt
ncalls  tottime  percall  cumtime  percall filename:lineno(function)
   100    4.595    0.046    4.639    0.046 some_code.py:21(bubble)
   100    3.183    0.032    3.225    0.032 some_code.py:35(insertion)
199800    0.039    0.000    0.053    0.000 random.py:237(_randbelow_with_getr...
   200    0.030    0.000    0.083    0.000 random.py:348(shuffle)
280196    0.009    0.000    0.009    0.000 {method 'getrandbits' of '_random....
```

Interestingly, we can see that the random library is called often, and is
somewhat slow. We could consider finding different random sources, and do
a shuffle that is more applicable to our uses (which does not need to be
*that* random).

We can see that we called "shuffle" 200 times, and each sort 100 times each.
Which, we knew, but can verify here! In less predictable programs, we would
be able to see how many times each was called, and how long it took to run.

Activities
----------

* Give some crummy code (python/java/c) in a UMLearn quiz, accept the
  answer of it spaced properly.
* Have a makefile with build/run/test/style - style calls the one unit
  test with style checks.
