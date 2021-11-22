Computing with UNIX
====================

Really ties tightly with the shell - but this one focuses
on using the tools. What tools _are_ available on the command line,
why are they good, how do we use them?

Focus on using the tools to wrangle some data

By the end of the module, students should be able to:

* use `awk` to extract columns of data.
* use `find` to ... find... a file by name, use `-exec` to run a command with
  that filename.
* use `sed` to convert characters/words.
* use `sed` to remove data.
* use `ls` and `xargs` to run a command on all the items in the current folder,
  like rename them all.
* be able to compress/uncompress folders with `tar`
* be able to set variables, use loops, and other simple programming tools

<iframe
width="560"
height="315"
src="https://www.youtube.com/embed/2x5TQzhYLZ8"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

Why is UNIX a big deal? Why do people use it?
---------------------------------------------

![Favourite? [Original comic by SrGrafo](https://www.srgrafo.com/)](images/favourite.jpg)

Well, really, why is Linux popular? Or, what did UNIX do right that people
*still* want to use it.

A few reasons:

* Linux is **free**. So, if you wanted to start up 100 Linux machines to
  do some crazy computation, it'd just be the hardware (or
  [virtual hardware](../8_virtualization/readme.md)) that would cost money.
  Which... is a huge savings. Do you want a new VM on your local machine?
  Totally free, it won't complain about not being activated... it will just
  go.
* Linux has **reliable tools built in**. The UNIX philosophy is "Do one thing,
  and do it well". Windows has a tendency to require a program to be completely
  self-sufficient. It does all things, has code to do all things, ships with
  everything it needs to work.
* Development environment is usually built-in. Or, we can install it
  *really* easily (`sudo apt-get install build-essential` if you're using
  Ubuntu/Debian)

The other big part of the UNIX philosophy is "use text", this is for
configuration files, databases, input, output, streams, all the places.
This seems like a small idea, but has big implications - we now have a
standard (cough) way of getting input into programs, and sending input
into other programs.

This is taken to the next step of the final UNIX philosophy mantra:
**everything is a file**. This is, again, a simple idea that has massive
implications. And that means we can use piping and/or file redirection
to *pretty much anything on the filesystem*.

What about "do one thing well?"
-------------------------------

The catch is: you'll end up using lots of programs that
*you didn't have to write*. The problem moves from "how do I make this"
to "how do I use these tools to solve this problem".

We've seen [piping](../2_shell/piping.md), which is a BIG part of this. But
there are also **amazing** tools built in, too.

The tools
---------

These are all huge, and deep. All of these are superficial introductions to
the tools:

* [find](./find.md) - find stuff, execute things.
* [sed](./sed.md) - Stream EDitor, takes text input, changes it, outputs it.
* [awk](./awk.md) - a very rich programming language for processing text.
* [tar](./tar.md) - Tape ARchiver... umm. More useful than you'd expect.
* [xargs](./xargs.md) - build commands from inputs.

Permissions
-----------

UNIX file permissions are a frequent cause of friction. They are generally
not that difficult, but only if you understand the way it works.

[Though it requires its own chapter](./permissions.md). I swear it's not that
bad.

Activities
----------

TODO

* Given a text file, extract a column, write to a new file (redirection).
* find a file in a huge corpus of files
* within that, find a certain line
* rename all files in a folder, prefixing `this_`, or something
* use find -exec to find and grep certain files.
* Write the same program with `cut` and `awk` for cutting
  columns
* `telnet` to connect to services
* `tar` to unpack a file (provided on a shared file)
