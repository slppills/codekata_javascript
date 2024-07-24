function solution(num, total) {
    let answer = [];
    if (num % 2 !== 0) {
        for (let i=(total/num) - parseInt(num/2); i<(total/num) + Number(num/2); i++) {
            answer.push(i);
        }
    } else {
        for (let i=Math.ceil((total/num) - num/2); i<Math.ceil((total/num) + num/2); i++) {
            answer.push(i);
        }
    }
    
    return answer;
}