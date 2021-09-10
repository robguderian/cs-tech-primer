JavaScript Best Practices
===================

### Strict Formatting:
It's recommended to use strict formatting in your JavaScript files.  This
helps prevent unwanted accidental declarations of variables, and enforces
the use of semicolons ';' at the end of your lines.  The way to do this is
to add the following text to the top of your file before any code:

```javascript
"use strict";
```

- Note that you can have comments above this line (so your default header
comment block can be above it if you want.  It's a style choice).

### Function / Method Arguments:
In JavaScript, **you can pass as many or as few arguments as you wish** to
a given function / method.  It's up to that function / method to determine if
the number of parameters / arguments match a given case or not.

**It's best practice to check the arguments of all functions / methods.**

Signatures are just a suggestion in JavaScript.  As such, you cannot have
multiple versions of a function / method with different signatures.  The last
function / method found in your code will be the one to run.  Hence, if you
want to have multiple versions of a given method, with multiple ways to call
said method, you need to add conditional cases to check against.

#### 1 Case
If you only have one case, the common thing to do is to include a conditional
at the beginning of your function / method:

```javascript
function factorial(num) {
    if (arguments.length !== 1 && !Number.isInteger(num)){
        throw new Error("Invalid use of factorial().  It takes 1 argument, " +
            "which is an integer.");
    }
    
    // ... implementation
}
```

- The example above checks if the number of **arguments** is equal to 1 and
if the argument that's passed is an integer.  If either of these is false,
it'll throw an error.

#### Multiple Cases
If you have multiple cases, say for a constructor for instance, you'll have
conditionals for each case:

```javascript
class Wine {
    #_name; // name of the Wine
    #_age; // age of the Wine
    
    constructor(name, age) {
        if (arguments.length === 0) {
            this.#_name = "";
            this.#_age = -1;
        } 
        else if (arguments.length === 2 && name instanceof String &&
            Number.isInteger(age)) {
            this.#_name = name;
            this.#_age = age;
        } 
        else {
            throw new Error("Invalid use of Wine's constructor.");
        }
    }
    
    // ... the rest of Wine classes implementation
}
```

- The example above checks to see if Wine's constructor is used in one of 2
valid cases.  The first conditional is for the empty constructor, the second is
when you pass the name (string) and age (integer) arguments.  Any other uses of
the constructor will throw an error due to invalidity.

### Equality (== versus ===):
JavaScript doesn't use == the same way you're probably used to.  For example,
if you typed the following in C, it'd return false, but in JavaScript, this
line of code returns true:

```javascript
"1" == 1; // returns true in JavaScript
```

This was a design choice to make the language more accessible to non-programmers,
but it had a lot of unintended side effects.  As such, it became important to
implement a more traditional equality operation.  So in JavaScript, we use the
following to check for explicit equality:

```javascript
"1" === 1; // returns false in JavaScript
```

Therefore, best practice is to **always use === and !==** (instead of == and !=).
