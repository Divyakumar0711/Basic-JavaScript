// 1. simple
function hello() {
  console.log("hello world");
}
hello();

// 2. pass parameters
function test(userName) {
  console.log("Hello " + userName);
}
test("pqr");
test("abc");

// 3. return
function add(a, b) {
  return a + b;
}
const sum = add(5, 10);
console.log(sum);

// 4. Arrow function
const multiply = (c,d) => {
    return c*d;
}
const multi = multiply (5,3) 
console.log(multi)