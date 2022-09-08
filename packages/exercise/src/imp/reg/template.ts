/**
 *
 * @param str
 * @param obj
 * @description 递归地处理字符串，不能加全局标识g，每次只处理一个
 */
export function template1(str: string, obj: Record<string, unknown>) {
  const reg = /\{\{(\w+)\}\}/; // !不加g全局标识，只匹配第一个
  if (reg.test(str)) {
    const name = reg.exec(str)?.[1];
    if (name) {
      str = str.replace(reg, obj[name]);
    }
    return template1(str, obj);
  }
  return str;
}
export function template2(str: string, obj: Record<string, unknown>) {
  const reg = /\$\{(\w+)\}/;
  if (reg.test(str)) {
    const name = reg.exec(str)?.[1];
    if (name) {
      str = str.replace(reg, obj[name]);
    }

    return template2(str, obj);
  }
  return str;
}

// 我是{{name}}今年{{age}}岁
// 我是${name}今年${age}岁
