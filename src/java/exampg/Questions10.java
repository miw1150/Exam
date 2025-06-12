package exampg;

import java.util.Optional;

/**
 *  ข้อ 10: ป้องกัน NullPointerException โดยใช้ Optional
 */
public class Questions10 {

    public static void main(String[] args) {

        System.out.println(protectedNull(null));  // expected: Unknown
        System.out.println(protectedNull("Dog")); // expected: Dog
    }

    public static String protectedNull(String input) {
        return Optional.ofNullable(input).orElse("Unknown");
    }
}
