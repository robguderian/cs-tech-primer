Deploying and running software
=====================

Discussion about how to deploy software, maintain it, see if it's working.

Not yet added, formally.

Obviously we'd need to choose which distribution we'd like to use.

By the end of this module, student will be able to...

* be able to change user to a super user
  * su vs sudo
  * running a root shell, vs using sudo for 1 command
    * Use subcommands/subshells that are sudo (aggregation of commands)
* understand debug logs, and why daemons do no have standard out.
* understand why log files "turn over".
* use `tail -f` on a log file to view and follow a log file.
* be able to start and stop a daemon.
* understand how to create a daemon.
* be able to send syslog to a log aggregator.
* `cron` to schedule tasks
* how to start things on startup (intro, and @reboot)

<iframe width="560"
height="315"
src="https://www.youtube.com/embed/1YjWrQxxTTQ"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

You need a server to run your software
--------------------------------------

and you have no idea how to do that? Well, good news and bad news here:
it's hard to do right. But the good news is that this can help you get started
as quickly as possible.

I HAVE THE POWER
----------------

The `root` user is the administrative user on UNIX systems. Some distributions
disable logging in as the root user (Mac OS, notable), and some disable
logging in as root remotely (like via `ssh`). This is because
*root can do anything*. Which is the point, and also ridiculously
dangerous. You *really* don't want unauthorized people using your
root account...

So, how do we get around logging in as root?

### `su`

This is 'substitute user', and change who you are to a different user.
You have to know *their* username and *their* password.

Usually this is to change to the root user, but can be used to switch
to any user on the machine.

```sh
$ whoami
rob@debian:~$ su -
Password:  [the root password]
root@debian:~# whoami
root
```

The `-` means "run login", which sets up environment variables
for the user, like they logged in normally (you'd usually want
to do this).

### `sudo`

A different approach - allows us to use *our* password to switch
to a different user. This must be configured before use (by root...), and is
not installed by default on all systems.

```sh
$ whoami
rob
$ sudo bash
[sudo] password for rob: 
rob is not in the sudoers file.  This incident will be reported.
$ 
```

Well, I guess I mentioned the setup... this is all managed in
`/etc/sudoers`, which is a configuration file that tracks

