class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const a = numbers[left];
            const b = numbers[right];

            if (b + a > target) {
                right -= 1;
            } else if (b + a < target) {
                left += 1;
            } else {
                return [left + 1, right + 1];
            }
        }
    }
}
