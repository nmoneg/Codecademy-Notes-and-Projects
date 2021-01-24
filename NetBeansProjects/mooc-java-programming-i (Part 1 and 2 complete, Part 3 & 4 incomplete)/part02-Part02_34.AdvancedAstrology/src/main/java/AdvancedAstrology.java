
public class AdvancedAstrology {

    public static void printStars(int number) {
        while (number > 0) {
            System.out.print("*");
            number--;
        }
        System.out.print("\n");
    }

    public static void printSpaces(int number) {
        while (number > 0) {
            System.out.print(" ");
            number--;
        }
    }

    public static void printTriangle(int size) {
        
        int i = size - 1;
        int starcount = 1;
        
        while (i >= 0) {
            printSpaces(i);
            printStars(starcount);
            i--;
            starcount++;
        }
        
    }

    public static void christmasTree(int height) {
        
        int i = height - 1;
        int starcount = 1;
        
        while (i >= 0) {
            printSpaces(i);
            printStars(starcount);
            starcount = starcount + 2; 
            i--;
        }
        
        printSpaces(height - 2);
        printStars(3);
        printSpaces(height - 2);
        printStars(3);
        
    }

    public static void main(String[] args) {
        // The tests are not checking the main, so you can modify it freely.

        printTriangle(3);
        System.out.println("\n---");
        christmasTree(4);
        System.out.println("\n---");
        christmasTree(5);
    }
}
