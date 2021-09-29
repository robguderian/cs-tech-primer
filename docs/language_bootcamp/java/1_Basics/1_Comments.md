# Java Comments

Comments are *VERY* important in *ALL* programming languages.
Comments are meant specifically for humans to help them understand what a particular piece of code is doing.\

To make comments in Java, we use 2 forward slashes, `//`\
Anything following the `//` will be ignored by the java compiler.

```java
public static void main(String[] args){
    // We can put comments here
    System.out.println("Hello world!"); // Or here!
}
```

Sometimes we want to make comments span multiple lines. To do this, we use `/*` and `*/` to open and close a *block* comment.

```java
public static void main(String[] args){
    /* This is a comment spanning
    multiple lines. Very neat. */
    System.out.println("Hello world!"); /* We can do single line comments like this too */
    /* 
    I will not write messy, undocumented code
    I will not write messy, undocumented code
    I will not write messy, undocumented code
    I will not write messy, undocumented code
    I will not write messy, undocumented code
    I will not write messy, undocumented code
    I will not write messy, undocumented code
    I will not write messy, undocumented code
    I will not write messy, undocumented code
    I will not write messy, undocumented code
    I will not write messy, undocumented code
    I will not write messy, undocumented code
    */
}
```

When and where to use comments will be covered in more detail in the *Programming Practices* module of this course, but the gist of it is...

* Do comment when something isn't immediatley clear
* Don't comment things that are obvious

For example, don't do this...
`int x = 5; // Assign 5 to x`

As we move through the course and learn about *methods* and *classes*, the need for comments will become very clear.
