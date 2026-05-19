class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map: Record<string, number[]> = {};

        for (let i = 0; i < strs.length; i++) {
            const key = this.getArray();
            const str = strs[i];

            for (let j = 0; j < str.length; j ++) {
                const char = str[j];
                const charIndex = this.getCharacterIndex(char);
                key[charIndex] += 1;
            }
            
            const strKey = key.join(":");

            if (map[strKey] === undefined) {
                map[strKey] = [];
            }

            map[strKey].push(i)
        }

        const entries = Object.entries(map);

        return entries.map(([, indices]) => {
            return indices.map(index => strs[index]);
        })
    }

    getCharacterIndex(character: string): number {
        const characters = "abcdefghijklmnopqrstuvwxyz";
        const charMap = [];

        characters.split("").forEach((char, i) => {
            charMap[char] = i;
        })

        return charMap[character];
    }

    getArray(): Array<number> {
        return new Array(26).fill(0);
    }
}
