Unix lecture talking points
===========================

Say hi

Say "we're not covering all the tools in the primer" because
`tar` is just kind of wrapped up nicely.

Start by moving some files to aviary (this is really shell/remote)
content, but good to see again)

Show permissions
----------------

Use a VM, chown something to be root-owned

Show find
---------

Find all

find a file with -name

find and execute `-exec cat {} \;`

xargs
-----

ls | xargs echo

ls | xargs cat

ls | xargs rm

echo hello | xargs -I % echo % world

echo this that other | xargs -L 1 echo
