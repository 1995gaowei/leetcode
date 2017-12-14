/**
 * @param {string} digits
 * @return {string[]}
 */
const numbers = [[], [], ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];

var letterCombinations = function(digits) {
    if (digits.length == 0) {
        return []
    }
    if (digits.length == 1) {
        return numbers[digits]
    }

    let arr = [];
    numbers[digits[0]].forEach(c => {
        let sub = letterCombinations(digits.substr(1));
        arr.push(...(sub.map(s => c+s)));
    })

    return arr;
};

console.log(letterCombinations("2333"))