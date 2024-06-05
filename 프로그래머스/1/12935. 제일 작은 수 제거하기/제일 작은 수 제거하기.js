function solution(arr) {
    const minValue = Math.min(...arr);
    if (arr.length === 1) {
        return [-1];
    } else {
        for (const a of arr) {
            if (a === minValue) {
                arr.splice(arr.indexOf(a), 1);
                break;
            }
        }
    }
    return arr;
}