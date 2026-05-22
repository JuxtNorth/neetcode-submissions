class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const sequence: number[] = [];
        let encoded = "";

        for (let i = 0; i < strs.length; i ++) {
            sequence.push(strs[i].length);
            encoded += strs[i];
        }

        return sequence.join(",") + ">" + encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === ">") return [];

        const sequenceStart = str.indexOf(">");
        const encodedSequence = str.slice(sequenceStart + 1);
        const metadata = str.slice(0, sequenceStart);
        const lengths = metadata.split(",")
        const decoded: string[] = [];

        let pointer = 0;

        for (let i = 0; i < lengths.length; i++) {
            const length = +lengths[i];
            const segment = encodedSequence.slice(pointer, pointer + length);
            decoded.push(segment);
            pointer += length;
        }

        return decoded;
    }
}
