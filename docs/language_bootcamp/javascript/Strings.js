"use strict";

let FileIO = require("./FileIO");
const readlineSync = require('readline-sync');

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
function listSubstring(content, substr){
    if (arguments.length !== 2 || !Array.isArray(content) ||
        typeof(substr) !== "string"){
        throw new Error("Invalid use of Strings' listSubstring() function." +
            "  It takes 2 arguments, an array os strings, and a string to " +
            "search for.");
    }

    let list = []; // list of items containing substr

    // check every item to see if there's a substring in it containing substr
    for (let i = 0; i < content.length; i++){
        if (typeof(content[i]) === "string" && content[i].includes(substr)){
            list.push(content[i]);
        }
    }

    console.log("\nThe substring \"%s\" was found %d times.  It was found in:",
        substr, list.length);

    for (let i = 0; i < list.length; i++){
        console.log("\t%s", list[i]);
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
function listLetterFreq(content){
    if (arguments.length !== 1 || !Array.isArray(content)){
        throw new Error("Invalid use of Strings' listLetterFreq() function." +
            "  It takes 1 argument, an array of strings.");
    }

    let knownLetter = {}; // key-value pairs of letters and counts
    let totalNumLetter = 0; // how many letters are in content
    let letter; // an individual letter in a string

    for (let i = 0; i < content.length; i++){
        if (typeof(content[i]) === "string") {
            for (let j = 0; j < content[i].length; j++){
                letter = content[i][j];

                if (knownLetter[letter] === undefined){
                    knownLetter[letter] = 1;
                }
                else{
                    knownLetter[letter]++;
                }
            }

            totalNumLetter += content[i].length;
        }
    }

    console.log("\nThe letter frequencies in the provided content are:");

    for (let item in knownLetter) {
        console.log("\t%s: %d", item, knownLetter[item]/totalNumLetter);
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
function listPalindrome(content){
    if (arguments.length !== 1 || !Array.isArray(content)){
        throw new Error("Invalid use of Strings' listPalindrome() function." +
            "  It takes 1 argument, an array of strings.");
    }

    let list = []; // contains a list of all palindromes found

    for (let i = 0; i < content.length; i++){
        if (typeof(content[i]) === "string" && isPalindrome(content[i])){
            list.push(content[i]);
        }
    }

    console.log("\nThere are %d palindromes in the provided content.  They " +
        "are:", list.length);

    for (let i = 0; i < list.length; i++){
        console.log("\t%s", list[i]);
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
function isPalindrome(word){
    if (arguments.length !== 1 || typeof(word) !== "string"){
        throw new Error("Invalid use of isPalindrome().  It takes 1 argument" +
            ", a string.");
    }

    let isGood = true; // is it a palindrome?
    let wordLength = word.length; // length of the word we're checking
    let rightIndex; // index for the letter on the right half of the word
    let leftIndex; // index for the letter on the left half of the word

    // skip empty string and single letter words b/c they are palindromes
    if (wordLength >= 2){
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
function listThings(content){
    if (arguments.length !== 1 || !Array.isArray(content)){
        throw new Error("Invalid use of Strings' listThings() function.  It" +
            " takes 1 argument, an array to read from.");
    }

    const searchFor = "pass"; // what substring do you want to search for

    listSubstring(content, searchFor);
    listLetterFreq(content);
    listPalindrome(content);
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
function getContentArray(filename){
    if (arguments.length !== 1 || typeof(filename) !== "string"){
        throw new Error("Invalid use of Strings' listThings() function.  It" +
            " takes 1 argument, the name of the file to read from.");
    }

    let content = FileIO.readFile(filename);

    // make content an array, where each password has its own index
    content = content.split("\n");

    console.log("The provided file contains %d lines to look through.",
        content.length);

    return content;
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
function checkOwned(content){
    if (arguments.length !== 1 || !Array.isArray(content)){
        throw new Error("Invalid use of Strings' checkOwned() function.  It " +
            "takes 1 argument, an array.");
    }

    const message = "\nEnter the password you want to check";
    const promptLine = ":\n> ";
    const exitPrompt = ", or enter -1 to exit";
    const initMessage = message + promptLine;
    const continueMessage = message + exitPrompt + promptLine;

    let found; // is the password found?
    let keepChecking = true; // should we continue asking for passwords?
    let userInput; // what password to check?

    console.log("\n**** Checking passwords to see if you're owned. ****");

    userInput = readlineSync.question(initMessage);

    while (keepChecking){
        found = false;

        for (let i = 0; i < content.length && !found; i++){
            if (content[i] === userInput){
                found = true;

                console.log("OWNED! \"%s\" was found on line \"%d\" in the " +
                    "file.", userInput, i);
            }
        }

        if (!found){
            console.log("SAFE! \"%s\" wasn't found in the file!", userInput);
        }

        userInput = readlineSync.question(continueMessage);
        keepChecking = userInput !== "-1";
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
function indexExample(inputString){
    if (arguments.length !== 1 || typeof(inputString) !== "string"){
        throw new Error("Invalid use of Strings' indexExample() function. It" +
            " takes 1 argument, a string.");
    }

    let symbol; // what symbol you're searching the position of
    let position; // the first position of the symbol you're searching for

    console.log("\n**** Starting an index example. ****");
    console.log("\nThe provided string you want to search in is \"%s\".",
        inputString);

    symbol = readlineSync.question("Which symbol do you want to know the " +
        "position of in the provided string?\n> ");

    while (symbol.length > 1){
        symbol = readlineSync.question("Invalid input. A symbol is a single" +
            " character. Try again:\n> ");
    }

    position = inputString.indexOf(symbol);

    console.log("The symbol \"%s\" is at position \"%d\" in the inputString " +
        "\"%s\".", symbol, position, inputString);

    if (position === -1){
        console.log("A position of \"-1\" means that it wasn't found in the " +
            "inputString.");
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
function main(){
    const filename = "../../../resources/passwords/rockyou.txt";
    const content = getContentArray(filename);

    listThings(content);
    checkOwned(content);
    indexExample(filename);
}

main(); // run main() function.
