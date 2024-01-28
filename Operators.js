let a = 10;
let b = 20;

// 1. arithmetic
console.log(a + b);
console.log(++a);
console.log(--b);

// 2. comparison
console.log(a == b);
console.log(a != b);
console.log(a >= b);
console.log(a > b);
console.log(a < b);
console.log(a <= b);

// 3. logical
console.log("logical" + a > 10 && a < 10);
console.log("logical" + a < b || b > a);

// 4. ternary
const isEven = 10 % 2;
{
  isEven === 0 ? true : false;
  console.log(true)
}
