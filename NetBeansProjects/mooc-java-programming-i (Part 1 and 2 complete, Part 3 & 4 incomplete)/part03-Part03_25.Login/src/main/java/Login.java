
import java.util.Scanner;

public class Login {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String u1 = "alex";
        String u2 = "emma";
        String p1 = "sunshine";
        String p2 = "haskell";
        
        System.out.print("Enter username: ");
        String user = scanner.nextLine();
        System.out.print("Enter password: ");
        String pw = scanner.nextLine();
        
        if ((user.equals(u1) && pw.equals(p1)) || (user.equals(u2) && pw.equals(p2))) {
            System.out.println("You have successfully logged in!");
        } else {
            System.out.println("Incorrect username or password!");
        }
    }
}
