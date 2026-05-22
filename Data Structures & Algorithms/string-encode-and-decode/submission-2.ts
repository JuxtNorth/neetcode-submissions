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
        let sequenceStart = 0;

        if (str.length <= 1) return [];

        for (sequenceStart = 0; sequenceStart < str.length; sequenceStart ++) {
            if (str[sequenceStart] === ">") break;
        }

        sequenceStart += 1;

        const encodedSequence = str.slice(sequenceStart);
        const metadata = str.slice(0, sequenceStart - 1);
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
