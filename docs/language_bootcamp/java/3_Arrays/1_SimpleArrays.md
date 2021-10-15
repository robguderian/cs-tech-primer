# Simple Arrays

So far, we have been dealing with single pieces of information at a
time. We have had to initialize every variable we want to use and
modify, and this has worked fine so far.

But what if we want to work on *lots* of data? What if we wanted to
store the ages of 100 people? 1000 people? 1000000 people?

This is where arrays come in. An array is a simple *data structure*
that allows us to store lots of data in a single *variable*, and
access that data using an *index*.

## Syntax

This is the general syntax for creating an array.

```java
int[] ages = new int[100];
```

Let's break this down...

* `ages` is the name of our array variable
* `int[]` is the type of our variable. Notice the `[]` at the end
  of `int`, this tells java we want an int array, not just a single
  int.
* `new` is related to creating objects. Don't worry about it for
  now, but it essentially tells java to create an *object*.
* `int[100]` tells java *how many* ints we want to store.

Here's a few more examples...

```java
// An array holding 100 floats
float[] prices = new float[100];

// An array holding 20 characters (kinda like a word...)
char[] name = new char[20];
```

## Accessing and Modifying

So we can create arrays, but how do we use them?

To get the value stored at position `i` in the array, we use the
`[]` operator.

```java
int numbers = new int[10];
int x;

x = numbers[0]; // Store the first element in x
x = numbers[1]; // Store the second element in x
x = numbers[2]; // Store the third element in x
numbers[5] = 2; // Store 2 in the 6th number
```

*NOTICE THAT THE INDEX STARTS AT 0*. If this seems confusing, think
of the number between the braces as an *offset* from the beginning
of the array.

* `numbers[0]` is saying "Get the data 0 spots away from the first
  element" (which is the first spot!)
* `numbers[3]` is saying "Get the data 3 spots away from the first
  element"

## Out of Bounds

What happens if we get a little cheeky and try accessing a value
that doesn't exist?

```java
int numbers = new int[10];
int x = numbers[12]; // NOPE
int y = numbers[-1]; // DOESN'T WORK
int z = numbers[10]; // DENIED
```

These would all result in a compiler error...

* `numbers[12]` is trying to get the the 13th element in the array,
  which is of size 10. This is out of bounds and not allowed.
* `numbers[-1]` is trying to get the value -1 spots away from the
  start, which is again out of bounds.
* `numbers[10]` is trying to get the value 10 spots away from the
  start, which would be the 11th element.

That last one will likely trip you up many times throughout your
career. It often falls under the umbrella term "off-by-one errors",
where you meant to get the last element of the array, but ended up
being off by 1.

## Array Length

Java array variables you create will also contain their length
(some languages don't do this!), which can be accessed using
`arrayName.length`

This is a feature of *objects*, which we will talk plenty about
later on!

```java
int[] numbers = new int[5];
int len = numbers.length; // len == 5
```

## Initializing

By default, the array we create will be full of zeroes. If we want
to initialize the array to a specific set of values, we can do the
following...

```java
int[] numbers = {1, 1, 2, 3, 5, 8, 13}; // You will come to hate this pattern
```

## Resizing

*ARRAYS ARE NOT RESIZABLE*.

*ARRAYS ARE NOT RESIZABLE*.

*ARRAYS ARE NOT RESIZABLE*.

Once an array is created, its size cannot be changed. If you need
to increase the capacity, you will need to copy all the data from
your current array into a new one.

You could do this manually with for loops, or you could use a handy
built in java *method*. We have not discussed methods yet, but they
are essentially blocks of code that can be *called*, saving us from
copying and pasting the same code over and over.

```java
System.arraycopy(oldArray, 0, newArray, 0, 5);
```

Breaking it down...

* `System` is the System *object* provided by Java
* `arraycopy` is the method name. This method is attached to the
  System object, and so we use `System.arraycopy` to *call* the
  method (run the method).
* Everything inside the `()` are called arguments, these are values
  that function needs to work properly.
* `oldArray` is, you guessed it, the old array we are copying FROM.
* The first `0` is the index we want to start copying from in
  `oldArray`
* `newArray` is the new array we are copying INTO.
* The next `0` is the index of of newArray where copying will begin.
* The last number is how many elements we want to copy. You could
  set this to `oldArray.length` if you wanted to copy the entire
  array.

## Array Storage

Without going into too much detail on the inner workings of our
computers, it is important to understand how arrays are actually
stored in our computers.

Our programs, when running, will be in our computers memory (RAM).
Memory itself can be thought of as an array, where each index of
this array being a memory *address*. All the commands and data for
our programs will be stored in this memory array.

Within our computers memory (RAM), the data in our arrays is stored
*contiguously*, that is, each element of the array is stored right
after the previous one.

Consider an int array of size 10. For the sake of simplicity, assume the
*address* of the first element (index 0) is 100. Then the second int will be
stored at address 104 (since ints have size 4). The third at 108, fourth at
112, and so on.

This is a highly simplified model of how memory works, but it should be
enough to get you started.

## Some Examples

```java
// Copy the doubled values of x into y
int[] x = {1, 5, 2, 6, 3, 5, 3, 0};
int[] y = new int[10];

for(int i = 0; i < x.length; i++){
    y[i] = 2 * x[i];
}

for(int i = 0; i < y.length; i++){
    System.out.println(y[i])
}
```

```java
// Print the first 20 fibonacci numbers
int[] fib = new int[20];
fib[0] = 1;
fib[1] = 1;

for(int i = 2; i < fib.length; i++){
    fib[i] = fib[i-1] + fib[i - 2];
}

for(int i = 0; i < fib.length; i++){
    System.out.println(fib[i]);
}
```

```java
// Recall the example from the For Loop section.

int[] x = {2, 5, 3, 7, 4, 8, 2, 3};

for(int i : x){
    // After every loop, we are essentially saying
    // i = x[loop_number]
    System.out.println(i);
}
```
