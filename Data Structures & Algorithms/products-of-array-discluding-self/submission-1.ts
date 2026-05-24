class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const before: number[] = [];
        const after: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) before[i] = nums[i];
            else before[i] = nums[i] * before[i - 1];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) after[i] = nums[i];
            else after[i] = nums[i] * after[i + 1];
        }

        const out: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                out[i] = after[i + 1];
            } else if (i === nums.length - 1) {
                out[i] = before[i - 1];
            } else {
                out[i] = before[i - 1] * after[i + 1];
            }
        }

        return out;
    }
}
