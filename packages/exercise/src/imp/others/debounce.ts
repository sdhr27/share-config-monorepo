export default function debounce(callback, timeout) {
  let timer;
  function tim(...p) {
    // 箭头函数this自动绑定定义的上下文
    // apply绑定箭头函数的this即tim的this
    return () => callback.apply(this, p);
  }
  return function newFn(...args) {
    // 每次触发函数则清除上一个定时器，则上一次任务被取消
    clearTimeout(timer);
    // 注册新定时器，timeout后执行
    // call绑定当前函数作用域this，传入当前函数参数args
    timer = setTimeout(tim.call(this, ...args), timeout);
  };
}

/**
 *
 * @param func 回调函数
 * @param timeout 时延
 * @description  https://juejin.cn/post/6946022649768181774 中的原版实现
 */
export function origin_debounce(func, timeout: number) {
  let timer;
  return function () {
    const context = this; // !Unexpected aliasing of 'this' to local variable
    const args = arguments; // !Use the rest parameters instead of 'arguments'
    clearTimeout(timer);
    timer = setTimeout(() => {
      // apply第二个参数是数组，即外层arguments，注意箭头函数没有arguments
      func.apply(context, args);
    }, timeout);
  };
}

// github.com/xyuanbuilds/terms/blob/main/src/implement/basic/debounce.ts
// export default function debounce<T extends (...args: any[]) => any>(
//   fn: T,
//   delay: number,
// ) {
//   let timer: NodeJS.Timeout | null = null;

//   // * 返回函数
//   return (...args: Parameters<T>) => {
//     // * 每一次调用 timer 已设置，则主动清除
//     if (timer) {
//       clearTimeout(timer);
//     }
//     // * 进行下一次 setTimeOut
//     timer = setTimeout(() => {
//       fn.apply(null, args);
//       timer = null;
//     }, delay);
//   };
// }
