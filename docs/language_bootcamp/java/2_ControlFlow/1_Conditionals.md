# Conditionals

To make programs do interesting things, we need a way to tell our programs what
to do under specific conditions. This is where the if statement comes in.

## The If Statement

Consider the following code...

```java
// EXAMPLE 1
// age is some integer value
if(age < 18){
    System.out.println("You are a child");
}
if(age >= 18){
    System.out.println("You are an adult");
}
```

This block of code will execute differently depending on the value of `age`.

Note that the snippet `age < 18` is actually returning a *boolean* result.
So, we could also check the value of a boolean directly.

```java
boolean b = (age < 18) || (age > 1000);
if(b){
    // Do something
}
```

## Multiple Conditions

We can also string together different conditions using the `&&` and `||` operators.

```java
// EXAMPLE 2
if(age < 18){
    System.out.println("You are a child");
}
if(age >= 18 && age < 1000){
    System.out.println("You are old");
}
if(age > 1000){
    System.out.println("I think you're lying");
}
```

## The Else statement

Just using `if` statements is not very efficient. In the above example, it is not
possible for a users age to meet more than one of the conditions. However, Java
will check each condition, even after one of them is met.\
To improve performance, we will use the `else` statement.

```java
// EXAMPLE 3
if(age < 18){
    System.out.println("You are a child");
}
else{
    System.out.println("You are an adult");
}
```

Now, if `age` is less than 18, Java will skip over the `else` block and move on
to whatever is next.

## Else If

But what if our program needs more than just an if and an else? \
We can use the `else if` statement to add in more conditions for our code to check.
Here is an improved version of example 2...

```java
// EXAMPLE 4
if(age < 18){
    System.out.println("You are a child");
}
else if(age >= 18 && age < 1000){
    System.out.println("You are old");
}
else{
    System.out.println("I think you're lying");
}
```

Now, if `age` is found to be less than 18, we will skip over the `else if` and `else`
blocks.

## A Note on Syntax

If the code to be executed in your condition is *one line* only, we can ommit
the curly braces.

```java
// EXAMPLE 5
if(age < 18)
    System.out.println("You are a child");
else if(age >= 18 && age < 1000)
    System.out.println("You are old");
else
    System.out.println("I think you're lying");
```

You could also write it like this...

```java
// EXAMPLE 6
if(age < 18){ System.out.println("You are a child"); }
else if(age >= 18 && age < 1000){ System.out.println("You are old"); }
else{ System.out.println("I think you're lying"); }
```

Or this

```java
// EXAMPLE 7
if(age < 18) System.out.println("You are a child");
else if(age >= 18 && age < 1000) System.out.println("You are an adult");
else System.out.println("I think you're lying");
```

Keep in mind that although this will compile, the readability of your code
is more important than saving a couple lines of code.
