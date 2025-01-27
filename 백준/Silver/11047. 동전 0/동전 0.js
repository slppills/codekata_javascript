const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);
const coins = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);
let remaining = K;
let answer = 0;

for (const coin of coins) {
  if (coin <= remaining) {
    const cnt = parseInt(remaining / coin);
    answer += cnt;
    remaining -= coin * cnt;
  }
}

console.log(answer);
