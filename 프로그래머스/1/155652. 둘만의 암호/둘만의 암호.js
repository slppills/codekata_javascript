function solution(s, skip, index) {
    let answer = "";
    const skipp = skip.split('').map(char => char.charCodeAt());
    
    for (let i=0; i<s.length; i++) {
        let char = s[i].charCodeAt();
        let cnt = 0;
        
        while (cnt < index) {
            char++;
            if (char > 122) 
                char = 97;
            if (!skipp.includes(char))
                cnt++;
        }
        
        answer += String.fromCharCode(char);
    }
    
    return answer;
}