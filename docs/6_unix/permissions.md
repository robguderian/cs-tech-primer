UNIX permissions
================

An introduction to permissions, and some intricacies of them.

Learning outcomes
-----------------

After doing this unit, students should be able to...

* be able to read UNIX permissions in ugo format, and octal
* be able to set permissions in ugo format, and octal
* know what a permissions mask is

Read, write, execute
--------------------

We've talked about how "everything is a file". So, we can apply the idea of
permissions to anything on the filesystem. In this case it means that
**all** items can be given permission to Read, write, and execute. It can be
any mix between all, and none of them.

Common permissions:

* Just read... aka, read only. We generally wouldn't do this to a file that
  we are working on, but is normal for system files you shouldn't change.
* Read and write. This is a normal file
* Just execute. This is a normal program
* Read, write, and execute. A shell script we're working on!

Then, we have three types of 'users' we can apply these permissions to:
the owner (usually us), the group, and everybody.

* If we want a file a to be private, we'd deny everything to the group,
  and everyone. This would be a normal file in your home directory.
* If we want to edit a file, and share it with everyone, we'd have
  read and write for us (the owner) and read-only to the group
  and everyone.

Permissions on directories?
----------------------------

The `x` bit means that anyone can `cd` change directory into it.
The `w` bit means it can be `ls`'d.
The `r` bit means new files can be created within it.

Groups?
-------

Quick digression here. There are groups in UNIX permissions. Simple systems
will minimally have: 'users' group, and 'daemon' group. These are often named
different things, but have the same purpose. 'Users' are real people that
use the computer. 'Daemons' are tasks in the background that make things
go.

There is, of course, lots of variety here. Some systems will make a group
with the same name as the user - so you have a group that is just you. No a
terrible idea for people who don't fully understand groups... though, not
accidentally giving access to everyone in the group!

`ls -l` will show you the owner and group of a file.

So what makes it hard
---------------------

3 different types of permissions, 3 different types of users. It's easy to get
bogged down in "who gets what how".

The tools and lingo
-------------------

The permissions put on a file are called the "mode" of the file.

We want to change the mode... `chmod`... of the file to change the permissions.

The 'easy' way - symbolic mode
--------------

A good way for beginners to change permissions is by using "symbolic mode"

More lingo... remember there three types of users:

* `u` - the user that is the owner of the file (generally you)
* `g` - the group of the file
* `o` - 'other' users on the system. Really 'everyone' on the system.
* Bonus of `a` for all the above

Then, what can we do?

* `r` - read the file
* `w` - write to the file
* `x` - .... sigh.... eXecute the file. Because we have to be
  cool, and the letter x is cool.

Now, we can add `+` permissions, or `-` remove permissions. Use "who", then
if the permission should be added or removed, then which permissions should
be added or removed.

That's a lot. Examples:

Remove execute from the user: `chmod u-x theFile.txt`

Allow everyone to read: `chmod o+r theFile.txt`

Allow everyone to read and execute: `chmod o+rx theFile.txt`

Allow everyone to execute using `a`: `chmod a+x theFile.txt`

There's a lot more you can do, check out the manual page!

The 'hard way - numeric mode
----------------------------

It's not actually hard. This is the normal way that it's done, generally.

Let's change the topic to binary, and use flags...

Change `rwx` to all be positional binary flags:

* Binary `001` would mean read is not set, write is not set, execute is set.
  Meaning, execute-only.
* Binary `100` would mean read is set, write is not set, execute is not set.
  Meaning, read-only.
* Binary `110` would be read is set, write is set, execute is not set.
  Meaning, read-write.
* Binary `111` means everything is set. Meaning, we can do all the things!

Now, let's represent these in octal... base 8. Which, for the uses here is
identical to using decimal (base 10) or hexadecimal (base 16) since we are
not exceeding 7.

* `001` is 1, execute only
* `100` is 4, read only
* `110` is 6, read write
* `111` is 7, all the things!

Actually pretty easy for one user... but we have 3 user types...

We organize them with `ugo`: user, group, other. And, represent each
group's permission in octal (this is when it matters).

* First number is for the user's permissions
* Second number is for the group's permissions
* Third number is for the 'other' user's permissions

Examples!

* `700`
  * `7` User gets all the things
  * `0` Group gets no permissions
  * `0` Others get no permissions
  * Useful for normal files in our home directory
* `711`
  * `7` User gets all the things
  * `1` Group can execute
  * `1` Others can execute
  * Useful for files in `/usr/bin` that are owned by `root`, but everyone
    can use.
* `644`
  * `6` User can read and write
  * `4` Group can read
  * `4` So can everyone else
  * Good for sharing documents. Documentation like manual pages in
    `usr/share/man/en/man5` are shared with permissions like this.
* `777`
  * Everyone can do everything
  * This is a terrible idea
  * The only reason to do this is if you have no idea what you're doing
  * Please stop
  * Fine, legitimate use is `/tmp` directory, where it is set up so anyone can
    write files into it. But... this doesn't mean the files **we** write to it
    have to have crappy, insecure permissions.

Putting it together: `chmod 711 aFile.txt`

The sticky bit
--------------

There's actually one more thing called the sticky bit. It lets users execute
a file with the permissions of the owner.

`chmod 1777 aProgram` is literally the worst thing you could possibly, ever
do.

But, now you know about it.

Default permissions
-------------------

When we make a file... what are the permissions?

We could

```sh
$ touch new_file.txt
$ ls -l
total 0
-rw-------. 1 robg csstaff 0 Oct 28 11:54 new_file.txt
```

So... `600`, read and write, just me. But what set this?

```sh
$ umask
67
```

This number is _also_ in octal.

### Files

Normal files start with [`666`](https://www.youtube.com/watch?v=WxnN05vOuSM),
then this mask is subtracted, ish. It is a bitwise and of the
*compliment* of the mask.

calculated = 666 & ~mask

Example:

```txt
~67 = 111 001 000

Octal Binary
----- -----------
666:  110 110 110
~67:  111 001 000

&  : 110 000 000
```

Which is `600` - what we see above!

### Directories

Same as above, but from `777`.

```txt
Octal Binary
----- -----------
777:  111 111 111
~67:  111 001 000

&  :  111 000 000
```
