
import java.util.Scanner;

public class CountingToHundred {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int x = Integer.valueOf(scanner.nextLine());
        
        while (x <= 100) {
            System.out.println(x);
            x++;
        }

    }
}
