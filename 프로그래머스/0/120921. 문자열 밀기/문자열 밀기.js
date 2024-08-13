function solution(A, B) {
    let arrayA = A.split('');
    for (let i=0; i<arrayA.length; i++) {
        let cnt = i;
        if (arrayA.join('') === B) return cnt;
        const lastword = arrayA.pop()
        arrayA.unshift(lastword);
    }
    return -1;
}