/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head

    var temp = new ListNode()
    temp.next = head

    var p = temp.next, q = null

    while (p.next !== null) {
        q = p.next
        p.next = q.next
        q.next = temp.next
        temp.next = q
    }

    return temp.next
};