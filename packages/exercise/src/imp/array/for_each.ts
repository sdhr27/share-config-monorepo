/**
 *
 * @param callback
 * @param thisArg Value to use as this when executing callbackFn
 */
export default function forEach2(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('callback is not a function');
  }
  // 这里的this代表执行forEach函数的对象，即数组本身
  if (this == null) {
    throw new Error('this is null');
  }
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0;
  while (k < len) {
    if (k in O) {
      callback.call(thisArg, O[k], k, O);
    }
    k++;
  }
}
