The While Loop
=================

Our for loops are great for executing a block of code multiple
times when we know how many times it has to loop. But what if we
don't know how many loops we need?

First, let's look at a simple while loop.

```java
// Example 1 - A simple counter
int x = 0;
int y = 10;
while(x < y) {
    System.out.println("Ex1 - " + x);
    x++;
}
```

The while loop will continue to loop as long as the condition it is
checking is true. In the above example, the condition being checked
is `(x < y)`. It will loop 10 times, since we start with `x = 0`
and increment `x` each loop until it reaches the value of `y`.

Notice that we are explicitly incrementing the value of `x`. What
would happen if we didn't do this? Well, then the condition
`(x < y` will always be true, and our while loop will continue
until Java gets mad at us for writing an infinite loop.

A Better Example
--------------------

While loops are best for when we don't know how many times we need
to loop. Let's look at an example involving user input.

```java
// Example 2 - Get user to enter integer between 0 and 10

Scanner input = new Scanner(System.in);

// Initialize the variable to a value that will cause the while loop to trigger
int choice = -1;

// While the choice is not valid, continue looping and prompting user
while(choice < 0 || choice > 10) {
    System.out.println("Enter a number between 0 and 10: ");
    choice = input.nextInt();
}

System.out.println("You entered: " + choice);
```

Seeing as we don't know how many times we will have to loop, a
while loop makes much more sense than a for loop.

Break
---------

If we ever want to end the loop before our condition is met, we can
use the `break` keyword to immediately end the loop.

```java
// Example 3 - Get user to enter integer between 0 and 10
// break if user enters 100.

Scanner input = new Scanner(System.in);

// Initialize the variable to a value that will cause the while loop to trigger
int choice = -1;

// While the choice is not valid, continue looping and prompting user
while(choice < 0 || choice > 10) {
    System.out.print("Enter a number between 0 and 10, or 100 to break: ");
    choice = input.nextInt();
    
    // End the loop if the user enters 100
    if(choice == 100)
        break;
}

System.out.println("You entered: " + choice);
```

Infinite Loops
------------------

You may come accross pieces of code that look like this...

```java
while(true) {
    // do something
    if(condition)
        break;
}
// or
for(;;) {
    // do something
    if(condition)
        break;
}
```

These are both infinite loops and will always evaluate to `true`.
Chances are, this is a design flaw. Writing a loop with no exit
condition / only using break is almost always considered bad
practice and should be avoided where possible. As the code becomes
more complex, this will become harder to maintain and more bugs
will pop up in your program.

Do-While Loops
------------------

The do-while loop is a special type of while loop that is
guaranteed to execute at least once.

```java
// Example 4 - Get user to enter integer between 0 and 10

Scanner input = new Scanner(System.in);

// We do not need to initialize this, since the 
// loop must execute at least once
int choice;

// While the choice is not valid, continue looping and prompting user
do {

    System.out.print("Enter a number between 0 and 10: ");
    choice = input.nextInt();

} while(choice < 0 || choice > 10);

System.out.println("You entered: " + choice);
```
