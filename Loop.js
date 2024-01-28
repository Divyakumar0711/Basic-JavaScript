// 1. for loop
for (let i = 65; i <= 90; i++) {
  console.log(String.fromCharCode(i));
}

// 2. while loop
i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// 3.do while loop
i = 15;
do {
  console.log(i);
  i++;
} while (i <= 20);

// 4. for--of loop
const a = [10, 20, 30, 40];
for (const num of a) {
  console.log(a);
}
