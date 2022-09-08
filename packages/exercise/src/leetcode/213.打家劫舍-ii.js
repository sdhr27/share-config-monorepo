/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @description 在1的基础上成环
 */
var rob = function (nums) {
  // dp[i]偷窃第i间房屋的金额
  // dp[i] = max(dp[i-1], dp[i-2] + nums[i]) 没偷or偷了
  // dp[0]=nums[0], dp[1]=max(nums[0],nums[1])
  // result = max(去头数组，去尾数组)
  if (nums.length < 3) {
    return Math.max(...nums);
  }
  const first = originRob(nums.slice(0, nums.length - 1));
  const second = originRob(nums.slice(1, nums.length));
  return Math.max(first, second);
};

function originRob(nums) {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}
// @lc code=end
