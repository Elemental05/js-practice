function double(x) {return x * 2};
function square(x) {return x**2};
function negate(x) {return x * (-1)};

const ex = 4;
const m = [double, square, negate];

for (let i = 0; i < m.length; i++)
{
    console.log(m[i](ex));
}
// let d = double;
// console.log(double);
// console.log(double(5));

// console.log(d);
// console.log(d(6));