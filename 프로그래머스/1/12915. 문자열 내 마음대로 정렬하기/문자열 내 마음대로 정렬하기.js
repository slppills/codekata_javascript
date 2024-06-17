function solution(strings, n) {
    for (let i=0; i<strings.length-1; i++) {
        for (let j=i+1; j<strings.length; j++) {
            if (strings[i][n].charCodeAt() > strings[j][n].charCodeAt()) {
                [strings[i], strings[j]] = [strings[j], strings[i]];
            } else if (strings[i][n].charCodeAt() === strings[j][n].charCodeAt()) {
                if (strings[i].localeCompare(strings[j]) > 0) {
                    [strings[i], strings[j]] = [strings[j], strings[i]];
                }
            }
        }
    }
    return strings;
}