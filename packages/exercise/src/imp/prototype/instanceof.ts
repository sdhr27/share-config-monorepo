// instanceof就是判断右侧构造函数的prototype是否出现在左侧对象的原型链上
export default function instanceof2(left, right) {
  let proto = left.__proto__; // 相当于Object.getPrototypeOf(left)
  while (true) {
    if (proto === right.prototype) return true;
    if (proto === null) return false;
    proto = proto.__proto__;
  }
}
