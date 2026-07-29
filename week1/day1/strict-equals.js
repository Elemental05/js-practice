function strictEquals(a, b) {
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'number' && isNaN(a) && isNaN(b)) {
        return true;
    }
    return Object.is(a, b);
}

console.log(strictEquals(5, 5));            // true
console.log(strictEquals(5, "5"));          // false
console.log(strictEquals(NaN, NaN));        // true
console.log(strictEquals(null, null));      // true
console.log(strictEquals(null, undefined)); // false
console.log(strictEquals({}, {}));          // false — разные объекты
const o = {};
console.log(strictEquals(o, o));            // true — тот же объект
console.log(strictEquals(0, -0));           // ждём: false (у Object.is так)