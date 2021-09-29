public class For {

    public static void main(String[] args)
    {

        System.out.println("Example 1");
        for(int i = 0; i < 5; i++) {
            System.out.println("Hello!");
        }


        System.out.println("\nExample 2");
        int j;
        for(j = 0; j < 5; j++) {
            System.out.println("Hello!");
        }

        
        // Start at 5
        // Loop while i is greater than 0
        // Decrement i by 1 every loop
        System.out.println("\nExample 3");
        for(int i = 5; i > 0; i--) {
            System.out.println("Ex3 - " + i);
        }


        // Start at 0
        // Loop while i is less than or equal to 10
        // Increment i by 2 every loop
        System.out.println("\nExample 4");
        for(int i = 0; i <= 10; i += 2) {
            System.out.println("Ex4 - " + i);
        }


        // Start at 1
        // Loop while i is less than or equal to n
        // Multiply i by 2 every loop
        System.out.println("\nExample 5");
        int n = 64;
        for(int i = 1; i <= n; i *= 2) {
            System.out.println("Ex5 - " + i);
        }


        // This will print all the odd multiples of 3
        System.out.println("\nContinue example");
        for(int i = 3; i < 60; i += 3){
            if(i % 2 == 0)
                continue;
            System.out.println(i);
        }


    }

}