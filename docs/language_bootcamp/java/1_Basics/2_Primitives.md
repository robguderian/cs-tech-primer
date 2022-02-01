Primitive Data Types
=======================

Java comes with 8 primitive data types built in. These data types differ in
how much memory they use and, consequently, what range of values they can hold.

| key word  |  Type  | Bytes | Min | Max |
|-----------|--------|-------|-----|-----|
| byte      | Integer|  1    | -128| 127 |
| short     | Integer|  2    | -2^15 | 2^15 - 1 |
| char      | Integer|  2    | 0   | 2^16 - 1 |
| int       | Integer|  4    | -2^31 | 2^31 - 1 |
| long      | Integer|  8    | -2^63</sup>| 2^63 - 1 |
| float |Floating| 4 | -3.40282346638528860e+38| 3.40282346638528860e+38 |
| double |Floating| 8 | -1.79769313486231570e+308d| 1.79769313486231570e+308d |
| boolean   |        |  1 bit| 0   | 1   |

Byte and short are not going to be used terribly often in your first and
second year, but they do exist.

Short vs Char
-----------------

Notice these two have the same size, 2 bytes. However, they have a different
range of values.

Shorts are *signed*. They can be negative or positive.

Chars are *unsigned*. They can only be positive.

Chars can hold any unicode value in them, making them suitable for holding
individual *characters*.

Integers
------------

Addition, subtraction and multiplication of integers works as you would
expect...

```java
int x = 4 + 5;     // x is 9
int y = 9 - 3;     // y is 6
int z = x + y - 5; // z is 10
```

Division is slightly different. The quotient of 2 integers always discards any
decimal value.

```java
int a = 7;
int b = 2;
int c = a / b; // 7/2 = 3.5, then remove decimal to get 3
int d = 9 / 2; // 4.5 -> 4
```

Operations follow PEMDAS

```java
int e = 5 * 2 + 4 / 2; // e is 12
int f = 5 / 2 - 4 * 4; // f = -14
```

We can also use the modulo operator, %

The modulo operator gives the remainder of a division.

```java
int g = 12 % 5; // g is 2
```

This can all be repeated with `long`s too. Longs can be mixed with `int`s, but
we need to be careful about the range of values.\
Remember, `long`s can hold values much larger than `int`s can , so if we try
to store a `long` in an `int`, we may run into some issues.

```java
long h = 2147483647; // This is the maximum value of an integer
long i = 1;
int j = i + 11;      // This is fine, 11 fits into an int
long k = h * i;      // This is fine, the result fits into a long
int l = h + i;       // NOT GOOD, integer overflow, l is -2147483648
```

The value of `l` turned negative, since we went above the maximum value of an
integer and got an overflow.

### Pre/Post Increment Operator

We can also use the pre- or post-increment operators, which increment or
decrement a variable by 1.

```java
int i = 10;
i++; // i is now 11
++i; // i is now 12
i--; // i is now 11
--i; // i is now 10
```

Keep in mind that where you place the `++` or `--` *DOES MATTER*.

* `i++` will return the value, then increment `i` by 1.
* `++i` will increment the value, then return `i`.

```java
int i = 5;
int a = i++; // a = 5, i = 6
```

```java
int i = 5;
int a = ++i; // a = 6, i = 6
```

### Shorthand Arithmetic Notation

Say we want to take some variable `i` and increment its value by 10. We could
do somthing like this...

```java
int i = 20;
// ...
i = i + 10;
```

This works... but we can do better. For the basic operators `+ - / *` we can
use a shorthand notation if we want to do some operation on a variable and
assign the result to itself.

```java
int x = 20;
x += 5;   // This is the same as x = x + 5 (x is now 25)
x -= 5;   // This is the same as x = x - 5 (x is now 20)
x *= 2;   // This is the same as x = x * 2 (x is now 40)
x /= 2;   // This is the same as x = x / 2 (x is now 20)
```

Floating Point Precision
----------------------------

Floats and doubles do not have infinite precision.
This is why `0.1 + 0.1 + 0.1 != 0.3`. Under the hood, numbers are stored in
*binary* representation (1 or 0), and the value 0.1 cannot be stored in a
finite number of digits, and so we lose precision.

* Floats are precise up to 6 or 7 decimal points.
* Doubles are precise up to 15 or 16 decimal points.

Arithmetic works the same as with integers.

Booleans
------------

Booleans hold a single bit, true or false.

```java
boolean b = False;
b = !b // Now b is true
b = !b // Now b is false

boolean b2 = (40 < 50); // b2 is true
boolean b3 = (1 >= 100); // b3 is false
```
