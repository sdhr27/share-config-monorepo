export default function retry(promiseFn, times = 3) {
  return new Promise(async (res, rej) => {
    while (times--) {
      try {
        const ans = await promiseFn();
        res(ans);
        break;
      } catch (e) {
        if (!times) rej(e);
      }
    }
  });
}
