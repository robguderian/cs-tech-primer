# Section 2 Cheat Sheet

## Conditionals

```java
// If - Else If - Else

int x = 50;

if(x < 20){
    System.out.println("x < 20");
}
else if(x < 100){
    System.out.println("20 <= x < 50");
}
else {
    System.out.println("x <= 50");
}
```

```java
// Multiple Conditions

int x = 20;
int y = 30;

// AND, both must be true
if(x < 25 && y > 25){
    // Do stuff...
}

// OR, At least ONE condition must be true
if(x < 25 || y > 25 || x == y){
    // Do stuff...
}
```

## Ternary Operator

```java
// Syntax...
// (some condition) ? (value if true) : (value if false);

int x = 20;
int y = 50;

int a = (x < y) ? x : y; // Take minimum of x and y
int b = (x > y) ? x : y; // Take maximum of x and y
```

## For Loops

```java
// Syntax
// for(starting index; loop condition; index increment)

// Loop from 0 to 19
for(int x = 0; x < 20; x++){
    // Do stuff...
}

// Loop from 10 to 100, incrementing by 10
for(int i = 10; i <= 100; i += 10){
    // Do stuff
}
```

## While Loops

```java
// Syntax
// while(loop condition)

int x = 10;

// Loop while x >= 0
while(x >= 0){
    // Do stuff...
    // DONT FORGET TO UPDATE VALUE OF x
}

// Execute once, 
// then loop while x is greater than 10,
do {
    // Do stuff...
    // DONT FORGET TO UPDATE VALUE OF x
} while(x > 10);
```

## Nested Loops

```java
// Same syntax
for(int i = 0; i < 10; i++){
    
    int j = i;

    while(j < 10){
        // Do stuff...
    }
    
}
```
