function solution(n) {
    const a = n ** (1/2);
    if (a == parseInt(a)) {    // n의 제곱근을 계산한 a와 a를 정수로 표현한 값이 같은지 동등연산자(==)로 비교 -> a가 정수인지 아닌지 판별할 수 있음
        return (a+1) ** 2;
    }
    return -1;
}