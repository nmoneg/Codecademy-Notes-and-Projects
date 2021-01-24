
import java.util.Scanner;

public class Factorial {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int i = 1;
        int n = 1;
        
        System.out.print("Give a number: ");
        int x = Integer.valueOf(scanner.nextLine());
        
        if (x == 0) {
            x = 1;
        } 
        
        while (i <= x) {
            n = n*i;
            i++;
        }

        System.out.println("Factorial: " + n);
    }
}
