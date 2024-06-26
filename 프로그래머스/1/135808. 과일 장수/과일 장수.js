function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b-a);
    for (let i=0; i<Math.floor(score.length/m); i++) {
        let box = score.slice(i * m, i * m + m)
        answer += (Math.min(...box) * m);
    }
    return answer;
}