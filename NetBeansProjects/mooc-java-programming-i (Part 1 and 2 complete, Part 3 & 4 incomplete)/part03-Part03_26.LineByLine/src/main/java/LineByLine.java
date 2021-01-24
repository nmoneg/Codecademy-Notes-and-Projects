
import java.util.Scanner;

public class LineByLine {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {  
            String strings = scanner.nextLine();
            if (strings.equals("")) {
                break;
            } else {
                String[] line = strings.split(" ");
                for (String word : line) {
                    System.out.println(word);
                }
            }    
        }
    }
}
