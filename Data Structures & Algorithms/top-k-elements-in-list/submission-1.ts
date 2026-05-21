class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (map[num] === undefined) {
                map[num] = 0;
            }

            map[num] += 1;
        }

        const arr: Array<number[]> = [];

        Object.entries(map).forEach(([num, count]) => {
            if (!arr[count]) arr[count] = [];
            arr[count].push(+num);
        });

        const out: number[] = [];

        for (let i = arr.length - 1; i >= 0; i--) {
            if (!arr[i] || arr[i].length === 0) continue;

            if (arr[i].length >= 1) {
                for (let j = 0; j < arr[i].length; j++) {
                    out.push(arr[i][j]);

                    if (out.length === k) return out;
                }
            }
        }

        return out;
    }
}
