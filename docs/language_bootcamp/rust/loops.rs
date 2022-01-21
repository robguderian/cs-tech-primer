/// ------------------------------------------------------
/// for_range_loop
///
/// PURPOSE: prints a message about what type of loop it is (for_range_loop),
///          then iterates over the provided list, using said loop, and prints
///          each item.
///
/// PARAMETERS:
///      - list is the vector of items to be printed
///
/// ------------------------------------------------------
fn for_range_loop(list:&Vec<i32>) {
    println!("for_range_loop:");

    for i in 0..list.len() {
        println!("{}", list[i]);
    }
}

/// ------------------------------------------------------
/// for_in_loop
///
/// PURPOSE: prints a message about what type of loop it is (for_in_loop),
///         then iterates over the provided list, using said loop, and prints
///			each item.
///
/// PARAMETERS:
///      - list is the vector of items to be printed
///
/// ------------------------------------------------------
fn for_in_loop(list:&Vec<i32>) {
    println!("\nfor_in_loop:");

    for i in list {
        println!("{}", i);
    }
}

/// ------------------------------------------------------
/// while_loop
///
/// PURPOSE: prints a message about what type of loop it is (while_loop), then
///			iterates over the provided list, using said loop, and prints each
///			item.
///
/// PARAMETERS:
///      - list is the vector of items to be printed
///
/// ------------------------------------------------------
fn while_loop(list:&Vec<i32>) {
    println!("\nwhile_loop:");

    let mut i = 0;

    while i < list.len(){
        println!("{}", list[i]);
        i += 1;
    }
}

/// ------------------------------------------------------
/// infinite_loop
///
/// PURPOSE: prints a message about what type of loop it is (infinite_loop),
///         then iterates over the provided list, using said loop, and prints
///			each item.
///
/// PARAMETERS:
///      - list is the vector of items to be printed
///
/// ------------------------------------------------------
fn infinite_loop(list:&Vec<i32>) {
    println!("\ninfinite_loop:");

    let mut i = 0;

    loop { // similar to using while true
        println!("{}", list[i]);
        i += 1;

        if i >= list.len() {
            break; // need to use break to exist the loop
        }
    }
}

/// ------------------------------------------------------
/// main
///
/// PURPOSE: provides the list to be printed and then calls each of the
///          different loop functions to print it.
///
/// ------------------------------------------------------
fn main() {
    let list= vec![1, 2, 3, 4, 5]; // list to be printed

    for_range_loop(&list);      // prints list using a "ranged for" loop
    for_in_loop(&list);         // prints list using a "for in" loop
    while_loop(&list);          // prints list using a "while" loop
    infinite_loop(&list);       // prints list using an "infinite" loop
}
