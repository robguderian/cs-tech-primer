'use strict'

class Shape {
  #_type // what type of shape is it?

  constructor (type) {
    if (this.constructor === Shape) {
      throw new Error('Cannot create instance of abstract class Shape.')
    } else if (arguments.length !== 1 || typeof (type) !== 'string') {
      throw new Error("Invalid use of Shape's constructor.  It takes " +
                '1 argument, a string (what type of shape is it).')
    }

    this.#_type = type
  }

  getPerimeter () {
    throw new Error("Cannot call Shape's abstract getPerimeter() method.")
  }

  getArea () {
    throw new Error("Cannot call Shape's abstract getArea() method.")
  }

  toString () {
    return 'Shape type: ' + this.#_type
  }
}

module.exports = Shape
