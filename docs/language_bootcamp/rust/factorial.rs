///------------------------------------------------------
/// factorial
///
/// PURPOSE: to show a recursive implementation of the factorial function.
///
/// PARAMETERS:
///      - num is the number(i32) that you want to perform a factorial on.
///
/// RETURN: returns the calculated factorial value (i32).
///
///------------------------------------------------------
fn factorial(num:i32) -> i32 {
    let mut return_value = 1; // value to be returned

    if num > 1{
        return_value = num * factorial(&num - 1);
    }

    return return_value;
}

///------------------------------------------------------
/// main
///
/// PURPOSE: calls factorial() on a specified value, and prints the result.
///
///------------------------------------------------------
fn main(){
    let num:i32 = 5; // number to calculate factorial on
    let answer:i32 = factorial(num); // factorial result / answer

    // prints the number entered and its factorial value.
    println!("The factorial of {} is \"{}\".", num, answer);
}
