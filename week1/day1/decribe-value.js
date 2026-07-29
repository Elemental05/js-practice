function describeValue(value) {
  if (value === null) {
    return 'null (falsy)';
  }
  if (typeof value === 'undefined') {
    return 'undefined (falsy)';
  }
  if (Array.isArray(value)) {
    return `array (truthy, ${value.length} элемента)`;
  }
  if (typeof value === 'object') {
    return `object (trythy, ${Object.keys(value).length} ключ)`
  }
  if (typeof value === 'function') {
    return 'function (truthy)'
  }
  if (typeof value === 'number') {
    if (Number.isNaN(value)) {
        return 'number: NaN (falsy, не число)';
    }
    const truthiness = value ? 'truthy' : 'falsy';  // ловит 0
    const kind = Number.isInteger(value) ? 'целое' : 'дробное';
    return `number: ${value} (${truthiness}, ${kind})`;
}
  if (typeof value === 'string') {
    if(value.length === 0){ return 'string: пустая, falsy 0'}
     return `string: "${value}" (truthy, длина ${value.length})`
  }
}

console.log(describeValue(42));
console.log(describeValue(3.14));
console.log(describeValue(NaN));
console.log(describeValue(0));
console.log(describeValue(""));
console.log(describeValue("hi"));
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue([1,2,3]));
console.log(describeValue({a:1}));
console.log(describeValue(() => {}));