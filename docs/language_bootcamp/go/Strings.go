package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"strings"
)

//------------------------------------------------------
// listSubstring
//
// PURPOSE: iterates over the provided array of strings (content), checking
//          each string to see if they contain the provided a specified
//          substring.  Keeps a list of strings that do.  Outputs information
//          about what was found.
//
// PARAMETERS:
//      - content is the array of strings to check.
//      - substr is the substring to check each string for.
//
//------------------------------------------------------
func listSubstring(content []string, substr string) {
	var list []string // list of items containing substr

	// check every item to see if there's a substring in it containing substr
	for i := 0; i < len(content); i++ {
		if strings.Contains(content[i], substr) {
			list = append(list, content[i])
		}
	}

	fmt.Printf("\nThe substring \"%s\" was found %d times. It was found in:\n",
		substr, len(list))

	for i := 0; i < len(list); i++ {
		fmt.Printf("\t%s\n", list[i])
	}
}

//------------------------------------------------------
// listLetterFreq
//
// PURPOSE: iterates over the provided array of strings (content), keeping a
//          count of the total number of letters, and how many of each are
//          contained in content.  Outputs information about what was found.
//
// PARAMETERS:
//      - content is the array of strings to check.
//
//------------------------------------------------------
func listLetterFreq(content []string) {
	knownLetter := make(map[byte]int) // key-value pairs of letters and counts
	totalNumLetter := 0               // how many letters are in content
	var letter byte                   // an individual ascii letter in a string

	for i := 0; i < len(content); i++ {
		for j := 0; j < len(content[i]); j++ {
			letter = content[i][j]

			// _ would be the count for that letter, but since we're not
			// using it, convention is to name it as _
			_, ok := knownLetter[letter]

			if ok { // was letter found in the map ?
				knownLetter[letter]++
			} else { // initialize letter count in map
				knownLetter[letter] = 1
			}
		}

		totalNumLetter += len(content[i])
	}

	fmt.Println("\nThe letter frequencies in the provided content are:")

	for symbol, count := range knownLetter {
		fmt.Printf("\t%s: %f\n", string(symbol),
			float64(count)/float64(totalNumLetter))
	}
}

//------------------------------------------------------
// listPalindrome
//
// PURPOSE: iterates over the provided array of strings (content), checking
//          each string to see if they're a palindrome (call isPalindrome()),
//          and adding them to a list of palindromes found so far.  Outputs
//          information about what was found.
//
// PARAMETERS:
//      - content is the array of strings to check.
//
//------------------------------------------------------
func listPalindrome(content []string) {
	var list []string // contains a list of all palindromes found

	for i := 0; i < len(content); i++ {
		if isPalindrome(content[i]) {
			list = append(list, content[i])
		}
	}

	fmt.Printf("\nThere are %d palindromes in the provided content.  They "+
		"are:\n", len(list))

	for i := 0; i < len(list); i++ {
		fmt.Printf("\t%s\n", list[i])
	}
}

//------------------------------------------------------
// isPalindrome
//
// PURPOSE: To check if the provided string is a palindrome (does it read the
//          same forwards and backwards).  Example: "hannah" is a palindrome.
//
// PARAMETERS:
//          - word is the string we want to check
//
// RETURN: Returns a boolean (true if it's a palindrome, otherwise false)
//
//------------------------------------------------------
func isPalindrome(word string) bool {
	isGood := true          // is it a palindrome?
	wordLength := len(word) // length of the word we're checking
	var rightIndex int      // index for the letter on the right half of the word
	var leftIndex int       // index for the letter on the left half of the word

	// skip empty string and single letter words b/c they are palindromes
	if wordLength >= 2 {
		if wordLength%2 == 0 { // left right setup for even words
			rightIndex = wordLength / 2
			leftIndex = rightIndex - 1
		} else { // left right setup for odd word
			// skip the middle character for odd words
			rightIndex = wordLength/2 + 1
			leftIndex = rightIndex - 2
		}

		// check the mirroring of the word
		for ; rightIndex < wordLength && isGood; rightIndex++ {
			if word[rightIndex] != word[leftIndex] { // right not match left?
				isGood = false // it's NOT a palindrome
			}

			leftIndex-- // shift the left index
		}
	}

	return isGood // was it a palindrome or not (true/false)
}

