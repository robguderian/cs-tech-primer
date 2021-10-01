package main

import "fmt"

//------------------------------------------------------
// factorial
//
// PURPOSE: to show a recursive implementation of the factorial function.
//
// PARAMETERS:
//      - num is the number that you want to perform a factorial on.
//
// RETURN: returns the calculated factorial value (integer).
//
//------------------------------------------------------
func factorial(num int) int{
	returnValue := 1 // value to be returned

	if num > 1{
		returnValue = num * factorial(num - 1)
	}

	return returnValue
}

//------------------------------------------------------
// main
//
// PURPOSE: calls factorial() on a specified value and outputs the result
//
//------------------------------------------------------
func main(){
	num := 5 // number to calculate factorial on
	answer := factorial(num) // factorial result / answer

	// output the number and the answer.
	fmt.Printf("The factorial of \"%d\" is \"%d\".\n", num, answer)
}
