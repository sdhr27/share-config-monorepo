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
  // 循环不加等号，退出循环时left === right，适合二分无target逼近情况
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid >= x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  // 矫枉过正
  return left * left === x ? left : left - 1;
};
// @lc code=end
