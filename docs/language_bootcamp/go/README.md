Go Primer
=========

This primer should give you an overview of Go, to allow you to quickly start
using it.

---

Running Go
----------



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
- Note that the variable type comes after the variable name.  This is a common
feature present in other areas of Go (example: parameters in functions).

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

---

Functions
---------

Go uses the `func` keyword to define a new function.

```go
func factorial(num int) int{
	returnValue := 1 // value to be returned

	if num > 1{
		returnValue = num * factorial(num - 1)
	}

	return returnValue
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

- Interfaces
- Methods/Functions
- Structs
- Embedding

---
