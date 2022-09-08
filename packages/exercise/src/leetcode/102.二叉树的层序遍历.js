/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const q = [];
  const visited = new Map();
  const result = [],
    path = [];
  q.push(root);
  visited.set(root, root.val);
  result.push([root.val]);
  let step = 0;
  while (q.length) {
    const size = q.length;
    path.length = 0;
    for (let i = 0; i < size; i++) {
      const cur = q.shift();
      // if(cur is target) return step
      // test adj
      if (cur.left && !visited.has(cur.left)) {
        q.push(cur.left);
        visited.set(cur.left, cur.left.val);
        path.push(cur.left.val);
      }
      if (cur.right && !visited.has(cur.right)) {
        q.push(cur.right);
        visited.set(cur.right, cur.right.val);
        path.push(cur.right.val);
      }
    }
    step++;
    if (path.length) result.push([...path]);
  }
  return result;
};
// @lc code=end
