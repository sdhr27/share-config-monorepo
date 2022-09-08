// 例如 hello world 转为为Hello World
export default function capital(str: string) {
  // 找首字符、找空格后的字符、找.后的字符
  // \w表示只匹配对应符号后的第一个字符，此处写为\w+则会匹配所有字符
  const reg = /(?:^|\s+|\.+)\w/g;
  return str.replace(
    reg,
    (match) =>
      // 首字符、点、空格
      match && match.toUpperCase(),
  );
}
