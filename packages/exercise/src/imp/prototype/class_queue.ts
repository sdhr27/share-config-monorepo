// class继承实现队列
export default class Queue<T = unknown> extends Array {
  // 队列限制长度
  limit = 0;

  constructor(limit: number) {
    super();
    this.limit = limit;
  }

  in(...elms: T[]) {
    let diff = elms.length + this.length - this.limit;
    const shifts: T[] = [];
    this.push(...elms);
    if (diff > 0) {
      while (diff) {
        diff--;
        const elm = this.shift();
        if (elm) shifts.push(elm);
      }
    }
    return shifts;
  }

  out() {
    return this.shift();
  }
}
