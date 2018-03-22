/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length < 2) {
        return 0;
    }
    let res = 0;
    for (let i = 0; i < height.length; ) {
        let current = height[i];
        let temp = 0;
        let width = 1;
        while (height[i+width] != undefined && height[i] > height[i+width]) {
            temp += height[i] - height[i+width];
            width++;
        }
        if (height[i+width] != undefined) {
            res += temp;
        } else {
            res += trap(height.slice(i+1));
        }
        i += width;
    }
    return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,3]));

// error [4, 2, 3]
