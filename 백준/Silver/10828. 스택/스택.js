const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const stack = [];
const result = [];

for (let i = 1; i <= N; i++) {
  const order = input[i].trim();
  if (order === "pop") {
    result.push(stack.length > 0 ? stack.pop() : -1);
  } else if (order === "size") {
    result.push(stack.length);
  } else if (order === "empty") {
    result.push(stack.length === 0 ? 1 : 0);
  } else if (order === "top") {
    result.push(stack.length > 0 ? stack[stack.length - 1] : -1);
  } else {
    stack.push(Number(order.split(" ")[1]));
  }
}

console.log(result.join("\n"));