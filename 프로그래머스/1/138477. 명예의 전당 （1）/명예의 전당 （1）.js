function solution(k, score) {
    let answer = [];
    let temple = [];
    for (let i=0; i<score.length; i++) {
        if (answer.length < k) {
            temple.push(score[i]);
        } else {
            if (temple[0] < score[i]) {
                temple[0] = score[i];
            }
        }
        temple.sort((a, b) => a-b);
        answer.push(temple[0]);
    }
    
    return answer;
}