export default function map(callback, thisValue) {
  const obj = this;
  const newObj = {};
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = callback.call(thisValue, obj[prop], prop, obj);
    }
  }
  return newObj;
}
