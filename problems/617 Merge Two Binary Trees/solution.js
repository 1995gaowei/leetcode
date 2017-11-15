/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// function TreeNode(val) {
//      this.val = val;
//      this.left = this.right = null;
// }

var mergeTrees = function(t1, t2) {
    if (t1 == null && t2 == null) {
        return null;
    }
    var retValue = new TreeNode((t1 == null ? 0 : t1.val) +(t2 == null ? 0 : t2.val));
    retValue.left = mergeTrees(t1 == null ? t1:t1.left,t2==null?t2:t2.left);
    retValue.right = mergeTrees(t1 == null ? t1:t1.right,t2==null?t2:t2.right);
    
    return retValue;
};