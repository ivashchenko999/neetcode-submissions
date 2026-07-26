class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

    if(s.length !== t.length){
        return false
    }
     
      let stringOne = s.split('').sort().join('')
      let stringTwo = t.split('').sort().join('')


      return stringOne === stringTwo
    }
}
