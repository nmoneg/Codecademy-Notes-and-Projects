
import java.util.Scanner;

public class AVClub {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            String words = scanner.nextLine();
            if (words.equals("")) {
                break;
            } else {
                String[] pieces = words.split(" "); 
                for (int i = 0; i < pieces.length; i++) {
                    if (pieces[i].contains("av")) {
                        System.out.println(pieces[i]);
                    }
                }
            }
        }
    }
}
