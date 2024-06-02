function solution(n) {
    n = String(n).split('');
    let answer = [];
    for (let i=n.length-1; i>=0; i--) {
        answer.push(n[i]);
    }
    return answer.map(Number);
}