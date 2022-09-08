export default function race<T = unknown>(arr: Promise<T>[]) {
  return new Promise((resolve, reject) => {
    arr.forEach((p) => {
      Promise.resolve(p)
        .then((val) => {
          resolve(val);
        })
        .catch(reject);
    });
  });
}
