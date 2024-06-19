function solution(s) {
    let answer = [];
    let arr = '';
    for (let i=0; i<s.length; i++) {
        if (arr.indexOf(s[i]) != -1) {
            for (let j=arr.length-1; j>=0; j--) {
                if (arr[j] === s[i]) {
                    answer.push(arr.length - j);
                    break;
                }
            }
        } else {
            answer.push(arr.indexOf(s[i]));
        }
        arr += s[i];
    }
    return answer;
}