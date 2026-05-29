class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0,
            right = numbers.length - 1;

        while (left < right) {
            const a = numbers[left];
            const b = numbers[right];

            if (a + b === target) return [left + 1, right + 1];

            if (b + a > target) {
                right -= 1;
            } else if (b + a < target) {
                left += 1;
            }
        }
    }
}
