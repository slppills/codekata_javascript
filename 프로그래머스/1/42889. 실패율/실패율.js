function solution(N, stages) {
    let failureRate = {};
    for (let i=1; i<=N; i++) {
        failureRate[i] = (stages.filter((score) => score === i).length / stages.filter((score) => score >= i).length);      
    }
    const sortedFailureRate = Object.entries(failureRate).sort((a, b) => b[1] - a[1]).map((entry) => Number(entry[0]));
    
    return sortedFailureRate;
}