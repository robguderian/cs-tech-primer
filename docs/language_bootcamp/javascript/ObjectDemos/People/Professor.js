"use strict";

const Person = require("./Person");

class Professor extends Person{
    #_department; // which department does the professor belong to?

    constructor(name, age, department){
        if (arguments.length !== 3 || typeof(name) !== "string" ||
            !Number.isInteger(age) || typeof(department) !== "string"){

            throw new Error("Invalid use of Professor's constructor.  It " +
                "takes 3 arguments, name (string), age (int), and " +
                "department (string).");
        }

        super(name, age);
        this.#_department = department;
    }

    // getter
    getDepartment(){
        return this.#_department;
    }

    toString() {
        return super.toString() + ", Department: " + this.#_department;
    }
}

module.exports = Professor;
