
import java.util.Scanner;

public class FromWhereToWhere {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        
        
        System.out.print("Where to? ");
        int x = Integer.valueOf(scanner.nextLine());
        System.out.print("Where from? ");
        int y = Integer.valueOf(scanner.nextLine());
       
        while (y <= x) {
            System.out.println(y);
            y++;
        }
    }
}
