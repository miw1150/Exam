package exampg;

/**
 * ข้อ 3: เขียนฟังก์ชันหาค่า Factorial (ใช้ Recursion)
 */
public class Questions03 {

    public static void main(String[] args) {
        System.out.println(factorial(0)); // expected: 1
        System.out.println(factorial(1)); // expected: 1
        System.out.println(factorial(2)); // expected: 2
        System.out.println(factorial(3)); // expected: 6
        System.out.println(factorial(4)); // expected: 24
    }

    public static long factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
}
