Section 1 - Basics
=====================

Comments
------------

```java
// Single line comment

/* Multi
 * Line
 * Comment 
 */
```

Primitives Types and Operations
-----------------------------------

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

```java
// Addition and Subtraction
int x = 5 + 4;
int y = x + 3;
x = x - 4;
y = x - y;

// Multiplication
x = 5 * 4;
y = x * x;

// Division
x = 10 / 5;
y = 11 / 5; // = 2 since integer division, decimal is discarded

// Modulo (Take the remainder of the division)
x = 5 % 4; // 1
y = 13 % 10; // 3

```

Increment Operators
-----------------------

```java
int x = 10;
++x; // x is 11
x++; // x is 12
--x; // x is 11
x--; // x is 10

int y = ++x; // y is 11
int z = x++; // y is 10
```

Arithmetic Short-Hand
-------------------------

```java
int x = 20;
x += 10; // x is 30
x -= 10; // x is 20
x *= 5; // x is 100
x /= 5; // x is 20
```

Casting
-----------

```java
int x = 12;
int y = 5;

// Widening
float a = (float)x / (float)y;

// Narrowing
int b = (int)a;
```

Basic User Input
--------------------

Scanner documentation: <https://docs.oracle.com/javase/7/docs/api/java/util/Scanner.html>

```java
// Create the object
Scanner scanner = new Scanner(System.in);

int x = scanner.nextInt(); // Prompt user for int
long y = scanner.nextLong(); // Prompt user for long
float z = scanner.nextFloat(); // Prompt user for float
```
