var canJump = function(nums) {
    let length = nums.length;
    if (length <= 1) {
        return true;
    }
    for (let i = 0; i <= length-1; i++) {
        if (nums[i] >= length-i-1) {
            length = i+1;
            break;
        }
    }

    if (length == nums.length) {
        return false;
    }

    return canJump(nums.slice(0, length))
}

// Time Limit Exceeded