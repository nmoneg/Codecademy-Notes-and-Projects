
import java.util.Scanner;

public class AbsoluteValue {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int x = Integer.valueOf(scanner.nextLine());
        
        if (x < 0) {
            System.out.println(-1*x);
        } else {
            System.out.println(x);
        }
    }
}
