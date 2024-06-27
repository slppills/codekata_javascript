function solution(answers) {
    let answer = [];
    let nomath = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    let scores = [0, 0, 0];
    
    for (let j=0; j<answers.length; j++) {
        if (nomath[0][j%nomath[0].length] === answers[j])
            scores[0]++;
        if (nomath[1][j%nomath[1].length] === answers[j])
            scores[1]++;   
        if (nomath[2][j%nomath[2].length] === answers[j])
            scores[2]++;   
    }
    
    for (let i=0; i<scores.length; i++) {
        if (scores[i] === Math.max(...scores)) {
            answer.push(i+1);
        }
    }
    
    return answer;
}