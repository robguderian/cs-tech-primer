The Main Method
===============

And now, we finally understand all the keywords that go into the main
method.

```java
// Define a class that is visible from anywhere
public class MyApplication {

    // Define the special "main" method
    // It is public, accessible anywhere
    // It is static, so it is a class-level method
    // Its return type is void, so returns nothing
    // It takes in an array of Strings, which are the command line arguments
    public static void main(String[] args)
    {
        System.out.println("You entered the following CLAs...");
        for(String str : args) {
            System.out.println(str);
        }
        System.out.println("Goodbye!");
    }

}
```

So if we compiled and ran this program with

```text
javac MyApplication.java
java MyApplication arg1 arg2 arg3
```

We would get the following output

```text
You entered the following CLAs...
arg1
arg2
arg3
Goodbye!
```
