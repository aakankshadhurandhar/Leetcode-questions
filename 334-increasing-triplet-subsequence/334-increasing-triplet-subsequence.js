/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length<3) return false
   let i=Infinity 
   let j=Infinity 
   for(let index=0;index<nums.length;index++){
       if(nums[index]<=i){
           i=nums[index]
       }
       else if(nums[index]<=j){
           j=nums[index]
       }
       else{
           return true
       }
   }
   return false
};