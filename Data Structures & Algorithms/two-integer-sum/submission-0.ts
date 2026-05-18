class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            seen[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];
            const candidate = seen[difference];

            if (candidate === undefined) continue;

            if (candidate === i) continue;

            return [i, candidate];
        }
    }
}
