'use strict';

// ------------------------------------------------------
// printArguments
//
// PURPOSE: Prints out each of the arguments that were passed (when running
//          this file) on a separate line.
//
//          Example: type the following into the command line
//
//              node Arguments.js 2 3 4
//
// ------------------------------------------------------
function printArguments() {
	const NUM_ARGUMENTS = process.argv.length; // Number of arguments

	console.log('You passed %d arguments.  They were:', NUM_ARGUMENTS);

	for (let i = 0; i < NUM_ARGUMENTS; i++) {
		console.log('\t%s', process.argv[i]);
	}
}

printArguments(); // Run printArguments() function.
