function solution(n, m, section) {
    let answer = 0;
    let len = 0;
    for (let i=0; i<section.length; i++) {
        if (section[i] > len) {
            answer++;
            len = section[i] + (m - 1);
        }
    }
    return answer;
} 