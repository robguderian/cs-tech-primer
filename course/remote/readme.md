Using remote systems
====================

Generally speaking of `ssh`. But, will cover other ways to move files/edit files.

Avoiding specific software. Any time specific software is used, give a waiver
that software changes over time - and that there might be better ways,
but the idea should be approximately the same.

By the end of this module, student should be able to...

* `ssh` into a remote system, using the appropriate user name (`ssh bobYourUncle@system.domain)
* use `scp` to copy the file/folder onto a remote system
* use `scp` to copy the file/folder from a remote system
* use `rsync` to copy a folder to a remote system
* use `rsync` to copy a folder from a remote system
* know why `rsync` is generally a better choice for a folder
* be able to use an FTP client to move files, open files for editing
* be able to use mobixterm (or similar) to move files, edit files
* be able to use VSCode to edit a remote file, using a plugin
* know why 'pushing to home' doesn't work\
* know about VNC and other remote windowing options

Activities
----------

* Give a multi-file program that depends on a library that is ONLY on aviary (custom one).
  Multi-file so students MUST use `scp`/`rsync`. UMLearn quiz to place the results.
* Have a large text file on UMLearn. Upload, change, upload - how fast is it to transfer using the different tools?
