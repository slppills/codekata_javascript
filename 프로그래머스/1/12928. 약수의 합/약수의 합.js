function solution(n) {
    let sum = 0
    for (let i=1; i <= n ** (1/2); i++) {
        if (n % i === 0) {
            sum += i;
            if (i < n ** (1/2)) {
                sum += n / i;
            }
        }
    }
    return sum;
}