Debugging talking points
=========================

Java
----

Compile the program

```sh
javac -g Casting.java 
```

the -g is debugger information

Then run the debugger on it

```sh
jdb Casting
```

Stop it somewhere

stop at Casting:10

stepi - step into
next - step over
cont - go
list - show where we are

locals - show local variables

C
-

Compile with `-g` flag

```sh
clang -g os_info.c
```

Attach with gdb/lldb

Show help

help
help break
help break set

breakpoint set --file os_info.c --line 21
run
step - step into
c or continue - go
n or next  - step over
finish - return from method
