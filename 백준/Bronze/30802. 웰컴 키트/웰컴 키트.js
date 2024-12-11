const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const shirts = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);
let sumShirts = 0;

for (let i = 0; i < shirts.length; i++) {
  sumShirts += Math.ceil(shirts[i] / T);
}
const orderPens = Math.floor(N / P);

console.log(sumShirts);
console.log(orderPens, N - P * orderPens);
