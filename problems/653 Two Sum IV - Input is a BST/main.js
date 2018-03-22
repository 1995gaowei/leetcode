/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let set = new Set();
    let find = function(node, k) {
        if (!node) {
            return false;
        }
        if (set.has(k-node.val)) {
            return true;
        }
        set.add(node.val);
        return find(node.left, k) || find(node.right, k);
    }
    return find(root, k);
};