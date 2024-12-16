const input = require("fs").readFileSync("dev/stdin").toString().trim();
const [N, K] = input.split(" ").map(Number);
const queue = Array.from({ length: N }, (_, i) => i + 1);
let removeIndex = 0;
let result = [];

while (queue.length > 0) {
  removeIndex = (removeIndex + K-1) % queue.length;
  result.push(queue.splice(removeIndex, 1)[0]);
}

console.log("<" + result.join(", ") + ">");