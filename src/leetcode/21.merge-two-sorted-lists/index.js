var mergeTwoLists = function (l1, l2) {
  let pre = new ListNode();
  let cur = pre;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      cur.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return pre.next;
};
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};
