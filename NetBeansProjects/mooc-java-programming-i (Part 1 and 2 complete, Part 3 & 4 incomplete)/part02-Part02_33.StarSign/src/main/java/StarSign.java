
public class StarSign {

    public static void main(String[] args) {

        
        printStars(3);
        System.out.println("\n---"); 
        printSquare(4);
        System.out.println("\n---"); 
        printRectangle(5, 6);
        System.out.println("\n---"); 
        printTriangle(3);
        System.out.println("\n---"); 
        
    }

    public static void printStars(int number) {
        
        while (number > 0) {
            System.out.print("*");
            number--;
        } 
        System.out.print("\n"); 
    }

    public static void printSquare(int size) {
        
        int i = size;
        
        while (i > 0) {
            printStars(size);
            i--;
        }
        
    }

    public static void printRectangle(int width, int height) {
        
        while (height > 0) {
            printStars(width);
            height--;
        }
        
    }

    public static void printTriangle(int size) {
        
        int i = 1;
        
        while (i <= size) {
            printStars(i);
            i++;
        }
        
    }
}
