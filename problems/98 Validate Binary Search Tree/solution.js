/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    let previous = null;

    function recurse(node) {
        if (node == null) return true;
        if (!recurse(node.left)) return false;
        if (previous != null && previous >= node.val) return false;
        previous = node.val;
        return recurse(node.right);
    }

    return recurse(root);
};