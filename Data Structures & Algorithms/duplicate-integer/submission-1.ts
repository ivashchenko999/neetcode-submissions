class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

       let newArr = new Set(nums)


      return nums.length !== newArr.size
       
       
    }
}
