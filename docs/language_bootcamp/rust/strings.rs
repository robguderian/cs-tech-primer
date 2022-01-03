use std::fs;
use std::collections::HashMap;

///------------------------------------------------------
/// list_substring
///
/// PURPOSE: iterates over the provided array of strings (content), checking
///          each string to see if they contain the provided a specified
///          substring.  Keeps a list of strings that do.  Outputs information
///          about what was found.
///
/// PARAMETERS:
///      - content is the array of strings to check.
///      - substr is the substring to check each string for.
///
///------------------------------------------------------
fn list_substring(content:Vec<&str>, substr:&str) {
    let mut list:Vec<string> = Vec::new(); // list of items containing substr

    // check every item to see if there's a substring in it containing substr
    for string in content {
        if string.contains(substr) {
            list.push(string);
        }
    }

    println!("\nThe substring \"{}\" was found {} times. It was found in:",
             substr, list.len());

    for string in list {
        println!("\t{}", string);
    }
}

//------------------------------------------------------
// list_letter_freq
//
// PURPOSE: iterates over the provided array of strings (content), keeping a
//          count of the total number of letters, and how many of each are
//          contained in content.  Outputs information about what was found.
//
// PARAMETERS:
//      - content is the array of strings to check.
//
//------------------------------------------------------
fn list_letter_freq(content:Vec<&str>) {
    let mut known_letter = HashMap::new();// key-value pairs of letters and counts
    let mut total_num_letter = 0; // how many letters are in content
    let mut letter:u8; // an individual ascii letter in a string

    for i in 0..content.len() {
        for j in 0..content[i].len() {
            letter = content[i][j];

            match known_letter.get(letter) {
                Some(count) => count += 1, // was letter found
                None => known_letter.insert(letter.copy(), 1) // initialize letter count
            }
        }

        total_num_letter += content[i].len();
    }

    println!("\nThe letter frequencies in the provided content are:");

    for (symbol, count) in &known_letter {
        println!("\t{}: {.}", symbol, (count as f32) / totalNumLetter);
    }
}

//------------------------------------------------------
// list_palindrome
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
fn list_palindrome(content:Vec<&str>) {
    let mut list = Vec::new(); // contains a list of all palindromes found

    for string in content {
        if is_palindrome(string) {
            list.push(string);
        }
    }

    println!("\nThere are {} palindromes in the provided content.  They "+
        "are:\n", list.len());

    for string in list {
        println!("\t{}", string);
    }
}

//------------------------------------------------------
// is_palindrome
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
fn is_palindrome(word:&str) -> bool {
    let mut is_good = true; // is it a palindrome?
    let word_length = word.len(); // length of the word we're checking
    let mut right_index; // index for the letter on the right half of the word
    let mut left_index; // index for the letter on the left half of the word

    // skip empty string and single letter words b/c they are palindromes
    if word_length >= 2 {
        if word_length % 2 == 0 { // left right setup for even words
            right_index = word_length / 2;
            left_index = right_index - 1;
        } else { // left right setup for odd word
            // skip the middle character for odd words
            right_index = word_length / 2 + 1;
            left_index = right_index - 2;
        }

        // check the mirroring of the word
        while right_index < word_length && is_good.copy() {
            if word[right_index] != word[left_index] { // right not match left?
                is_good = false; // it's NOT a palindrome
            }

            right_index += 1;
            left_index -= 1; // shift the left index
        }
    }

    return is_good; // was it a palindrome or not (true/false)
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
fn list_things(content:Vec<&str>) {
    const SEARCH_FOR: &str = "pass"; // what substring do you want to search for

    listSubstring(content, SEARCH_FOR);
    listLetterFreq(content);
    listPalindrome(content);
}

//------------------------------------------------------
// get_content_array
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
fn get_content_array(filename:&str) -> Vec<&str> {
    let content = fs::read_to_string(filename).lines();

    println!("The provided file contains {} lines to look through.",
             len(content));

    return content;
}

//------------------------------------------------------
// check_owned
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
fn check_owned(content:Vec<&str>) {
    const MESSAGE: &str = "\nEnter the password you want to check";
    const PROMPT_LINE: &str = ":\n> ";
    const EXIT_PROMPT: &str = ", or enter -1 to exit";
    let init_message = format!("{}{}", MESSAGE, PROMPT_LINE);
    let continue_message = format!("{}{}{}", MESSAGE, EXIT_PROMPT, PROMPT_LINE);

    let mut found = false;       // is the password found?
    let mut keep_checking = true; // should we continue asking for passwords?
    let mut user_input:String; // what password to check?

    println!("\n**** Checking passwords to see if you're owned. ****");
    print!(init_message);
    get_user_input(&user_input);

    while keepChecking {
        found = false;

        for i in 0..content.len() && !found {
            if content[i] == userInput {
                found = true;

                println!("OWNED! \"{}\" was found on line \"{}\" in the "+
                "file.", userInput, i);
            }
        }

        if !found.copy() {
            println!("SAFE! \"{}\" wasn't found in the file!", userInput);
        }

        print!(continue_message);
        get_user_input(&user_input);
        keep_checking = user_input != "-1";
    }
}

//------------------------------------------------------
// index_example
//
// PURPOSE: Run an example showing how to index a symbol in a string.  Prompts
//          the user to input the symbol they want to search for.
//
// PARAMETERS:
//      - input_string is the string to search in.
//
//------------------------------------------------------
fn index_example(input_string:String) {
    let mut symbol = ""; // what symbol you're searching the position of
    let position;  // the first position of the symbol you're searching for

    println!("\n**** Starting an index example. ****");
    println!("\nThe provided string you want to search in is \"{}\".",
            input_string);
    println!("Which symbol do you want to know the position of in the " +
            "provided string?\n> ");

    symbol = read!();

    if symbol.len() != 1 {
        println!("Invalid input. A symbol is a single character. " +
            "Try again:\n> ");

        symbol = read!();
    }

    position = input_string.find(symbol[0]);

    println!("The symbol \"{}\" is at position \"{}\" in the input_string "+
            "\"{}\".", symbol, position, input_string);

    if position == -1 {
        println!("A position of \"-1\" means that it wasn't found in the " +
            "input_string.");
    }
}

//------------------------------------------------------
// main
//
// PURPOSE: provides the filename for the file to open, and gets the contents
//          of the file by calling get_content_array(). Passes the contents to
//          listThings() and check_owned(), then calls index_example().
//
//------------------------------------------------------
fn main() {
    const FILENAME: &str = "../resources/passwords/rockyou.txt";
    let content = read_to_string(filename);

    list_things(content);
    check_owned(content);
    index_example(filename);
}
