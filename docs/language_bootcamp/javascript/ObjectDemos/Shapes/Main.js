'use strict';

const Hexagon = require('./Hexagon');

// ------------------------------------------------------
// main
//
// PURPOSE: to instantiate 3 versions of Hexagon, and call toString() on each.
//
// ------------------------------------------------------
function main() {
	const hex1 = new Hexagon(1); // Hexagon with side length 1
	const hex2 = new Hexagon(2); // Hexagon with side length 2
	const hex3 = new Hexagon(3); // Hexagon with side length 3

	// printing them out
	console.log(hex1.toString());
	console.log(hex2.toString());
	console.log(hex3.toString());
}

main(); // Run main() function.
