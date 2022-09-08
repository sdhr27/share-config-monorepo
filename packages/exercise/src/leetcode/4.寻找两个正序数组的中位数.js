/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 考点：归并排序
  const arr = [...nums1, ...nums2];
  mergeSort(arr, 0, nums1.length + nums2.length - 1);
  // 完成排序后取中间的数即可
  if (arr.length % 2 === 0) {
    // 偶数
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  } else {
    return arr[(arr.length - 1) / 2];
  }
};

// 归并排序样板代码，要背
function mergeSort(q, l, r) {
  //递归终止的条件
  if (l >= r) return;

  //第一步：分解成子问题
  const mid = (l + r) >> 1;

  //第二步：递归处理子问题
  mergeSort(q, l, mid);
  mergeSort(q, mid + 1, r);

  //第三步：合并子问题
  let k = 0,
    i = l,
    j = mid + 1,
    tmp = [];
  while (i <= mid && j <= r)
    if (q[i] <= q[j]) tmp[k++] = q[i++];
    else tmp[k++] = q[j++];
  while (i <= mid) tmp[k++] = q[i++];
  while (j <= r) tmp[k++] = q[j++];

  for (k = 0, i = l; i <= r; k++, i++) q[i] = tmp[k];
}
// @lc code=end
