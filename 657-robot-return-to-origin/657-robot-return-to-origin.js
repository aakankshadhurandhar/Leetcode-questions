/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let horizontal=0,vertical=0;
    for(let i=0;i<moves.length;i++){
        if(moves[i]==='R'){
            horizontal++
        }
        else if(moves[i]==='L'){
            horizontal--
        }
        else if(moves[i]=='U'){
            vertical++
            
        }
        else
            vertical--
    }
    return vertical===0 && horizontal===0
};