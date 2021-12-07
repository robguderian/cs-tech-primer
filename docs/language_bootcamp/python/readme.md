Python Primer
=============

A very commonly used language! Many people use it as 'glue', to make
things work. It's used commonly in scheduled tasks to move things
from one place to another, check some values, scrape data off websites,
and many other things.

It is powerful, concise, and portable.

But it's slow. It is an interpreted language, so optimizations can not be made
at compile-time.

<iframe width="560"
height="315"
src="https://www.youtube.com/embed/R6Sg6IjdqNs"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

Running it
----------

It's interpreted. So, two options

### Using the `python` executable

You have `python` installed, it's probably on your path...

```sh
python my_great_script.py
```

### Shebang

Or, we can make the file executable, adding an appropriate shebang line

```python
#! /usr/bin/python

print('hey')
```

then

```sh
./my_great_script.py
```

Should work.

Loose typing
------------

Defined as we go! We don't need a declaration to make it go!

```python
a = 1
a = "words"
print(a)
```

Types
-----

Python has a number of built in types... and data structures

* `str` - strings, indexable, objects
* `int` - integers, indefinite size! No maximum!
* `float` - IEEE floats
* `dict` - a table/dictionary key/value data structure!
* `list` - not an array, but a list, so the size isn't fixed.
* `bool` - `True` with a capital T, and `False` with a capital F. For reasons.

`if` and blocks
---------------

No braces in Python! Things are delimited by whitespace. And brackes `()` are
optional, unless we want to use flexible whitespace in our if statements.

```python
if thisThing:
    # usually 4 spaces in
    # some animals use tabs
    # don't mix them
    print("good")
print("done")
```

`elif`
------

`if` `elif` `else`. That's the block structure for more advanced if statement
blocks.

Loops
-----

`while` is fairly normal, just a code block.

`for` is an iterator, and iterates over whatever iterable is given.

```python
for letter in "this is an iterable":
    print(letter)
```

Because of this, using `for` with `break` is not uncommon. There is no other
way to cleanly stop a `for` loop.

`dict`ionaries
--------------

These are very powerful! A key/value datastructure to store data.

```python
myDict = dict()
myDict = {}
myDictWitData = {'key one': 1, 'key two': "two"}

if 'key one' in myDictWitData:
    myDictWitData['key one'] = 1000
```

The use of `in` to check for keys is very useful! `dict`s are also objects,
with functions to allow us to see and iterate over the keys, values, or both.

Making Python fast
------------------

Python can run C code! `numpy`, a popular package for numerical processing
uses this extensively. This gives us the power to write "easy code" and
use a fast library. Best of both worlds!

This is beyond the scope of this primer, but
[take a look at the documentation](https://docs.python.org/3/extending/extending.html).

Linting
-------

Check style with `make style`. See the [linting_info.md](./linting_info.md)
for information about linting. All the code in this package is compliant, so
you'll have to mess it up to see any output.
