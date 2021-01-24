
import java.util.Scanner;

public class SumOfASequenceTheSequel {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int sum = 0;
        
        System.out.print("First number? ");
        int x = Integer.valueOf(scanner.nextLine());
        System.out.print("Last number? ");
        int y = Integer.valueOf(scanner.nextLine());
        
        while (x <= y) {
            sum = sum + x;
            x++;
        }
        
        System.out.println("The sum is: " + sum);
    }
}
