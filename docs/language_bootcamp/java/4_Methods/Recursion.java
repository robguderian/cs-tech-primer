public class Recursion {

    // Compute base^power for power >= 0
    public static int exp(int base, int power)
    {
        if(power == 0) {
            return 1;
        }
        else if(power == 1) {
            return base;
        }
        else {
            return base * exp(base, power - 1);
        }
    }

    // Compute n!
    public static int factorial(int n)
    {
        if(n <= 1) {
            return 1;
        }
        else {
            return n * factorial(n-1);
        }
    }

    public static void infinity()
    {
        System.out.println("AAAHHHHHHHHHHH!!!!!!");
        infinity();
    }

    public static void main(String[] args)
    {
        System.out.println(exp(2, 4));
        System.out.println(exp(2, 5));
        System.out.println(exp(2, 6));

        System.out.println(factorial(5));
        System.out.println(factorial(8));
        System.out.println(factorial(10));

        // Infinite recursion!
        // infinity();
    }

}