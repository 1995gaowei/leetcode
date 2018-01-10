/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxValue = root.val;
    nodeDown(root);
    return maxValue;

    function nodeDown(node) {
        if (node === null) {
            return 0;
        }
        let left = Math.max(0, nodeDown(node.left));
        let right = Math.max(0, nodeDown(node.right));
        maxValue = Math.max(maxValue, left+right+node.val);
        return Math.max(left, right) + node.val;
    }
};