[`man 5 sudoers`](https://linux.die.net/man/5/sudoers) lists how
to configure it. It has controls to set per-user settings, allowing or
restricting commands that an be run. A single user could be limited
to run one specific command as a different user. Practically, the setup is
used to define who has access to run commands as `root`.

To edit `/etc/sudoers`, it's best to use the program `visudo`, which notifies
`sudo` of the file change on save of the file.

### as a group member

Some default installs have a 'wheel' group that are users that are allowed
to run as root, others user a 'sudo' group. Both are configured the same way:

```txt
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

The `%sudo` means "all users in the `sudo` group can increase their privileges
with `sudo`. Add a user to a group with `usermod`:

```sh
usermod -g sudo rob
```

The `sudo` command now works!

```sh
$ sudo bash
[sudo] password for rob: [my password]
root@debian:/home/rob# 
```

### as a user

For this, we have to add a new line to our configuration file:

```txt
rob ALL=(ALL:ALL) ALL
```

### Explaining the configuration

* The `%sudo` that this is a group. Without the `%`, it can specify a user
* The first `ALL` defines how to react based on how the user is logged in.
  It can be limited to being logged in remotely, or locally only.
* (ALL:ALL) is two parts, run commands as users, run commands as groups. This
  will allow this user to run as all users, in all groups.
* The final all is which commands can be run.

### I'm too lazy to use a password

Good... and bad. `sudo` saves your authentication (which is a configurable
in `/etc/sudoers` as `Defaults timestamp_timeout=300`), meaning you don't have
to re-enter your password for 300 seconds after using it once.

"But Rob, I never want to use a password". Well, it's intensely insecure. This
is a 'fine' idea for personal virtual machine, and an ATROCITY on a production
server that is open to the world.

Simply add `NOPASSWD` before the last `ALL`. Note, you could do `NOPASS` for
some commands, but not all.

```txt
rob ALL=(ALL:ALL) NOPASSWD:ALL
```

Results, as expected, are no need to enter a password:

```txt
rob@debian:~$ sudo bash
root@debian:/home/rob# 
```

Daemons
-------

![Beastie, the BSD Daemon](./images/beastie.png) Some programs need to
always be available and running to do a task. Running tasks in the background
'daemonizes' them. These can be started by-hand, or automatically by the
operating system as it boots.

You've seen these. If not... try `ps x` right now. You'll likely see
`sshd`, the `ssh` daemon. Or `kauditd`, the kernel audit daemon.
Maybe you have the Apache web server running... `httpd`, a http daemon.
It's good practice to suffix your daemons with `d`, but it's not required.

Linux systems have controversially moved to a service manager named
`systemd`, which starts up daemons on boot, and can control their status
after boot.

For instance, to enable, or disable the `ssh` daemon:

```sh
systemctl disable ssh
systemctl enable ssh
```

And we can check on the status of, start, and stop
daemons...

```sh
systemctl status ssh
systemctl start ssh
systemctl stop ssh
# and your session goes away...
```

If you wanted to create your own daemon, you'd have to
[write your own init scripts](https://wiki.debian.org/systemd/Services)
which is really just a configuration file.

Systems like BSD use simple shell scripts (called rc scripts) to start
up daemons in a similar fashion.

Listening to Daemons
--------------------

Daemons can't output to your terminal... because you didn't start them.
So, how do we listen to them?

Daemons have to *log* their output, and that goes into a file.

Consider `sshd`, it logs its events to `/var/log/auth.log`. We can simply
view the file with `less`, `more`, `vi` or whatever... but `sshd` is still
logging to it as we view it, and we don't see those new entries. There's
got to be a better way

`tail` lets us see the last 10 lines (which we can change with a flag...)
of a file. Or... we can 'follow' a file. This will show the last 10 lines,
then listen for more entries.

![Using tail](./images/tail.gif)

### What happens if a log file gets too big?

Yeah, imagine that: a log file is listening and gets lots and lots of log
lines. It'd fill up the drive fairly quickly.

Solution: log turn over. [`logrotate`](https://linux.die.net/man/8/logrotate)
handles this for us. It's run daily by `cron`, on debian systems
this is configured by having an entry in `/etc/cron.daily`.

It.... turns over files. It will zip up the existing file, notify the
application via HUP to log to a new file (lingering file handles are
an issue), and it'll keep going.

If you have a popular server, you'd need to increase this interval.
Hourly rotations isn't abnormal.

But what does that mean for our `tail -f`? Well, that would have an old
file handle.... so it'd stop getting messages. But, this is a known issue
and `tail -F` was added to deal with files that might move while you are
listening to it.

### Sending logs to a log aggregator

Now, imagine you have 1000 machines that are serving your software. How can you
reasonably monitor all these at once?

Use a log aggregator. You can redirect logs to go through a network to a log
aggregation service. You can easily write your own, but there are a number
of companies that are willing to sell you a solution.
[Splunk](https://www.splunk.com/) is a pillar of this community, being around
forever. There are a number of cloud solutions, and open source solutions for
this - but these solutions go in and out of style quickly - google it!

Scheduled tasks
---------------

Scheduling tasks is fairly easy! There's a few ways to do it, first as a
user, then as an administrator.

Everything works on the `cron` system, inspired from 'chronological', though
there's some debate on this.

The jobs are called "cron jobs", and are stored on the "crontab", which is
short for "cron table".

Any output from cronjobs are emailed to the job's owner. That's assuming
that email is set up on this machine. Otherwise, it goes to the user's
mailbox, and your terminal will say `You have mail` when you log in.

### `crontab`

`man 5 crontab` does such a good job of this. What is described is the
file at `/etc/crontab`, and is one of the places an administrator can
set cron tasks.

```txt
# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# m h dom mon dow usercommand
17 * * * *  root  cd / && run-parts --report /etc/cron.hourly
25 6 * * *  root  test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily )
47 6 * * 7  root  test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.weekly )
52 6 1 * *  root  test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.monthly )
```

You can see you can specify which user the command run as, which is good for
access control issues.

Then, the command to run. You can set the search path by setting variables, but
generally fully-qualified paths are a good idea.

### Other cron options

Interestingly, the `crontab` entries above are the ones that are the other
possibilities.

In `/etc/cron.daily` you can have scripts you'd like run daily.

### As a user

Enter `crontab -e`, and you'll be dropped into your favourite `$EDITOR`.

You will see a `crontab` like above, but without the `user` column. All the
cronjobs will run as you!

```txt
0 * * * * /home/rob/hourly_task.sh
```

There are some meta tags that can be useful, these are non-standard. These
are for convenience: `@daily`, `@annualy`, `@weekly`, and a few more.

The one that is REALLY interesting is `@reboot`, which allows a user to run
some code when the machine starts up.

```txt
@reboot /home/rob/reportRestart.sh
```

This is VERY useful for running programs that you want to run all the time!

A pattern I use is to have a `@reboot` entry that starts a `screen`, that has
a few different windows running not-quite-daemons, such as a Minecraft server.

Activities
----------

TODO

Make a cron entry
