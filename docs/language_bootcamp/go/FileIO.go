package main

import(
	"fmt"
	"io/ioutil"
	"log"
	"strings"
)

//------------------------------------------------------
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
//------------------------------------------------------
func addLineNumbers(inputFile string, outputFile string){
	// get the []byte content from the input file
	buf, errRead := ioutil.ReadFile(inputFile)

	// check no error occurred
	if errRead != nil{
		log.Fatal(errRead)
	}

	// splits content into a []string array based off new line characters
	input := strings.Split(string(buf), "\n")
	output := "" // will contain the output string

	// adds, to output string, a line number before each line from input file
	for i := 0; i < len(input); i++{
		output += fmt.Sprintf("%d: %s\n", i, input[i])
	}

	// write output string to output file, with unix permissions 0777
	errWrite := ioutil.WriteFile(outputFile, []byte(output), 0777)

	// check no error occurred
	if errWrite != nil {
		log.Fatal(errWrite)
	}
}

//------------------------------------------------------
// main
//
// PURPOSE: to run an example of file input/output by calling addLineNumbers().
//
//------------------------------------------------------
func main(){
	const inputFile = "inputFile.txt" // filename you want to open
	const outputFile = "outputFile.txt" // filename you want to save as

	// copies input files content to output file, and adds line numbers
	addLineNumbers(inputFile, outputFile)
}
