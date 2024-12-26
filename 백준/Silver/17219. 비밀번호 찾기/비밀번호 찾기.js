const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const notepad = {};
const result = [];

for (let i=1; i<=N; i++) {
  const [link, password] = input[i].split(" ");
  notepad[link] = password;
}

for (let i=N+1; i<=N+M; i++) {
  result.push(notepad[input[i].trim()]);
}

console.log(result.join("\n"));