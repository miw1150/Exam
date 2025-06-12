package exampg;

/**
 * ข้อ 4: สลับตำแหน่งตัวอักษรใน String (Reverse String)
 */
public class Questions04 {

    public static void main(String[] args) {
        System.out.println(reverse("madam")); 	// expected: madam
        System.out.println(reverse("racecar")); // expected: racecar
        System.out.println(reverse("level"));	// expected: level
        System.out.println(reverse("radar"));	// expected: radar
        System.out.println(reverse("wow"));		// expected: wow
    }

    public static String reverse(String input) {
        return new StringBuilder(input).reverse().toString();
    }
}
