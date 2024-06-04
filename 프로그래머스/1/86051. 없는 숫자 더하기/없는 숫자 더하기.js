function solution(numbers) {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sum = 0;
    
    for (const n of numbers) {
        arr.splice(arr.indexOf(n), 1);
    }
    
    for (const a of arr) {
        sum += a;
    }
    
    return sum;
}