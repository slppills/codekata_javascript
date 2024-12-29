const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = [];
const result = [];

for (let i=1; i<=N; i++) {
  arr.push(input[i].trim());
}

const arrSet = new Set(arr);

for (let i=N+1; i<input.length; i++) {
  const trimmed = input[i].trim();
  if (arrSet.has(trimmed)) {
    result.push(trimmed);
  }
}

result.sort();
console.log(result.length);
console.log(result.join("\n"))