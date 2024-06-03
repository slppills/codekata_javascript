function solution(arr, divisor) {
    let answer = [];
    for (const a of arr) {
        if (a % divisor === 0) {
            answer.push(a);
        }
    }
    if (answer.length === 0) {
        return [-1];
    }
    answer.sort(function (a, b) {
        return a - b;
    })
    return answer;
}