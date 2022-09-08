export function moneySplit(money: string) {
  // $匹配末尾，从最后开始往前3个数123456,789 => 123,456,789 => ,123,456,789
  //    缺少$则从头匹配3个数 ,123456789 => ,1,23456789 => ,1,2,3456789 ……
  // +匹配>=1次，继续往前3个数123,456,789
  //    缺少+则只匹配1次 123456,789
  // (?!^)开头不匹配，去除首位特殊情况  ,123,456,789 => 123,456,789
  // g匹配全局
  const reg = /(?!^)(?=(\d{3})+$)/g;
  return money.replace(reg, ',');
}

export function phoneSplit(phone: string) {
  const reg = /(?=(\d{4})+$)/g;
  return phone.replace(reg, '-');
}
