package main

import (
	"fmt"
	"os"
)

//------------------------------------------------------
// printArguments
//
// PURPOSE: Prints out each of the arguments that were passed (when running
//          this file) on a separate line.
//
//          Example: type the following into the command line
//
//              go Arguments.go 2 3 4
//
//------------------------------------------------------
func printArguments(){
	numArguments := len(os.Args) // number of arguments

	fmt.Printf("You passed %d arguments.  They were:\n", numArguments)

	for i := 0; i < numArguments; i++ {
		fmt.Printf("\t%s\n", os.Args[i])
	}
}

func main(){
	printArguments()
}
