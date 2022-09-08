/**
 * foo.bind(obj/fn)(...params)
 */
export default function bind2(context) {
  if (typeof this !== 'function') {
    throw new Error('type');
  }
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const fn = this;
  return function Fn(...args) {
    // 需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用
    // ?作为构造函数的bind还有bind的必要么？？
    return fn.apply2(this instanceof Fn ? this : context, args);
  };
}
