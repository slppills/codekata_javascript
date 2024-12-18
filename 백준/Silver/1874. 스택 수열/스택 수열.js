const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const seq = Array.from({length: N}, (_, i) => i + 1);
const stack = [];
const result = [];
let order = 1;

while (seq.length > 0 || stack.length > 0) {
  if (stack.length === 0) {
    stack.push(seq.shift());
    result.push("+");
  }
  if (stack[stack.length-1] === Number(input[order])) {
    stack.pop();
    result.push("-");
    order++;
  } else {
    if (seq.length === 0) {
      break;
    } else {
      stack.push(seq.shift());
      result.push("+");
    }
  }
}

console.log(stack.length > 0 ? "NO" : result.join("\n"));