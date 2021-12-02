What is a program?
==================

By the end of this module, students will be able to:

* Understand program inputs/outputs (stdin, stdout, stderr)
* Understand what an executable file (Script) is, with `#!`.
  How that works given "everything is a program", and that
  scripting language executables are just files read by
  a program (bash/python)
* be able to use `strings` to pull strings from a program
* understand ELF format, how a program starts.
* know that programs are linked [osdev](https://wiki.osdev.org/Linker_Scripts)
  via a linker. That segments _can_ move.
* know how an OS/shell can tell apart a text file from an
  actual executable (binary). (`file` command does this)
  see [The list on wikipedia](https://en.wikipedia.org/wiki/List_of_file_signatures)

So.. what is it
---------------

Machine code that runs on your computer. You probably knew that at some level.

In unix, we can just make something executable by using

```sh
chmod a+x nowIAmExecutable
```

And... that file might be a shell script, python script, binary file...
an image (which is arguably binary). So, what happens?

The OS looks at the Magic Number of the file.

![Magic numbers be like](./images/wait.jpg)

Really. The first few bytes of the file are the "file signature", which
differentiate file types. `file` will tell you what the file type is.
For magic numbers, there is a
[list on Wikipedia](https://en.wikipedia.org/wiki/List_of_file_signatures)
which seems to be the most complete list available. `man 5 magic` will guide
you to where the signatures are, if you want to dig into it. There is a
language to determine which file type it is based on the signature.

So, if you had a program that read in images for processing, you could check
the signature to make sure it is an image type you accept (or not).

Executables that *actually run* need to have a format that is acceptable to
the Operating System. The most common executable format is ELF, Executable and
Linkable Format.
The structure is well-known: `man 5 elf`. ELF describes where to find program
information within this binary. These pieces of information get made into the
[program image](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-segmentation.pdf)
that is created as a process.

We can see all ELF information by using `readelf -a /bin/ls`, you can see all
the linked (hey that's the L in ELF) libraries, the magic number, where the
different sections start, and more.

### Why #!?

Fun fact, the shebang line `#!`... the `#!` is hex 23, 21.... and that is the
file signature for a *text script file*, which is then read *as text*, and
passed to the interpreter chosen by the `#!`.

So, `#!` is you writing a file signature. And, also why it has to be the
TOP line of the file, otherwise a newline character `13` would be the first
byte.

### ELF structure

ELF tells the where parts of the program are.
[OSDev has a nice image](https://wiki.osdev.org/ELF) of what the executable
image looks like, and where the sections are. These are *movable* depending on
how the program was defined. Generally this is not required, unless you're
doing something *strange*, or you're not on an x86 "big" computer, and rather
using a microcontroller or smaller processor. You may want to inspect
`-fdata-sections` for gcc, or similar flags exist for other tools.

The **linker** is really the thing doing the hard work here. The linker is the
tool that creates an executable from all the assembly. Consider a
"hello world" program. We didn't write `printf`, but the library exists.
The linker will connect these things! Check out
[building](../7_building/readme.md).

In short, we can have static libraries that are compilied *into* our
programs, making the executable size larger, and dynamic libraries that
exist outside our executable and are "linked" at runtime for use.

The tools
---------

[GNU_Binutils](https://en.wikipedia.org/wiki/GNU_Binutils) are the key tools
we use to crate binaries (binary utilities...).
This can be used to rip apart a program, view libraries that are linked
dynamically.

Activities
---------

TODO

Have a library that is required that is discoverable via readelf?
