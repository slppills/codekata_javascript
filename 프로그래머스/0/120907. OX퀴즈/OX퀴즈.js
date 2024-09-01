function solution(quiz) {
    let answer = [];
    for (const q of quiz) {
        const filterTrim = q.split(' ');
        if (filterTrim[1] === '+') {
            answer.push(Number(filterTrim[0]) + Number(filterTrim[2]) === Number(filterTrim[4]) ? "O" : "X");
        } else {
            answer.push(Number(filterTrim[0]) - Number(filterTrim[2]) === Number(filterTrim[4]) ? "O" : "X");
        }
    }
    return answer;
}