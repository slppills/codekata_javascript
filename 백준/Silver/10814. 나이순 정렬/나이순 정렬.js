const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];

for (let i=1; i<=N; i++) {
  const [age, name] = input[i].split(" ");
  arr.push([Number(age), name]);
}

arr.sort((a, b) => a[0] - b[0]);
const result = arr.map(([age, name]) => `${age} ${name}`).join("\n");
console.log(result);