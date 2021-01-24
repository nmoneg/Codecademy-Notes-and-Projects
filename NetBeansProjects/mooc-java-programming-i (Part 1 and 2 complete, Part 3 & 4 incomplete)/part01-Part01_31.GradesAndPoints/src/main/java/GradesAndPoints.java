
import java.util.Scanner;

public class GradesAndPoints {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Give points [0-100]:");
        int x = Integer.valueOf(scan.nextLine());
        String grade = "";
        
        if (x > 100) {
            grade = "incredible!";
        } else if (x >= 90 && x <= 100) {
            grade = "5";
        } else if (x >= 80 && x < 90) {
            grade = "4";
        } else if (x >= 70 && x < 80) {
            grade = "3";
        } else if (x >= 60 && x < 70) {
            grade = "2";
        } else if (x >= 50 && x < 60) {
            grade = "1";
        } else if (x >= 0 && x < 50) {
            grade = "failed";
        } else {
            grade = "impossible!";
        }
        
        System.out.println("Grade: " + grade);
    }
}
