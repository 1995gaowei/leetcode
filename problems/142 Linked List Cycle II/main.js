/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var set =  new Set();
    var num = 0;
    var temp = head;
    while (temp != null) {
        set.add(temp);
        if (set.size == num) {
            return temp
        }
        num++;
        temp =  temp.next;
    }
    return null
};