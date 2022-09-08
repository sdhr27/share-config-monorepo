/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const S = [];
  let p = root;
  const result = [];
  while (S.length || p) {
    while (p) {
      S.push(p);
      p = p.left;
    }
    p = S.pop();
    result.push(p.val);
    p = p.right;
  }
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i + 1] <= result[i]) return false;
  }
  return true;
};
// @lc code=end
