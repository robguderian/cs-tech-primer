# Rust Specifics

1. Running Your Program   
   1. rustc
   2. cargo
2. Importing
3. Ownership
4. Variables
5. Functions
6. Structs

## Running Your Program

Rust is a compiled language.  There are two ways to go about compiling and
running your program.  You can use either of the `rustc` or `cargo` keywords.

### rustc

`rustc <filename.rs>` is the manual way to compile your program.

### cargo

`cargo` is a build tool.  Some common cargo commands are:

* `cargo new <filename>` to create a new project with the name `filename`
* `cargo build` will build your project
* `cargo run` will run your project

Note: In order to use these commands, you need to be in the correct directory.

For more information about how cargo works, see
[The Cargo Book](#https://doc.rust-lang.org/cargo/index.html).
There's a lot more information than what we've shown above.

## Importing

You can import using the `use` keyword.

Example:
```rust
use std::fs; // rust's file system
```

## Ownership

Rust doesn't have a garbage collector.  Instead, it uses the concept of
ownership and borrowing.  This is checked at compile time by rust's borrow
checker.

There can only ever be one owner of an item at a time.  If you wish to borrow
an item, you can either:

* borrow it immutably with `&item_name`, or
* borrow it mutably with `&mut item_name`

For the best information on how this works, read the 
[Ownership Chapter](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)
from The Rust Book.

## Variables

Variables are declared with the `let` and `const` keywords.

Everything in Rust is immutable by default.  If you want to declare a variable
that's mutable, you need to use the `mut` keyword.

* You cannot use `mut` with `const`.

Rust will automatically assume a variable type for you, or you can be explicit
and specify the type with a `:`, and the type after declaring the variable
name.

```rust
let mut sum = 0; // a mutable sum
let val : i32 = 10; // an immutable 32 bit signed integer
const INPUT_FILE: &str = "inputFile.txt";
```

## Functions

Functions in rust are defined with the `fn` keyword.  Both the return type and
parameter types must be specified in the function's signature.  The return type
is indicated after the closing parameter bracket with a `->`, then the type.
If the function doesn't return something, then we don't have a `->`.

When returning from a function, if the return statement is at the end of the
function, you can either explicitly use the `return` keyword and end that line
with a semicolon `;`, or you can write that line without the `return` keyword,
and no semicolon.  Either way, rust knows that the function returns that item.

Example of the two ways to return:

```rust
fn factorial1(num:i32) -> i32 { // returns an i32 value
    let mut return_value = 1; // value to be returned

    if num > 1{
        return_value = num * factorial(&num - 1);
    }

    return return_value; // explicit with the return keyword and semicolon
}

fn factorial2(num:i32) -> i32 { // returns an i32 value
   let mut return_value = 1; // value to be returned

   if num > 1{
      return_value = num * factorial(&num - 1);
   }

   return_value // implied without the return keyword and semicolon
}
```

## Structs

Rust doesn't have Objects, so instead it uses `struct`, combined with `impl`,
to get a similar result.

`struct` is similar to what you find in C, where you define a new data type
that has certain properties / fields to it.

`impl` is a way to add functions that can be called on a given struct.

Example:

```rust
struct Person {
    name: String,
    age: u8,
}

impl Person {
    fn new(name:String, age:u8) -> Self {
        Person {name, age}
    }

    fn get_name(&self) -> &str {
        &self.name
    }

    fn get_age(&self) -> u8 {
        self.age.clone()
    }

    fn to_string(&self) -> String {
        format!("Name: {}, Age: {}", self.name, self.age)
    }
}
```
