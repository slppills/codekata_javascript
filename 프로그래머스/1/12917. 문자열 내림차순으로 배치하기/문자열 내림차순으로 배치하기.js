function solution(s) {
    let charCodes = [];
    let answer = '';
    for (let i=0; i<s.length; i++) {
        charCodes.push(s[i].charCodeAt());
    }
    charCodes.sort((a, b) => b-a);
    for (let i=0; i<s.length; i++) {
        answer += String.fromCharCode(charCodes[i]);
    }
    return answer;
}