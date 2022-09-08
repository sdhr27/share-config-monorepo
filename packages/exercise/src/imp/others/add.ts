// 1+2+3+4+...+n
export function loopAdd(n) {
  if (n === 1) {
    return 1;
  }
  return n + loopAdd(n - 1);
}

// 异步求和
export async function asyncAdd(nums: number[]) {
  function add(num: number) {
    return new Promise<number>((res) => {
      setTimeout(() => {
        res(num);
      }, 1000);
    });
  }

  // *1、forEach是并发的，会一口气执行
  // nums.forEach(async (num) => {
  //   const res = await add(num);
  //   console.log('asyncAdd console test',res);
  // });
  // *2、使用for
  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i];
  //   const res = await add(num);
  //   console.log('asyncAdd console test', res);
  // }
  // *3、使用axios思维，可以省去async await
  let promise = Promise.resolve();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    promise = promise
      .then(() => add(num))
      .then((res) => console.log('asyncAdd console test', res));
  }
}
