// 1. Premitive

const string = "divy";
const number = 10;
const boolean = false;
const undefi = undefined;
const NULL = null;
console.log(
  string + "\n" + number + "\n" + boolean + "\n" + undefi + "\n" + NULL
);

// 2. Non-Premitive

const object = {
  name: "divy",
  age: 23,
  study: true,
};

console.log(
  object + "\n" + object.name + "\n" + object.age + "\n" + object.study
);

const array = [10, 20, "divy"];
console.log(array[0] + "\n" +array[1] + "\n" +array[2] );
