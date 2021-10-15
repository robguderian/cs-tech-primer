# The For Loop

Loops are sections of code that we want to execute a certain number
of times in a row. We may want this block of code to loop a fixed
number of times, or we may want the number of loops to vary,
depending on some other variable in our program.

Loops come in a few flavors, namely the *for loop* and the *while
loop*.

## The Basics

To illustrate a loop, let's start with the most basic example.

```java
System.out.println("Example 1");
for(int i = 0; i < 5; i++) {
    System.out.println("Hello!");
}
```

Let's walk through what's happening...

* We use the `for` keyword to tell Java we want a for loop.
* Now we use the parenthases to tell Java how many times we want to loop.
* The inside of the parenthases has the following syntax...
  * `for( START ; END ; INCREMENT )`
  * Note that we are using *semi-colos* to seperate the values.
* In the above example...
  * we start at 0, given by `int i = 0`
  * We continue looping as long as `i` is less than 5.
  * Every loop, we increment `i` by one.
* So, the above example will loop 5 times.

Notice that we declared the variable `i` in the parenthases of the
loop. We could have also done

```java
System.out.println("\nExample 2");
int j;
for(j = 0; j < 5; j++) {
    System.out.println("Hello!");
}
```

This isn't too common, and is in some ways considered bad practice
due to the concept of *scope*. We will discuss scope when we get to
the section on methods.

## Experimenting with Loops

Let's take a look at a few different for loops. Compile and run
`For.java` to see the output!

```java
// Start at 5
// Loop while i is greater than 0
// Decrement i by 1 every loop
System.out.println("\nExample 3");
for(int i = 5; i > 0; i--) {
    System.out.println("Ex3 - " + i);
}
```

```java
// Start at 0
// Loop while i is less than or equal to 10
// Increment i by 2 every loop
System.out.println("\nExample 4");
for(int i = 0; i <= 10; i += 2) {
    System.out.println("Ex4 - " + i);
}
```

```java
// Start at 1
// Loop while i is less than or equal to n
// Multiply i by 2 every loop
System.out.println("\nExample 5");
int n = 64;
for(int i = 1; i <= n; i *= 2) {
    System.out.println("Ex5 - " + i);
}
```

## Continue

If there are certain conditions where we want to "skip" over, we
can use the `continue` keyword to skip to the next loop.

```java
// This will print all the odd multiples of 3
for(int i = 3; i < 60; i += 3){
    if(i % 2 == 0)
        continue;
    System.out.println(i);
}
```

## A Note on Syntax

You have likely (and rightfully so) been told many, many times to
always use concise and meaningful variable names. *This is true*,
however, we can be a bit more lenient when it comes to loop counter
variables.

It is acceptable to use single character variable names for
*simple* loops. It is very common to use the letters `i`, `j`, `k`
and `l` for your loop counter variables.

We will also cover nested loops in this section, where it will
become clear that sometimes we must use better variable names in
our loops. Otherwise, our loops may become confusing and/or
unreadble.

## Enhanced For Loop

For the sake of organization, we will also discuss the enhanced for
loop.

This for loop iterates through some kind of *data structure*, in
this case, an array.

```java
int[] x = {2, 5, 3, 7, 4, 8, 2, 3};
for(int i : x){
    // After every loop, we are essentially saying
    // i = x[loop_number]
    System.out.println(i);
}
```

Rather than using a counter, we instead loop through the entire
array once and perform whatever operations we need on that element.

## Fizzbuzz Challenge

Now is a good time to test out some of the things you've learned
with a small challenge, **Fizzbuzz**.

Your goal is to write a program that loops from 1 to n, checking if
the number is divisible by 3, 5 or both.

* If the number is divisible by 3, print "Fizz"
* If the number is divisible by 5, print "Buzz"
* If the number is divisible by 3 and 5, print "Fizzbuzz!"

You should also print the number being checked at every loop. Here
is some sample output...

```text
1
2
3 Fizz
4
5 Buzz
6 Fizz
7
8
9 Fizz
10 Buzz
11
12 Fizz
13
14
15 Fizzbuzz!
16
17
18 Fizz
19
20 Buzz
```

Note that an integer **x** is divisible by **y** if the
***remainder*** of **x/y** is **0**.

You are encouraged to try this out by yourself first, only using
the notes you've read so far. If you get stuck, you can check
Fizzbuzz.java for a solution.
