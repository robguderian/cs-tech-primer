"use strict";

const Person = require("./Person");
const Student = require("./Student");
const Professor = require("./Professor");

//------------------------------------------------------
// setupPeople
//
// PURPOSE: to create and return new instances of Person, Student, and
//          Professor objects in an array.
//
// RETURN: returns an array of Person, Student, and Professor objects.
//
//------------------------------------------------------
function setupPeople(){
    let john = new Person("John Doe", 15);
    let jane = new Student("Jane Doe", 22, 1139054);
    let hellen = new Professor("Hellen Drake", 37, "Computer Science");

    return [john, jane, hellen];
}

//------------------------------------------------------
// printArray
//
// PURPOSE: to iterate over a provided array, and attempt to call toString()
//          on each item.  Uses duck typing to ensure each item has toString()
//          function to call.
//
// PARAMETERS:
//      - list is the array of items to be printed
//
//------------------------------------------------------
function printArray(list){
    if (arguments.length !== 1 || !Array.isArray(list)){
        throw new Error("Invalid use of Main's printArray() function.  It " +
            "takes 1 argument, an array.");
    }

    for (let i = 0; i < list.length; i++){

        // uses duck typing to check if list[i] has the function toString()
        // before trying to call it.

        if ("toString" in list[i] && typeof(list[i].toString) === "function"){
            console.log(list[i].toString());
        }
    }
}

function main(){
    printArray(setupPeople());
}

main(); // run main() function.
