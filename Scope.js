// 1. block scope
if (true) {
  const name = "abc"; //we can use only in this block
  console.log(name);
}
// console.log(name)  doesnt apply here

// 2. function scope
function test() {
  const name1 = "pqr"; // apply in only function
  console.log(name1);
}
test();

// 3. global scope    we can use anywere

const number = 10;
if (true) {
  console.log(number);
}
function test1() {
  console.log(number);
}
test1();
console.log(number);
