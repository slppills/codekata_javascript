function solution(s) {
    let answer = 0;
    const newS = s.split('');
    let temp = [];
    let x_Count = 1;
    let not_X_Count = 0;
    
    for (let i=0; i<newS.length; i++) {
        if (temp.length === 0) temp.push(newS[i]);
        else {
            temp.push(newS[i]);
            if (newS[i] === temp[0]) {
                x_Count++;
            } else {
                not_X_Count++;
            }
        }
        
        if (x_Count === not_X_Count) {
            answer++;
            temp = [];
            x_Count = 1;
            not_X_Count = 0;
        }
    }
    
    return temp.length > 0 ? answer + 1 : answer;
}