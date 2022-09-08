export function flat1(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

export function flat2(arr) {
  // The toString method of arrays calls join () internally,
  // which joins the array and returns one string containing each array element separated by commas.
  return arr.toString().split(',');
}
