use std::fs;
use std::collections::HashMap;
use std::io;
use std::io::Write;

///------------------------------------------------------
/// list_substring
///
/// PURPOSE: iterates over the provided vector of strings (content), checking
///          each string to see if they contain the provided a specified
///          substring.  Keeps a list of strings that do.  Outputs information
///          about what was found.
///
/// PARAMETERS:
///      - content is the vector of strings to check.
///      - substr is the substring to check each string for.
///
///------------------------------------------------------
fn list_substring(content:&Vec<&str>, substr:&str) {
    let mut list:Vec<&str> = Vec::new(); // list of items containing substr

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

///------------------------------------------------------
/// list_letter_freq
///
/// PURPOSE: iterates over the provided vector of strings (content), keeping a
///          count of the total number of letters, and how many of each are
///          contained in content.  Outputs information about what was found.
///
/// PARAMETERS:
///      - content is the vector of strings to check.
///
///------------------------------------------------------
fn list_letter_freq(content:&Vec<&str>) {
    let mut known_letter :HashMap<u8, i32> = HashMap::new(); // letter-count pairs
    let mut total_num_letter = 0; // how many letters are in content
    let mut letter:u8; // an individual ascii letter in a string
    let mut word;

    for i in 0..content.len() {
        word = content[i].as_bytes();

        for j in 0..content[i].len() {
            letter = word[j];

            match known_letter.get_mut(&letter) {
                Some(count) => { *count += 1; }, // letter was found
                None => { known_letter.insert(letter, 1); } // initialize count
            }
        }

        total_num_letter += content[i].len();
    }

    println!("\nThe letter frequencies in the provided content are:");

    for (symbol, count) in &known_letter {
        println!("\t{}: {}", *symbol as char,
                 (*count as f32) / (total_num_letter as f32));
    }
}

///------------------------------------------------------
/// list_palindrome
///
/// PURPOSE: iterates over the provided vector of strings (content), checking
///          each string to see if they're a palindrome (call is_palindrome()),
///          and adding them to a list of palindromes found so far.  Outputs
///          information about what was found.
///
/// PARAMETERS:
///      - content is the vector of strings to check.
///
///------------------------------------------------------
fn list_palindrome(content:&Vec<&str>) {
    let mut list : Vec<String> = Vec::new(); // list of all palindromes found

    for string in content {
        if is_palindrome(string) {
            list.push(string.to_string());
        }
    }

    println!("\nThere are {} palindromes in the provided content.  They \
    are:", &list.len());

    for string in list {
        println!("\t{}", string);
    }
}

///------------------------------------------------------
/// is_palindrome
///
/// PURPOSE: To check if the provided string is a palindrome (does it read the
///          same forwards and backwards).  Example: "hannah" is a palindrome.
///
/// PARAMETERS:
///          - word is the string we want to check
///
/// RETURN: Returns a boolean (true if it's a palindrome, otherwise false)
///
///------------------------------------------------------
fn is_palindrome(word:&str) -> bool {
    let mut is_good = true; // is it a palindrome?
    let word_length = word.len(); // length of the word we're checking
    let mut right_index; // index for the letter on the right half of the word
    let mut left_index; // index for the letter on the left half of the word
    let word = word.as_bytes();

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
        while right_index < word_length {
            if word[right_index] != word[left_index] { // right not match left?
                is_good = false; // it's NOT a palindrome
                break;
            }

            right_index += 1;

            if left_index == 0 {
                break; // not allowed to get a negative usize value
            } else {
                left_index -= 1; // shift the left index
            }
        }
    }

    return is_good; // was it a palindrome or not (true/false)
}

///------------------------------------------------------
/// list_things
///
/// PURPOSE: Provides the substring to search for, and calls list_substring(),
///          list_letter_freq(), and list_palindrome().
///
/// PARAMETERS:
///      - content is the vector of strings to pass to other functions.
///
///------------------------------------------------------
fn list_things(content:&Vec<&str>) {
    const SEARCH_FOR: &str = "pass"; // what substring do you want to search for

    list_substring(content, SEARCH_FOR);
    list_letter_freq(content);
    list_palindrome(content);
}

