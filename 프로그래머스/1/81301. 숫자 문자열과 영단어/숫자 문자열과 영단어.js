function solution(s) {
    let answer = '';
    for (let i=0; i<s.length; i++) {
        const sub = s.substring(i, i+2);
        if (!isNaN(s[i])) {
            answer += s[i];
        } else if (sub === "ze") {
            i += 3;
            answer += '0';
        } else if (sub === "on") {
            i += 2;
            answer += '1';
        } else if (sub === "tw") {
            i += 2;
            answer += '2';
        } else if (sub === "th") {
            i += 4;
            answer += '3';
        } else if (sub === "fo") {
            i += 3;
            answer += '4';
        } else if (sub === "fi") {
            i += 3;
            answer += '5';
        } else if (sub === "si") {
            i += 2;
            answer += '6';
        } else if (sub === "se") {
            i += 4;
            answer += '7';
        } else if (sub === "ei") {
            i += 4;
            answer += '8';
        } else if (sub === "ni") {
            i += 3;
            answer += '9';
        }
    }
    return Number(answer);
}