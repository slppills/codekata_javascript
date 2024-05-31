function solution(arr) {
    let sum = 0
    for (const n of arr) {
        sum += n;
    }
    return sum / arr.length;
}