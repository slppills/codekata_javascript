function solution(name, yearning, photo) {
    let answer = [];
    const score = {};
    for(let i=0; i<name.length; i++) {
        score[name[i]] = yearning[i];
    }
    for (let i=0; i<photo.length; i++) {
        let cnt = 0;
        for (let j=0; j<photo[i].length; j++) {
            if (name.includes(photo[i][j])) cnt += score[photo[i][j]];
        }
        answer.push(cnt);
    }
    return answer;
}