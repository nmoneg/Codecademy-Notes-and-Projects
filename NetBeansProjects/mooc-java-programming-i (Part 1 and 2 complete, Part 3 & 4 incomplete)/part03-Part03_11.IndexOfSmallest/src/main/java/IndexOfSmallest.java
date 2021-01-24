
import java.util.ArrayList;
import java.util.Scanner;

public class IndexOfSmallest {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<Integer> arr = new ArrayList<>();
        while (true) {
            int input = Integer.valueOf(scanner.nextLine());
            if (input == 9999) {
                break;
            }
            
            arr.add(input);
        }
        
        System.out.println("");
        
        int smallest = arr.get(0);
        
        for (int i = 0; i < arr.size(); i++) {
            if (smallest > arr.get(i)) {
                smallest = arr.get(i);
            }
        }
        
        System.out.println("Smallest number: " + smallest);
        
        for (int i = 0; i < arr.size(); i++) {
            if (smallest >= arr.get(i)) {
                System.out.println("Found at index: " + i);
            }
        }
    }
}
