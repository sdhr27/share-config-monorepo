/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const path = [];
  backtrack(path, nums);
  function backtrack(path, list) {
    // 跳出条件
    if (path.length === nums.length) {
      result.push([...path]); // !注意[...path]
      return;
    }
    for (let i = 0; i < list.length; i++) {
      const num = list[i];
      if (path.includes(num)) continue;
      // 做选择
      path.push(num);
      backtrack(path, list);
      // 撤销选择
      path.pop();
    }
  }
  return result;
};
// @lc code=end
