function solution(s1, s2) {
    let cnt = 0;
    s1.map((s) => cnt += (s2.includes(s) ? 1 : 0));
    return cnt;
}