// This line allows to use code that has been written elsewhere.
// It is included with Java.
import java.util.Scanner;

public class While {

    public static void main(String[] args)
    {
        // Used to get user input
        Scanner input = new Scanner(System.in);
        // This will hold the users choice
        int choice;

        // EXAMPLE 2 ------------------------------------------------------------------
        // Get user to enter integer between 0 and 10
        System.out.println("EXAMPLE 2");

        // Initialize the variable to a value that will cause the while loop to trigger
        choice = -1;

        // While the choice is not valid, continue looping and prompting user
        while(choice < 0 || choice > 10) {
            System.out.print("Enter a number between 0 and 10: ");
            choice = input.nextInt();
        }

        System.out.println("You entered: " + choice);

        // EXAMPLE 3 ------------------------------------------------------------------
        // Get user to enter integer between 0 and 10
        // break if user enters 100.
        System.out.println("\n\nEXAMPLE 3");

        // Initialize the variable to a value that will cause the while loop to trigger
        choice = -1;

        // While the choice is not valid, continue looping and prompting user
        while(choice < 0 || choice > 10) {
            System.out.print("Enter a number between 0 and 10, or 100 to break: ");
            choice = input.nextInt();
            
            // End the loop if the user enters 100
            if(choice == 100)
                break;
        }

        System.out.println("You entered: " + choice);


        // EXAMPLE 4 ------------------------------------------------------------------
        // Get user to enter integer between 0 and 10
        System.out.println("\n\nEXAMPLE 4");

        // We do not need to initialize choice, since the 
        // loop must execute at least once

        // While the choice is not valid, continue looping and prompting user
        do {

            System.out.print("Enter a number between 0 and 10: ");
            choice = input.nextInt();

        } while(choice < 0 || choice > 10);

        System.out.println("You entered: " + choice);
    }

}