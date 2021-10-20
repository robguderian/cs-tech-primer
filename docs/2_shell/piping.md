Creating a flow of commands
===========================

After doing this unit, students should be able to...

* use piping to create a a complex flow.
* view return codes.
* use conditionals

Shells are programming languages, we can use some features in the
programming language to improve our lives!

Return codes
------------

```C
int main() {
   return 0; /* <<-- ever wonder what this means? */
}
```

```python
import sys
# or in Python
sys.exit(1)
```

This is the *exit code* or *return code* of the program. It is a numeric code,
which can be looked up fairly easily.

Check out `errno -l` to list all error numbers, or on BSD systems
[`man 2 errno`](https://www.freebsd.org/cgi/man.cgi?query=errno&sektion=2&manpath=freebsd-release-ports)
is quite glorious.

So, lets fail a command, and check the output:

```sh
$ cd /notHere
bash: cd: /notHere: No such file or directory
$ echo $?
1
```

Where `$?` is a special variable that outputs the return code.

`0` is success. Non-zero is some kind of error, which can be looked up with
`errno 60` (or whatever your error number is).

Standard in, moving data
-------------------------

Data can be output - all `hello world` programs use 'standard out', which is
a ... standard... way of giving... output. Feels obvious.

Standard in is the standard way of getting *input*. Actually, just typing into
a shell is giving the shell standard in.

Two ways to provide standard in. First, is using
[input redirection](https://www.gnu.org/software/bash/manual/html_node/Redirections.html)

For these examples, we'll use the simple Python program named `printStdin.py`:

```python
data = input("Provide input: ")
print("\nheard: " + data)
```

### Redirection

If we had a file named `testData.txt`, we can send the contents of a file
to the standard in of a program.

`testData.txt` contents:

```txt
First line
Second line
```

We can then:

```bash
$ python3 printStdin.py < testData.txt 
Provide input: 
heard: First line
```

Hmm. Just the first line of the file. That's because `input` takes data up
to the first newline character.

### Piping

We can also use pipelines to send data to standard in.

```sh
$ echo "test" | python3 printStdin.py
Provide input: 
heard: test
```

Neat.

What about

```sh
% echo "test" | python3 printStdin.py | python3 printStdin.py
Provide input: 
heard: Provide input: 
```

The **output** from the first `printStdin.py` goes to the **input** of the
second `printStdin.py`. The first line of output from the first execution
is `Provide input:`... so the second execution prints out...
`heard: Provide input:`!

Many UNIX programs have this features built in as an important piece of how
they work.

`grep` is a classic example of this. `grep` filters data that is passed to
it.

Using `testData.txt` from above:

```sh
$ grep Second testData.txt 
Second line
```

Or, using `cat`, which reads a file, and sends it as standard out.

```sh
$ cat testData.txt | grep Sec
Second line
```

Using grep many times, we can do many filters very easily

Try: What passwords in `rockyou.txt` have the word "pass" in them, but are
not the word "password"?

```sh
grep -i pass rockyou.txt | grep -iv password
```

Where `-i` is case-insensitive, and `-v` inverts the filter (-v password) means
not password.

Abusing `&&`
------------

Lazy evaluation is a powerful tool. If there is a conditional statements
that use an "and" between them... the second statement is not evaluated
because *it doesn't matter*.

Shells are REPLs, and like all good programming languages, have the
capacity to "and" two statements. And statements in bash are `&&`.

```sh
if [ this && that ]
```

And in bash (and really any programming language), the conditions
can be booleans, or functions! More on that in Shell Scripting...
for our uses now, we can *abuse* the `&&` operator:

```sh
myFirstCommand && onlyRunsIfTheRightWasSuccessful
```

Neat!

We can do things like, make a directory, and move into the folder

```sh
mkdir myDirectory && cd myDirectory
```

But why would I want to do that?
This is just a demonstration...
what if you had a very long-running
task, and want an email to notify you when the task has completed.
Assuming your `mail` environment is set up correctly...

```sh
echo "running task" && echo "email body" | mail -s "Subject" robg@cs.umanitoba.ca
```

When the first command that takes *hours* completes, the second command is run.

Abusing ||
----------

What about lazy evaluation for "or"? The second operator would only ever run
if the first operator **failed**. `false` and `true` are useful for this, where
`false` always fails, and `true` always succeeds.

```sh
$ false || echo Nope
Nope
$ true || echo Nope
[No output]
```

A common use-case for this is error checking. If you have a shell script,
you may want it to *stop* if a requirement is failed.

Consider:

```sh
cd /does/not/exist || exit
[more shell script exists]
```

The program will stop if the `/does/not/exist` directory does not exist.

Activities
----------

Using `rockyou`, find passwords that have no numbers in them.
