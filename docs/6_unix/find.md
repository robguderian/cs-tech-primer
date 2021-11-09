`find`ing files
===============

And actually so much more.

`find` with no arguments
------------------------

Will print all the files and directories from this working directory.

```sh
# same!
find
find .
```

Filtering
---------

The knee-jerk reaction is to say "oh `grep` is exactly for this!
Wonderful!

Example: find this file (find.md) in the repository

```sh
$ cd cs-tech-primer 
$ find . | grep find.md
./docs/6_unix/find.md
```

Better?
-------

```sh
$ find . -name find.md
./docs/6_unix/find.md
```

But I want the contents
-----------------------

Also possible. There is scope-creep within `find` to give us
[`xargs`-like](./xargs.md) functionality.

The `{}` is placeholder for all the paths that are found by `find`.

Example: With this repository, find all the files named `readme.md`, and
print them all out to the console:

```sh
find . -name readme.md -exec cat {} \;
```

Pretty useful
-------------

We could find and rename heaps of files. We could find and delete a bunch
of files. We could write a shell script, and pass all the paths to that to
do some **serious** processing on it.
