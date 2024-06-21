function solution(a, b, n) {
    let answer = 0;
    let remain = 0;

    while (n >= a) {
        // 교환할 수 있는 병의 수 계산
        let exchange = Math.floor(n / a) * b;
        // 남은 병 수 계산
        remain = n % a;
        // 총 얻은 병 수에 추가
        answer += exchange;
        // 새로운 병의 수는 교환한 병 + 남은 병
        n = exchange + remain;
    }

    return answer;
}