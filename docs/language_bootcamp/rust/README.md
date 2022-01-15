# Rust Specifics

1. [Running Your Program](#running-your-program)   
   1. [rustc](#rustc)
   2. [cargo](#cargo)
2. [Importing](#importing)
3. [Ownership](#ownership)
   1. [&str vs String](#str-vs-string)

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

For the best information on how this works, read about it in 
[The Rust Book](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html).

