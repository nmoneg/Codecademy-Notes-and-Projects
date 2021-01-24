
import java.util.Scanner;

public class RepeatingBreakingAndRemembering {

    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        
        int x = 0;
        int sum = 0;
        int i = 0;
        int even = 0;
        int odd = 0;
        System.out.println("Give numbers:");
        
        while (true) {
            x = Integer.valueOf(scanner.nextLine());
            
            if (x == -1){
                break;
            }
            
            sum = sum + x;
            i++;
            
            if (x%2 == 0) {
                even++;
            } else {
                odd++;
            }
        }
        
        System.out.println("Thx! Bye!");
        System.out.println("Sum: " + sum);
        System.out.println("Numbers: " + i);
        System.out.println("Average: " + ((1.0*sum)/i));
        System.out.println("Even: " + even);
        System.out.println("Odd: " + odd);
    }
}
