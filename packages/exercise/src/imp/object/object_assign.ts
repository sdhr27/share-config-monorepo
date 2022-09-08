export default function assign2(target, ...source) {
  if (target === null) {
    throw new Error('cannot convert undefined or null to object');
  }
  const ret = Object(target);
  // assign可以拥有复数个要复制的对象
  source.forEach((obj) => {
    if (obj !== null) {
      for (const key in obj) {
        // for in读取obj整个原型链上的键值，因此要hasOwnProperty判断key是否为obj自有属性
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key)) {
          ret[key] = obj[key];
        }
      }
    }
  });
  return ret;
}
