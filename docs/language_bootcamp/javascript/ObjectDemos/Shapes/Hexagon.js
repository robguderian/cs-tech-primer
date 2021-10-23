'use strict'

const Shape = require('./Shape')

class Hexagon extends Shape {
  #_sideLength // the width length of the Hexagon

  constructor (sideLength) {
    if (arguments.length !== 1 || typeof (sideLength) !== 'number' ||
            sideLength <= 0) {
      throw new Error("Invalid use of Hexagon's constructor.  It takes " +
                '1 argument, sideLength (a Number > 0).')
    }

    super('Hexagon')
    this.#_sideLength = sideLength
  }

  getPerimeter () {
    return 6 * this.#_sideLength // hexagons have 6 sides
  }

  getArea () {
    return 3 * Math.sqrt(3) * Math.pow(this.#_sideLength, 2) / 2
  }

  toString () {
    return super.toString() + ', Side Length: ' + this.#_sideLength +
            ', Perimeter: ' + this.getPerimeter() + ', Area: ' +
            this.getArea()
  }
}

module.exports = Hexagon
