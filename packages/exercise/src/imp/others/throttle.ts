/**
 * @description 节流函数【稀释】，指定时间内只能有一次执行
 * @param callback
 * @param tiemout
 * @returns
 */
export default function throttle(callback, tiemout) {
  let previous = 0;
  return function newFn(...args) {
    const now = +new Date(); // +运算符强制类型转换为数字
    if (now - previous > tiemout) {
      // 大于时限执行
      callback.call(this, ...args);
      previous = now; // 执行后重置当前时间
    }
  };
}
