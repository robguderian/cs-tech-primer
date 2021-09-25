package main

import "fmt"

//------------------------------------------------------
// fizzBuzz
//
// PURPOSE: iterates over the values 1 to limit (included), and outputs either:
//          - FizzBuzz if the value is divisible by both Fizz and Buzz,
//          - Fizz if the value is only divisible by Fizz,
//          - Buzz if the value is only divisible by Buzz,
//          - or the value itself if it's not divisible by either Fizz or Buzz
//
// PARAMETERS:
//      - limit is the maximum number we want to check against.
//
//------------------------------------------------------
func fizzBuzz(limit int) {
	const fizzNum = 3              // the number value for Fizz
	const buzzNum = 5              // the number value for Buzz
	const fizzStr = "Fizz"         // the string for Fizz
	const buzzStr = "Buzz"         // the string for Buzz
	const fizzBuzzStr = "FizzBuzz" // the string for FizzBuzz

	for i := 1; i <= limit; i++ {
		if i%fizzNum == 0 && i%buzzNum == 0 { // i divides both
			fmt.Println(fizzBuzzStr)
		} else if i%fizzNum == 0 { // i only divides Fizz
			fmt.Println(fizzStr)
		} else if i%buzzNum == 0 { // i only divides Buzz
			fmt.Println(buzzStr)
		} else { // i didn't divide either Fizz or Buzz
			fmt.Println(i)
		}
	}
}

//------------------------------------------------------
// main
//
// PURPOSE: calls fizzBuzz() with a specified maximum value (limit).
//
//------------------------------------------------------
func main() {
	const limit = 50 // what's the max number you want to run fizzBuzz against
	fizzBuzz(limit)
}
