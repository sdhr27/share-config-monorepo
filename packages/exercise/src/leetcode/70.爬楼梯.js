/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // dp[i]登到第i层所需步数
  // dp[i] = dp[i-1] + dp[i-2] 可能是从前1层跨1步上来，也可能是从前2层跨2步上来
  // dp[0] 不存在，dp[1]= 1,dp[2] = 2
  const dp = new Array(n + 1);
  (dp[1] = 1), (dp[2] = 2);
  for (let i = 3; i <= n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp);
  return dp[n];
};
// @lc code=end
