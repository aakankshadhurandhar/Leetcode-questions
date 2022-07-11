/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let result=[]
    let target=0
    for(let i=0;i<nums.length;i++){
        let j=i+1, k=nums.length-1,sum=0
        while(j<k){
            sum=nums[i]+nums[j]+nums[k]
            if(target===sum)
                {
                    result.push([nums[i],nums[j],nums[k]])
                    while(nums[j]==nums[j+1])j++
                    while(nums[k]==nums[k-1])k--
                    
                    j++
                    k--
                }
            
            else if(sum<target){
                j++
            }
            else
                k--
        }
        while(nums[i+1]==nums[i])i++
        
    }
    
   return result 
};
//o(n2)
//sort
//check for duplicate
//if 