//------------------------------------------------------
// listThings
//
// PURPOSE: Provides the substring to search for, and calls listSubstring(),
//          listLetterFreq(), and listPalindrome().
//
// PARAMETERS:
//      - content is the array to pass to other functions.
//
//------------------------------------------------------
func listThings(content []string) {
	const searchFor = "pass" // what substring do you want to search for

	listSubstring(content, searchFor)
	listLetterFreq(content)
	listPalindrome(content)
}

//------------------------------------------------------
// getContentArray
//
// PURPOSE: Calls a function to read the contents of the provided file, splits
//          the file on newline characters to create an array, outputs the
//          number of lines from said file, and returns the array of lines.
//
// PARAMETERS:
//      - filename is the name of the file to try and read from.
//
// RETURN: Returns an array of strings from the provided file.
//
//------------------------------------------------------
func getContentArray(filename string) []string {
	buf, err := ioutil.ReadFile(filename)

	if err != nil {
		log.Fatal(err)
	}

	// make content an array, where each password has its own index
	content := strings.Split(string(buf), "\n")

	fmt.Printf("The provided file contains %d lines to look through.\n",
		len(content))

	return content
}

//------------------------------------------------------
// checkOwned
//
// PURPOSE: prompts the user to input a password and checks if the password
//          they entered is in the rockyou.txt file.  (The rockyou.txt file is
//          ordered from least most common to least common, and we're using a
//          truncated version, so this only checks the more common passwords).
//
// PARAMETERS:
//      - content is an array of strings to check for a given password.
//
//------------------------------------------------------
func checkOwned(content []string) {
	const message = "\nEnter the password you want to check"
	const promptLine = ":\n> "
	const exitPrompt = ", or enter -1 to exit"
	const initMessage = message + promptLine
	const continueMessage = message + exitPrompt + promptLine

	found := false       // is the password found?
	keepChecking := true // should we continue asking for passwords?
	var userInput string // what password to check?

	fmt.Println("\n**** Checking passwords to see if you're owned. ****")
	fmt.Print(initMessage)
	getUserInput(&userInput)

	for keepChecking {
		found = false

		for i := 0; i < len(content) && !found; i++ {
			if content[i] == userInput {
				found = true

				fmt.Printf("OWNED! \"%s\" was found on line \"%d\" in the "+
					"file.\n", userInput, i)
			}
		}

		if !found {
			fmt.Printf("SAFE! \"%s\" wasn't found in the file!\n", userInput)
		}

		fmt.Print(continueMessage)
		getUserInput(&userInput)
		keepChecking = userInput != "-1"
	}
}

//------------------------------------------------------
// indexExample
//
// PURPOSE: Run an example showing how to index a symbol in a string.  Prompts
//          the user to input the symbol they want to search for.
//
// PARAMETERS:
//      - inputString is the string to search in.
//
//------------------------------------------------------
func indexExample(inputString string) {
	var symbol string // what symbol you're searching the position of
	var position int  // the first position of the symbol you're searching for

	fmt.Println("\n**** Starting an index example. ****")
	fmt.Printf("\nThe provided string you want to search in is \"%s\".\n",
		inputString)
	fmt.Print("Which symbol do you want to know the position of in the " +
		"provided string?\n> ")

	getUserInput(&symbol)

	if len(symbol) != 1 {
		fmt.Print("Invalid input. A symbol is a single character. " +
			"Try again:\n> ")

		getUserInput(&symbol)
	}

	position = strings.IndexByte(inputString, symbol[0])

	fmt.Printf("The symbol \"%s\" is at position \"%d\" in the inputString "+
		"\"%s\".\n", symbol, position, inputString)

	if position == -1 {
		fmt.Printf("A position of \"-1\" means that it wasn't found in the " +
			"inputString.\n")
	}
}

//------------------------------------------------------
// getUserInput
//
// PURPOSE: provides a way to get the user's command line input into the
//			provided string.
//
// PARAMETERS:
//      - destString is the string to write to.
//
//------------------------------------------------------
func getUserInput(destString *string) {
	_, err := fmt.Scanln(destString)
	if err != nil {
		log.Fatal(err)
	}
}

//------------------------------------------------------
// main
//
// PURPOSE: provides the filename for the file to open, and gets the contents
//          of the file by calling getContentArray(). Passes the contents to
//          listThings() and checkOwned(), then calls indexExample().
//
//------------------------------------------------------
func main() {
	const filename = "resources/passwords/rockyou.txt" // no relative paths
	content := getContentArray(filename)

	listThings(content)
	checkOwned(content)
	indexExample(filename)
}
