/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let res = 0;
    let set = new Set(Array.from(J));
    for (let s of S) {
        if (set.has(s)) {
            res++;
        }
    }
    return res;
};

console.log(numJewelsInStones('aA', 'aAbbbbsd'));