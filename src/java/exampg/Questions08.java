package exampg;

/**
 *  ข้อ 8: ตรวจสอบว่า String เป็นตัวเลขล้วนหรือไม่ (ไม่ใช้ regex)
 */
public class Questions08 {

    public static void main(String[] args) {

        System.out.println(isNumeric("")); 		// expected: false
        System.out.println(isNumeric("23")); 	// expected: true
        System.out.println(isNumeric(" ")); 	// expected: false
        System.out.println(isNumeric("-9")); 	// expected: false
        System.out.println(isNumeric("5")); 	// expected: true
    }

    public static boolean isNumeric(String input) {
        if (input == null || input.isEmpty()) {
            return false;
        }
        for (char c : input.toCharArray()) {
            if (!Character.isDigit(c)) {
                return false;
            }
        }
        return true;
    }
}
