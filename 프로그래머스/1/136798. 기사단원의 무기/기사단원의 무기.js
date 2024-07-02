function solution(number, limit, power) {
    let answer = 0;
    let temp = [];
    
    for (let i=1; i<=number; i++) {
        let cnt = 0;
        for (let j=1; j<=Math.sqrt(i); j++) {
            if (i % j === 0) {
                cnt++;
                if (j != i/j) {
                    cnt++;
                }
            }
        }
        temp.push(cnt);
    }
    
    for (let i=0; i<temp.length; i++) {
        if (temp[i] > limit) {
            temp[i] = power;
        }
        answer += temp[i];
    }
    
    return answer;
}