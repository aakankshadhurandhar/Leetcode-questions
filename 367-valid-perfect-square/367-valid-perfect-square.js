/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num==1)
        return true
    var l=0,h=num/2,mid;
    while(l<=h){
        mid=Math.floor(l+(h-l)/2)
        var sqr=mid*mid;
        if(sqr===num){
            return true
        }
      if(sqr>num){
            h=mid-1
        }
        else{
            l=mid+1
        }
        
    }
    return false
    
};