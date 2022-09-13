/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var l=0,h=nums.length-1;
    var mid;
    while(l<=h){
       mid = l + Math.floor((h - l) / 2);

		// found the target
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] > nums[h]) {
			// if mid element is greater than the last element
			// Ex. [4,5,6,7,1,2,3] or [3,4,5,6,7,1,2]
			// if target lies between lower element and the middle element, search in that half
            if(nums[l] <= target && target < nums[mid]) {
                h = mid - 1;
            } else {
				// else search in the other half
                l = mid + 1;
            }
        } else {
			// if mid element is less than or equal to the last element
			// Ex. [5,6,7,1,2,3,4] or [7,1,2,3,4,5,6]
			// if target lies between middle element and the last element, search in that half
            if(nums[mid] < target && target <= nums[h]) {
                l = mid + 1;
            } else {
				// else search in the other half
                h = mid - 1;
            }
        }
    }
    return -1
};