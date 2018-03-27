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
    let res = [];
    let path = [];
    dfs(root, sum, res, path);
    return res;

    function dfs(root, sum, res, path) {
        if (root == null) return ;
        path.push(root.val);

        if (root.left == null && root.right == null) {
            if (root.val == sum) {
                res.push(Array.from(path));
            }
        }
        if (root.left != null) {
            dfs(root.left, sum-root.val, res, path);
            path.pop();
        }
        if (root.right != null) {
            dfs(root.right, sum-root.val, res, path);
            path.pop();
        }
    }
};