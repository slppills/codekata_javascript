function solution(a, b) {
    let max = 0, min = 0;
    let sum = 0;
    if (a > b) {
        max = a, min = b;
    } else if (a < b) {
        max = b, min = a;
    } else {
        return a;
    }
    for (let i=min; i<=max; i++) {
        sum += i;
    }
    return sum;
}