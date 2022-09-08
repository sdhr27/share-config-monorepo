export default function new2(fn, ...args) {
  // 1、空对象
  // 2、空对象的原型对象=构造函数的原型对象
  // 3、将空对象作为构造函数的上下文
  // 4、判断返回值
  const constructor = fn; // [].shift.call(arguments);
  const obj = Object.create(constructor.prototype); // Object.create创建一个新对象，使用现有的对象来作为新创建对象的原型
  const ret = constructor.apply(obj, args);
  return ret instanceof Object ? ret : obj; // 如果返回值是引用数据类型，则使用return 的返回，也就是new操作符无效
}
