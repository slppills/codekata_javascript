const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const max = Math.max(...arr);
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += (arr[i] / max) * 100;
}

console.log(sum / arr.length);
