function solution(X, Y) {
    let answer = '';
    
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);
    
    for (let char of X) {
        countX[char]++;
    }
    
    for (let char of Y) {
        countY[char]++;
    }
    
    for (let i = 9; i >= 0; i--) {
        const commonCount = Math.min(countX[i], countY[i]);
        if (commonCount > 0) {
            answer += i.toString().repeat(commonCount);
        }
    }
    
    if (answer === '') return "-1";
    if (answer[0] === "0") return "0";
    
    return answer;
}