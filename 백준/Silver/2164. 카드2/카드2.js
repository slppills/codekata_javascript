const input = require("fs").readFileSync("dev/stdin").toString().trim();
const N = Number(input);

let queue = Array.from({ length: N }, (_, i) => i + 1);
let head = 0;

while (queue.length - head > 1) {
  head++;
  queue.push(queue[head]);
  head++;
}

console.log(queue[head]);