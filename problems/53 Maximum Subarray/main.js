/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0], temp = nums[0], length = nums.length;
    for (let i = 1; i < length; i++) {
        temp = Math.max(temp+nums[i], nums[i]);
        max = Math.max(max, temp);
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))