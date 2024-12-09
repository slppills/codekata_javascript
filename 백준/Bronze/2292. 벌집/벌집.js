const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim();

const N = Number(input);
let number = 1;
let cnt = 0;
const size = 6;

while (number < N) {
  cnt++;
  number += size * cnt;
}

console.log(cnt + 1);
