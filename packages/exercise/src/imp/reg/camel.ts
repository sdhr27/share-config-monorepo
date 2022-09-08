// 1. foo Bar => fooBar
// 2. foo-bar---- => fooBar
// 3. foo_bar__ => fooBar

export default function camel(str: string) {
  // 此处(.)后写?是为了兼容尾部是特殊符号的情况
  // 匹配特殊符号以及特殊符号后可能存在的字符
  const reg = /[_-\s]+(.)?/g;

  return str.replace(reg, (match, char1: string) => {
    // match代表所有匹配的项目
    // char1, char2……代表()中的值，即特殊符号后的字符
    // console.log('match:', match, 'char1:', char1);
    return char1 ? char1.toUpperCase() : '';
  });
}
