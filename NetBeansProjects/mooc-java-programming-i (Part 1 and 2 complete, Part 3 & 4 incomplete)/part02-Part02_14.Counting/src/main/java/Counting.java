
import java.util.Scanner;

public class Counting {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int i = 0;
        int x = Integer.valueOf(scanner.nextLine());
        
        while (i <= x) {
            System.out.println(i);
            i++;
        }
    }
}
