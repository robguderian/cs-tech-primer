'use strict';

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
function printForLoop(list) {
	if (arguments.length !== 1 || !Array.isArray(list)) {
		throw new Error('Invalid use of Loops\' printForLoop() function. It '
            + 'takes 1 argument, which is an array.');
	}

	console.log('normal for loop:');

	for (let i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
}

// ------------------------------------------------------
// printForOfLoop
//
// PURPOSE: prints a message about what type of loop it is (for of loop), then
//          iterates over the provided list, using said loop, and prints each
//          item.
//
// PARAMETERS:
//      - list is the array of items to be printed
//
// ------------------------------------------------------
function printForOfLoop(list) {
	if (arguments.length !== 1 || !Array.isArray(list)) {
		throw new Error('Invalid use of Loops\' printForOfLoop() function. '
            + 'It takes 1 argument, which is an array.');
	}

	console.log('\nfor of loop:');

	for (const j of list) {
		console.log(j);
	}
}

// ------------------------------------------------------
// printWhileLoop
//
// PURPOSE: prints a message about what type of loop it is (while loop), then
//          iterates over the provided list, using said loop, and prints each
//          item.
//
// PARAMETERS:
//      - list is the array of items to be printed
//
// ------------------------------------------------------
function printWhileLoop(list) {
	if (arguments.length !== 1 || !Array.isArray(list)) {
		throw new Error('Invalid use of Loops\' printWhileLoop() function. '
            + 'It takes 1 argument, which is an array.');
	}

	let index = 0;

	console.log('\nwhile loop:');

	while (index < list.length) {
		console.log(list[index++]);
	}
}

// ------------------------------------------------------
// printDoWhileLoop
//
// PURPOSE: prints a message about what type of loop it is (do-while loop),
//          then iterates over the provided list, using said loop, and prints
//          each item.
//
// PARAMETERS:
//      - list is the array of items to be printed
//
// ------------------------------------------------------
function printDoWhileLoop(list) {
	if (arguments.length !== 1 || !Array.isArray(list)) {
		throw new Error('Invalid use of Loops\' printDoWhileLoop() function. '
            + 'It takes 1 argument, which is an array.');
	}

	let index = 0;

	console.log('\ndo-while loop:');

	do {
		console.log(list[index++]);
	}
	while (index < list.length);
}

// ------------------------------------------------------
// main
//
// PURPOSE: provides the list to be printed and then calls each of the
//          different loop functions to print it.
//
// ------------------------------------------------------
function main() {
	const list = [1, 2, 3, 4, 5]; // List to be printed

	printForLoop(list); // Prints list using for loop
	printForOfLoop(list); // Prints list using for of loop
	printWhileLoop(list); // Prints list using while loop
	printDoWhileLoop(list); // Prints list using do-while loop
}

main(); // Runs the main() function.
