/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea=0;
    let i=0,j=height.length-1;
    
    while(i<j){
        maxArea=Math.max(maxArea,Math.min(height[i],height[j])*(j-i))
        
        if(height[i]<height[j]){
            i++
        }
        else{
            j--
        }
            
    }
    
    return maxArea
    
};
//  0  1 2 3 4 5 6 7 8
//ht[1,8,6,2,5,4,8,3,7]
//i,j
//maxrear=0
//ht: min(i,j)
//width: j-i
//area=ht*width
//1-8
//1-6
//8-6
//o(n2)
