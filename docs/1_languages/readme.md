Languages
=========

Learning outcomes:

At the end of this module, students will be able to:

* Understand the difference between compiled languages, and interpreted
* know how to execute both compiled languages, and interpreted.
* be able to set up a project that imports interpreted files
  from sub-folders
* understand how interpreted languages can have REPLs
* how to use a REPL to solve a problem
  * keep trying that one line of code
  * try out an idea really quickly
* know how Notebooks interact like REPLs
  * Discuss magic numbers for files

What's the difference
---------------------

You've seen, and used programming languages at this point in your life.
But, how they create running code differs between them. This is becoming less
and less clear as development environments get more and more fully-featured,
doing more for us.

Though, the difference of how we work and interact with them is changing, the
way the language functions, and what it might be good or bad at remains.

The difference, in short:

* Compiled: We use a program to read our source code, and it creates
  an executable program that we can run (machine code).
* Interpreted: A program reads our source code, translates it into
  machine code.

What's that mean?

### Compiled

```txt
┌─────────────┐                              ┌───────────────┐
│             │                              │               │
│             │                              │  Executable   │
│ Source Code │◄───────── Compiler ─────────►│               │
│             │ Read by             Creates  │  Machine Code │
│             │ Compiler                     │               │
└─────────────┘                              └───────────────┘
```

Selected examples of compiled langues:

* Java
* C/C++
* Rust
* Go

General flow to compile:

```bash
$ clang myProgram.c -o nowIAmExecutable
... compiles...
$ ./nowIAmExecutable
I am the program output
```

The perks of compiled languages, is that the compiler will look at
ALL the code, holistically. In doing that, it can preform
[static analysis](../4_quality_code/readme.md), removing and alerting about
unreachable code,
[can preform optimizations in code](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html),
and can minimize the size of the executable, among other things. This can be
modified to what your requirements are for the executable.

The **output** of the compilation is executable code. This makes the executable
non-portable - even potentially between different versions of the same
operating system.

### Interpreted

Selected examples:

* Python
* bash and other shell scripting languages
* Lua

Interpreters read in source code, and ... interprets it... into machine code.
Sometimes called "scripting" languages, as it is like a program that reads
a script (think movie script), and executes the tasks for you.

```txt
┌─────────────┐
│             │
│             │
│ Interpreter │
│             │
│             │
└─────┬───────┘
      │
    Reads
      │
      ▼
┌─────────────┐
│             │
│             │
│ Source Code │
│             │
│             │
└─────────────┘
```

The difference here is that the interpreter will take your commands, and
run them - it acts a middleware between your program, and the computer.

Consider how these programs are invoked:

```bash
$ python my_great_script.py
I am a running script
```

It literally invokes `python`, which then takes an argument, which is the
script that it is going to run.

These languages tend to be easier to write, with very expressive commands
and tools built natively into the systems. Think of `bash` having full, easy
access to the filesystem. Or `python` having `dict` for a dictionary/table
data structure always available.

But, they tend to be quirky. The 'script' is read in and executed at the
same time. So, if it hasn't read in your function, and you try to call it,
it might be 'unknown' to the system.

Also, these programming languages tend to be slower than the compiled
counterparts. There is no optimization phase in execution. The interpreter
just happily runs whatever you've provided, however you've provided it.

Scripting languages give us something nice, too. Since scripting languages
read in commands line-by-line.... we could do this in real time...

### REPL

Generally pronounced like 'repel', this is 'Read Execute Programming
Language'. You've seen this before, but maybe not realized that's what you've
been doing... when using a shell like `bash`.

With any REPL language, start the interpreter, and it will then wait for
your instructions. The most compelling use of this is Python:

```sh
$ python3
Python 3.8.2 (default, Apr  8 2021, 23:19:18) 
[Clang 12.0.5 (clang-1205.0.22.9)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> height=1
>>> width=3
>>> depth=5
>>> height*width*depth
15
>>> 
```

But also works with NodeJS, though you can see that the output
is a little different, providing feedback at every step:

```sh
% node
Welcome to Node.js v16.9.1.
Type ".help" for more information.
> height=1
1
> width=2
2
> depth=3
3
> height*width*depth
6
> 
```

Now **why would I want this**? It's actually super handy for exploration of
the language: to figure out the
syntax for a certain line of code, to see what is available in an object
provided to you, or to just hack on a line of code to make it work.

Python, for instance, you can discover what objects are in memory, and what
attributes are available.

```txt
>>> import math
>>> dir(math)
['__doc__', '__file__', '__name__', '__package__', 'acos', 'acosh', 'asin',
'asinh', 'atan', 'atan2', 'atanh', 'ceil', 'copysign', 'cos', 'cosh', 'degrees',
'e', 'erf', 'erfc', 'exp', 'expm1', 'fabs', 'factorial', 'floor', 'fmod',
'frexp', 'fsum', 'gamma', 'hypot', 'isinf', 'isnan', 'ldexp', 'lgamma', 'log',
'log10', 'log1p', 'modf', 'pi', 'pow', 'radians', 'sin', 'sinh', 'sqrt',
'tan', 'tanh', 'trunc']
```

or `help(math.floor)` will open a pager, and provide the documentation on that
attribute or function/method.

```txt
Help on built-in function floor in module math:

floor(...)
    floor(x)
    
    Return the floor of x as a float.
    This is the largest integral value <= x.
(END)
```

So, is a lot of features available in REPLs, and can help you figure out
what's happening with your code, or help you discover objects.

The next step, is built on REPL...

### Notebooks

Notebooks are a tool where you have

* documentation
* code
* results

All in one place... like a lab notebook, but one that is interactive!
These are the new hip thing in data science (which is also hip) (note to
future editors: still true? -Rob 2021)

These are interesting, in that it *is* just a REPL, but repackaged to run
**blocks** of code. These blocks can be re-run, just like using the history
in a REPL.

![Best served as an example](./images/jupyter.gif)

The blocks *can* be run out of order. Since there is program memory that is
held constant through runs of blocks, this could change your output. The
example above, a code block is re-run with `x += 1`, and it... increments `x`
every time.

This is exciting for data exploration, cleaning, and showing results - which
are key aspects of data science. Notebooks can show samples of data, plots,
and much more.

These are not useful for software development, generally, but are useful for
exploring a dataset, or prototyping an algorithm.

Activities
----------

TODO

* Create a python project that has circular dependencies, have the students
  fix the imports.
  Python _reads_ the files in order of import. UMLearn quiz that accepts the
  output as the 'answer'
* Have a set of libraries, have students use `python3 -i` to read the libraries,
  drop into a REPL'
* Provide a jupyter notebook with functions in the upper cells. Have students
  lego together the functions to create a result
