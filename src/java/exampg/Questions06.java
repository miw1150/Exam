package exampg;

import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * ข้อ 6: หาจำนวนครั้งที่อักขระแต่ละตัวปรากฏใน String
 */
public class Questions06 {

    public static void main(String[] args) {

        Map<Character, Integer> output = countChar("Once upon a time, "
                + "in a village, there was a sweet little girl named Little Red Riding Hood.");
        System.out.println(output); 
        // expected: {H=1, L=1, O=1, R=2,  =17, a=6, c=1, d=4, e=11, g=3, h=1, i=8, ,=2, l=6, m=2, n=5, .=1, o=3, p=1, r=2, s=2, t=7, u=1, v=1, w=2}
    }

    public static Map<Character, Integer> countChar(String input) {
        return input.chars()
                .mapToObj(c -> (char)c)
                .collect(Collectors.groupingBy(
                    Function.identity(),
                    Collectors.collectingAndThen(Collectors.counting(), Long::intValue)
                ));
    }
}
