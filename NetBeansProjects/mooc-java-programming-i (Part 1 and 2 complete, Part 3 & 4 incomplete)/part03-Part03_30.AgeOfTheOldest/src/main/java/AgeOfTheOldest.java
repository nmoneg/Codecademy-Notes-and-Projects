
import java.util.Scanner;

public class AgeOfTheOldest {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int greatest = 0;
        while (true) {
            String entries = scanner.nextLine();
            if (entries.equals("")) {
                break;
            }
            
            String[] parts = entries.split(",");
            int value = Integer.valueOf(parts[1]);
            if (value > greatest) {
                greatest = value;
            }
        }
        System.out.println("Age of the oldest: " + greatest);
    }
}
