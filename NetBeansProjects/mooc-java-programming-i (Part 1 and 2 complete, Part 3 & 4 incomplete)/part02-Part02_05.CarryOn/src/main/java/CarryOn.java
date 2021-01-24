
import java.util.Scanner;

public class CarryOn {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        String ans = "";
        while (true) {
            
            if (ans.equals("no")) {
                break;
            }
            
            System.out.println("Carry on?");
            ans = scanner.nextLine();
            
        }        
    }
}
