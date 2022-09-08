export default function call2(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('type');
  }
  const ctx = context || window;
  ctx.fn = this; // 将调用函数this设为对象context的方法，那么这个函数就是context的属性了
  const result = ctx.fn(...args); // !调用函数
  delete ctx.fn;
  return result;
}
