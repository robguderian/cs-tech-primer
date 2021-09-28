"use strict";

const Hexagon = require("./Hexagon");

//------------------------------------------------------
// main
//
// PURPOSE: to instantiate 3 versions of Hexagon, and call toString() on each.
//
//------------------------------------------------------
function main(){
    let hex1 = new Hexagon(1); // hexagon with side length 1
    let hex2 = new Hexagon(2); // hexagon with side length 2
    let hex3 = new Hexagon(3); // hexagon with side length 3

    // printing them out
    console.log(hex1.toString());
    console.log(hex2.toString());
    console.log(hex3.toString());
}

main(); // run main() function.
