function solution(keymap, targets) {
    let answer = [];
    
    for (let i=0; i<targets.length; i++) {
        let cnt = 0;
        
        for (let j=0; j<targets[i].length; j++) {
            let temp = [];
            
            keymap.forEach(key => {
                if (key.includes(targets[i][j])) {
                    temp.push(key.indexOf(targets[i][j]) + 1);
                }
            });
            
            if (temp.length > 0) cnt += Math.min(...temp);
            else {
                cnt = -1;
                break;
            };
        }
        
        answer.push(cnt);
    }
    
    return answer;
}