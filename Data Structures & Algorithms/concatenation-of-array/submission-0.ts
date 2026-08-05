class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let newArr = [...nums, ...nums]

        return newArr
    }
}
