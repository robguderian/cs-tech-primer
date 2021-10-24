Go Primer
=========

This primer should give you an overview of Go, to allow you to quickly start
using it.

---

Running Go
----------

You can run a Go file using the command `go run filename.go`, where filename.go
is the name of the go program you're trying to run.  While this will run your
program, it won't create an executable.  If you want to create an executable,
you use the command `go build filename.go`.

If you have multiple separated files that depend on each other, you can either
run it with `go run .`, or you can create an executable with `go build`.

---

Assigning Variables
-------------------

There are two ways to assign variables in Go:

1. Use the `:=` operator, and Go will automatically determine the variable
type for you:

    ```go
    x := 10
    y := 1e14
    ```

2. Use explicit declaration:

    ```go
    var x int = 10
    const y int64 = 1e14
    ```

- If you use explicit declaration, you must specify if the variable will be a
constant (using `const`), or a regular variable (using `var`).
  - constants cannot be declared using `:=`.
- Note that the variable type comes after the variable name.  This is a common
feature present in other areas of Go (example: parameters in functions).

You can also assign multiple variables in a single line:

```go
x, y int := 10, 20
```

---

Variable Types
--------------

Go has the following variable types:

- bool
- string
- int
  - int8
  - int16
  - int32
  - int64
- uint
  - uint8
  - uint16
  - uint32
  - uint64
- byte
- rune
- float32
- float64
- complex64
- complex128

Things of note:

- byte is typically used in place of char, and is an alias for uint8
- rune is typically used for unicode, and is an alias for int32
- If you don't explicitly declare the value for a variable, it's assigned
its zero value:
  - 0 for numeric types
  - false for boolean types
  - "" (empty string) for strings

---

Bit Shifting
------------

Go can perform bit shifting with the operators `<<` and `>>` for left and right
bit-wise shifting.

```go
x := 2
y := x << 1 // y = x * 2 = 4
z := y >> 1 // z = y / 2 = 2
```

---

Functions
---------

Go uses the `func` keyword to define a new function.  When defining a function,
the value to be returned comes after the parenthesis and before the open curly
bracket.

```go
func factorial(num int) int{
    returnValue := 1 // value to be returned

    if num > 1{
        returnValue = num * factorial(num - 1)
    }

    return returnValue
}
```

You can return as many results as you want:

```go
func foo() (string, int) {
    // ... implementation
    return "test", -1
}
```

- In this case, we're returning 2 (a string and an int).

### Naked Returns

It's also possible to return from a function without stating a value after the
return keyword.  This is called a naked return.  It will return the variables
that are specified in the function declaration:

```go
func bar() (x, y int){
    x := 10
    y := 20
    return // this returns x and y
}
```

---

Importing Dependencies
----------------------

Go uses the `import` keyword to import a dependency:

```go
import "fmt"
```

If there are multiple imports, it separates them onto their own lines and
surrounds them with parenthesis.

```go
import (
    "fmt"
    "strings"
)
```

---

Classes
-------

Go doesn't have classes.  Instead, it uses:

- Structs
- Methods/Functions
- Interfaces
- Embedding

### Structs

Structs work like you'd expect from other languages.  You declare them with
the keywords `type` and `struct` in the form `type stuctName struct`, where
structName is the name of the struct you wish you create.  You can then specify
the fields within it in curly brackets:

```go
type Person struct {
    name string
    age uint8 // 0 to 128
}
```

- Above is the declaration of the Person struct, with fields name (string) and
age (int).

Structs are declared as follows:

```go
john := Person{name: "John Doe", age: 23}

// OR

jane := Person{"Jane Doe", 22}
```

- john is a Person struct, with name "John Doe", and age "23".
- jane is a Person struct, with name "Jane Doe", and age "22".
- Both declaration styles are valid, but the more explicit declaration shown
on john is preferred as it's easier to tell fields are which.

Fields can be accessed with the dot notation:

```go
fmt.Println(john.name) // prints "John Doe"
```

### Methods

Methods look similar to functions, but have an extra set of brackets before
the function name that tells you which Struct this method is attached to:

```go
func (person Person) GetName() string {
    return person.name
}
```

- In this case, the method `GetName()` is attached to the `Person` struct.

---

Go Routines
-----------

---
