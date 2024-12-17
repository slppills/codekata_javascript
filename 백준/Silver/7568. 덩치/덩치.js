const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];
const result = [];

for (let i=1; i<=N; i++) {
    arr.push(input[i].split(" ").map(Number));
}

for (let i=0; i<N; i++) {
    let rank = 1;
    for (let j=0; j<N; j++) {
        if (i !== j) {
            if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
                rank++;
            }
        }
    }
    result.push(rank);
}

console.log(result.join(" "));