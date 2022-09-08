export default function allSettled<T = unknown>(arr: Promise<T>[]) {
  const result: (
    | { status: 'fullfilled'; value: T }
    | { status: 'rejected'; reason: Error }
  )[] = [];
  return new Promise((resolve, reject) => {
    arr.forEach((p) => {
      Promise.resolve(p)
        .then((val) => {
          result.push({
            status: 'fullfilled',
            value: val,
          });
          if (result.length === arr.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          result.push({
            status: 'rejected',
            reason: err,
          });
          if (result.length === arr.length) {
            resolve(result);
          }
        });
    });
  });
}
