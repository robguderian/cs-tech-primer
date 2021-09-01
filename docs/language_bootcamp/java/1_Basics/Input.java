// This line allows to use code that has been written elsewhere.
// It is included with Java.
import java.util.Scanner;

public class Input {

    public static void main(String[] args)
    {
        // Create an "object" that will handle all the user input
        Scanner input = new Scanner(System.in);

        // Prompt the user to enter an integer
        System.out.print("Enter an integer: ");

        // Wati for user to enter an integer
        int number = input.nextInt();

        // Display the output
        System.out.println("You entered: " + number);
    }

}