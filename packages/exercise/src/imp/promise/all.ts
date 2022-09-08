export default function all<T = unknown>(arr: Promise<T>[]) {
  const result: T[] = [];
  return new Promise((resovle, reject) => {
    arr.forEach((p) => {
      // 将传入的promise构造为resolved promise
      Promise.resolve(p)
        .then((res) => {
          result.push(res);
          if (result.length === arr.length) {
            resovle(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
