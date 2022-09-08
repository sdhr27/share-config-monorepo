/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // 因为：pos - neg = (sum - neg) - neg = target
  // 所以：neg = (sum - target) / 2
  // 在数组 nums 中选取若干元素，使得这些元素之和等于neg
  // 元素只能选1次，转换为0-1背包问题
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum - target < 0) return 0;
  if (((sum - target) & 1) === 1) return 0; // 奇数
  const neg = (sum - target) / 2;
  // 用总价值初始化dp数组
  // 恰好装满neg，需要dp[neg]，初始化时多+1
  const dp = new Array(neg + 1).fill(0); //!不是总价值而是方案数，应该全部初始为0
  dp[0] = 1; // 当没有任何元素可以选取时，元素和只能是 0，对应的方案数是 1
  // i与素材直接相关
  for (let i = 0; i < nums.length; i++) {
    // j为价值，01背包逆向枚举W .... wi
    for (let j = neg; j >= nums[i]; j--) {
      // !方案总数问题，忽略v[i]
      dp[j] = dp[j] + dp[j - nums[i]];
    }
  }

  return dp[neg];
};
// @lc code=end
