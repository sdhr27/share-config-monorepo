/**
 *
 * @param callback
 * @param thisArg Value to use as this when executing callbackFn
 */
export default function filter2(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('callback is not a function');
  }
  // 这里的this代表数组本身
  if (this == null) {
    throw new Error('this is null');
  }
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0;
  const res: any = [];
  while (k < len) {
    if (k in O) {
      // some类似
      if (callback.call(thisArg, O[k], k, O)) res.push(O[k]);
    }
    k++;
  }
  return res;
}

// aa.filter((item) => {...})
// Array.prototype.filter = filter;
