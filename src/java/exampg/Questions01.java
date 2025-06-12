package exampg;

/**
 * ข้อ 1: หาผลรวมของเลขคู่ใน Array
 */
public class Questions01 {

    public static void main(String[] args) {
        System.out.println(sumEven(new int[]{1, 2, 3, 4})); 			// expected: 6
        System.out.println(sumEven(new int[]{1, 2, 3, 4, 5, 6, 7, 8})); // expected: 20
    }

    public static int sumEven(int[] nums) {
        int sum = 0;
        for (int num : nums) {
            if (num % 2 == 0) {
                sum += num;
            }
        }
        return sum;
    }
}
