/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // dp[i][j] 第i天持股状态为j时的现金数
  // 今天不持股 dp[i][0] = max(dp[i-1][1] + prices[i], dp[i-1][0])
  // 今天持股   dp[i][1] = max(-prices[i], dp[i-1][1]) 要么今天买的要么之前买的
  // dp[0][0] = 0;
  const dp = new Array(prices.length + 1)
    .fill(0)
    .map(() => new Array(2).fill(0));
  let maxProfit = 0;
  dp[0][1] = -prices[0]; // 第1天持股，总钱数为负数
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
    dp[i][1] = Math.max(-prices[i], dp[i - 1][1]);
    maxProfit = Math.max(maxProfit, dp[i][0], dp[i][1]);
  }
  return maxProfit;
};
// @lc code=end
