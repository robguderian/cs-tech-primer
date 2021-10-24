package main

import "fmt"

// ------------------------------------------------------
// printForLoop
//
// PURPOSE: prints a message about what type of loop it is (normal for loop),
//          then iterates over the provided list, using said loop, and prints
//          each item.
//
// PARAMETERS:
//      - list is the array of items to be printed
//
// ------------------------------------------------------
func printForLoop(list []int) {
	fmt.Println("normal for loop:")

	for i := 0; i < len(list); i++ {
		fmt.Println(list[i])
	}
}

// ------------------------------------------------------
// printForLikeWhileLoop
//
// PURPOSE: prints a message about what type of loop it is (for loop like a
//			while loop), then iterates over the provided list, using said loop,
//			and prints each item.
//
// PARAMETERS:
//      - list is the array of items to be printed
//
// ------------------------------------------------------
func printForLikeWhileLoop(list []int) {
	fmt.Println("\nfor loop like a while loop:")
	i := 0

	for i < len(list) {
		fmt.Println(list[i])
		i++
	}
}

// ------------------------------------------------------
// noConditionForLoop
//
// PURPOSE: prints a message about what type of loop it is (no condition for
//			loop), then iterates over the provided list, using said loop, and
//			prints each item.
//
// PARAMETERS:
//      - list is the array of items to be printed
//
// ------------------------------------------------------
func noConditionForLoop(list []int) {
	fmt.Println("\nno condition for loop:")

	i := 0

	for {
		fmt.Println(list[i])
		i++
		if i >= len(list) {
			break // or else it'll run forever
		}
	}
}

// ------------------------------------------------------
// main
//
// PURPOSE: provides the list to be printed and then calls each of the
//          different loop functions to print it.
//
// ------------------------------------------------------
func main() {
	var list = []int{1, 2, 3, 4, 5} // list to be printed

	printForLoop(list)          // prints list using for loop
	printForLikeWhileLoop(list) // prints list using for of loop
	noConditionForLoop(list)    // prints list using no conditions in a for loop
	// notice that there's no while loop, or do while loop in Go
}
