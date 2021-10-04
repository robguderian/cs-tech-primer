# Primitive Strings

Now that we understand arrays, we can start working with words, formally referred to as strings! We can use a char array to store the characters that make up a word, and we can print them using a for loop!

## Hard-Coding

The simplest example is to hard code a string.

```java
char[] name = {'P','a','u','l'};

for(char c : name){
    System.out.print(c);
}
System.out.println();
```

If we wanted to use an actual `'` character in our string, we would use the escape character `'\''`

```java
char[] name = {'M', 'u', 'a', 'd', '\'', 'D', 'i', 'b'};

for(char c : name){
    System.out.print(c);
}
System.out.println();
```
