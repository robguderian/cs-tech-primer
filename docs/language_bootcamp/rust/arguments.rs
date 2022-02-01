use std::env; // environment

///------------------------------------------------------
/// print_arguments
///
/// PURPOSE: Prints out each of the arguments that were passed (when running
///          this file) on a separate line.
///
///          Example: type the following into the command line
///
///              ./arguments 2 3 4
///
///------------------------------------------------------
fn print_arguments() {
    let args: Vec<String> = env::args().collect();

    println!("You passed {} arguments.  They were: ", args.len());

    for argument in args{
        println!("{}", argument);
    }
}

fn main() {
    print_arguments();
}
