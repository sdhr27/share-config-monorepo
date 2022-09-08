/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // eslint-disable-next-line no-undef
  let l1 = new ListNode();
  // eslint-disable-next-line no-undef
  let l2 = new ListNode();
  let cur1 = l1,
    cur2 = l2;
  while (head) {
    // 不是排序链表，只需要比x小的值在x前面即可
    if (head.val < x) {
      cur1.next = head;
      cur1 = cur1.next;
    } else {
      cur2.next = head;
      cur2 = cur2.next;
    }
    head = head.next;
  }
  // 断开链条，访问l2尾部cur2
  cur2.next = null;
  // 链接2链表，l1尾部cur1访问l2头部
  cur1.next = l2.next;
  return l1.next;
};
// @lc code=end
