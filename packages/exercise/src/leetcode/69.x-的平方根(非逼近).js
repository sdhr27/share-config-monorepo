/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @description 逼近解法
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 二分法求结果
  let left = 0,
    right = x;
  let ans = -1;
  // 循环加等号，尽全力查找
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid <= x) {
      // ?必须从小到大查？
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // 无需矫枉过正
  return ans;
};
// @lc code=end
