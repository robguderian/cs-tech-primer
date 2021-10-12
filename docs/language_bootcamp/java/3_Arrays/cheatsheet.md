# Section 3 - Arrays

## Creating Arrays

```java
// Syntax
// type[] name = new type[size];
// type[] name = {element, element, ..., element};

int[] ints = new int[10];
float[] floats = new float[10];

int[] moreInts = {2, 4, 65, 7, 3};
```

## Accessing / Modifying Arrays

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

## Multi Dimensional Arrays

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
