/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;
    let lo = 0;
    let hi = height.length - 1;
    let left_max = 0, right_max = 0;
    while (lo < hi){
        if (height[lo] < height[hi]){
            height[lo] > left_max ? left_max = height[lo] : res += (left_max - height[lo]);
            lo++;
        }
        else{
            height[hi] > right_max ? right_max = height[hi] : res += (right_max - height[hi]);
            hi--
        }
    }
    return res;
};