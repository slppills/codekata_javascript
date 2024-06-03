function solution(x) {
    let sum = 0;
    const xValue = x;
    while (x > 0) {
        sum += x%10;
        x = parseInt(x/10);
    }
    if (xValue % sum === 0) {
        return true;
    } else {
        return false;
    }
}