'use strict'

const Person = require('./Person')

class Student extends Person {
  #_studentID // unique 7 digit identifier

  constructor (name, age, studentID) {
    if (arguments.length !== 3 || typeof (name) !== 'string' ||
            !Number.isInteger(age) || !Number.isInteger(studentID)) {
      throw new Error("Invalid use of Student's constructor.  It " +
                'takes 3 arguments, name (string), age (int), and ' +
                'studentID (int).')
    }

    super(name, age)
    this.#_studentID = studentID
  }

  // getter
  getStudentID () {
    return this.#_studentID
  }

  toString () {
    return super.toString() + ", StudentID: " + this.#_studentID
  }
}

module.exports = Student
