export default function resolve<T = unknown>(value: T | Promise<T>) {
  // 如果是 Promsie，则直接输出它
  if (value instanceof Promise) return value;
  return new Promise((res) => res(value));
}

export function reject(reason) {
  return new Promise((res, rej) => rej(reason));
}
