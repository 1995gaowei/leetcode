- 统计某数二进制表示中 1 的个数

  ```
  function NumberOf1(n) {
    let res = 0;
    while (n) {
      res++;
      n = n & (n-1)
    }
    return res;
  }
  ```

- 输出链表中倒数第 k 个节点

  ```
  function FindKthToTail(head, k) {
    if (head == null || k < 1) {
      return null;
    }
    let target = head, p = head;
    for (let i = 1; i < k; i++) {
      if (p.next != null) {
        p = p.next;
      } else {
        return null;
      }
    }
    while (p.next != null) {
      target = target.next;
      p = p.next;
    }
    return target;
  }
  ```

- 反转链表

  ```
  function ReverseList(pHead) {
    if (pHead == null) {
      return null;
    }
    let pre = null, next = null;
    while (pHead != null) {
      next = pHead.next;
      pHead.next = pre;
      pre = pHead;
      pHead = next;
    }
    return pre;
  }
  ```

- 判断是否为可能的出栈序列

  ```
  function IsPopOrder(pushV, popV) {
    var stack = [];
    var idx = 0;
    for (var i = 0; i < pushV.length; i++) {
      stack.push(pushV[i]);
      while (stack.length && stack[stack.length - 1] == popV[idx]) {
        stack.pop();
        idx++;
      }
    }
    return stack.length == 0;
  }
  ```

- 字符串全排列
  ```
  function Permutation(str) {

  }
  ```
