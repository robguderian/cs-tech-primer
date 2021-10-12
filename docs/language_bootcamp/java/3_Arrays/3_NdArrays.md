# Multi Dimensional Arrays

We can put pretty much any type of data in our arrays, so why not put an array inside an array?

## 2D Array

2D arrays (or *matrices* in mathy terms) are very common data structures in computer science. Think of your computer screen, all the pixels can be represented in terms of column location and row location, and so we can represent this using a 2D array.

```java
int[][] screen = new int[1920][1080];
```

The syntax is almost the same as before, only now we are adding a second pair of braces to tell java we are creating an array of an array of integers.

Accessing elements in the 2D array is also very similar to simple arrays.

```java
// Creates a 2d array
// 1 2 3 4
// 5 6 7 8

int[][] x = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
};

int z;
z = x[0][0]; // 1
z = x[0][3]; // 4
z = x[1][0]; // 5
```

The arrays don't need to be the same size...

```java
int[][] x = {
    {1, 2, 3},
    {4, 5},
    {6, 7, 8}
};
```

## I've actually been lying to you

Truth be told, Java doesn't actually have multi-dimensional arrays.

To be classified as a multidimensional array, *all* the data in the ND array must be contiguous. In Java, 1D arrays are contiguous, each element is
stored one after the other.

But in Java, anything that is not a primitive is an ***OBJECT***. This
includes arrays.

These objects are not going to be stored contiguously.

So *technically*, Java has arrays-of-arrays, and not multidimensional arrays.

![Array Memory](../assets/array_memory/array_memory.png)

We can see that in Java, the `int[][]` is an array holding ***references***
to other arrays, while in C++, the multidimensional array holds all the data
in a single, contiguous array.

We will learn more about references, objects and memory in the objects section!

## Initializing

Now that we know we're dealing with arrays-of-arrays, let's go through initializing.

Say we want to make a "3 dimensional" array where...

* The top "dimension" holds 3 arrays
  * array[0] holds 2 arrays of size 5
  * array[1] holds 2 arrays
    * array[1][0] holds an array of size 10
    * array[1][1] holds an array of size 20
  * array[2] holds 1 array of size 1

Here's a pretty picture...

![Array Memory](../assets/array_memory/3d_array.png)

Let's initialize it...

```java
int[][][] x = new int[3][][];

x[0] = new int[2][5];

x[1] = new int[2][];
x[1][0] = new int[8];
x[1][0] = new int[12];

x[2] = new int[1][1];
```

Notice that whenever we are using the `new` keyword, we must always specify
the leftmost dimension, and optionally subsequent dimensions.

* `new int[3][][];` is fine
* `new int[3][4][];` is fine
* `new int[3][][5];` is BAD
* `new int[][2];` is BAD
