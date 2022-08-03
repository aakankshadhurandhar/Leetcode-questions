/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxreach = 0;
    let i=0;
    while(i<nums.length && i<=maxreach){
        maxreach=Math.max(i+nums[i],maxreach)
        i++
    }
    if(i==nums.length)
        return true 
    return false
};