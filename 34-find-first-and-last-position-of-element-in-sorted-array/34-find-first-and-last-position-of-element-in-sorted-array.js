/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const result = [];
	
	function findFirst(nums, target) {
		let result = -1;
		let low = 0, high = nums.length - 1;

		while (low <= high) {
			const mid = Math.floor((low + high) / 2);

			if (nums[mid] < target)
				low = mid +1;
			 
			else if (nums[mid] > target)
				high = mid - 1;
			
			else {
				result = mid;
				high = mid - 1; 
			}
		}

		return result;
	}
	
	function findLast(nums, target) {
		let result = -1;
		let low = 0, high = nums.length - 1;
		
		while (low <= high) {
			const mid = Math.floor((low + high) / 2);
			
			if (nums[mid] < target)
				low = mid +1;
			
			else if (nums[mid] > target)
				high = mid - 1;
			 
			else { 
				result = mid;
				low = mid + 1;
			}
		}

		return result;
	}
	
	result[0] = findFirst(nums, target);
	result[1] = findLast(nums, target);
	
	return result;
};