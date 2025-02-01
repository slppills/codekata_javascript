const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const queue = [];
const result = [];

for (let i = 1; i <= N; i++) {
  const order = input[i].trim();

  if (order === "pop") {
    result.push(queue.length === 0 ? "-1" : queue.shift());
  } else if (order === "size") {
    result.push(queue.length);
  } else if (order === "empty") {
    result.push(queue.length === 0 ? "1" : "0");
  } else if (order === "front") {
    result.push(queue.length === 0 ? "-1" : queue[0]);
  } else if (order === "back") {
    result.push(queue.length === 0 ? "-1" : queue[queue.length - 1]);
  } else {
    const [cmd, num] = order.split(" ");
    queue.push(num);
  }
}

console.log(result.join("\n"));
