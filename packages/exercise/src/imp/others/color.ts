/**
 * 255颜色值转16进制颜色值
 * @param n 255颜色值
 * @returns hex 16进制颜色值
 */
const toHex = (n: number) => `${n > 15 ? '' : 0}${n.toString(16)}`;

/**
 * 颜色对象转化为16进制颜色字符串
 * @param colorObj 颜色对象
 */
export function toHexString(colorObj) {
  const { r, g, b, a = 1 } = colorObj;
  const str = `#${toHex(r)}${toHex(g)}${toHex(b)}${
    a === 1 ? '' : toHex(Math.floor(a * 255))
  }`;

  return str; // 前6位为颜色信息，后2位为透明度信息
}

/**
 * 16进制颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns IColorObj
 */
export const parseHexColor = (color: string) => {
  let hex = color.slice(1); // 删除#
  let a = 1;
  // 补全3位缩写
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  // 8位含2位透明度信息
  if (hex.length === 8) {
    a = parseInt(hex.slice(6), 16) / 255;
    hex = hex.slice(0, 6);
  }
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
    a,
  };
};
