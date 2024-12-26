const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number).sort((a, b) => a-b);
let sum = 0;
let result = 0;

arr.forEach((num) => {
    sum += num;
    result += sum;
})

console.log(result);