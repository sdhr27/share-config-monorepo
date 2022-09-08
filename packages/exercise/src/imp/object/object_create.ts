/* eslint-disable @typescript-eslint/no-empty-function */
/**
 *
 * @param obj
 * @description 创建一个新对象，使用现有的对象来作为新创建对象的原型
 * @returns
 */
export default function create2(
  obj,
  objProperties: Parameters<typeof Object.defineProperties>[1],
) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new Error('obj只能从对象或null创建');
  }
  // 核心代码就下面3行
  function Fn() {} // 新对象的构造函数
  Fn.prototype = obj; // 使用现有的对象来作为新创建对象的原型
  const newObj = new Fn(); // 创建这个新对象
  if (typeof objProperties !== 'undefined') {
    Object.defineProperties(newObj, objProperties);
  }
  if (obj === null) {
    // 创建一个没有原型对象的对象
    newObj.__proto__ = null;
  }
  return newObj;
}
// Object.defineProperties(obj, {
//   property1: {
//     value: true,
//     writable: true,
//   },
//   property2: {
//     value: 'Hello',
//     writable: false,
//   },
// });
