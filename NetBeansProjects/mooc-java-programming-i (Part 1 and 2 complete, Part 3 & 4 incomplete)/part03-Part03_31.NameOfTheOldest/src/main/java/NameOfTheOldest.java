
import java.util.Scanner;

public class NameOfTheOldest {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int greatest = 0;
        String name = "";
        
        while (true) {
            String entries = scanner.nextLine();
            if (entries.equals("")) {
                break;
            } 
            
            String[] pieces = entries.split(",");
            int age = Integer.valueOf(pieces[1]);
            if (age > greatest) {
                greatest = age;
                name = pieces[0];
            } 
        }
        
        System.out.println("Name of the oldest: " + name);
    }
}
