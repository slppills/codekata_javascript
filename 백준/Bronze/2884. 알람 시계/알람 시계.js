const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

const [hours, minutes] = input.split(" ").map(Number);

if (minutes >= 45) {
  console.log(hours, minutes - 45);
} else {
  if (hours > 0) {
    console.log(hours - 1, minutes + 15);
  } else {
    console.log(23, minutes + 15);
  }
}
