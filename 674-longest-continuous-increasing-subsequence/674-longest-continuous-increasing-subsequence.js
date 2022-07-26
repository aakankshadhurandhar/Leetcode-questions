/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let temp=1,long_l=1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[i+1]){
            temp++
        }
        else{
            temp=1
        }
        
        if(long_l<temp){
            long_l=temp
        }
    }
    return long_l
};