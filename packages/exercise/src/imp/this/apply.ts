export default function apply2(context, args) {
  if (typeof this !== 'function') {
    throw new Error('type');
  }
  const ctx = context || window;
  // 将调用函数this设为对象context的方法
  ctx.fn = this;
  // apply参数是数组
  const result = ctx.fn(...args); // !调用函数
  delete ctx.fn;
  return result;
}
