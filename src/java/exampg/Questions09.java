package exampg;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

/**
 *  ข้อ 9: เขียนโค้ดที่ใช้ Stream หา max
 */
public class Questions09 {

    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(4, 9, 7, 2);
        System.out.println(findMax(list)); // expected: 9
    }

    public static int findMax(List<Integer> list) {
        return list.stream()
                   .max(Comparator.naturalOrder())
                   .orElse(-1);
    }
}
