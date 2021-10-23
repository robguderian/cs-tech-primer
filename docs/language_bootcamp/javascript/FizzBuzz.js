'use strict'

// ------------------------------------------------------
// fizzBuzz
//
// PURPOSE: iterates over the values 1 to limit (included), and outputs either:
//            - FizzBuzz if the value is divisible by both Fizz and Buzz,
//            - Fizz if the value is only divisible by Fizz,
//            - Buzz if the value is only divisible by Buzz,
//            - or the value itself if it's not divisible by either Fizz or Buzz
//
// PARAMETERS:
//      - limit is the maximum number we want to check against.
//
// ------------------------------------------------------
function fizzBuzz (limit) {
  if (arguments.length !== 1 || !Number.isInteger(limit) || limit < 1) {
    throw new Error('Invalid use of fizzBuzz() function.  It takes 1 ' +
            'parameter, "limit", which is a positive integer.')
  }

  const FIZZ_NUM = 3 // the number value for Fizz
  const BUZZ_NUM = 5 // the number value for Buzz
  const FIZZ_STR = 'Fizz' // the string for Fizz
  const BUZZ_STR = 'Buzz' // the string for Buzz
  const FIZZBUZZ_STR = 'FizzBuzz' // the string for FizzBuzz

  for (let i = 1; i <= limit; i++) {
    if (i % FIZZ_NUM === 0 && i % BUZZ_NUM === 0) { // if i divides both
      console.log(FIZZBUZZ_STR)
    } else if (i % FIZZ_NUM === 0) { // if i only divides Fizz
      console.log(FIZZ_STR)
    } else if (i % BUZZ_NUM === 0) { // if i only divides Buzz
      console.log(BUZZ_STR)
    } else { // i didn't divide either Fizz or Buzz
      console.log(i)
    }
  }
}

// ------------------------------------------------------
// main
//
// PURPOSE: calls fizzBuzz() with a specified maximum value (LIMIT).
//
// ------------------------------------------------------
function main () {
  const LIMIT = 50 // what's the max number you want to run fizzBuzz against

  fizzBuzz(LIMIT)
}

main() // run the main() function.
