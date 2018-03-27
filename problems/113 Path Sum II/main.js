/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (root == null) {
        return ;
    }
    if (root.left || root.right) {
        return pathSum(roo.left, sum-root.val).map(arr => arr.shift(root.val)).concat(pathSum(root.right, sum-root.val).map(arr => arr.shift(root.val)));
    }
    if (root.val === sum) {
        return [[root.val]];
    }
    return ;
};

// error