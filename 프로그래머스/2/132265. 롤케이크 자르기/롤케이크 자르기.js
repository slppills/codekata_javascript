function solution(topping) {
    let answer = 0;
    const totalCount = {};
    const leftCount = {};
    let rightUnique = 0;
    let leftUnique = 0;

    // 전체 토핑 카운트
    for (const t of topping) {
        totalCount[t] = (totalCount[t] || 0) + 1;
    }
    rightUnique = Object.keys(totalCount).length;

    // 왼쪽부터 하나씩 이동하며 확인
    for (const t of topping) {
        if (!leftCount[t]) {
            leftCount[t] = 1;
            leftUnique++;
        } else {
            leftCount[t]++;
        }

        totalCount[t]--;
        if (totalCount[t] === 0) {
            rightUnique--;
        }

        if (leftUnique === rightUnique) {
            answer++;
        }
    }

    return answer;
}