///------------------------------------------------------
/// check_owned
///
/// PURPOSE: prompts the user to input a password and checks if the password
///          they entered is in the rockyou.txt file.  (The rockyou.txt file is
///          ordered from least most common to least common, and we're using a
///          truncated version, so this only checks the more common passwords).
///
/// PARAMETERS:
///      - content is a vector of strings to check for a given password.
///
///------------------------------------------------------
fn check_owned(content:&Vec<&str>) {
    const MESSAGE: &str = "\nEnter the password you want to check";
    const PROMPT_LINE: &str = ":\n> ";
    const EXIT_PROMPT: &str = ", or enter -1 to exit";
    let init_message = format!("{}{}", MESSAGE, PROMPT_LINE);
    let continue_message = format!("{}{}{}", MESSAGE, EXIT_PROMPT, PROMPT_LINE);

    let mut found;       // is the password found?
    let mut keep_checking = true; // should we continue asking for passwords?
    let mut user_input; // what password to check?

    println!("\n**** Checking passwords to see if you're owned. ****");
    print!("{}", init_message);
    user_input = get_user_input();

    while keep_checking {
        found = false;

        for i in 0..content.len() {
            if content[i] == user_input {
                found = true;

                println!("OWNED! \"{}\" was found on line \"{}\" in the \
                file.", user_input, i);

                break;
            }
        }

        if !found {
            println!("SAFE! \"{}\" wasn't found in the file!", user_input);
        }

        print!("{}", continue_message);
        user_input = get_user_input();
        keep_checking = user_input != "-1";
    }
}

///------------------------------------------------------
/// index_example
///
/// PURPOSE: Run an example showing how to index a symbol in a string.  Prompts
///          the user to input the symbol they want to search for.
///
/// PARAMETERS:
///      - input_string is the string to search in.
///
///------------------------------------------------------
fn index_example(input_string:&str) {
    let symbol:u8; // what symbol you're searching the position of
    let input;

    println!("\n**** Starting an index example. ****");
    println!("\nThe provided string you want to search in is \"{}\".",
            input_string);
    print!("Which symbol do you want to know the position of in the \
    provided string?\n> ");

    input = get_user_input();

    symbol = input.as_bytes()[0];

    println!("You input {}", *&symbol as char);

    match input_string.find(symbol as char){
        Some(position) => {
            println!("The symbol \"{}\" is at position \"{}\" \
        in the input_string \"{}\".", *&symbol as char, position, input_string)
        },
        None => {
            println!("The symbol \"{}\" wasn't found in the input_string.",
                     symbol)
        }
    }
}

///------------------------------------------------------
/// get_user_input
///
/// PURPOSE: reads the user's stdin input and returns it as a string.
///
/// RETURN: returns the user's input (String), minus the newline character.
///
///------------------------------------------------------
fn get_user_input() -> String {
    let mut input = String::new();
    let temp : &str;

    // flush stdout to have text line up properly for user input
    io::stdout().flush().expect("Had an issue flushing stdout");

    // get users input into variable "input"
    io::stdin().read_line(&mut input).expect("There was a problem reading the \
    user input.");

    // get a &str version
    temp = &input[..];

    // remove the newline character from the input, and return it
    temp[..temp.len() - 1].to_string()
}

///------------------------------------------------------
/// main
///
/// PURPOSE: Opens the provided file and passes the contents to list_things()
///          and check_owned(), then calls index_example().
///
///------------------------------------------------------
fn main() {
    const FILENAME:&str = "../../../resources/passwords/rockyou.txt";

    let mut content:Vec<&str> = Vec::new();
    let file_string: String = fs::read_to_string(FILENAME)
        .expect("Something went wrong reading the file.");

    for line in file_string.lines(){
        content.push(line);
    }

    println!("The provided file contains {} lines to look through.",
             content.len());

    list_things(&content);
    check_owned(&content);
    index_example(FILENAME);
}
