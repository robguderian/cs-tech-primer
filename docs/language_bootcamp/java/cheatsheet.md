Java Cheat Sheet
================

Section 1 - Basics
----------------------

### Comments

```java
// Single line comment

/* Multi
 * Line
 * Comment 
 */
```

### Primitives Types and Operations

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

### Increment Operators

```java
int x = 10;
++x; // x is 11
### x++; // x is 12
x--; // x is 10

int y = ++x; // y is 11
int z = x++; // y is 10
```

### Arithmetic Short-Hand

```java
int x = 20;
x += 10; // x is 30
x -= 10; // x is 20
x *= 5; // x is 100
x /= 5; // x is 20
```

### Casting

```java
int x = 12;
int y = 5;

// Widening
float a = (float)x / (float)y;

// Narrowing
int b = (int)a;
```

### Basic User Input

Scanner documentation: <https://docs.oracle.com/javase/7/docs/api/java/util/Scanner.html>

```java
// Create the object
Scanner scanner = new Scanner(System.in);

int x = scanner.nextInt(); // Prompt user for int
long y = scanner.nextLong(); // Prompt user for long
float z = scanner.nextFloat(); // Prompt user for float
```

Section 2 - Control Flow
----------------------------

### Conditionals

```java
// If - Else If - Else

int x = 50;

if(x < 20){
    System.out.println("x < 20");
}
else if(x < 100){
    System.out.println("20 <= x < 50");
}
else {
    System.out.println("x <= 50");
}
```

```java
// Multiple Conditions

int x = 20;
int y = 30;

// AND, both must be true
if(x < 25 && y > 25){
    // Do stuff...
}

// OR, At least ONE condition must be true
if(x < 25 || y > 25 || x == y){
    // Do stuff...
}
```

### Ternary Operator

```java
// Syntax...
// (some condition) ? (value if true) : (value if false);

int x = 20;
int y = 50;

int a = (x < y) ? x : y; // Take minimum of x and y
int b = (x > y) ? x : y; // Take maximum of x and y
```

### For Loops

```java
// Syntax
// for(starting index; loop condition; index increment)

// Loop from 0 to 19
for(int x = 0; x < 20; x++){
    // Do stuff...
}

// Loop from 10 to 100, incrementing by 10
for(int i = 10; i <= 100; i += 10){
    // Do stuff
}
```

### While Loops

```java
// Syntax
// while(loop condition)

int x = 10;

// Loop while x >= 0
while(x >= 0){
    // Do stuff...
    // DONT FORGET TO UPDATE VALUE OF x
}

// Execute once, 
// then loop while x is greater than 10,
do {
    // Do stuff...
    // DONT FORGET TO UPDATE VALUE OF x
} while(x > 10);
```

### Nested Loops

```java
// Same syntax
for(int i = 0; i < 10; i++){
    
    int j = i;

    while(j < 10){
        // Do stuff...
    }
    
}
```

Section 3 - Arrays
----------------------

### Creating Arrays

```java
// Syntax
// type[] name = new type[size];
// type[] name = {element, element, ..., element};

int[] ints = new int[10];
float[] floats = new float[10];

int[] moreInts = {2, 4, 65, 7, 3};
```

### Accessing / Modifying Arrays

* Arrays start at 0
* The last element of an array is its size - 1

```java
int[] x = {4, 76, 2, 6};

x[2] = 66;

System.out.println(x[0]); // Print 4
System.out.println(x[1]); // Print 76
System.out.println(x[2]); // Print 66
System.out.println(x[x.length - 1]); // Print 6
```

### Multi Dimensional Arrays

```java
// Syntax
// type[][] = new type[size][size(optional)];

int[][] z = new int[3][];
z[0] = new int[5];
z[1] = new int[3];

int[][][] a = new int[5][3][5];
int[][][] b = new int[3][4][];
int[][][] c = new int[3][][];
```

Section 4 - Methods
--------------------

### Syntax

```Java
// Syntax:
// ACCESS_MODIFIERS RETURN_TYPE METHOD_NAME(PARAMETERS) { // Code here }

public static int add(int a, int b)
{
    return a+b;
}

public static void scream()
{
    System.out.println("AAAAAAAAHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!");
}

public static void main(String[] args)
{
    int a = 5;
    int b = 4;
    System.out.println(a + " + " + b + " = " + add(a, b));
    scream();
    scream();
    scream();
}
```

### Recursion

* Contain a base case and a recursive case
* Will cause stack overflow if it never terminates

```java
// Compute n!
public static int factorial(int n)
{
    if(n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}
```
