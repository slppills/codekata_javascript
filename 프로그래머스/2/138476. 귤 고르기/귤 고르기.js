function solution(k, tangerine) {
    const obj = {};
    let result = 0;
    for (const x of tangerine) {
        obj[x] ? obj[x]++ : obj[x] = 1;
    }
    const arr = Object.keys(obj).sort((key1, key2) => obj[key2] - obj[key1]);
    
    let cnt = 0;
    while (cnt < k) {
        cnt += obj[arr[result]];
        result++;
    }
    
    return result;
}