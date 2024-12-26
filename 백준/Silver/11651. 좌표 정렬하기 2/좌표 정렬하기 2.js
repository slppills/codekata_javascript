const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];

for (let i=1; i<=N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
})

const result = arr.map((a) => a.join(" "));
console.log(result.join("\n"));