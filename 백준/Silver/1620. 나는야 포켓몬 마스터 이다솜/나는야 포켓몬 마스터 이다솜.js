const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const NumToName = new Map();
const NameToNum = new Map();
const answer = [];

for (let i = 1; i <= N; i++) {
  NameToNum.set(input[i], i);
  NumToName.set(i, input[i]);
}

for (let i = N + 1; i <= N + M; i++) {
  isNaN(input[i])
    ? answer.push(NameToNum.get(input[i]))
    : answer.push(NumToName.get(Number(input[i])));
}

console.log(answer.join("\n"));
