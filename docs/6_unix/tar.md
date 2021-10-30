Tape Archiving
==============

... wat...

Sometimes we have to remember that UNIX was designed in the 70s and 80s when
hard drive space was either non-existent or at a premium.

So...

![What _is_ the deal](./images/deal.jpg)

Because it's used everywhere, and often misunderstood

![Never remember the flags?](./images/tar_2x.png)

So why tape archive
-------------------

All `tar` really does is take *many* files and make it into one
large file. It sets up some metadata, using actual tape markers to
delineate when one file done, and the next starts.

Sounds dumb
-----------

Yes. But, you've probably done this to a file before, or opened a file
like this before.

What's is a zip file? Well, it's 1 file made out of many... then shrunk
via some algorithm.

`tar` is the first step of that (and they added the second bit of it, too).

`tar.gz`
--------

When we use `tar` to make 1 file out of many, we usually create a file with the
suffix `tar`. Files that have been gzipped have `.gz`. Since these can be both,
we have both! Or, sometimes `file.tgz`, which shows that it has been `tar`'d
and gzipped.

But, we *almost always* want to shrink the file, too.

`tar czvf file_to_write.tar.gz all the files to add to the tar`

`tar`....

* `c` create
* `z` gZip it
* `v` verbose (makes it kind of fun)
* `f` write to a file. This one is special, and has to be the last one
  because the file name that you're writing to has to be after it

Example:

```sh
$ tar czvf primer.tar.gz cs-tech-primer
cs-tech-primer/
cs-tech-primer/deployment.md
cs-tech-primer/manifest.json
[... snip...]
```

Then, undo it:

`tar xzvf primer.tar.gz`

But I was told I could write to tape
------------------------------------

Unix... everything is a file.... That actually works for take drives, too.
They are "block devices", which can be roughly translated to
"basically a drive".

`tar czvf /dev/tape_device all the files to add to the tape`

So, same thing just different!

Backing up a remote
-------------------

Now, this is amazing...

`tar czvf - some_file` will take `some_file` and tar/gz it ... and send the
file to.... standard out!

Reminder that [ssh can be passed an argument to be run](../2_shell/remote.md),
which could... be the `tar` command.

So... idea: run `tar` to collect all your files, make them into 1 large file,
and then send it to standard out... then locally pipe that to a file with `>`
file redirection.

A backup script that I use with `cron` on an actual project:

```sh
# create a human-readable date
TIME=`date +%Y-%m-%d_%H-%M-%S`
BACKUP_DIR=~/backups

cd $BACKUP_DIR

# - passes the data to stdout, then we can cimply write that to a file
ssh aviary.cs.umanitoba.ca tar -czf - /folder/to/back/up  > backup_$TIME.tgz
```

This outputs files that have a beautiful date, doesn't overwrite old backups,
and is generally wonderful.
