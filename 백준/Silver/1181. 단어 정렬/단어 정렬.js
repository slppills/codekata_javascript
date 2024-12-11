const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const words = new Set();
input.slice(1).forEach((word) => words.add(word));
const arr = [...words];

arr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  return a.localeCompare(b);
});

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
