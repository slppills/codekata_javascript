function solution(id_pw, db) {
    let answer = "fail";
    for (const account of db) {
        const [id, pw] = account;
        if (id === id_pw[0] && pw === id_pw[1]) return "login";
        else if (id === id_pw[0] && pw !== id_pw[1]) answer = "wrong pw";
    }
    return answer;
}