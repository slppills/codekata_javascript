const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, Q] = input[0].split(" ").map(Number);
let arr = [];

for (let i = 0; i < N; i++) {
  const time = Number(input[i + 1]);
  i === 0 ? arr.push(time) : arr.push(time + arr[i - 1]);
}

for (let i = N + 1; i < N + 1 + Q; i++) {
  const time = Number(input[i]);
  for (let j = 0; j < arr.length; j++) {
    if (time >= arr[j]) continue;
    else {
      console.log(j + 1);
      break;
    }
  }
}
