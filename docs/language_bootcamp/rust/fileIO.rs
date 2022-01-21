use std::fs; // file system
use std::io::Write; // allow you to write to a file

///------------------------------------------------------
/// add_line_numbers
///
/// PURPOSE: Takes an input file, adds line numbers, and creates an output file
///          with that content.
///
/// PARAMETERS:
///          - inputFile is a string containing the name of the file to be
///            opened.  It must include the extension (.txt).
///          - outputFile is a string containing the name of the file to be
///            created.  It must include the extension (.txt).
///
///------------------------------------------------------
fn add_line_numbers(input_file:&str, output_file:&str) {
    // get the contents of the file as a string
    let contents = fs::read_to_string(input_file)
        .expect("Something went wrong reading the file.");

    // create the output file
    let mut file = fs::File::create(output_file)
        .expect("Something went wrong trying to create the output file.");

    // print the contents of the input file
    println!("The content of {} is:\n{}", input_file, contents);

    // will hold the new strings with numbers attached
    let mut numbered_contents: Vec<String> = Vec::new();
    let mut i = 0;

    // add a line number to each line and add it to the String Vector
    for line in contents.lines(){
        let temp = format!("{}: {}", i, line);
        numbered_contents.push(temp);
        i += 1;
    }

    println!("The content of {} is:", output_file);

    // print each line and write it to the output file
    for line in numbered_contents{
        println!("{}", line);
        write!(file, "{}\n", line)
            .expect("A problem occurred writing to the file.");
    }
}

/// ------------------------------------------------------
/// main
///
/// PURPOSE: to run an example of file input/output by calling add_line_numbers().
///
/// ------------------------------------------------------
fn main() {
    const INPUT_FILE: &str = "inputFile.txt"; // filename to open
    const OUTPUT_FILE: &str = "outputFile.txt"; // filename to save as

    // copies input files content to output file, and adds line numbers
    add_line_numbers(INPUT_FILE, OUTPUT_FILE);
}
