///------------------------------------------------------
/// fizz_buzz
///
/// PURPOSE: iterates over the values 1 <= i <= limit, and outputs either:
///          - FizzBuzz if the value is divisible by both Fizz and Buzz,
///          - Fizz if the value is only divisible by Fizz,
///          - Buzz if the value is only divisible by Buzz,
///          - or the value itself if it's not divisible by either Fizz or Buzz
///
/// PARAMETERS:
///      - limit is the maximum number we want to check against.
///
///------------------------------------------------------
fn fizz_buzz(limit:i8) {
    const FIZZ_NUM:i8 = 3; // the number value for Fizz
    const BUZZ_NUM:i8 = 5; // the number value for Buzz
    const FIZZ_STR:&str = "Fizz"; // the string for Fizz
    const BUZZ_STR:&str = "Buzz"; // the string for Buzz
    const FIZZBUZZ_STR:&str = "FizzBuzz"; // the string for FizzBuzz

    for i in 1..limit + 1 {
        if i % FIZZ_NUM == 0 && i % BUZZ_NUM == 0 { // if i divides both
            println!("{}", FIZZBUZZ_STR);
        }
        else if i % FIZZ_NUM == 0 { // if i only divides Fizz
            println!("{}", FIZZ_STR);
        }
        else if i % BUZZ_NUM == 0 { // if i only divides Buzz
            println!("{}", BUZZ_STR);
        }
        else { // i didn't divide either Fizz or Buzz
            println!("{}", i);
        }
    }
}

///------------------------------------------------------
/// main
///
/// PURPOSE: calls fizzBuzz() with a specified maximum value (LIMIT).
///
///------------------------------------------------------
fn main() {
    const LIMIT:i8 = 50; // max number you want to run fizzBuzz against

    fizz_buzz(LIMIT);
}
