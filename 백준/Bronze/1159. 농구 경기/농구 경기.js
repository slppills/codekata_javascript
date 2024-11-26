const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const arr = {};

for (let i = 1; i <= n; i++) {
  const firstLetter = input[i][0];
  if (firstLetter in arr) {
    arr[firstLetter]++;
  } else {
    arr[firstLetter] = 1;
  }
}

const result = Object.entries(arr)
  .filter(([key, value]) => value >= 5)
  .map(([key, value]) => key);

console.log(result.length !== 0 ? result.sort().join("") : "PREDAJA");
