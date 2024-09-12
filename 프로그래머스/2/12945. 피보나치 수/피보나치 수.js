function solution(n) {
    let a = 0, b = 1;
    if (n <= 1) return n;
    for (let i=2; i<=n; i++) {
        let temp = (a + b) % 1234567;
        a = b;
        b = temp;
    }
    
    return b;
}