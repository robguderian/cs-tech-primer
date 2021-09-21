# Casting

Casting is taking a variable of one type, and turning it into a different type.\
For example, we could cast an `int` to a `float` or a `long` to a `short`.

## Widening / Implicit

When we go from a *smaller* type to a *bigger* type, this is known as...

* Widening Conversion
* Implicit Type Casting
* Automatic Type Casting

Any of these casts...\
*byte < short OR char < int < long < float < double*\
...would be examples of widening.

```java
// These are all valid!
byte b = 10;
short s = b;
int i = s;
long l = i;
float f = l;
double d = f;
```

Note that

```java
short s = 10;
char c = s;
```

and

```java
short s = 10;
char c = s;
```

will *not* compile. Even though in this particular case the values in `c` and `s` would fit into a `char` or a `short`,
the java compiler will stil report an error and refuse to compile.

## Narrowing / Explicit

When we go from a *bigger* type to a *smaller* type, this is known as...

* a Narrowing Conversion
* Explicit Type Casting

The syntax for narrowing conversions is slightly different...

```java
d = 123456789.987564321;
f = (float)d;
l = (long)f;    // l is 123456792
i = (int)l;     // i is 123456792
s = (short)i;   // s is -13032
b = (byte)b;    // b is 10
```

Note that although this will compile, these results are not terribly useful, so narrowing conversion should be done with caution.

## Casting and Arithmetic

Say we wanted to do the following...

```java
int x = 9;
int y = 2;
double z = x / y;
```

...you might expect z to be 4.5, since we are calculating a `double`. This code would indeed compile, but the value of `z` would be 4.0, not 4.5.
This is because `x` and `y` are integers, and so Java will perform *integer* division (or *floor* division) and remove any decimal value from the result.\
To get 4.5, we need to convert `x` and `y` to type `float` or `double`.

```java
int x = 9;
int y = 2;
double z = (double)x / (double)y;
```

This would give 4.5 as expected.
