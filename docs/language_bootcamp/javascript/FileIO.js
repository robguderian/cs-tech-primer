'use strict'

const fs = require('fs') // fs stands for file system

// ------------------------------------------------------
// readFile
//
// PURPOSE: Attempts to open the file with the provided filename and return
//          the file's contents.
//
// PARAMETERS:
//          - filename is a string containing the name of the file to be
//            opened.  It must include the extension (.txt).
//
// RETURN: Returns a string containing the contents of the file.
//
// ------------------------------------------------------
function readFile (filename) {
  if (arguments.length !== 1 || typeof (filename) !== 'string') {
    throw new Error("Improper use of FileIO's readFile() function.  It " +
            'takes 1 arguments, filename (string).')
  }

  let fileContents // a string containing all of the file's content

  try {
    fileContents = fs.readFileSync(filename, 'utf-8')
  } catch (err) {
    console.log('There was a problem opening the file.  Please make sure' +
            ' the file exists and type the full name with extension (.txt).')
    process.exit(1)
  }

  return fileContents
}

// ------------------------------------------------------
// addLineNumbers
//
// PURPOSE: Takes an input file, adds line numbers, and creates an output file
//          with that content.
//
// PARAMETERS:
//          - inputFile is a string containing the name of the file to be
//            opened.  It must include the extension (.txt).
//          - outputFile is a string containing the name of the file to be
//            created.  It must include the extension (.txt).
//
// ------------------------------------------------------
function addLineNumbers (inputFile, outputFile) {
  if (arguments.length !== 2 || typeof (inputFile) !== 'string' ||
        typeof (outputFile) !== 'string') {
    throw new Error("Invalid use of FileIO's addLineNumbers() function." +
            '  It takes 2 arguments (inputFile, outputFile), both of which ' +
            ' are strings.')
  }

  // get the content from the input file
  let content = readFile(inputFile)

  // create an empty output file with the provided name
  fs.writeFileSync(outputFile, '')

  // splits content into an array based off new line characters
  content = content.split('\n')

  // appends output file with a line number before each line from input file
  for (let i = 0; i < content.length; i++) {
    fs.appendFileSync(outputFile, i + ': ' + content[i] + '\n')
  }
}

// ------------------------------------------------------
// main
//
// PURPOSE: to run an example of file input/output by calling addLineNumbers().
//
// ------------------------------------------------------
function main () {
  const inputFile = 'inputFile.txt' // filename you want to open
  const outputFile = 'outputFile.txt' // filename you want to save as

  // copies input files content to output file, and adds line numbers
  addLineNumbers(inputFile, outputFile)
}

main() // run main() function.

module.exports = { readFile: readFile }
