/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 恰好装满n，需要dp[n]，初始化时多加1
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  // i与n直接相关，j与wi相关（即重量）
  // 第一层循环i * i<=n，当然可以只写i<=n，但是没啥意义
  for (let i = 1; i * i <= n; i++) {
    // 完全背包，正向枚举
    const wi = i * i; // w[i]
    // j为价值，完全背包正向枚举wi ... W
    for (let j = wi; j <= n; j++) {
      // !完全背包公式，v[i]在价值问题中为1，在布尔值/方案总数问题中忽略v[i]
      dp[j] = Math.min(dp[j], dp[j - wi] + 1);
    }
  }
  return dp[n];
};
// @lc code=end
