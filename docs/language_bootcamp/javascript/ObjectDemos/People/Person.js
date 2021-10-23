'use strict'

class Person {
  #_name // what's the name of this person?
  #_age // what's the age of this person?

  constructor (name, age) {
    if (arguments.length !== 2 || typeof (name) !== 'string' ||
            !Number.isInteger(age)) {
      throw new Error("Invalid use of Person's constructor().  It " +
                'takes 2 arguments, name (String) and age (int).')
    }

    this.#_name = name
    this.#_age = age
  }

  // getter
  getName () {
    return this.#_name
  }

  // getter
  getAge () {
    return this.#_age
  }

  toString () {
    return "Name: " + this.#_name + ", Age: " + this.#_age
  }
}

module.exports = Person
