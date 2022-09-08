/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // 皇后可以攻击同一行、同一列、左上左下右上右下四个方向的任意单位。
  // result = []
  // def backtrack(路径, 选择列表):
  //     if 满足结束条件:
  //         result.add(路径)
  //         return

  //     for 选择 in 选择列表:
  //         做选择
  //           将该选择从选择列表移除
  //           路径.add(选择)
  //         backtrack(路径, 选择列表)
  //         撤销选择
  //           路径.remove(选择)
  //           将该选择再加入选择列表
  const result = [];

  const board = new Array(n).fill('.'.repeat(n));
  // console.log(board);  // ['....', '....', '....', '....']
  backtrack(board, 0);
  function backtrack(path, row) {
    if (row === n) {
      result.push([...path]);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) continue;
      path[row] = replaceStr(path[row], col, 'Q');
      backtrack(path, row + 1);
      path[row] = replaceStr(path[row], col, '.');
    }
  }
  return result;
};
function isValid(board, row, col) {
  // 检测列
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === 'Q') return false;
  }
  // 检测所有左上方
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return false;
  }
  // 检测所有右上方
  for (let i = row - 1, j = col + 1; j < board.length && i >= 0; i--, j++) {
    if (board[i][j] === 'Q') return false;
  }
  return true;
}
function replaceStr(str, start, ch) {
  const arr = str.split('');
  return arr
    .map((it, index) => {
      if (index === start) return ch;
      return it;
    })
    .join('');
}
// @lc code=end
