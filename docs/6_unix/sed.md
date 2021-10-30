sed - stream editor
===================

A simple tool for editing streams... but what does that mean?

Remember that piping is flowing text from one program to another. Sometimes,
we want to edit these streams!

It is a mini-language that allows use to *quickly* edit streams.

The use, 99% of the time
------------------------

Find and replace. This is the **same syntax you would use in Vi**, so, it
should be easy to remember.

`s/this/that/g`

* `s` substitute one thing for a something else
* `this` the word to find
* `that` the word to replace the found word with
* `g` globally... all of them!

But I need to replace 2 things
------------------------------

Pipe it through 2 `sed` commands!
