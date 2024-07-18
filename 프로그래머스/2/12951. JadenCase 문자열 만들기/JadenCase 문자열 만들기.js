function solution(s) {
    let answer = [];
    let str = s.split(' ');
    
    for (let ss of str) {
        const upper = ss.substr(0, 1).toUpperCase();
        const lower = ss.substr(1).toLowerCase();
        
        answer.push(upper + lower);
    }
    
    return answer.join(' ');
}