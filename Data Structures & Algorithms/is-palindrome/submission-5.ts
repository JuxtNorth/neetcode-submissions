class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0,
            right = s.length - 1;

        const regAlphaNumeric = /^[a-z0-9]$/;

        while (left < right) {
            const leftChar = s[left].toLowerCase();
            const rightChar = s[right].toLowerCase();

            if (!regAlphaNumeric.test(leftChar)) {
                left += 1;
            } else if (!regAlphaNumeric.test(rightChar)) {
                right -= 1;
            } else if (leftChar !== rightChar) {
                return false;
            } else {
                left += 1;
                right -= 1;
            }
        }

        return true;
    }
}
