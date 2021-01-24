
import java.util.Scanner;

public class AverageOfNumbers {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int count = 0;
        int sum = 0;
        
        while (true) {
            System.out.println("Give a number");
            int x = Integer.valueOf(scanner.nextLine());
            
            if (x == 0) {
                break;
            }
            
            sum = sum + x;
            ++count;
        }

        System.out.println("Average of the numbers: " + ((1.0*sum)/count));
    }
}
