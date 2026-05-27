class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = true;
        }

        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            const isStartOfSequence = !map[nums[i] - 1];

            if (isStartOfSequence) {
                let length = 1;

                while (map[nums[i] + length]) {
                    length += 1;
                }

                longest = Math.max(length, longest);
            }
        }

        return longest;
    }
}
