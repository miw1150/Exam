package exampg;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * ข้อ 5: แปลง List<Integer> เป็น Map โดยใช้ Stream
 */
public class Questions05 {

    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(1, 2, 3);
        Map<Integer, String> output = toMap(input);
        System.out.println(output); // expected: {1=odd, 2=even, 3=odd}
    }

    public static Map<Integer, String> toMap(List<Integer> input) {
        return input.stream()
                .collect(Collectors.toMap(
                    n -> n,
                    n -> (n % 2 == 0) ? "even" : "odd"
                ));
    }
}
