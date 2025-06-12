package exampg;

import java.util.Optional;

/**
 * ข้อ 7: ใช้ Optional หาค่าที่เป็น null
 */
public class Questions07 {

    public static void main(String[] args) {
        System.out.println(findNull("")); 		// expected: false
        System.out.println(findNull("Cat"));	// expected: false
        System.out.println(findNull(null)); 	// expected: true
        System.out.println(findNull("NULL")); 	// expected: false
    }

    public static boolean findNull(String input) {
        return Optional.ofNullable(input).isEmpty();
    }
}
