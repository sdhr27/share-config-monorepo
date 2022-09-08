export default function splice2(start, deleteCount, ...addList) {
  if (start < 0) {
    if (Math.abs(start) > this.length) {
      start = 0;
    } else {
      start += this.length;
    }
  }
  if (deleteCount === undefined) {
    // deleteCount被省略时，数组只保留start前的元素
    deleteCount = this.length - start;
  }
  // 要删除的列表，从start开始，长尾deleteCount
  const removeList = this.slice(start, start + deleteCount);
  // 删除列表右侧的列表，从start+deleteCount开始到结尾
  const right = this.slice(start + deleteCount);
  let addIndex = start;
  // 插入的列表右接right
  addList.concat(right).forEach((item) => {
    // 从start开始重新赋值给原数组
    this[addIndex] = item;
    addIndex++;
  });
  this.length = addIndex; // ?可能是多余的步骤？
  return removeList;
}
