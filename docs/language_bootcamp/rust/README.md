# Rust Specifics

1. [Running Your Program](#running-your-program)   
   1. [rustc](#rustc)
   2. [cargo](#cargo)
2. [Importing](#importing)
3. [Ownership](#ownership)
4. [Variables](#variables)

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
