/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 进位思维、逆序为题目降低难度
  let carry = 0;
  // eslint-disable-next-line no-undef
  const dummy = new ListNode();
  let cur = dummy;
  while (l1 || l2) {
    let total = 0;
    if (l1) total += l1.val;
    if (l2) total += l2.val;
    if (carry) total += carry;
    carry = Math.floor(total / 10);
    total %= 10;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    // eslint-disable-next-line no-undef
    cur.next = new ListNode(total);
    cur = cur.next;
  }
  if (carry) {
    // eslint-disable-next-line no-undef
    cur.next = new ListNode(carry);
  }
  return dummy.next;
};
// @lc code=end
