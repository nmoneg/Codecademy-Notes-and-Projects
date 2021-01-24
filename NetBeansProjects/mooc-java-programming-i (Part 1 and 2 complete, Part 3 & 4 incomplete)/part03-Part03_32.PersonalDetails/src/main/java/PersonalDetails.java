
import java.util.ArrayList;
import java.util.Scanner;

public class PersonalDetails {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double avg = 0;
        String longest = "";
        int maxLength = 0;
        int numberOfAges = 0;
        int sum = 0;
        
        while (true) {
            String entries = scanner.nextLine();
            if (entries.equals("")) {
                break;
            }
            
            String[] pieces = entries.split(",");
            String name = pieces[0];
            int length = name.length();
            int year = Integer.valueOf(pieces[1]);
            
            if (length > maxLength) {
                maxLength = length;
                longest = pieces[0];
            }
            
            sum = sum + year;
            ++numberOfAges;
        }
        
        System.out.println("Longest name: " + longest);
        System.out.println("Average of the birth years: " + (1.0 * sum)/numberOfAges);
    }
}
