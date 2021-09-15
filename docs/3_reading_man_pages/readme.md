How to read a man page
======================

Because it matters!

Honestly, [Stackoverflow](https://stackoverflow.com/) is amazing for finding
how someone has done something successfully. What it is not, is a place to find
out **why** that worked. And the why is an important question to answer.
Blindly copying/pasting from Stackoverflow is not what a Scientist does.

So, how do we find out how a tool works, and why code we want to add to our
program works? Well `man` (short for manual) pages are one of the most valuable
tools we have.

Learning outcomes
-----------------

After doing this unit, students should be able to...

- read a damned man page
- understand the SYNOPSIS section of a man page
- be able to search man pages for content

Man page meta
-------------

`man man-pages` is a ridiculously good source for this information.
But reading them is an arcane art.

For instance.... `man gcc`:

```txt
SYNOPSIS
       gcc [-c|-S|-E] [-std=standard]
           [-g] [-pg] [-Olevel]
           [-Wwarn...] [-Wpedantic]
           [-Idir...] [-Ldir...]
           [-Dmacro[=defn]...] [-Umacro]
           [-foption...] [-mmachine-option...]
           [-o outfile] [@file] infile...
```

.... what?

This information is actually really useful, but not super consumable if you've
never seen the format.

Entertainingly, this conventions are described in `man man`

```txt
bold text          type exactly as shown.
italic text        replace with appropriate argument.
[-abc]             any or all arguments within [ ] are optional.
-a|-b              options delimited by | cannot be used together.
argument ...       argument is repeatable.
[expression] ...   entire expression within [ ] is repeatable.
```

... still not super helpful.

- **flag**: uses one `-` and a single letter.
- **options**: use two `--`, and usually-dash-separated-words.

Consider `ls`:

```txt
-a, --all
```

do the same task of showing all the hidden files in a directory.

... usually. These are actually passed to the application as a string,
or array of strings, and interpreted there. So, there is no actual consistency.
Though, argument-parsing programs like
[Python's argparse](https://docs.python.org/3/library/argparse.html), or
[C's getopt](https://www.gnu.org/software/libc/manual/html_node/Parsing-Program-Arguments.html)
which provide *some* consistency.

How we can use them is different, too. Flags don't require spaces for any
arguments they can accept.

Consider `ls`, and the "ignore" option, which filters the output.

```sh
ls / -I bin
```

is the same as

```sh
ls / -Ibin
```

But, that is not the same for **options**

```sh
ls / --ignore bin
```

works, but,

```sh
ls / --ignorebin
```

Though

```sh
ls / --ignore=bin
```

Does work, as shown in the `man` page `--ignore=PATTERN`.

certainly does not! And, from a parsing perspective, that makes sense!  Flags
are a `-` and a single letter, but `--` options are many characters, so need
whitespace, or an `=` to be a delimiter!

Searching man pages
-------------------

Depending on your pager, which is the program that shows the document, we can
search the current man page. The pager is usually the `more` or `less` program.
You can check which pager you use via the environment variable:

```txt
% echo $PAGER
less -is
```

To search a document use `/theWord`, then enter. `n` goes to next match, and `N`
goes to the previous match

But I can't even find the right man page
----------------------------------------

We can search for keywords in all manual pages. Say we want to search for the
word 'delete':

```sh
man --apropos delete
# or
apropos delete
```

These will give you a list of all the manual pages that have the word 'delete'.

Sections
--------

There are different sections for different types of information

```txt
1   Executable programs or shell commands
2   System calls (functions provided by the kernel)
3   Library calls (functions within program libraries)
4   Special files (usually found in /dev)
5   File formats and conventions eg /etc/passwd
6   Games
7   Miscellaneous (including macro packages and conventions), e.g. man(7), groff(7)
8   System administration commands (usually only for root)
9   Kernel routines [Non standard]
```

We can limit our search space to a single section. If we're looking for shell
commands, we can look in section 1. Programming against the library,
section 3.

Consider;

```sh
# get the shell command printf
man 1 printf
# get the C library printf
man 3 printf
```

The sections are searched in order. So `man printf` would find section 1 first.

`apropos` can search sections for us.

```sh
apropos --section 3 printf
```
