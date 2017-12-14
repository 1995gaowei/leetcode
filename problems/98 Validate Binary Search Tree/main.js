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
    let nodes = [];

    generatePreOrder(nodes, root);
    for (let i = 0; i < nodes.length-1; i++) {
        if (nodes[i].val >= nodes[i+1].val) {
            return false
        }
    }

    return true
};

function generatePreOrder(nodes, root) {
    if (root) {
        generatePreOrder(nodes, root.left);
        nodes.push(root);
        generatePreOrder(nodes, root.right)
    }
}