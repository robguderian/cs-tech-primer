// This line allows to use code that has been written elsewhere.
// It is included with Java.
import java.util.Scanner;

public class IfElse {

	public static void main(String[] args)
	{
		// Let's start by getting the user to input their age.

		// Create an "object" that will handle all the user input
        Scanner input = new Scanner(System.in);

        // Prompt the user to enter an integer
        System.out.print("How many years old are you? ");

        // Wati for user to enter an integer
        int age = input.nextInt();

        // Display the output
        System.out.println("You entered: " + age);


		// EXAMPLE 1
		if(age < 18){
			System.out.println("You are a child");
		}
		if(age >= 18){
			System.out.println("You are an adult");
		}


		// EXAMPLE 2
		if(age < 18){
			System.out.println("You are a child");
		}
		if(age >= 18 && age < 1000){
			System.out.println("You are an adult");
		}
		if(age > 1000){
			System.out.println("I think you're lying");
		}


		// EXAMPLE 3
		if(age < 18){
			System.out.println("You are a child");
		}
		else{
			System.out.println("You are an adult");
		}


		// EXAMPLE 4
		if(age < 18){
			System.out.println("You are a child");
		}
		else if(age >= 18 && age < 1000){
			System.out.println("You are an adult");
		}
		else{
			System.out.println("I think you're lying");
		}


		// EXAMPLE 5
		if(age < 18)
		    System.out.println("You are a child");
		else if(age >= 18 && age < 1000)
		    System.out.println("You are an adult");
		else
		    System.out.println("I think you're lying");


		// EXAMPLE 6
		if(age < 18){ System.out.println("You are a child"); }
		else if(age >= 18 && age < 1000){ System.out.println("You are an adult"); }
		else{ System.out.println("I think you're lying"); }


		// EXAMPLE 7
		if(age < 18) System.out.println("You are a child");
		else if(age >= 18 && age < 1000) System.out.println("You are an adult");
		else System.out.println("I think you're lying");
	}

}
