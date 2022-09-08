// 组合继承实现队列
export default function Queue<T = unknown>(limit: number) {
  Array.call(this);
  this.limit = limit;
  this.in = (...elms) => {
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
  };
  this.out = () => this.shift();
}
// 组合继承
// Queue.prototype = [];
// Queue.prototype.constructor = Queue;
// 寄生式组合继承
Queue.prototype = Object.create(Array.prototype);
