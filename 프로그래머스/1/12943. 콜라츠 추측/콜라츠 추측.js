function solution(num) {
    let cnt = 0;
    if (num === 1) {
        return 0;
    } else {
        while (cnt < 500) { // cnt <= 500은 500번째 시도도 포함하므로 < 500으로 수정
            if (num % 2 === 0) {
                num /= 2;
            } else {
                num = num * 3 + 1; // num *= 3 + 1 -> num = num * 3 + 1로 수정
            }
            cnt += 1;
            if (num === 1) {
                return cnt;
            }
        }
    }
    return -1;
}