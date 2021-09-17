Environment Variables
=====================

After doing this unit, students should be able to...

* set, and use environment variables
  * use environment variables for debug vs deployment
* View environment variables in a few languages
* use `source` to load variables

What the heck are they
----------------------

Literally, variables.

Literally.

Fine
----

What variables are set? `env`!

... lots.

Notable ones are:

* PAGER: when you use `man`, you use a pager... and it's this one. We can give
  it extra arguments if we want it to be extra fancy
* EDITOR: the default text editor. `git` uses this for commit messages.
* PATH: an in-order list of folders searched for programs/

And, we can set more. These are often used by programs to decide if this is
a development environment, or production - then set its logging appropriately.

We can inspect variables by printing them. Variables start with a `$`

```sh
echo $PATH
```

We can [set variables](https://tldp.org/LDP/abs/html/varassignment.html)
for **just this** shell

```sh
$ variable=lookMortyITurnedMyselfIntoAVariable
$ echo $variable
lookMortyITurnedMyselfIntoAVariable
```

But, this does not propagate into any programs we run. If we want these
variables to be set in sub-programs (literally any command we run is a
sub-program) we need to `export` it.

How do we prove this to ourselves? Say we have a `bash` script that is
named `printEnv.sh` that has

```sh
#!/usr/bin/bash

env
```

Then, we can execute this bash script as a sub-program by

```sh
bash printEnv.sh
```

```sh
$ variable=WeAreHere
$ bash printEnv.sh  | grep variable
# nothing
$ export variable
$ bash printEnv.sh  | grep variable
variable=WeAreHere
```

Viewing in languages
--------------------

TODO

`source` a file
---------------

TODO

Activities
----------

TODO
