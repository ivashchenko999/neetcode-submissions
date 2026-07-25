class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let arr: number[] = [] 

        for(let i = 0; i < nums.length; i++){
            if(!arr.includes(nums[i])){
                arr.push(nums[i])
            }
        }

        return arr.length !== nums.length
    }
}
