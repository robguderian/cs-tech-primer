Advanced shell usage
====================

Learning outcomes
-----------------

After doing this unit, students should be able to...

* move around a line on the shell quickly
* use pushd, popd
* use `#!` to choose which interpreter to use (bash, python, other)


Moving around a line
--------------------

![Mash-hand-hold technique](images/arrow_key.jpg)

If you're holding down the arrow key, you've already messed up.
Remember: home row is fastest!

Shells *usually* follow the
[readline commands](https://www.gnu.org/software/bash/manual/html_node/Bindable-Readline-Commands.html),
which is actually how `emacs` moves around, but is configurable.

Highlights

* move a character back and forth
  * ctrl-f forward
  * ctrl-b backward
* move a word back and forth
  * alt-f forward
  * alt-b backward

Wow, that's easy to remember, and is **far** faster than holding down the
arrow keys.

Other useful movements:

* ctrl-a: front of line (...ummm, first letter of the alphabet?)
* ctrl-e: end of line (more self-explanatory)

And, finally, clearing the line. It's really tempting to do ctrl-c, which
works, but moves down a line.

* ctrl-u will *just clear* the line, and you can start again.
* ctrl-k will clear everything *in to the left* of the cursor.

Luke, use the stack
-------------------

Imagine: You have a shell, you want to do something, then come back to
where you started.

Examples of this (common) scenario:

* You want to edit 1 file, then type `make` again.
* You want to look for where a file is, copy it or move it, then come back
* You need to edit a file because it collided on `git merge`, then come back
* You forgot to install a prerequisite for your project, go install, then come
  back

Well, then you want to use a stack structure, right? Go to the previous spot
you were? Well, the unix environment agrees with you.

* `pushd a_directory` will create a new stack frame, and `cd` into the provided
  directory.
* `popd` will pop the stack, and return to the directory you were in when you
  last ran `pushd`.

That was confusing... let's go for an example:

```sh
falcon.cs.umanitoba.ca 103% pwd
/home/cs/staff/robg/demo
falcon.cs.umanitoba.ca 104% pushd /import/share
/import/share ~/demo 
falcon.cs.umanitoba.ca 106% cd man
falcon.cs.umanitoba.ca 107% pwd
/import/share/man
falcon.cs.umanitoba.ca 108% ls
CACHEDIR.TAG  cat1  cat2  cat3  cat4  cat5  cat6  cat7  cat8  cat9 [...trimmed]
falcon.cs.umanitoba.ca 109% popd
~/demo 
falcon.cs.umanitoba.ca 110% pwd
/home/cs/staff/robg/demo
# back to where we came from!
```

Which program to use
--------------------

In UNIX, we can set which program we would like to
[*interpret*](../1_languages/readme.md) the file if it is set to be *executable*.
The file would likely be a program if it was executable!

The **hash bang** line goes on the **first** line of the file:

```python
#!/usr/bin/python

print('hello world')
```

This looks like a comment to scripting languages, but has special meaning when
executing a file.

Technically, the `#!` characters map to the ELF magic number of the file, but
thats, more technical that we actually require...

The shell will *invoke* the interpreter specified, and pass it this file to
process.
