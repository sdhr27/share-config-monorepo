/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0,
    right = height.length - 1;
  let leftMax = height[left],
    rightMax = height[right];
  let ans = 0;
  while (left < right) {
    // 谁矮谁走：比的是最大值
    if (rightMax > leftMax) {
      left++;
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        ans += leftMax - height[left];
      }
    } else {
      right--;
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        ans += rightMax - height[right];
      }
    }
  }
  return ans;
};
// @lc code=end
