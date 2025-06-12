package exampg;

/**
 * ข้อ 2: เช็คว่า String เป็น Palindrome หรือไม่
 * Phrase Palindromes that read the same backward, ignoring spaces, punctuation, and capitalization.
 */
public class Questions02 {

    public static void main(String[] args) {
        System.out.println(isPalindrome("Evil rats on no star live.")); 		// expected: true
        System.out.println(isPalindrome("A Santa lived as a devil at NASA."));	// expected: true
        System.out.println(isPalindrome("Step on no pets."));					// expected: true
        System.out.println(isPalindrome("Doc, note I dissent. A fast never prevents a fatness. I diet on cod."));// expected: true
        System.out.println(isPalindrome("A palindrome is a word"));				// expected: false
    }

    public static boolean isPalindrome(String input) {
        String cleaned = input.toLowerCase().replaceAll("[^a-z0-9]", "");
        String reversed = new StringBuilder(cleaned).reverse().toString();
        return cleaned.equals(reversed);
    }
}
