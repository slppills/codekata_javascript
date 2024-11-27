const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const arr = {};

for (let i = 1; i <= input[0]; i++) {
  for (let j = 1; j <= input[1]; j++) {
    for (let k = 1; k <= input[2]; k++) {
      if (i + j + k in arr) {
        arr[i + j + k]++;
      } else {
        arr[i + j + k] = 1;
      }
    }
  }
}

const result = Object.entries(arr)
  .filter(([_, value]) => value === Math.max(...Object.values(arr)))
  .map(([key]) => key);

console.log(result[0]);
