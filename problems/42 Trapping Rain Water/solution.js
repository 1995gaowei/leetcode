/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height) {
        return 0;
    }
    let res = 0;
    let length = height.length;
    let leftMax = [];
    let rightMax = [];
    leftMax[0] = height[0];
    rightMax[length-1] = height[length-1];
    for (let i = 1; i < length; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i-1])
    }
    for (let i = length-2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i+1])
    }
    for (let i = 1; i < length-1; i++) {
        res += Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return res;
}

console.log(trap([2, 0, 2]));