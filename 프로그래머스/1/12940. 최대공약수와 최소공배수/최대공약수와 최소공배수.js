function solution(n, m) {
    let temp;
    const a = n;
    const b = m;
    while(n > 0) {
        temp = m % n;
        m = n
        n = temp;
    }
    return [m, (a * b) / m];
}