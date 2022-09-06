/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==0 || x==1)
        return x
    var l=1,r=x;
    var mid,ans;
    while(l<=r){
        mid=Math.floor(l+((r-l)/2))
        var sqr=mid*mid;
        if(sqr===x)
            ans=mid
        if(sqr<=x){
            l=mid+1
            ans=mid
        }
        else{
            r=mid-1
        }
    }
    return ans
};