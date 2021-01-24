
import java.util.Scanner;

public class NumberOfNegativeNumbers {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int c = 0;
        
        while (true) {
            
            System.out.println("Give a number:");
            int x = Integer.valueOf(scanner.nextLine());
            
            if (x == 0) {
                break;
            } else if (x < 0) {
                c = ++c;
            }
        }

        System.out.print("Number of negative numbers: " + c);
    }
}
