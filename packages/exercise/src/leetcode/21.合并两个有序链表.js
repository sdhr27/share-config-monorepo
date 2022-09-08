/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // eslint-disable-next-line no-undef
  const dummy = new ListNode();
  let cur = dummy;
  while (list1 || list2) {
    if (!list1) {
      // list2有值
      cur.next = list2;
      list2 = list2.next;
    } else if (!list2) {
      // list1有值
      cur.next = list1;
      list1 = list1.next;
    } else if (list1.val < list2.val) {
      // 都有值比大小
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }

    cur = cur.next;
  }
  return dummy.next;
};
// @lc code=end
