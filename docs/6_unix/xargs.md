Executing *things* you want to from streams
===========================================

That's what we need, sometimes!

Case
----

"I have a bunch of paths, and I want to pass them as arguments to a program!"

Well *good news*.

Example, find all `readme.md` files, and print them out:

```sh
find . | grep readme.md | xargs cat
```

([looks familiar](./find.md))

More advanced
-------------

We may need to place an argument into a specific spot, we can use replacement
to do that.

Use the `-J` flag to specify what you'd like to use as a replacement string
(something that isn't in your command you're building....), and then build
your command

```sh
echo hello | xargs -I % echo % world
```

Useful
------

Yes, but also SUPER dangerous. There's some common things that can go horribly
wrong/

What happens if your paths/inputs have spaces in them? It will be interpreted
as two different inputs to your command. `rm -rf /this\ and\ that` is not the
same as `rm -rf /this and that` (the latter removing the files `/this`, then the
local files `that`, `and`). Quotes are your friend, in this case.

You need to *break* the quotes to make sure they get passed to xargs, rather
than interpreted immediately. Consider the files `Jean-Claude` and the file
with a space in it `Van Damme`.

```sh
$ ls
Jean-Claude  Van Damme
$ ls | xargs -I % echo rm \"%\"
rm "Jean-Claude"
rm "Van Damme"
```

Note the `echo` to try out the command before you run it. That lets you inspect
the command you've built before running it.

Obviously you wouldn't delete files this way, `rm *` would do. But could!

Executing one command per input
-------------------------------

What if we want to run one command per input (remember that inputs are
whitespace-separated)? Depending on what you're hoping to pass
the inputs to...

```sh
echo this that other | xargs -L 1 echo
```

Consider `tar`, you might want many tar files, not 1 huge `tar` file.
So, you'd want to use `-L 1` to pass each input to a single `tar` command.
