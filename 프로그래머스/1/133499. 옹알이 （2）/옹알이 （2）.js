function solution(babbling) {
    const pronunciation = ["aya", "ye", "woo", "ma"]
    let answer = 0;
    
    for (let i=0; i<babbling.length; i++) {
        if (babbling[i] === "aya" || babbling[i] === "ye" || babbling[i] === "woo" || babbling[i] === "ma") {
            answer++;
        } else {
            while (true) {
                if (babbling[i].substr(0, 3) === "aya") {
                    if (babbling[i].substr(3, 3) !== "aya") {
                        babbling[i] = babbling[i].substr(3);
                    } else break;
                } else if (babbling[i].substr(0, 2) === "ye") {
                    if (babbling[i].substr(2, 2) !== "ye") {
                        babbling[i] = babbling[i].substr(2);
                    } else break;
                } else if (babbling[i].substr(0, 3) === "woo") {
                    if (babbling[i].substr(3, 3) !== "woo") {
                        babbling[i] = babbling[i].substr(3);
                    } else break;
                } else if (babbling[i].substr(0, 2) === "ma") {
                    if (babbling[i].substr(2, 2) !== "ma") {
                        babbling[i] = babbling[i].substr(2);
                    } else break;
                } else break;
            }
            if (babbling[i] === "") {
                    answer++;
            }
        }
    }
    
    return answer;
}