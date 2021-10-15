# User Input

To make any useful programs, our programs will likely need some way
of interacting with the user. You are probably accustomed to nice,
fully fleged graphical user interfaces (GUIs), however those
require *LOTS* of work to get running. For this bootcamp, we are
going to stick to simple command line IO.

Once again, we are going to have to write some code that we won't
cover in depth until later on.

```java
// Create an "object" that will handle all the user input
Scanner input = new Scanner(System.in);

// Prompt the user to enter an integer
System.out.print("Enter an integer: ");

// Wati for user to enter an integer
int number = input.nextInt();

// Display the output
System.out.println("You entered: " + number);
```

Additionally, we must include the following line at the top of our
`.java` file...

```java
// This line allows to use code that has been written elsewhere.
// It is included with Java.
import java.util.Scanner;
```

Until we get to the section on object oriented programming (OOP),
don't worry about how this is working. Basically...

* We create an *object* to handle all our users input
* Anytime we want the user to enter something, we should display
  some prompt asking them to do so.
* Then we use our input object to get their input.

Compile and run `Input.java` to see it working.
