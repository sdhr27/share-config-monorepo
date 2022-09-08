// zhuanlan.zhihu.com/p/345122007
export function compose1(...fns) {
  let { length } = fns;
  let res = null;
  return function fn(...args) {
    // 获取函数组的最后一个的执行结果
    res = fns[length - 1].apply(null, args);
    if (length > 1) {
      // 移到上一个函数
      length--;
      // 继续compose（递归），并传入当前结果res
      return fn.call(null, res);
    }
    // 结束递归，返回最终结果res
    return res;
  };
}

/**
 *
 * @param fns
 * @description use reduce，顺序和compose1相反
 */
export function compose2(...fns) {
  return function fn(...arg) {
    // 第一次迭代acc取数组第一个不为空的值为function，消化初始arg，后续cur消化acc为值
    return fns.reduce((acc, cur) =>
      typeof acc === 'function' ? cur(acc(...arg)) : cur(acc),
    );
  };
}
/**
 *
 * @param fns
 * @description 兼容异步函数的compose
 */
export function compose3(...fns) {
  return function fn(...arg) {
    // 第一次迭代acc取数组第一个不为空的值为function，消化初始arg，后续cur消化acc为值
    return fns.reduce(async (acc, cur) =>
      typeof acc === 'function' ? cur(await acc(...arg)) : cur(await acc),
    );
  };
}
