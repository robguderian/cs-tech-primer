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

See it in action
----------------

Generally we'd be processing a whole file, buy `echo` can give us a good
example of how it works.

```sh
echo "one two three four" | sed s/three/tree/g 
```

But I need to replace 2 things
------------------------------

Pipe it through 2 `sed` commands!

```sh
echo "one two three four" | sed s/three/tree/g | sed s/four/fiddy/g
```

Other stuff it can do
---------------------

Lots and lots. This is not a "`sed` in 30 minutes" primer.

The `s` in the above example is for 'substitution', which is pretty
clear of what it does.

Other commands for `sed`...

* `y` - "Transliterate"... which is just "find and replace, but on single
  characters. `echo aabbccd | sed y/abc/123/`. You could do a
  [substitution cypher](https://en.wikipedia.org/wiki/Substitution_cipher)
  very easily!
* `d` - Delete stuff. `echo this\\nthat\\nother | sed /that/d`
* And much more. See `man sed` or
  [gnu's documentation](https://www.gnu.org/software/sed/manual/sed.html#sed-script-overview)
  for more information.

Finally
-------

It can look through text, to find text... then do something with that text.
