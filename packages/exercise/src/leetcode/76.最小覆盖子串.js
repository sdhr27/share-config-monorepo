/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 快慢指针+哈希表
  if (t.length > s.length) return '';
  let p1 = 0,
    p2 = 0;
  let minStr = `${s}a`; // 声明一个不可能的值
  const smap = new Map();
  const tmap = new Map();
  for (let i = 0; i < t.length; i++) {
    // 填充子字符串map
    mapPush(tmap, t[i]);
  }
  smap.set(s[p1], 1); // 父字符串初始化
  while (p2 < s.length) {
    let isValid = true;
    // !isValide ? smap不含tmap对应元素 || smap所含元素小于对应tmap
    tmap.forEach((value, key) => {
      if (!smap.has(key)) {
        isValid = false;
      } else if (smap.get(key) < value) {
        isValid = false;
      }
    });
    if (isValid) {
      // 结果符合
      if (p2 - p1 + 1 < minStr.length) {
        // 当前结果更小
        minStr = s.slice(p1, p2 + 1);
      }
      mapPop(smap, s[p1]);
      p1++; // 下一项
    } else {
      // 结果不符合
      p2++;
      mapPush(smap, s[p2]);
    }
  }
  return minStr.length > s.length ? '' : minStr;
};

function mapPush(map, member) {
  if (map.has(member)) {
    map.set(member, map.get(member) + 1);
  } else {
    map.set(member, 1);
  }
}

function mapPop(map, member) {
  if (map.has(member)) {
    map.set(member, map.get(member) - 1);
  } else {
    map.set(member, 0);
  }
}
// @lc code=end
