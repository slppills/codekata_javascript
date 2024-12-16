const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let stack = []

for (let i=1; i<=N; i++) {
  if (Number(input[i]) !== 0) {
    stack.push(Number(input[i]));
  } else {
    stack.pop();
  }
}

const result = stack.reduce((acc, cur) => acc + cur, 0);

console.log(result);