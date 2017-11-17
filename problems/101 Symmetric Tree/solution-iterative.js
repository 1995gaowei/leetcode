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
    var stack = [];
    stack.push(root);
    stack.push(root);

    while (stack.length > 0) {
        var n1 = stack.pop();
        var n2 = stack.pop();
        if (n1 == null && n2 == null) {
            continue
        }
        if (n1 == null || n2 == null || n1.val != n2.val) {
            return false
        }
        stack.push(n1.left);
        stack.push(n2.right);
        stack.push(n1.right);
        stack.push(n2.left);
    }
    return true
};