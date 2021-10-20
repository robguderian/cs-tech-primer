public class NdArray {

    public static void main(String[] args)
    {
        int[][][] z;
        z = new int[3][][];    // This compiles
        z = new int[5][6][];   // This compiles
        z = new int[5][6][4];  // This compiles
        // z = new int[][][];  // DOES NOT COMPILE
        // z = new int[][][5]; // DOES NOT COMPILE
        // z = new int[3][][5];// DOES NOT COMPILE

        
        int[][] x = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int[][] y = {
            {1, 2, 3},
            {4, 5},
            {6, 7, 8}
        };

        for(int[] i : x){
            for(int j : i){
                System.out.print(j + " ");
            }
            System.out.println();
        }

        System.out.println();

        for(int[] i : y){
            for(int j : i){
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }

}