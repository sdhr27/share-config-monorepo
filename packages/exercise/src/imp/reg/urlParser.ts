export default function parseUrl(url: string) {
  const paramsStr = /.+\?(.+)$/g.exec(url)?.[1]; // 获取?后第一个组内容：即?后的所有内容
  const paramsArr = paramsStr?.split('&') || []; // 参数之间以&分割
  const obj: { [key: string]: string[] | boolean | string } = {};
  paramsArr.forEach((param) => {
    if (/=/.test(param)) {
      const [key, value] = param.split('=');
      if (obj[key]) {
        // 已有
        const elm = obj[key] as string;
        obj[key] = ([] as string[]).concat(elm, value);
      } else {
        obj[key] = value;
      }
    } else {
      // 纯参数
      obj[param] = true;
    }
  });
  return obj;
}
