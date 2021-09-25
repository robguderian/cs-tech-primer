"use strict";

/* TODO string examples
 *
 * RockYou is located in "../../../resources/passwords/rockyou.txt"
 *
 * We need to show the following:
 * substring
 * search
 * index a letter
 * split
 * Palindromicity (is it a palindrome?)
 *
 * Then we need to do the following to the rockyou file:
 * how many passwords have the word 'pass' in it?
 * see if you've been owned
 * count letter frequencies
 * how many palindromes are there in the corpus
 */

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
function isPalindrome(word){
    if (arguments.length !== 1 || typeof(word) !== "string"){
        throw new Error("Invalid use of isPalindrome().  It takes 1 argument" +
            ", a string, whose length must be > 1.");
    }

    let isGood = true; // is it a palindrome?
    let wordLength = word.length; // length of the word we're checking
    let rightIndex; // index for the letter on the right half of the word
    let leftIndex; // index for the letter on the left half of the word

    if (wordLength < 1){
        throw new Error("length of word provided to isPalindrome must be >= 1");
    }
    else if (wordLength === 1){
        isGood = true; // single letter words are palindromes
    }
    else{ // words with at least 2 letters in them
        if (wordLength % 2 === 0){ // left right setup for even words
            rightIndex = wordLength / 2;
            leftIndex = rightIndex - 1;
        }
        else{ // left right setup for odd word
            // skip the middle character for odd words
            rightIndex = Math.floor(wordLength/2) + 1;
            leftIndex = rightIndex - 2;
        }

        // check the mirroring of the word
        for (; rightIndex < wordLength && isGood; rightIndex++){
            if (word[rightIndex] !== word[leftIndex]){ // right not match left?
                isGood = false; // it's NOT a palindrome
            }

            leftIndex--; // shift the left index
        }
    }

    return isGood; // was it a palindrome or not (true/false)
}

