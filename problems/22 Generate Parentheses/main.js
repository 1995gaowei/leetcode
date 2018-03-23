/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    let add = function(str, left, right, max) {
        if (str.length == 2*max) {
            res.push(str);
            return ;
        }
        if (left < max) {
            add(str + '(', left+1, right, max);
        }
        if (right < left) {
            add(str + ')', left, right+1, max)
        }
    }
    add('', 0, 0, n);
    return res;
};

console.log(generateParenthesis(4))
