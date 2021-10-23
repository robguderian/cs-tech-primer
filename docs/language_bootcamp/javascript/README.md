JavaScript Quirks
=================

Javascript gets a pretty bad rap, but remains a VERY popular language...
albeit with some quirks...

This should help you start quickly, and dodge a lot of the pitfalls.

---

Running JavaScript
------------------

There are many ways to run JavaScript.  Using Node is one of the more popular
options.  You can download Node [here](https://nodejs.org).

Once Node is installed, to run your program:

1. open terminal,
2. navigate to the directory your program is in, and
3. type `Node filename.js`, where filename.js is the name of the program you
want to run.

---

Strict Formatting
-----------------

It's recommended to use strict formatting in your JavaScript files.  It helps
prevent unwanted accidental declarations of variables.

Without strict formatting enabled, you can declare variables anytime you use
the `=` sign.

With strict formatting enabled, in order to be able to declare variables, you
have to use one of the following keywords:

- `let`
- `var`
- `const`

You can enable strict formatting by adding the following text to the top of
your file, before any code:

```javascript
"use strict"
```

- Note that you can have comments above this line (so your default header
comment block can be above it, or below it, however you want.  It's a style
choice).

---

Function / Method Arguments
---------------------------

In JavaScript, **you can pass as many or as few arguments as you wish** to
a given function / method.  It's up to that function / method to determine if
the number of parameters / arguments match a given case or not.

- You can access these arguments either by parameter names or through the
`arguments` keyword.

**It's considered best practice to check the arguments of all functions /
methods.**

Signatures are just a suggestion in JavaScript.  As such, you cannot have
multiple versions of a function / method with different signatures.  The last
function / method found in your code will be the one to run.  Hence, if you
want to have multiple versions of a given method, with multiple ways to call
said method, you need to add conditional cases to check against.

### 1 Case

If you only have one case, the common thing to do is to include a conditional
at the beginning of your function / method:

```javascript
function factorial (num) {
  if (arguments.length !== 1 || !Number.isInteger(num) || num < 0) {
    throw new Error('Invalid use of factorial() function.  factorial() ' +
            'takes 1 argument as a parameter, which is a positive integer.')
  }

  // ... implementation
}
```

- The example above checks if the number of arguments is equal to 1 and if the
argument that's passed is an integer.  If either of these is false, it'll throw
an error.

### Multiple Cases

If you have multiple cases, say for a constructor for instance, you'll have
conditionals for each case:

```javascript
class Wine {
  #_name // name of the Wine
  #_age // age of the Wine

  constructor (name, age) {
    if (arguments.length === 0) {
      this.#_name = ""
      this.#_age = -1
    } else if (arguments.length === 2 && name instanceof String &&
        Number.isInteger(age)) {
      this.#_name = name
      this.#_age = age
    } else {
      throw new Error("Invalid use of Wine's constructor.  It takes " +
          'either 0 arguments, or 2 arguments (name, age), where name ' +
          'is a String, and age is an integer.')
    }
  }

  // ... the rest of Wine classes implementation
}
```

- The example above checks to see if Wine's constructor is used in one of 2
valid cases.  The first conditional is for the empty constructor, the second is
when you pass the name (string) and age (integer) arguments.  Any other uses of
the constructor will throw an error due to invalidity.

---

Equality ( == vs === )
----------------------

JavaScript doesn't use `==` the same way you're probably used to.  For example,
if you typed the following in C, it'd return false, but in JavaScript, this
line of code returns true:

```javascript
"1" == 1 // returns true in JavaScript
```

This was a design choice to make the language more accessible to
non-programmers, but it had a lot of unintended side effects.  As such, it
became important to implement a more traditional equality operation.  So, in
JavaScript, we use `===` to check for strict equality (taking into account the
data type):

```javascript
"1" === 1 // returns false in JavaScript
```

Another important thing to note is that when using `==`, the equality is not
transitive.  Here's an example:

```javascript
A == B // true
B == C // true
A == C // not necessarily true.  Could be false.
```

Therefore, best practice is to **always use `===` and `!==`** (instead of `==`
and `!=`).

---

null vs undefined
-----------------

In other languages, when you attempt to access something that doesn't exist,
you'll get null (null pointer exception, etc.).  JavaScript is different;
instead of null, **JavaScript defaults to `undefined`**.  The use of `null`
still exists, but it's a value that the programmer has to explicitly assign
to something.  This is useful in debugging because if you get null, it's
potentially an expected null.

Another thing to note is that, in JavaScript, null is an object, and undefined
is undefined:

```javascript
console.log(typeof null) // object
console.log(typeof undefined) // undefined
```

---

Number Primitive
----------------

JavaScript doesn't have primitives for int, long, float, or double.  Instead,
all of these fall under JavaScript's `Number` primitive.

To explicitly check for an integer, you could use the following:

```javascript
Number.isInteger(num) // returns a boolean signifying if "num" is an integer.
```

### Division

JavaScript's default division operator `/` performs floating point division,
not integer division.

```javascript
console.log(5/2) // prints 2.5, not 2
```

If you want to do integer division, use the `Math.floor()` function.

```javascript
console.log(Math.floor(5/2)) // prints 2
```

---

Importing
---------

The `require` keyword is how you import dependencies to a given file.

```javascript
const Person = require("./Person")
const assert = require("assert")
```

The code above imports two dependencies, `Person` and `assert`.

- `Person` is a fictitious file we've made within this directory (the `./` is
a relative path, telling you it's in the current directory), and
- `assert` is a standard file that's used for creating tests for your code.
(Note that it doesn't use a relative path `./`)

In order to be able to import a file you made, you need to add the following
line of code (typically at the bottom of your file):

```javascript
module.exports = Person
```

- `Person` is just a continuation of the example above.  You can change this.

---

Private Variables and Methods
-----------------------------

In JavaScript, variables and methods default to being public.

### Underscore

The convention to kindly ask people to **not** use your variable, or method, is
to lead its name with an underscore `_`:

```javascript
class Example {
  _dontUseMe () {
    // implementation
  }
}
```

However, this doesn't actually stop people from using said variable or method
outside your class.

### Pound Sign

The use of `#` in front of the name of a variable, or method, will make that
variable or method private and therefore inaccessible from outside your class.

```javascript
class Employee {
  #_salary // private instance variables need to be declared outside methods

  constructor (name, salary) {
    this.name = name
    this.#_salary = salary
  }

  #calculateBonus () {
  // implementation
  }
}
```

- In the above code, the variable `#_salary`, and method `#calculateBonus` are
private.  Neither of these can be called outside the Employee class.

Note that private instance variables need to be declared outside of methods.

---

Duck Typing
-----------

The term *Duck Typing* comes from the phrase **"If it walks like a duck, and
talks like a duck, it's a duck."**  What this means for programming, is that
if you have a function or method that's working on an Object, or array of
Objects, you don't need to check the types of said Objects.  Instead, you can
just check if all the Objects contain a particular feature (variable, method,
etc.).

Here's an example:

```javascript
function printArray (list) {
  if (arguments.length !== 1 || !Array.isArray(list)) {
    throw new Error('Invalid use of printArray() function.  It takes 1 ' +
        'argument, an array.')
  }

  for (let i = 0; i < list.length; i++) {
    if ('toString' in list[i] && typeof (list[i].toString) === 'function') {
      console.log(list[i].toString())
    }
  }
}
```

- The example above tries to call toString() on each item in the provided list.
There's a for loop that iterates over all the items, and before attempting to
call toString() on any given item, it checks if that item contains a feature
called "toString" in it, and that the toString feature is a function.  Only if
it passes both of these checks will it call toString() on that item.

---

Abstract Objects / Methods
--------------------------

JavaScript doesn't have an abstract keyword.  Instead, we need to throw errors
if someone's trying to either create an abstract object, or use an abstract
method.  

Example:

```javascript
class Shape {
  constructor () {
    if (this.constructor === Shape) {
      throw new Error('Cannot create instance of abstract class Shape.')
    }
  }

  getArea () {
    throw new Error("Cannot call Shape's abstract getArea() method.")
  }
}
```

- Shape is an abstract class.  You wouldn't want to initialize a Shape object.
Instead, you'd want to initialize a Circle, Square, Hexagon, etc. which all
inherit from the Shape class.  In order to ensure you don't create an instance
of the Shape object, you have to check if the constructor that's being used to
initialize the object is of type Shape, using `if (this.constructor === Shape)`.
If it is, you throw an error.
- getArea() is an example of an abstract method.  As is, it'll throw an error
when it's called.  This forces Shapes concrete subclasses to implement their
own version of getArea().
