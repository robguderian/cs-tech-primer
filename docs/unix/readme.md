Computing with UNIX
====================

Really ties tightly with the shell - but this one focuses
on using the tools. What tools _are_ available on the command line,
why are they good, how do we use them?

Focus on using the tools to wrangle some data

By the end of the module, students should be able to:

* use `awk` to extract columns of data.
* use `find` to ... find... a file by name, use `-exec` to run a command with that filename.
* use `sed` to convert characters/words.
* use `sed` to remove data.
* use `ls` and `xargs` to run a command on all the items in the current folder, like
  rename them all.
* be able to compress/uncompress folders with `tar`
* be able to set variables, use loops, and other simple programming tools

Activities
----------

* Given a text file, extract a column, write to a new file (redirection).
* find a file in a huge corpus of files
* within that, find a certain line
* rename all files in a folder, prefixing `this_`, or something
* use find -exec to find and grep certain files.
* Write the same program with `cut` and `awk` for cutting
  columns
* `telnet` to connect to services
* `tar` to unpack a file (provided on a shared file)
