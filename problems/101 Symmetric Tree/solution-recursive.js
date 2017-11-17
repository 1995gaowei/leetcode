/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root, root)
};

function isMirror(n1, n2) {
    if (n1 == null || n2 == null) {
        return n1 == n2
    }
    return (n1.val == n2.val) && isMirror(n1.left, n2.right) &&  isMirror(n1.right, n2.left)
}