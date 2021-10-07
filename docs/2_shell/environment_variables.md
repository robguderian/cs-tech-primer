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

Keeping your variables
----------------------

We like to customize our experience on our computers. This isn't new by
any stretch. Shells, of course, let us do this automatically.

This primer is bash-focused, but these ideas extend to your favourite shell,
too.

A dotfile is a file that is "hidden" by having a `.` as the first character
of the file name. There are some well-known files that `bash` looks for, in
order (information via, `man bash`):

* /etc/profile
* ~/.bash_profile
* ~/.bash_login
* ~/.profile

These files are... just shell scripts. Things you might want to do in a profile
script:

* change the `PATH` to search a folder earlier, where you can promote executables
  you want (often a development environment) to run
* use an `alias` to run a command the way you'd like. For instance, `rm` could
  be aliased to `rm -f` to always force remove items by using
  `alias rm='rm -f'`. Or, if you like `ls` with
  colours, you can `alias ls='ls --color=auto'`.
* Print out a stupid message with `echo`
* Run a script, or a program

Literally, it's a shell script... so, do anything! Have a script that backs up
your home folder? Have a script that logs you opening a terminal to a web
service? Have a report of the space on the file system? Show the other
users that are currently logged in? Random quote of the day? It's code,
so literally anything you can do in code (which is nearly anything) you
can do it here!

We can also define bash functions for use in our shell.

Get variables and settings from a file
--------------------------------------

`bash` automatically runs the profile files, but we may want to run more
(even from within our `.bash_profile`). We can use the `source`
command to do that.

Consider having a file named `source_example.sh` with the contents:

```sh
echo "reading in the file"
export myVariable=42
```

Then we can `source` to read in this file.

```sh
$ source source_example.sh 
reading in the file
$ echo $myVariable 
42
```

Again, we could define bash functions, set or change variables,
or run arbitrary code.

Viewing environment variables in languages
------------------------------------------

Environment variables are not just used in shell scripts, they can
be used to configure software running on our systems.

A common use is configuring resources or debug levels for our software.
Consider a program that uses a database, we could configure which database
to use in an environment variable:

```sh
export db=postgres://db_prod_server.us:5432/userdb
```

Which can be easily read by the software.

For instance, in Python we are given the environment variables in a
`dict`-like structure:

```python
import os

print(os.environ)
print(os.environ['PATH'])
```

Java has a similar table-like lookup
([source](https://docs.oracle.com/javase/tutorial/essential/environment/env.html))

```java
import java.util.Map;

public class EnvMap {
    public static void main (String[] args) {
        Map<String, String> env = System.getenv();
        for (String envName : env.keySet()) {
            System.out.format("%s=%s%n",
                              envName,
                              env.get(envName));
        }
    }
}
```

C requires an import of `stdlib.h` to get the environment variables:

```c
#include <stdio.h>
#include <stdlib.h>

void main(){
    printf(getenv("PATH"));
}
```

And, in general, the environment variables are readily available to be read
to change program behaviour or configuration.

Activities
----------

TODO
