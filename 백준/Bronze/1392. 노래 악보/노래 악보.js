const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, Q] = input[0].split(" ").map(Number);
let arr = [];

for (let i = 0; i < N; i++) {
  const time = Number(input[i + 1]);
  i === 0 ? arr.push(time) : arr.push(time + arr[i - 1]);
}

input
  .slice(N + 1)
  .map(Number)
  .forEach((time) => {
    const result = arr.findIndex((endTime) => time < endTime) + 1;
    console.log(result);
  });
