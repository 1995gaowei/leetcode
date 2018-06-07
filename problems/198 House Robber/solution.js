/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var rob = 0;//max money can get if rob current house
    var notrob = 0;//max money can get if not rob current house
    for(var i = 0; i < nums.length; i++){
        var currob = notrob + nums[i];
        //if rob current val, previous house must not be robbed
        notrob = Math.max(notrob, rob);
        //if not rob ith hous, take the max value of robbed (i-1)house
        rob = currob;
    }
    return Math.max(rob, notrob);
};