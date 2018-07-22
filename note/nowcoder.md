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

- 获取丑数

  ```
  function GetUglyNumber_Solution(index) {
    if (index < 7) return index;
    const res = new Array(index);
    res[0] = 1;
    let t2 = 0, t3 = 0, t5 = 0;
    for (let i = 1; i < index; i++) {
      res[i] = Math.min(res[t2] * 2, res[t3] * 3, res[t5] * 5);
      if (res[i] == res[t2] * 2) t2++;
      if (res[i] == res[t3] * 3) t3++;
      if (res[i] == res[t5] * 5) t5++;
    }
    return res[index-1];
  }
  ```

- 两个链表的公共节点

  ```
  function FindFirstCommonNode(pHead1, pHead2) {
    var p1=pHead1;
    var p2=pHead2;
    while(p1!=p2){
      p1=p1==null?pHead2:p1.next;
      p2=p2==null?pHead1:p2.next;
    }
    return p1;
  }
  ```
