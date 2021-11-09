Methods
=======

Up until now, we have been writing our programs in one big chunk. What if we
need to reuse pieces of our code? We could just copy and paste, but merely
suggesting that pains me to my soul. So instead, let's use *methods*.

Methods let us write (ideally small) pieces of code that can be reused elsewhere
in our program.

Syntax
------

```java
public static void say_hello()
{
    System.out.println("Hello, human!");
}

public static void main(String[] args)
{
    System.out.println("Hello, world!");
    say_hello();
    System.out.println("Goodbye, world... :(");
}
```

Outputs:

```text
Hello, world!
Hello, human!
Goodbye, world... :(
```

There's alot going on here, so let's go through it.

* `public static` are two keywords that for now, we're going to ignore. These
  are related to *objects* and specify what pieces of code are allowed to use
  the method.
* `void` is specifying the *return* type. We can set the return type to `void`,
  indicating the  method returns nothing, or we can set it to any other type we
  want.
* `say_hello` is the name of the method. ***Method names should be short and
  concise!!!***
* `say_hello();` This is where we *call* the function. When we get to this line,
  we execute everything in the function, then carry on with the rest of the
  program. (What would happen if we called the method from within the method?
  Hmmm...)

Notice in the above example, there is nothing in the parenthases. This means
that the method does not take any parameters. If we wanted to pass data to our
methods, we could specify parameters.

```java
public static int exponent(int base, int power)
{
    int result = 1;
    for(int i = 0; i < power; i++) {
        result *= base;
    }
    return result;
}
```

### General syntax

```text
ACCESS_MODIFIERS RETURN_TYPE METHOD_NAME(PARAMETERS) { // Code here }
```

Style
-----

```java
// How cool people do it
public static void main(String[] args)
{
    // Stuff
}

// How less cool people do it
public static void main(String[] args) {
    // Stuff
}
```
