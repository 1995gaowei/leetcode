/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    var t = add(t1, t2);
    if (t == null) {
        return null
    }
    t.left = mergeTrees(t1 && t1.left, t2 && t2.left);
    t.right = mergeTrees(t1 && t1.right, t2 && t2.right);
    return t;
};

function add(t1, t2) {
    if (t1 && t2) {
        return new TreeNode(t1.val + t2.val)
    } else if (t1) {
        return new TreeNode(t1.val)
    } else if (t2) {
        return new TreeNode(t2.val)
    } else {
        return null
    }
}