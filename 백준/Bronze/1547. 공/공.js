const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let ball = 1;

for (let i=1; i<=n; i++) {
    const [change1, change2] = input[i].split(' ').map(Number);
    if (change1 === ball) {
        ball = change2;
    } else if (change2 === ball) {
        ball = change1;
    }
}

console.log(ball);