
import java.util.Scanner;

public class SumOfASequence {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int i = 1;
        int sum = 0;
        
        System.out.print("Last number? ");
        int x = Integer.valueOf(scanner.nextLine());
        
        while (i <= x) {
            sum = sum + i;
            i++;
        }
        
        System.out.println("The sum is " + sum);
    }
}
