public class Fizzbuzz {
    
    public static void main(String[] args)
    {
        int n = 20;

        for(int i = 1; i <= n; i++) {

            System.out.print(i + " ");

            if(i % 3 == 0 && i % 5 == 0)
                System.out.print("Fizzbuzz!");
            else if(i % 3 == 0)
                System.out.print("Fizz");
            else if(i % 5 == 0)
                System.out.print("Buzz");

            System.out.println();

        }
    }

}
