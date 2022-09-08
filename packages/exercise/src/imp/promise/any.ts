export default function any<T = unknown>(arr: Promise<T>[]) {
  let count = 0;
  return new Promise((resolve, reject) => {
    // 考虑空数组
    if (arr.length === 0) reject(new AggregateError('all promised rejected'));
    arr.forEach((p) => {
      Promise.resolve(p)
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          count++;
          if (count === arr.length) {
            reject(new AggregateError('all promised rejected'));
          }
        });
    });
  });
}
