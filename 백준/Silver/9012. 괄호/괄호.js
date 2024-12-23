const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const prevInput = input[i].split('');
  let stack = 0;

  for (let j = 0; j < prevInput.length; j++) {
    if (prevInput[j] === "(") {
      stack++;
    } else if (prevInput[j] === ")") {
      stack--;
      if (stack < 0) {
        break;
      }
    }
  }

  if (stack === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}