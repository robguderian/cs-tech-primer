# Nested Loops

*Nesting* loops means putting a loop inside another loop. There's
nothing really special about nested loops, the syntax is exactly
the same as before.

## Examples

```java
for(int i = 0; i < 10; i++) {

    int j = i;
    while(j < 5) {
        System.out.println("i: " + i + " j: " + j);
        j++;
    }

}
```

We will use these a bit more in the next section on **arrays**.
