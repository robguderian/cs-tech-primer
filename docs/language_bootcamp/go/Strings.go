package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"strings"
)

/* TODO stuff left to do for string example:
 *
 * We need to show the following:
 * index a letter
 *
 * Then we need to do the following to the rockyou file:
 * see if you've been owned
 */

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

	fmt.Printf("\nThe substring \"%s\" was found %d times.  It was found in:",
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
	var knownLetter map[byte]int // key-value pairs of letters and counts
	totalNumLetter := 0          // how many letters are in content
	var letter byte              // an individual ascii letter in a string

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
		fmt.Printf("\t%s: %d", string(symbol), count/totalNumLetter)
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

	fmt.Printf("\nThere are %d palindromes in the provided content.  They"+
		"are:\n", len(list))

	for i := 0; i < len(list); i++ {
		fmt.Printf("\t%s", list[i])
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
// PURPOSE: calls a function to get the contents of the provided file, splits
//          the file on newline characters to create an array, then calls
//          listSubstring (with the substring to search for), listLetterFreq,
//          and listPalindrome.
//
// PARAMETERS:
//      - filename is the name of the file to read from.
//
//------------------------------------------------------
func listThings(filename string) {
	buf, err := ioutil.ReadFile(filename)

	if err != nil {
		log.Fatal(err)
	}

	const searchFor = "pass" // what substring do you want to search for

	// make content an array, where each password has its own index
	content := strings.Split(string(buf), "\n")

	fmt.Printf("The provided file contains %d lines to look through.",
		len(content))

	listSubstring(content, searchFor)
	listLetterFreq(content)
	listPalindrome(content)
}

//------------------------------------------------------
// main
//
// PURPOSE: to provide the filename and path to call listThings() on.
//
//------------------------------------------------------
func main() {
	const filename = "../../../resources/passwords/rockyou.txt"

	listThings(filename)
}
