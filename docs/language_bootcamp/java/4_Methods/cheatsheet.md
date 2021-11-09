Section 4 - Methods
===================

Syntax
------

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

Recursion
---------

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
