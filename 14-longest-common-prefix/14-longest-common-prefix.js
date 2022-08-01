/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prefix=""
    if(strs.length==0) return prefix
    for(let i=0;i<strs[0].length;i++){
        var charfirst=strs[0][i]
        for(let j=1;j<strs.length;j++){
            if(strs[j][i]!==charfirst)
                return prefix
        }
        prefix=prefix+charfirst
    }
    return prefix
};