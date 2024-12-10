const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number).sort((x, y) => x - y);
  console.log(a ** 2 + b ** 2 === c ** 2 ? "right" : "wrong");
}
