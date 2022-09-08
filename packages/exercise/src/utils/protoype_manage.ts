export function addPrototype(target, elms: any[]) {
  elms.forEach((elm) => {
    target.prototype[elm.name] = elm;
  });
}

export function deletePrototype(target, elms: any[]) {
  elms.forEach((elm) => {
    delete target.prototype[elm.name];
  });
}
