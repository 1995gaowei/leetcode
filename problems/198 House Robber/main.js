/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length <= 1) {
        return nums[0] ? nums[0] : 0
    }
    if (nums.length == 2) {
        return Math.max(nums[0], nums[1]);
    }
    var arr = [], max = Math.max(nums[0], nums[1]);
    arr.push(nums[0]);
    arr.push(max);
    for (let i = 2; i < nums.length; i++) {
        max = Math.max(arr[i-2]+nums[i], arr[i-1]);
        arr.push(max);
    }
    return max;
};