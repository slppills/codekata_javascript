const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);

for (let i=1; i<=T; i++) {
    let cnt = 1;
    let [_, M] = input[i*2-1].split(" ").map(Number);
    const queue = input[i*2].split(" ").map(Number);
    while (true) {
        if (queue[0] === Math.max(...queue)) {
            if (M === 0) {
                console.log(cnt);
                break;
            } else {
                queue.shift();
                cnt++;
                M--;
            }
        } else {
            queue.push(queue.shift())
            M === 0 ? M = queue.length - 1 : M--;
        }
    }
}