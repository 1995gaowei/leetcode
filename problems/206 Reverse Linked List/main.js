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
var reverseList = function(head) {
    if (head == null) {
        return null;
    }
    let stack = [];
    do {
        stack.push(head);
        head = head.next;
    } while (head != null);
    let res = stack.pop();
    let cur = res;
    while (stack.length > 0) {
        let temp = stack.pop();
        cur.next = temp;
        cur = temp;
    }
    cur.next = null;
    return res;
};

let a1 = new ListNode(1);
let a2 = new ListNode(2);
let a3 = new ListNode(3);

a1.next = a2;
a2.next = a3;

reverseList(a1);
