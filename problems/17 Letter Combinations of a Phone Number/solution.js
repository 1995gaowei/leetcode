/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    let digitMap = {
        '2': ['a','b','c'],
        '3': ['d', 'e', 'f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z']
    };

    const possibleCombos = digits.split('').map(digit => {
        return digitMap[digit];
    });

    return possibleCombos.reduce((acc, elem) => {
        return acc.map(digit => {
            return elem.map(otherDigit => {
                return digit.concat(otherDigit);
            })
        }).reduce((a,b) => a.concat(b));
    })

};

console.log(letterCombinations("432"));
