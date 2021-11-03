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
* use a tools for creating a VM
* `cron` to schedule tasks
* how to start things on startup (intro, and @reboot)
