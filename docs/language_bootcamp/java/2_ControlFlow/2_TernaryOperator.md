The Ternary Operator
=======================

The ternary operator is a nice looking alternative to a simple
if-else block.

Consider the following code...

```java
int z;
if(x < y)
    z = x;
else
    z = y;
```

All this is doing is taking the minimum of x and y and assigning
that value to z.

With the ternary operator, we could re-write this as following...

```java
int z = (x < y) ? x : y;
```

This is saying the same this as before, only in fewer lines and
while maintaining readability. The general syntax is as follows...

```text
(some condition to check) ? (value to use if true) : (value to use if false);
```

In the previous example `int z = (x < y) ? x : y;`

* `(some condition to check)` is `(x < y)`
* `(value to use if true)` is `x`
* `(value to use if false)` is `y`

Ternary operators work best when using short, easy to read
operands. When we start to cover methods, it becomes much easier to
write overly complicated code using ternary operators. Never
sacrifice readability
for fewer lines of code.

```java
// Gross
z = ((x&&y || w) && (x*x > y-v2) ? (Obj.fn() + 45.3-Obj2.get()) : (fn2() + x);
```
