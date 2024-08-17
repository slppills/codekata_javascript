function solution(d, budget) {
    let result = 0;
    d.sort((a, b) => a-b);
    while(budget > 0) {
        budget -= d.shift();
        if (budget >= 0) result++;
    }
    return result;
}