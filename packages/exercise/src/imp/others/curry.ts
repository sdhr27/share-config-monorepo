export default function curry(fn, ...args) {
  if (args.length >= fn.length) {
    // 传入的参数大于等于函数fn本身需求的参数，直接执行
    return fn(...args);
  }
  return (..._args) => curry(fn, ...args, ..._args);
}
