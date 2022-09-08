/**
 *
 * @param callback
 * @param initialValue Value to use as this when executing callbackFn
 */
export default function reduce2(callback, initialValue) {
  if (typeof callback !== 'function') {
    throw new Error('callback is not a function');
  }
  // 这里的this代表数组本身
  if (this == null) {
    throw new Error('this is null');
  }
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0,
    acc; // 初始化索引元素、累加器
  // 取初值赋予acc
  if (arguments.length > 1) {
    acc = initialValue;
  } else {
    // 获取数组中第一个有值的index，比O[K] !== undefined个更简洁
    while (k < len && !(k in O)) {
      k++;
    }
    if (k > len) throw new Error('can not reduce an empty array');
    acc = O[k++];
  }
  while (k < len) {
    if (k in O) {
      acc = callback(acc, O[k], k, O);
    }
    k++;
  }
  return acc;
}
