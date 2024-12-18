const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const seq = Array.from({length: N}, (_, i) => i + 1);
const stack = [];
const result = [];
let order = 1;

for (let i = 0; i < N; i++) {
  stack.push(seq[i]);
  result.push("+");

  while (stack.length > 0 && stack[stack.length - 1] === Number(input[order])) {
    stack.pop();
    result.push("-");
    order++;
  }
}

console.log(stack.length > 0 ? "NO" : result.join("\n"));