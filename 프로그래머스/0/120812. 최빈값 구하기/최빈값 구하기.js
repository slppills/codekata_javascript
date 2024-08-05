function solution(array) {
    const arr = new Set(array);
    let newArray = {};
    arr.forEach((a) => newArray[a] = 0);
    array.forEach((num) => newArray[num]++);
    const maxValue = Math.max(...Object.values(newArray));
    let maxKey = [];
    
    for (const [key, value] of Object.entries(newArray)) {
        if (value === maxValue) maxKey.push(Number(key));
    }
    return maxKey.length === 1 ? maxKey[0] : -1;
}